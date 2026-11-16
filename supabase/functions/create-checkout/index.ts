// ============================================================================
// GOLD TITAN — Server-Authoritative Checkout Session Initiator
// ============================================================================
// Enforces:
//   - Hard 20-slot launch cap check prior to session creation
//   - Confirmed USD pricing ($50 standard 1m; $35 first-5 1m; $80 2m; $120 3m; $240 6m)
//   - Explicit owner configuration guard for discount stacking (never guessed silently)
// ============================================================================

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.1';

type PlanTerm = 1 | 2 | 3 | 6;

const MULTI_MONTH_PRICES_USD: Record<PlanTerm, number> = {
  1: 50,
  2: 80,
  3: 120,
  6: 240,
};

Deno.serve(async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  const stackingPolicy = Deno.env.get('DISCOUNT_STACKING_POLICY'); // must be explicitly set to 'disallow' or 'allow' by owner
  const providerCheckoutReady = Deno.env.get('PAYMENT_PROVIDER_ENABLED') === 'true';

  if (!supabaseUrl || !serviceRoleKey || !providerCheckoutReady || !stackingPolicy) {
    return new Response(
      JSON.stringify({
        error:
          'Checkout is not yet active. Payment provider credentials and owner confirmation on discount stacking are required before live billing.',
      }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const body = await req.json();
  const term = Number(body?.termMonths) as PlanTerm;
  const platform = body?.platform === 'MT5' ? 'MT5' : 'MT4';

  if (![1, 2, 3, 6].includes(term)) {
    return new Response(JSON.stringify({ error: 'Unsupported subscription term.' }), {
      status: 400,
    });
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  const { data: alloc, error } = await supabaseAdmin
    .from('launch_allocation')
    .select('total_slots, claimed_slots, remaining_slots, first_five_limit, first_five_claimed')
    .eq('id', 'gold_titan_launch_v1')
    .single();

  if (error || !alloc) {
    return new Response(JSON.stringify({ error: 'Unable to verify launch slot availability.' }), {
      status: 500,
    });
  }

  if (alloc.remaining_slots <= 0) {
    return new Response(
      JSON.stringify({
        error: 'All 20 early-access launch subscription places have been claimed.',
        code: 'LAUNCH_ALLOCATION_FULL',
      }),
      { status: 409, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const firstFiveAvailable = alloc.first_five_claimed < alloc.first_five_limit;
  let totalUsd = MULTI_MONTH_PRICES_USD[term];

  if (term === 1 && firstFiveAvailable) {
    totalUsd = 35; // 30% off $50 = $35 ($15 saved)
  } else if (term >= 2 && firstFiveAvailable && stackingPolicy === 'allow') {
    // Only reachable if business owner explicitly configures DISCOUNT_STACKING_POLICY='allow'
    // First month at $35 + remaining months at $40 multi-month rate, or provider coupon rule
    totalUsd = MULTI_MONTH_PRICES_USD[term];
  }

  // Provider-specific session creation (Paystack / Flutterwave / Stripe) connects here
  // once merchant keys and USD/NGN settlement rules are supplied by the owner.
  return new Response(
    JSON.stringify({
      status: 'ready_for_provider_adapter',
      termMonths: term,
      platform,
      amountUsd: totalUsd,
      firstFiveEligibleAtQuoteTime: firstFiveAvailable,
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
});
