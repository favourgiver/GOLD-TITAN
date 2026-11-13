import { ArrowUpRight, ShieldAlert } from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';

const SPEC_TAGS = ['XAUUSD', 'MT4 / MT5', 'NO VPS', '$250 MIN', '$50 / MO'] as const;

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
            className="text-[1.95rem] sm:text-[2.5rem] lg:text-[2.85rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F5F2EA]"
          >
            {section6Technology.heading}
          </h2>
          <p className="mt-4 text-[16px] leading-[1.68] text-[#AAA49A]">
            {section6Technology.intro}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
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
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-3xl border border-[#FFD000]/35 bg-gradient-to-b from-[#191811] to-[#11100D] p-7 sm:p-8 lg:p-9">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD000]/35 bg-[#0B0A08] px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-[0.14em] text-[#FFD000]">
                <ShieldAlert className="h-3.5 w-3.5 text-[#FFD000]" aria-hidden="true" />
                <span>{section6Technology.transparencyHeading}</span>
              </div>

              <div className="mt-6 space-y-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[#E5E0D5]">
                <p>{section6Technology.transparencyParagraphs[0]}</p>
                <p className="rounded-xl border border-[#FFD000]/18 bg-[#0C0B09] p-4 text-[#F5F2EA] font-medium">
                  {section6Technology.transparencyParagraphs[1]}
                </p>
                <p className="text-[#B8B2A7]">{section6Technology.transparencyParagraphs[2]}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#FFD000]/14">
                <a
                  href="#pricing"
                  className="btn-gold-primary inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[13px] font-bold tracking-[0.06em]"
                >
                  <span>{section6Technology.cta}</span>
                  <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
