import { X } from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';
import { HeroTicker } from './HeroTicker';

export function ProblemSection() {
  const { section2Problem } = HOMEPAGE_COPY;

  return (
    <section
      id="the-problem"
      aria-labelledby="problem-heading"
      className="relative border-t border-[#FFD000]/14 bg-[#0B0A08] pt-10 pb-20 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD000]/45 to-transparent"
      />

      {/* Moving 'Automated Trading / Specialized in XAUUSD (GOLD)' ticker placed over the top of this section (per user direction) */}
      <HeroTicker />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Left-side paragraph layout: heading, intro, X-marked pain points, closing line */}
        <div className="max-w-[760px]">
          <h2
            id="problem-heading"
            className="text-[2.15rem] sm:text-[2.65rem] lg:text-[2.95rem] font-semibold leading-[1.1] tracking-[-0.025em] text-[#F5F2EA]"
          >
            {(() => {
              const accent = "Shouldn't";
              const [before, ...rest] = section2Problem.heading.split(accent);
              return (
                <>
                  {before}
                  <span className="text-[#FFD000]">{accent}</span>
                  {rest.join(accent)}
                </>
              );
            })()}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.68] text-[#AAA49A]">
            {section2Problem.intro}
          </p>

          <ul className="mt-8 space-y-4">
            {section2Problem.painPoints.map((point) => (
              <li key={point} className="flex items-start gap-3.5">
                <X
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 sm:h-6 sm:w-6 shrink-0 stroke-[2.5] text-[#FFD000]"
                />
                <span className="text-[15px] sm:text-[16px] font-normal leading-snug text-[#D8D2C6]">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-9 border-l-2 border-[#FFD000] pl-5 text-[16px] sm:text-[17.5px] font-medium leading-[1.65] text-[#E5E0D5]">
            {section2Problem.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
