import { ArrowUpRight } from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';

export function HowItWorksSection() {
  const { section4HowItWorks } = HOMEPAGE_COPY;

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative scroll-mt-20 border-t border-[#FFD000]/14 bg-[#0B0A08] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[760px] rounded-3xl border border-[#FFD000]/22 bg-[#11100D] px-6 py-12 sm:px-12 sm:py-16 text-center">
          <h2
            id="how-it-works-heading"
            className="text-[1.95rem] sm:text-[2.5rem] lg:text-[2.85rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F5F2EA]"
          >
            {section4HowItWorks.heading}
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[16px] sm:text-[17px] leading-[1.68] text-[#B8B2A7]">
            {section4HowItWorks.intro}
          </p>

          <div className="mt-9 flex justify-center">
            <a
              href="#pricing"
              className="btn-gold-primary inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-[13px] font-bold tracking-[0.06em]"
            >
              <span>{section4HowItWorks.cta}</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
