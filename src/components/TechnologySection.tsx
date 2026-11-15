import { ArrowUpRight } from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';

const SPEC_TAGS = ['$250 MIN'] as const;

export function TechnologySection() {
  const { section6Technology } = HOMEPAGE_COPY;

  return (
    <section
      id="technology"
      aria-labelledby="technology-heading"
      className="relative scroll-mt-20 border-t border-[#FFD000]/14 bg-[#0B0A08] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[700px]">
          <h2
            id="technology-heading"
            className="text-[1.95rem] sm:text-[2.5rem] lg:text-[2.85rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#FFD000]"
          >
            {section6Technology.heading}
          </h2>
          <p className="mt-4 text-[16px] leading-[1.68] text-[#AAA49A]">
            {section6Technology.intro}
          </p>
        </div>

        <div className="mt-12">
          <div className="divide-y divide-[#FFD000]/14 rounded-3xl border border-[#FFD000]/16 bg-[#111111] px-6 sm:px-8">
            {section6Technology.specs.map((spec, idx) => (
              <div
                key={spec.title}
                className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 py-6 sm:py-7"
              >
                <div className="max-w-[460px]">
                  <h3 className="text-[18px] sm:text-[19.5px] font-semibold tracking-[-0.015em] text-[#F5F2EA]">
                    {spec.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.65] text-[#AAA49A]">{spec.body}</p>
                </div>
                <span className="self-start shrink-0 rounded-md border border-[#FFD000]/22 bg-[#191710] px-3 py-1 font-mono text-[11px] font-medium tracking-[0.1em] text-[#FFD000]">
                  {SPEC_TAGS[idx]}
                </span>
              </div>
            ))}

            {/* Merged from the removed right-side box */}
            <div className="py-6 sm:py-7">
              <h3 className="text-[18px] sm:text-[19.5px] font-semibold tracking-[-0.015em] text-[#F5F2EA]">
                {section6Technology.slotsHeading}
              </h3>
              <p className="mt-2 max-w-[620px] text-[15px] leading-[1.65] text-[#AAA49A]">
                {section6Technology.slotsBody}
              </p>
              <a
                href="#pricing"
                className="btn-gold-primary mt-6 inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[13px] font-bold tracking-[0.06em]"
              >
                <span>{section6Technology.cta}</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
