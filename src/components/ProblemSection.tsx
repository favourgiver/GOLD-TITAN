import { HOMEPAGE_COPY } from '../content/homepageCopy';

export function ProblemSection() {
  const { section2Problem } = HOMEPAGE_COPY;

  return (
    <section
      id="the-problem"
      aria-labelledby="problem-heading"
      className="relative border-t border-[#E7CF8B]/14 bg-[#0B0A08] py-20 sm:py-24 lg:py-32"
    >
      {/* Subtle horizontal gold light sweep at top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A24A]/50 to-transparent"
      />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Editorial Statement */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A24A]">
                02 / {section2Problem.overline}
              </p>
              <h2
                id="problem-heading"
                className="mt-4 text-[1.95rem] sm:text-[2.45rem] lg:text-[2.75rem] font-semibold leading-[1.1] tracking-[-0.025em] text-[#F5F2EA]"
              >
                {section2Problem.heading}
              </h2>
              <p className="mt-5 text-[16px] leading-[1.68] text-[#AAA49A]">
                {section2Problem.intro}
              </p>

              {/* Restrained architectural time/attention schematic (decorative, non-performance) */}
              <div
                aria-hidden="true"
                className="mt-8 hidden lg:flex items-center gap-5 rounded-2xl border border-[#E7CF8B]/12 bg-[#11100D] p-5"
              >
                <svg viewBox="0 0 72 72" className="h-16 w-16 shrink-0" fill="none">
                  <circle
                    cx="36"
                    cy="36"
                    r="30"
                    stroke="#E7CF8B"
                    strokeOpacity="0.18"
                    strokeWidth="1.2"
                    strokeDasharray="2 4"
                  />
                  <circle
                    cx="36"
                    cy="36"
                    r="21"
                    stroke="#C9A24A"
                    strokeOpacity="0.45"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M36 22V36L45 41"
                    stroke="#E7CF8B"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <circle cx="36" cy="36" r="2.5" fill="#C9A24A" />
                </svg>
                <div className="space-y-1.5">
                  <div className="font-mono text-[11px] tracking-[0.14em] text-[#E7CF8B]">
                    CONTINUOUS MARKET HOURS
                  </div>
                  <div className="h-1.5 w-40 overflow-hidden rounded-full bg-[#1C1A16]">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#8E6B2E] to-[#C9A24A]" />
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.08em] text-[#AAA49A]">
                    MANUAL ATTENTION BOTTLENECK
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Staggered Numbered Pain Points */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#E7CF8B]/14 rounded-2xl border border-[#E7CF8B]/15 bg-[#111111]">
              {section2Problem.items.map((item, idx) => {
                const [numPart, ...rest] = item.title.split('. ');
                const headingText = rest.join('. ');
                return (
                  <article
                    key={item.title}
                    className={`p-6 sm:p-8 transition-colors hover:bg-[#151411] ${
                      idx % 2 === 1 ? 'sm:pl-12' : ''
                    }`}
                  >
                    <div>
                      <h3 className="text-[19px] sm:text-[21px] font-semibold tracking-[-0.015em] text-[#F5F2EA]">
                        <span className="mr-3 font-mono text-sm font-semibold tracking-[0.12em] text-[#C9A24A]">
                          {numPart}.
                        </span>
                        {headingText}
                      </h3>
                      <p className="mt-2.5 text-[15.5px] leading-[1.65] text-[#AAA49A]">
                        {item.body}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Verbatim Closing Statement Panel */}
            <div className="mt-8 rounded-2xl border border-[#C9A24A]/30 bg-gradient-to-br from-[#1C1A16] via-[#14120F] to-[#0E0D0B] p-6 sm:p-8">
              <div className="border-l-2 border-[#C9A24A] pl-5 space-y-3">
                <p className="text-[17px] sm:text-[18.5px] font-medium leading-[1.55] text-[#F5F2EA]">
                  {section2Problem.closing[0]}
                </p>
                <p className="text-[15.5px] sm:text-[16px] leading-[1.65] text-[#D2CCC0]">
                  {section2Problem.closing[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
