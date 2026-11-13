import {
  Clock,
  Compass,
  Cpu,
  Layers,
  ServerOff,
  SlidersHorizontal,
  Wallet,
} from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';

const FEATURE_ICONS = [
  Compass,
  Layers,
  SlidersHorizontal,
  Clock,
  ServerOff,
  Wallet,
  Cpu,
] as const;

const COL_SPANS = [
  'lg:col-span-6',
  'lg:col-span-6',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-5',
  'lg:col-span-7',
] as const;

export function WhyGoldTitanSection() {
  const { section5WhyGoldTitan } = HOMEPAGE_COPY;

  return (
    <section
      id="why-gold-titan"
      aria-labelledby="why-gold-titan-heading"
      className="relative scroll-mt-20 border-t border-[#E7CF8B]/14 bg-[#070707] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-[640px]">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A24A]">
              05 / {section5WhyGoldTitan.overline}
            </p>
            <h2
              id="why-gold-titan-heading"
              className="mt-4 text-[1.95rem] sm:text-[2.5rem] lg:text-[2.85rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F5F2EA]"
            >
              {section5WhyGoldTitan.heading}
            </h2>
          </div>
          <p className="max-w-[440px] text-[16px] leading-[1.65] text-[#AAA49A]">
            {section5WhyGoldTitan.intro}
          </p>
        </div>

        {/* Asymmetric Editorial Bento Composition (avoids 7 identical generic cards) */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {section5WhyGoldTitan.items.map((item, idx) => {
            const Icon = FEATURE_ICONS[idx];
            const spanClass = COL_SPANS[idx];
            const isHighlighted = idx === 0 || idx === 6;

            return (
              <article
                key={item.title}
                className={`${spanClass} ${
                  idx === 6 ? 'sm:col-span-2' : ''
                } group relative flex flex-col justify-between rounded-2xl border p-6 sm:p-7 transition-colors ${
                  isHighlighted
                    ? 'border-[#C9A24A]/28 bg-gradient-to-br from-[#191712] to-[#100F0C]'
                    : 'border-[#E7CF8B]/14 bg-[#111111] hover:border-[#E7CF8B]/28'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7CF8B]/16 bg-[#0B0A08] text-[#C9A24A]">
                    <Icon className="h-4 w-4 stroke-[1.75]" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs tracking-[0.14em] text-[#8E6B2E]">
                    0{idx + 1}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-[18.5px] sm:text-[20px] font-semibold tracking-[-0.015em] text-[#F5F2EA]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] sm:text-[15.5px] leading-[1.65] text-[#AAA49A]">
                    {item.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Verbatim Closing Statement */}
        <div className="mt-10 rounded-2xl border border-[#E7CF8B]/18 bg-[#12110D] px-6 py-6 sm:px-9 text-center">
          <p className="text-[16.5px] sm:text-[18px] font-medium leading-[1.55] text-[#F5F2EA]">
            {section5WhyGoldTitan.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
