import { AlertCircle, ArrowUpRight, Database, Lock, RefreshCw } from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';
import type { LaunchAllocationState } from '../lib/launchAllocation';
import type { PlanTermMonths } from './PricingSection';

interface LaunchSlotsSectionProps {
  allocation: LaunchAllocationState;
  onOpenSubscribeModal: (termMonths: PlanTermMonths) => void;
}

export function LaunchSlotsSection({
  allocation,
  onOpenSubscribeModal,
}: LaunchSlotsSectionProps) {
  const { launchSlots } = HOMEPAGE_COPY.section7Pricing;
  const isAllocationFull = allocation.status === 'full';

  const remainingDisplay =
    allocation.status === 'live' || allocation.status === 'full'
      ? String(allocation.remainingSlots ?? 0)
      : allocation.status === 'loading'
      ? '···'
      : '--';

  const claimedDisplay =
    allocation.status === 'live' || allocation.status === 'full'
      ? String(allocation.claimedSlots ?? 0)
      : allocation.status === 'loading'
      ? '···'
      : '--';

  return (
    <section
      id="launch-slots"
      aria-labelledby="launch-slots-heading"
      className="relative scroll-mt-20 border-t border-[#FFD000]/16 bg-[#0B0A08] py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(255,208,0,0.09)_0%,transparent_72%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-[920px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#FFD000]/35 bg-gradient-to-b from-[#171610] to-[#0E0D0A] p-7 sm:p-10 lg:p-12">
          <div className="text-center">
            <p className="font-mono text-xs font-semibold tracking-[0.16em] text-[#FFD000]">
              {launchSlots.title}
            </p>
            <h2
              id="launch-slots-heading"
              className="mt-3 text-[1.95rem] sm:text-[2.5rem] lg:text-[2.8rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F5F2EA]"
            >
              {launchSlots.subheadline}
            </h2>
            <p className="mx-auto mt-4 max-w-[650px] text-[16px] leading-[1.68] text-[#B8B2A7]">
              {launchSlots.body}
            </p>
          </div>

          {/* Authoritative Launch-Slot Counter Readout */}
          <div
            role="status"
            aria-live="polite"
            className="mt-8 rounded-2xl border border-[#FFD000]/32 bg-[#080807] p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
              <div className="font-mono text-xl sm:text-2xl font-bold tracking-[0.06em] text-[#F5F2EA]">
                <span className="text-[#FFD000]">{remainingDisplay}</span>{' '}
                <span>{launchSlots.remainingSuffix}</span>
              </div>
              <div className="font-mono text-xs sm:text-sm font-semibold tracking-[0.1em] text-[#FDE047]">
                <span>{claimedDisplay}</span> <span>{launchSlots.claimedSuffix}</span>
              </div>
            </div>

            {/* 20-Slot Precision Segmented Allocation Rail */}
            <div
              aria-hidden="true"
              className="mt-5 grid grid-cols-10 sm:grid-cols-20 gap-1.5"
            >
              {Array.from({ length: 20 }).map((_, i) => {
                const isClaimed =
                  (allocation.status === 'live' || allocation.status === 'full') &&
                  allocation.claimedSlots !== null &&
                  i < allocation.claimedSlots;
                const isLiveAvailable =
                  allocation.status === 'live' &&
                  allocation.claimedSlots !== null &&
                  i >= allocation.claimedSlots;

                return (
                  <span
                    key={i}
                    className={`h-2.5 rounded-[3px] transition-colors ${
                      isClaimed
                        ? 'bg-[#3A3526]'
                        : isLiveAvailable
                        ? 'bg-[#FFD000]'
                        : 'border border-[#FFD000]/22 bg-[#161510]'
                    }`}
                  />
                );
              })}
            </div>

            {/* Honest Backend Connection / Error / Sold-Out Status */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-[#FFD000]/12 text-xs">
              {allocation.status === 'unconfigured' && (
                <p className="inline-flex items-center gap-2 text-[#AAA49A]">
                  <Database className="h-3.5 w-3.5 shrink-0 text-[#FFD000]" aria-hidden="true" />
                  <span>
                    Development placeholder — live slot count activates once database &amp; payment
                    webhook are connected.
                  </span>
                </p>
              )}

              {allocation.status === 'loading' && (
                <p className="inline-flex items-center gap-2 text-[#AAA49A]">
                  <RefreshCw className="h-3.5 w-3.5 animate-spin text-[#FFD000]" aria-hidden="true" />
                  <span>Checking verified launch allocation…</span>
                </p>
              )}

              {allocation.status === 'live' && (
                <p className="inline-flex items-center gap-2 text-[#FFD000]">
                  <span className="h-2 w-2 rounded-full bg-[#FFD000]" aria-hidden="true" />
                  <span>Verified server-authoritative launch allocation</span>
                </p>
              )}

              {allocation.status === 'full' && (
                <p className="inline-flex items-center gap-2 font-medium text-[#FFD000]">
                  <Lock className="h-3.5 w-3.5 text-[#FFD000]" aria-hidden="true" />
                  <span>All 20 launch subscription places have been claimed.</span>
                </p>
              )}

              {allocation.status === 'error' && (
                <div className="flex w-full items-center justify-between gap-3 text-[#FFD000]">
                  <span className="inline-flex items-center gap-1.5">
                    <AlertCircle className="h-3.5 w-3.5 text-[#FFD000]" aria-hidden="true" />
                    <span>{allocation.errorMessage}</span>
                  </span>
                  <button
                    type="button"
                    onClick={allocation.refresh}
                    className="btn-outline-glow rounded-md border border-[#FFD000]/35 px-2.5 py-1 font-mono text-[11px] hover:border-[#FFD000]"
                  >
                    Retry
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              disabled={isAllocationFull}
              onClick={() => onOpenSubscribeModal(1)}
              className={`inline-flex min-h-[52px] w-full sm:w-auto sm:min-w-[290px] items-center justify-center gap-2.5 rounded-full px-8 py-4 text-[13px] font-bold tracking-[0.06em] ${
                isAllocationFull
                  ? 'cursor-not-allowed border border-[#FFD000]/15 bg-[#191815] text-[#AAA49A]'
                  : 'btn-gold-primary cursor-pointer'
              }`}
            >
              <span>
                {isAllocationFull ? 'LAUNCH ALLOCATION CLAIMED' : launchSlots.cta}
              </span>
              {!isAllocationFull && (
                <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
