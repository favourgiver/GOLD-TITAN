import { AlertCircle, ArrowUpRight, Check, Database, Lock, RefreshCw } from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';
import type { LaunchAllocationState } from '../lib/launchAllocation';

export type PlanTermMonths = 1 | 2 | 3 | 6;

interface PricingSectionProps {
  allocation: LaunchAllocationState;
  onOpenSubscribeModal: (termMonths: PlanTermMonths) => void;
}

export function PricingSection({ allocation, onOpenSubscribeModal }: PricingSectionProps) {
  const { section7Pricing } = HOMEPAGE_COPY;
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
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative scroll-mt-20 border-t border-[#E7CF8B]/14 bg-[#070707] py-20 sm:py-24 lg:py-32"
    >
      {/* Subtle radial warm-gold illumination behind offer stage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-32 left-1/2 -translate-x-1/2 h-[500px] w-[780px] rounded-full bg-[radial-gradient(circle,rgba(201,162,74,0.09)_0%,transparent_70%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-[720px]">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A24A]">
            07 / {section7Pricing.overline}
          </p>
          <h2
            id="pricing-heading"
            className="mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F5F2EA]"
          >
            {section7Pricing.heading}
          </h2>
          <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.68] text-[#AAA49A]">
            {section7Pricing.intro}
          </p>
        </div>

        {/* Standard Monthly Subscription Primary Card */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[#C9A24A]/35 bg-gradient-to-br from-[#1C1A16] via-[#13120F] to-[#0D0C0A]">
          <div className="grid grid-cols-1 border-b border-[#E7CF8B]/14 bg-[#0C0B09]/80 px-6 py-3.5 sm:grid-cols-12 sm:px-8">
            <div className="sm:col-span-8 font-mono text-[11px] font-semibold tracking-[0.15em] text-[#E7CF8B]">
              {section7Pricing.standardPlan.columnHeaderLeft}
            </div>
            <div className="hidden sm:block sm:col-span-4 sm:text-right font-mono text-[11px] font-semibold tracking-[0.15em] text-[#E7CF8B]">
              {section7Pricing.standardPlan.columnHeaderRight}
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-6 p-6 sm:grid-cols-12 sm:p-8 lg:p-10">
            <div className="sm:col-span-7 lg:col-span-8">
              <h3 className="text-[20px] sm:text-[23px] font-semibold tracking-[-0.015em] text-[#F5F2EA]">
                {section7Pricing.standardPlan.name}
              </h3>
              <p className="mt-2.5 flex items-start gap-2.5 text-[15px] sm:text-[15.5px] leading-[1.6] text-[#B8B2A7]">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#C9A24A]" aria-hidden="true" />
                <span>{section7Pricing.standardPlan.inclusions}</span>
              </p>
            </div>

            <div className="flex flex-col sm:items-end justify-between gap-4 border-t border-[#E7CF8B]/14 pt-5 sm:col-span-5 sm:border-t-0 sm:pt-0 lg:col-span-4">
              <div>
                <span className="sm:hidden block font-mono text-[10px] tracking-[0.14em] text-[#AAA49A] mb-1">
                  {section7Pricing.standardPlan.columnHeaderRight}
                </span>
                <div className="text-[2rem] sm:text-[2.35rem] font-semibold tracking-[-0.03em] text-[#F5F2EA]">
                  {section7Pricing.standardPlan.price}
                </div>
              </div>

              <button
                type="button"
                disabled={isAllocationFull}
                onClick={() => onOpenSubscribeModal(1)}
                className={`inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-full px-7 py-3 text-[13px] font-bold tracking-[0.06em] ${
                  isAllocationFull
                    ? 'cursor-not-allowed border border-[#E7CF8B]/15 bg-[#191815] text-[#AAA49A]'
                    : 'btn-gold-primary cursor-pointer'
                }`}
              >
                <span>{section7Pricing.standardPlan.cta}</span>
                {!isAllocationFull && (
                  <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bonus 01 + Bonus 02 Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* BONUS 01 - FIRST FIVE SUBSCRIBERS + Bespoke Metallic Launch Seal */}
          <article className="relative overflow-hidden rounded-3xl border border-[#C9A24A]/30 bg-[#11100D] p-6 sm:p-8 lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs font-semibold tracking-[0.14em] text-[#C9A24A]">
                {section7Pricing.bonus01.title}
              </p>
              <h3 className="mt-2.5 text-[21px] sm:text-[23px] font-semibold leading-tight tracking-[-0.015em] text-[#F5F2EA]">
                {section7Pricing.bonus01.subheadline}
              </h3>
              <p className="mt-3.5 text-[15px] sm:text-[15.5px] leading-[1.65] text-[#B8B2A7]">
                {section7Pricing.bonus01.body}
              </p>
            </div>

            {/* Precision-machined launch seal + $50 -> $35 arithmetic callout */}
            <div className="mt-7 flex items-center justify-between gap-4 rounded-2xl border border-[#E7CF8B]/15 bg-[#080807] p-4">
              <div className="space-y-1">
                <div className="font-mono text-[10.5px] tracking-[0.12em] text-[#AAA49A]">
                  FIRST MONTH OFFER
                </div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-sm line-through text-[#AAA49A]">$50</span>
                  <span className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#E7CF8B]">
                    $35
                  </span>
                </div>
                <div className="font-mono text-[11px] font-medium text-[#C9A24A]">
                  SAVE $15 · FIRST 5 ONLY
                </div>
              </div>

              <picture className="shrink-0">
                <source
                  srcSet={`${import.meta.env.BASE_URL}images/titan-launch-seal.webp`}
                  type="image/webp"
                />
                <img
                  src={`${import.meta.env.BASE_URL}images/titan-launch-seal.png`}
                  alt="Precision-milled dark titanium and brushed gold octagonal launch seal"
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="h-24 w-32 rounded-xl object-cover select-none"
                />
              </picture>
            </div>
          </article>

          {/* BONUS 02 - MULTI-MONTH SUBSCRIPTION Table */}
          <article className="rounded-3xl border border-[#E7CF8B]/16 bg-[#111111] p-6 sm:p-8 lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs font-semibold tracking-[0.14em] text-[#C9A24A]">
                {section7Pricing.bonus02.title}
              </p>
              <h3 className="mt-2.5 text-[21px] sm:text-[23px] font-semibold leading-tight tracking-[-0.015em] text-[#F5F2EA]">
                {section7Pricing.bonus02.subheadline}
              </h3>
              <p className="mt-3.5 text-[15px] sm:text-[15.5px] leading-[1.65] text-[#B8B2A7]">
                {section7Pricing.bonus02.body}
              </p>
            </div>

            {/* Desktop/Tablet Table (no horizontal overflow) */}
            <div className="mt-6 hidden sm:block overflow-hidden rounded-2xl border border-[#E7CF8B]/16 bg-[#0B0A08]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E7CF8B]/14 bg-[#161410]">
                    {section7Pricing.bonus02.tableHeaders.map((header) => (
                      <th
                        key={header}
                        scope="col"
                        className="px-4 py-3.5 font-mono text-[11px] font-semibold tracking-[0.12em] text-[#E7CF8B]"
                      >
                        {header}
                      </th>
                    ))}
                    <th scope="col" className="px-4 py-3.5 text-right">
                      <span className="sr-only">Select term</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7CF8B]/10 text-[15px]">
                  {section7Pricing.bonus02.rows.map((row) => (
                    <tr
                      key={row.term}
                      className="transition-colors hover:bg-[#14130F]"
                    >
                      <td className="px-4 py-3.5 font-medium text-[#F5F2EA]">{row.term}</td>
                      <td className="px-4 py-3.5 text-[#AAA49A] line-through">{row.standard}</td>
                      <td className="px-4 py-3.5 font-semibold text-[#E7CF8B]">
                        {row.discounted}
                      </td>
                      <td className="px-4 py-3.5 font-mono text-sm text-[#C9A24A]">
                        {row.savings}
                      </td>
                      <td className="px-4 py-3.5 text-right">
                        <button
                          type="button"
                          disabled={isAllocationFull}
                          onClick={() => onOpenSubscribeModal(row.termMonths)}
                          className="min-h-[36px] rounded-full border border-[#E7CF8B]/25 bg-[#181611] px-3.5 py-1 text-xs font-semibold text-[#F5F2EA] transition-colors hover:border-[#C9A24A] hover:text-[#E7CF8B] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Select
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Zero-Overflow Stacked Term Cards (<640px) */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:hidden">
              {section7Pricing.bonus02.rows.map((row) => (
                <div
                  key={row.term}
                  className="rounded-2xl border border-[#E7CF8B]/16 bg-[#0B0A08] p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.12em] text-[#AAA49A]">
                      {section7Pricing.bonus02.tableHeaders[0]}
                    </span>
                    <span className="text-[15px] font-semibold text-[#F5F2EA]">{row.term}</span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-3 gap-2 border-t border-[#E7CF8B]/10 pt-2.5 text-xs">
                    <div>
                      <span className="block font-mono text-[9.5px] text-[#AAA49A]">
                        {section7Pricing.bonus02.tableHeaders[1]}
                      </span>
                      <span className="mt-0.5 block text-sm text-[#AAA49A] line-through">
                        {row.standard}
                      </span>
                    </div>
                    <div>
                      <span className="block font-mono text-[9.5px] text-[#AAA49A]">
                        {section7Pricing.bonus02.tableHeaders[2]}
                      </span>
                      <span className="mt-0.5 block text-sm font-semibold text-[#E7CF8B]">
                        {row.discounted}
                      </span>
                    </div>
                    <div>
                      <span className="block font-mono text-[9.5px] text-[#AAA49A]">
                        {section7Pricing.bonus02.tableHeaders[3]}
                      </span>
                      <span className="mt-0.5 block font-mono text-sm text-[#C9A24A]">
                        {row.savings}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    disabled={isAllocationFull}
                    onClick={() => onOpenSubscribeModal(row.termMonths)}
                    className="mt-3 min-h-[42px] w-full rounded-full border border-[#E7CF8B]/25 bg-[#181611] px-4 py-2 text-xs font-semibold text-[#F5F2EA] hover:border-[#C9A24A] disabled:opacity-50"
                  >
                    Select {row.term}
                  </button>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* Sub-section: Bonus access and launch availability (Bonus 03 + Dynamic 20-Slot Counter) */}
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-lg sm:text-xl font-semibold tracking-[-0.015em] text-[#E5E0D5]">
              {section7Pricing.launchDetailsHeading}
            </h3>
            <div className="h-px flex-1 bg-[#E7CF8B]/14" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            {/* BONUS 03 - ONE EXTRA MONTH ON US */}
            <article className="rounded-3xl border border-[#E7CF8B]/16 bg-[#111111] p-6 sm:p-8 lg:col-span-6 flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs font-semibold tracking-[0.14em] text-[#C9A24A]">
                  {section7Pricing.bonus03.title}
                </p>
                <h4 className="mt-2.5 text-[20px] sm:text-[22px] font-semibold leading-tight tracking-[-0.015em] text-[#F5F2EA]">
                  {section7Pricing.bonus03.subheadline}
                </h4>
                <p className="mt-4 text-[15.5px] leading-[1.68] text-[#EAE5DA]">
                  {section7Pricing.bonus03.body}
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-[#E7CF8B]/14 bg-[#0B0A08] p-4 sm:p-5">
                <p className="text-[13.5px] sm:text-[14px] leading-[1.62] text-[#AAA49A]">
                  {section7Pricing.bonus03.disclaimer}
                </p>
              </div>
            </article>

            {/* YOUR EARLY-ACCESS LAUNCH SLOTS (The ONLY section with 20-slot launch messaging) */}
            <article className="rounded-3xl border border-[#C9A24A]/35 bg-gradient-to-b from-[#1C1A16] to-[#100F0C] p-6 sm:p-8 lg:col-span-6 flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs font-semibold tracking-[0.14em] text-[#C9A24A]">
                  {section7Pricing.launchSlots.title}
                </p>
                <h4 className="mt-2.5 text-[20px] sm:text-[22px] font-semibold leading-tight tracking-[-0.015em] text-[#F5F2EA]">
                  {section7Pricing.launchSlots.subheadline}
                </h4>
                <p className="mt-3.5 text-[15.5px] leading-[1.65] text-[#B8B2A7]">
                  {section7Pricing.launchSlots.body}
                </p>

                {/* Authoritative Launch-Slot Counter Readout */}
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-6 rounded-2xl border border-[#C9A24A]/30 bg-[#090807] p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div className="font-mono text-lg sm:text-xl font-bold tracking-[0.06em] text-[#F5F2EA]">
                      <span className="text-[#E7CF8B]">{remainingDisplay}</span>{' '}
                      <span>{section7Pricing.launchSlots.remainingSuffix}</span>
                    </div>
                    <div className="font-mono text-xs sm:text-[13px] font-semibold tracking-[0.1em] text-[#C9A24A]">
                      <span>{claimedDisplay}</span>{' '}
                      <span>{section7Pricing.launchSlots.claimedSuffix}</span>
                    </div>
                  </div>

                  {/* 20-Slot Precision Segmented Allocation Rail */}
                  <div
                    aria-hidden="true"
                    className="mt-4 grid grid-cols-10 sm:grid-cols-20 gap-1"
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
                          className={`h-2 rounded-[3px] transition-colors ${
                            isClaimed
                              ? 'bg-[#3A352C]'
                              : isLiveAvailable
                              ? 'bg-[#C9A24A]'
                              : 'border border-[#E7CF8B]/18 bg-[#171511]'
                          }`}
                        />
                      );
                    })}
                  </div>

                  {/* Honest Backend Connection / Error / Sold-Out Status */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#E7CF8B]/10 text-xs">
                    {allocation.status === 'unconfigured' && (
                      <p className="inline-flex items-center gap-2 text-[#AAA49A]">
                        <Database className="h-3.5 w-3.5 shrink-0 text-[#C9A24A]" aria-hidden="true" />
                        <span>
                          Development placeholder — live slot count activates once database &amp;
                          payment webhook are connected.
                        </span>
                      </p>
                    )}

                    {allocation.status === 'loading' && (
                      <p className="inline-flex items-center gap-2 text-[#AAA49A]">
                        <RefreshCw className="h-3.5 w-3.5 animate-spin text-[#C9A24A]" aria-hidden="true" />
                        <span>Checking verified launch allocation…</span>
                      </p>
                    )}

                    {allocation.status === 'live' && (
                      <p className="inline-flex items-center gap-2 text-[#E7CF8B]">
                        <span className="h-2 w-2 rounded-full bg-[#C9A24A]" aria-hidden="true" />
                        <span>Verified server-authoritative launch allocation</span>
                      </p>
                    )}

                    {allocation.status === 'full' && (
                      <p className="inline-flex items-center gap-2 font-medium text-[#E7CF8B]">
                        <Lock className="h-3.5 w-3.5 text-[#C9A24A]" aria-hidden="true" />
                        <span>All 20 launch subscription places have been claimed.</span>
                      </p>
                    )}

                    {allocation.status === 'error' && (
                      <div className="flex w-full items-center justify-between gap-3 text-[#E7CF8B]">
                        <span className="inline-flex items-center gap-1.5">
                          <AlertCircle className="h-3.5 w-3.5 text-[#C9A24A]" aria-hidden="true" />
                          <span>{allocation.errorMessage}</span>
                        </span>
                        <button
                          type="button"
                          onClick={allocation.refresh}
                          className="rounded-md border border-[#E7CF8B]/25 px-2.5 py-1 font-mono text-[11px] hover:border-[#C9A24A]"
                        >
                          Retry
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  disabled={isAllocationFull}
                  onClick={() => onOpenSubscribeModal(1)}
                  className={`inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[13px] font-bold tracking-[0.06em] ${
                    isAllocationFull
                      ? 'cursor-not-allowed border border-[#E7CF8B]/15 bg-[#191815] text-[#AAA49A]'
                      : 'btn-gold-primary cursor-pointer'
                  }`}
                >
                  <span>
                    {isAllocationFull
                      ? 'LAUNCH ALLOCATION CLAIMED'
                      : section7Pricing.launchSlots.cta}
                  </span>
                  {!isAllocationFull && (
                    <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
                  )}
                </button>
              </div>
            </article>
          </div>
        </div>

        {/* Customer-facing Promotional Terms */}
        <p className="mt-8 rounded-2xl border border-[#E7CF8B]/12 bg-[#0D0C0A] px-5 py-4 text-[13.5px] leading-[1.65] text-[#AAA49A]">
          {section7Pricing.promotionalTerms}
        </p>
      </div>
    </section>
  );
}
