/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
  readonly VITE_CHECKOUT_ENABLED?: string;
  readonly VITE_CHECKOUT_SESSION_ENDPOINT?: string;
  readonly VITE_OFFER_TERMS_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
