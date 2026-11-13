import { useEffect, useState } from 'react';
import { AlertCircle, ArrowUpRight, CheckCircle2, ShieldAlert, X } from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';
import type { PlanTermMonths } from './PricingSection';

interface SubscriptionModalProps {
  isOpen: boolean;
  initialTermMonths: PlanTermMonths;
  onClose: () => void;
}

const PLAN_OPTIONS: Array<{
  termMonths: PlanTermMonths;
  label: string;
  priceLabel: string;
  subLabel: string;
}> = [
  {
    termMonths: 1,
    label: '1 month',
    priceLabel: '$50 / month',
    subLabel: '$35 first month for first 5 qualifying subscribers (save $15)',
  },
  {
    termMonths: 2,
    label: '2 months',
    priceLabel: '$80 upfront',
    subLabel: 'Standard $100 · Save $20 (20% off)',
  },
  {
    termMonths: 3,
    label: '3 months',
    priceLabel: '$120 upfront',
    subLabel: 'Standard $150 · Save $30 (20% off)',
  },
  {
    termMonths: 6,
    label: '6 months',
    priceLabel: '$240 upfront',
    subLabel: 'Standard $300 · Save $60 (20% off)',
  },
];

const checkoutEnabled = import.meta.env.VITE_CHECKOUT_ENABLED === 'true';
const checkoutEndpoint = import.meta.env.VITE_CHECKOUT_SESSION_ENDPOINT?.trim() || '';

export function SubscriptionModal({
  isOpen,
  initialTermMonths,
  onClose,
}: SubscriptionModalProps) {
  const [selectedTerm, setSelectedTerm] = useState<PlanTermMonths>(initialTermMonths);
  const [platform, setPlatform] = useState<'MT4' | 'MT5'>('MT5');
  const [submitting, setSubmitting] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  useEffect(() => {
    setSelectedTerm(initialTermMonths);
    setCheckoutError(null);
  }, [initialTermMonths, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const canInitiateLiveCheckout = checkoutEnabled && Boolean(checkoutEndpoint);

  const handleCheckoutAction = async () => {
    if (!canInitiateLiveCheckout) return;
    setSubmitting(true);
    setCheckoutError(null);

    try {
      const res = await fetch(checkoutEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          termMonths: selectedTerm,
          platform,
        }),
      });
      const payload = await res.json();
      if (!res.ok) {
        setCheckoutError(payload?.error || 'Unable to start subscription checkout.');
        return;
      }
      if (payload?.checkoutUrl) {
        window.location.assign(payload.checkoutUrl);
      } else {
        setCheckoutError('Checkout provider URL has not been configured on the server yet.');
      }
    } catch {
      setCheckoutError('Network error while contacting checkout service.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="subscription-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Dialog Surface */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-[600px] overflow-y-auto rounded-3xl border border-[#C9A24A]/35 bg-[#100F0C] p-6 sm:p-8 shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-[#E7CF8B]/14 pb-4">
          <div>
            <p className="font-mono text-[11px] font-semibold tracking-[0.15em] text-[#C9A24A]">
              GOLD TITAN SUBSCRIPTION
            </p>
            <h2
              id="subscription-modal-title"
              className="mt-1 text-xl sm:text-2xl font-semibold text-[#F5F2EA]"
            >
              Select Subscription Term &amp; Platform
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close subscription dialog"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E7CF8B]/20 bg-[#181612] text-[#F5F2EA] hover:border-[#C9A24A]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Platform Selection */}
        <div className="mt-5">
          <span className="block font-mono text-[11px] font-semibold tracking-[0.14em] text-[#AAA49A]">
            1. CHOOSE YOUR TRADING PLATFORM
          </span>
          <div className="mt-2.5 grid grid-cols-2 gap-3">
            {(['MT4', 'MT5'] as const).map((plat) => {
              const selected = platform === plat;
              return (
                <button
                  key={plat}
                  type="button"
                  onClick={() => setPlatform(plat)}
                  aria-pressed={selected}
                  className={`min-h-[48px] rounded-xl border px-4 py-3 text-left transition-colors ${
                    selected
                      ? 'border-[#C9A24A] bg-[#1C1A16] text-[#F5F2EA]'
                      : 'border-[#E7CF8B]/14 bg-[#0B0A08] text-[#AAA49A] hover:text-[#F5F2EA]'
                  }`}
                >
                  <span className="block text-sm font-semibold">
                    MetaTrader {plat === 'MT4' ? '4' : '5'}
                  </span>
                  <span className="block font-mono text-[11px] text-[#C9A24A]">
                    Compatible {plat} version
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Subscription Term Selection */}
        <div className="mt-5">
          <span className="block font-mono text-[11px] font-semibold tracking-[0.14em] text-[#AAA49A]">
            2. SELECT SUBSCRIPTION TERM
          </span>
          <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {PLAN_OPTIONS.map((opt) => {
              const active = selectedTerm === opt.termMonths;
              return (
                <button
                  key={opt.termMonths}
                  type="button"
                  onClick={() => setSelectedTerm(opt.termMonths)}
                  aria-pressed={active}
                  className={`rounded-xl border p-3.5 text-left transition-colors ${
                    active
                      ? 'border-[#C9A24A] bg-[#1C1A16]'
                      : 'border-[#E7CF8B]/14 bg-[#0B0A08] hover:border-[#E7CF8B]/30'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-sm font-semibold text-[#F5F2EA]">{opt.label}</span>
                    <span className="font-mono text-sm font-bold text-[#E7CF8B]">
                      {opt.priceLabel}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-snug text-[#AAA49A]">{opt.subLabel}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Confirmed Account Requirements Reminder */}
        <div className="mt-5 rounded-2xl border border-[#E7CF8B]/14 bg-[#0B0A08] p-4">
          <p className="font-mono text-[10.5px] font-semibold tracking-[0.14em] text-[#E7CF8B]">
            {HOMEPAGE_COPY.section4HowItWorks.requirementsHeading}
          </p>
          <ul className="mt-2.5 space-y-1.5 text-xs text-[#CFC9BD]">
            {HOMEPAGE_COPY.section4HowItWorks.requirements.map((req) => (
              <li key={req} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A24A]" aria-hidden="true" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Checkout Action or Explicit Unconfigured Notice */}
        {canInitiateLiveCheckout ? (
          <div className="mt-6 space-y-3">
            {checkoutError && (
              <div className="flex items-start gap-2 rounded-xl border border-[#C9A24A]/40 bg-[#1A150E] p-3 text-xs text-[#E7CF8B]">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A24A]" aria-hidden="true" />
                <span>{checkoutError}</span>
              </div>
            )}
            <button
              type="button"
              disabled={submitting}
              onClick={handleCheckoutAction}
              className="btn-gold-primary flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[13px] font-bold tracking-[0.06em] disabled:opacity-60"
            >
              <span>{submitting ? 'PREPARING CHECKOUT…' : 'PROCEED TO SECURE CHECKOUT'}</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
            </button>
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-[#C9A24A]/35 bg-[#191610] p-4">
            <div className="flex items-start gap-3">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A24A]" aria-hidden="true" />
              <div className="space-y-1.5 text-xs leading-relaxed text-[#E5E0D5]">
                <p className="font-semibold text-[#E7CF8B]">
                  Payment Provider Integration Pending
                </p>
                <p className="text-[#B8B2A7]">
                  Live payment processing is not yet connected. No payment has been charged and no
                  launch slot has been claimed. Checkout activates once the payment provider,
                  settlement currency, and promotional terms are configured on the server.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
