# GOLD TITAN

Official marketing homepage for **GOLD TITAN** — an automated gold-trading software solution developed for the XAUUSD market, compatible with MetaTrader 4 and MetaTrader 5.

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite 6, Tailwind CSS v4
- **Typography:** `@fontsource-variable/manrope` & `@fontsource-variable/jetbrains-mono`
- **Icons:** `lucide-react`
- **Backend / Live Slot Architecture:** Supabase PostgreSQL + Realtime + Edge Functions (`supabase/`)

## Local Development

```bash
npm install
npm run dev
```

Production build & type-check:

```bash
npm run build
```

## Live Launch-Slot Counter & Checkout Setup

By design, the 20-slot launch counter **never** fabricates live numbers or decrements on browser events. Until the backend and payment webhook are connected, it renders an explicit development placeholder (`-- / 20 SLOTS REMAINING`).

To enable live slot tracking and subscription checkout:

1. Apply `supabase/migrations/001_launch_allocation.sql` to your Supabase project.
2. Deploy the server-side functions in `supabase/functions/payment-webhook` and `supabase/functions/create-checkout` with your verified payment provider secrets (`SUPABASE_SERVICE_ROLE_KEY`, `PAYMENT_WEBHOOK_SECRET`, `PAYMENT_PROVIDER_NAME`, `DISCOUNT_STACKING_POLICY`).
3. Copy `.env.example` to `.env` and populate ONLY the public variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_CHECKOUT_ENABLED`, `VITE_CHECKOUT_SESSION_ENDPOINT`).
