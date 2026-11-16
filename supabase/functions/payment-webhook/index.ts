// ============================================================================
// GOLD TITAN — Verified Payment Webhook Handler (Supabase Edge Function)
// ============================================================================
// Claims a launch slot ONLY after cryptographic signature verification of a
// confirmed successful subscription payment event.
// Checkout views, abandoned carts, declined cards, and pending charges never
// consume a launch slot.
// ============================================================================

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.1';

async function verifyHmacSignature(
  rawBody: string,
  signatureHeader: string | null,
  secret: string
): Promise<boolean> {
  if (!signatureHeader || !secret) return false;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const mac = await crypto.subtle.sign('HMAC', key, encoder.encode(rawBody));
  const computedHex = Array.from(new Uint8Array(mac))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return computedHex === signatureHeader.trim().toLowerCase();
}

Deno.serve(async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  const webhookSecret = Deno.env.get('PAYMENT_WEBHOOK_SECRET');
  const paymentProvider = Deno.env.get('PAYMENT_PROVIDER_NAME') ?? 'unconfigured';

  if (!supabaseUrl || !serviceRoleKey || !webhookSecret) {
    return new Response(
      JSON.stringify({ error: 'Server payment webhook secrets are not configured.' }),
      { status: 503 }
    );
  }

  const rawBody = await req.text();
  const signature =
    req.headers.get('x-webhook-signature') ??
    req.headers.get('x-paystack-signature') ??
    req.headers.get('verif-hash');

  const isAuthentic = await verifyHmacSignature(rawBody, signature, webhookSecret);
  if (!isAuthentic) {
    return new Response(JSON.stringify({ error: 'Invalid webhook signature' }), { status: 401 });
  }

  const payload = JSON.parse(rawBody);

  // Only confirmed successful subscription payments may claim a slot
  if (payload?.event_type !== 'subscription.payment_succeeded') {
    return new Response(JSON.stringify({ status: 'ignored_non_settlement_event' }), {
      status: 200,
    });
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  const { data, error } = await supabaseAdmin
    .schema('private_billing')
    .rpc('claim_confirmed_launch_slot', {
      p_provider: paymentProvider,
      p_provider_event_id: String(payload.event_id),
      p_provider_payment_reference: String(payload.payment_reference),
      p_plan_term_months: Number(payload.metadata?.plan_term_months ?? 1),
      p_platform: payload.metadata?.platform === 'MT5' ? 'MT5' : 'MT4',
      p_amount_cents: Number(payload.amount_cents),
      p_currency: String(payload.currency ?? 'USD'),
      p_request_first_five_discount: Boolean(payload.metadata?.request_first_five_discount),
    });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
});
