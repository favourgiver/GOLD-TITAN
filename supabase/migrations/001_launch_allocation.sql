-- ============================================================================
-- GOLD TITAN — Authoritative Launch Allocation & Idempotent Payment Ledger
-- ============================================================================
-- Enforces:
--   1. Authoritative server-side 20-slot launch cap (total_slots = 20)
--   2. Separate atomic counter for First-5 subscribers (30% off -> $35 first month)
--   3. Strict idempotency so duplicate payment webhooks never double-claim a slot
--   4. Row-level locking (SELECT ... FOR UPDATE) preventing race conditions on slot 20
--   5. Public read-only access for live homepage display; mutations restricted to service_role
-- ============================================================================

create schema if not exists private_billing;

create table if not exists public.launch_allocation (
  id text primary key default 'gold_titan_launch_v1' check (id = 'gold_titan_launch_v1'),
  total_slots integer not null default 20 check (total_slots = 20),
  claimed_slots integer not null default 0 check (claimed_slots >= 0 and claimed_slots <= total_slots),
  remaining_slots integer generated always as (total_slots - claimed_slots) stored,
  first_five_limit integer not null default 5 check (first_five_limit = 5),
  first_five_claimed integer not null default 0 check (first_five_claimed >= 0 and first_five_claimed <= first_five_limit),
  updated_at timestamptz not null default now()
);

insert into public.launch_allocation (id, total_slots, claimed_slots, first_five_limit, first_five_claimed)
values ('gold_titan_launch_v1', 20, 0, 5, 0)
on conflict (id) do nothing;

alter table public.launch_allocation enable row level security;

-- Visitors can ONLY read the current launch slot allocation; no client can insert/update/delete.
drop policy if exists "Public can read launch allocation" on public.launch_allocation;
create policy "Public can read launch allocation"
  on public.launch_allocation
  for select
  to anon, authenticated
  using (true);

-- Enable Supabase Realtime broadcasts on public.launch_allocation
alter publication supabase_realtime add table public.launch_allocation;

-- Private ledger of confirmed subscription payments (inaccessible to anon/authenticated clients)
create table if not exists private_billing.confirmed_subscriptions (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  provider_event_id text not null unique,
  provider_payment_reference text not null unique,
  plan_term_months integer not null check (plan_term_months in (1, 2, 3, 6)),
  platform text not null check (platform in ('MT4', 'MT5')),
  amount_cents integer not null check (amount_cents > 0),
  currency text not null default 'USD',
  applied_first_five_discount boolean not null default false,
  applied_multi_month_discount boolean not null default false,
  slot_number integer not null check (slot_number between 1 and 20),
  confirmed_at timestamptz not null default now()
);

revoke all on schema private_billing from public, anon, authenticated;
revoke all on all tables in schema private_billing from public, anon, authenticated;

-- Atomic, idempotent slot-claim RPC invoked ONLY by verified server-side payment webhook
create or replace function private_billing.claim_confirmed_launch_slot(
  p_provider text,
  p_provider_event_id text,
  p_provider_payment_reference text,
  p_plan_term_months integer,
  p_platform text,
  p_amount_cents integer,
  p_currency text default 'USD',
  p_request_first_five_discount boolean default false
)
returns jsonb
language plpgsql
security definer
set search_path = public, private_billing
as $$
declare
  v_existing private_billing.confirmed_subscriptions%rowtype;
  v_alloc public.launch_allocation%rowtype;
  v_new_claimed integer;
  v_grant_first_five boolean := false;
begin
  -- 1. Lock the single allocation row first to serialize concurrent webhook deliveries
  select *
    into v_alloc
    from public.launch_allocation
   where id = 'gold_titan_launch_v1'
     for update;

  -- 2. Idempotency check: if this event or payment reference was already recorded, do not decrement again
  select *
    into v_existing
    from private_billing.confirmed_subscriptions
   where provider_event_id = p_provider_event_id
      or provider_payment_reference = p_provider_payment_reference
   limit 1;

  if found then
    return jsonb_build_object(
      'status', 'duplicate_ignored',
      'slot_number', v_existing.slot_number,
      'claimed_slots', v_alloc.claimed_slots,
      'remaining_slots', v_alloc.remaining_slots,
      'first_five_claimed', v_alloc.first_five_claimed
    );
  end if;

  -- 3. Enforce hard 20-slot launch cap server-side
  if v_alloc.claimed_slots >= v_alloc.total_slots then
    return jsonb_build_object(
      'status', 'allocation_full',
      'claimed_slots', v_alloc.claimed_slots,
      'remaining_slots', 0,
      'first_five_claimed', v_alloc.first_five_claimed
    );
  end if;

  v_new_claimed := v_alloc.claimed_slots + 1;

  if p_request_first_five_discount and v_alloc.first_five_claimed < v_alloc.first_five_limit then
    v_grant_first_five := true;
  end if;

  update public.launch_allocation
     set claimed_slots = v_new_claimed,
         first_five_claimed = case
           when v_grant_first_five then first_five_claimed + 1
           else first_five_claimed
         end,
         updated_at = now()
   where id = 'gold_titan_launch_v1'
   returning * into v_alloc;

  insert into private_billing.confirmed_subscriptions (
    provider,
    provider_event_id,
    provider_payment_reference,
    plan_term_months,
    platform,
    amount_cents,
    currency,
    applied_first_five_discount,
    applied_multi_month_discount,
    slot_number
  ) values (
    p_provider,
    p_provider_event_id,
    p_provider_payment_reference,
    p_plan_term_months,
    p_platform,
    p_amount_cents,
    p_currency,
    v_grant_first_five,
    (p_plan_term_months >= 2),
    v_new_claimed
  );

  return jsonb_build_object(
    'status', 'claimed',
    'slot_number', v_new_claimed,
    'claimed_slots', v_alloc.claimed_slots,
    'remaining_slots', v_alloc.remaining_slots,
    'first_five_claimed', v_alloc.first_five_claimed,
    'applied_first_five_discount', v_grant_first_five
  );
end;
$$;

revoke all on function private_billing.claim_confirmed_launch_slot(
  text, text, text, integer, text, integer, text, boolean
) from public, anon, authenticated;
grant execute on function private_billing.claim_confirmed_launch_slot(
  text, text, text, integer, text, integer, text, boolean
) to service_role;
