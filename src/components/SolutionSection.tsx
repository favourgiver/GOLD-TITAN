import { ArrowUpRight, CheckCircle2, Cpu } from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';

export function SolutionSection() {
  const { section3Solution } = HOMEPAGE_COPY;

  return (
    <section
      id="solution"
      aria-labelledby="solution-heading"
      className="relative border-t border-[#FFD000]/14 bg-[#070707] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Editorial Copy (tiny section number/overline removed) */}
          <div className="lg:col-span-5">
            <h2
              id="solution-heading"
              className="text-[1.95rem] sm:text-[2.5rem] lg:text-[2.85rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F5F2EA]"
            >
              {(() => {
                const accent = 'GOLD TITAN';
                const [before, ...rest] = section3Solution.heading.split(accent);
                return (
                  <>
                    {before}
                    <span className="text-[#FFD000]">{accent}</span>
                    {rest.join(accent)}
                  </>
                );
              })()}
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-[1.68] text-[#B8B2A7]">
              <p className="text-[#EAE5DA]">{section3Solution.paragraphs[0]}</p>
              <p>{section3Solution.paragraphs[1]}</p>
              <p>{section3Solution.paragraphs[2]}</p>
            </div>
          </div>

          {/* Floating GT trading robot (frameless) */}
          <div className="lg:col-span-7 self-center">
            <div className="titan-hero-float relative mx-auto w-full max-w-[520px]">
              <picture>
                <source
                  srcSet={`${import.meta.env.BASE_URL}images/titan-gt-robot.webp`}
                  type="image/webp"
                />
                <img
                  src={`${import.meta.env.BASE_URL}images/titan-gt-robot.jpg`}
                  alt="GOLD TITAN floating trading robot with a gold GT emblem on its chest"
                  width={1066}
                  height={1008}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full select-none [mask-image:radial-gradient(ellipse_72%_78%_at_50%_50%,black_62%,transparent_97%)]"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* WHAT MAKES GOLD TITAN APPEALING? */}
        <div className="mt-16 lg:mt-20">
          <div className="flex items-center gap-4">
            <Cpu className="h-4 w-4 text-[#FFD000] shrink-0" aria-hidden="true" />
            <h3 className="font-mono text-xs sm:text-[13px] font-semibold tracking-[0.16em] text-[#FFD000]">
              {section3Solution.appealingHeading}
            </h3>
            <div className="h-px flex-1 bg-[#FFD000]/16" aria-hidden="true" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {section3Solution.appealingItems.map((item) => (
              <div
                key={item.lead}
                className="flex flex-col justify-between rounded-2xl border border-[#FFD000]/14 bg-[#111111] p-5 transition-colors hover:border-[#FFD000]/40 hover:bg-[#151410]"
              >
                <div>
                  <CheckCircle2
                    className="h-4 w-4 text-[#FFD000]"
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                  <p className="mt-3.5 text-[15px] leading-[1.58] text-[#B8B2A7]">
                    <strong className="block font-semibold text-[#F5F2EA] mb-1">
                      {item.lead}
                    </strong>{' '}
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-2xl border border-[#FFD000]/16 bg-[#100F0C] px-6 py-5 sm:px-8">
            <p className="text-[15.5px] sm:text-[16px] text-[#D6D0C4]">
              {section3Solution.subCtaNote}
            </p>
            <a
              href="#technology"
              className="btn-gold-primary inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-[12.5px] font-bold tracking-[0.06em]"
            >
              <span>{section3Solution.cta}</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
