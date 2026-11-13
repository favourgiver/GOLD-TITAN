import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';

export function HowItWorksSection() {
  const { section4HowItWorks } = HOMEPAGE_COPY;

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative scroll-mt-20 border-t border-[#E7CF8B]/14 bg-[#0B0A08] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[680px]">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A24A]">
            04 / {section4HowItWorks.overline}
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-4 text-[1.95rem] sm:text-[2.5rem] lg:text-[2.85rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F5F2EA]"
          >
            {section4HowItWorks.heading}
          </h2>
          <p className="mt-4 text-[16px] leading-[1.68] text-[#AAA49A]">
            {section4HowItWorks.intro}
          </p>
        </div>

        {/* 4-Step Horizontal Progression Rail on Desktop / Vertical Timeline on Mobile */}
        <div className="relative mt-14">
          {/* Desktop connecting fine gold hairline */}
          <div
            aria-hidden="true"
            className="pointer-events-none hidden lg:block absolute top-6 left-[4%] right-[4%] h-px bg-gradient-to-r from-[#C9A24A]/60 via-[#E7CF8B]/30 to-[#C9A24A]/60"
          />

          <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {section4HowItWorks.steps.map((step, index) => {
              const marker = String(index + 1).padStart(2, '0');
              return (
                <li
                  key={step.title}
                  className="relative flex flex-col justify-between rounded-2xl border border-[#E7CF8B]/15 bg-[#12110E] p-6 pt-7"
                >
                  <div>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A24A]/45 bg-[#090806] font-mono text-xs font-semibold tracking-[0.12em] text-[#E7CF8B] shadow-[0_0_0_4px_#0B0A08]">
                      {marker}
                    </div>
                    <h3 className="mt-5 text-[17.5px] font-semibold leading-snug tracking-[-0.01em] text-[#F5F2EA]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.65] text-[#AAA49A]">{step.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Distinct Specification Panel: IMPORTANT ACCOUNT REQUIREMENTS */}
        <div className="mt-12 rounded-3xl border border-[#C9A24A]/30 bg-[#15130F] p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-[#C9A24A]" aria-hidden="true" />
                <h3 className="font-mono text-xs sm:text-[13px] font-semibold tracking-[0.15em] text-[#E7CF8B]">
                  {section4HowItWorks.requirementsHeading}
                </h3>
              </div>

              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {section4HowItWorks.requirements.map((req) => (
                  <li
                    key={req}
                    className="flex items-start gap-3 rounded-xl border border-[#E7CF8B]/14 bg-[#0D0C0A] px-4 py-3.5 text-[14.5px] font-medium text-[#F5F2EA]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#C9A24A]"
                    />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-stretch sm:items-start lg:items-end justify-center border-t border-[#E7CF8B]/14 pt-6 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <a
                href="#pricing"
                className="btn-gold-primary inline-flex min-h-[50px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-[13px] font-bold tracking-[0.06em]"
              >
                <span>{section4HowItWorks.cta}</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
