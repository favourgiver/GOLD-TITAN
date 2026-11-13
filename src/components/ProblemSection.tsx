import { HOMEPAGE_COPY } from '../content/homepageCopy';

export function ProblemSection() {
  const { section2Problem } = HOMEPAGE_COPY;

  return (
    <section
      id="the-problem"
      aria-labelledby="problem-heading"
      className="relative border-t border-[#FFD000]/14 bg-[#0B0A08] py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD000]/45 to-transparent"
      />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Editorial Statement (tiny section number/overline removed) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2
                id="problem-heading"
                className="text-[1.95rem] sm:text-[2.45rem] lg:text-[2.75rem] font-semibold leading-[1.1] tracking-[-0.025em] text-[#F5F2EA]"
              >
                {section2Problem.heading}
              </h2>
              <p className="mt-5 text-[16px] leading-[1.68] text-[#AAA49A]">
                {section2Problem.intro}
              </p>

              <div
                aria-hidden="true"
                className="mt-8 hidden lg:flex items-center gap-5 rounded-2xl border border-[#FFD000]/14 bg-[#11100D] p-5"
              >
                <svg viewBox="0 0 72 72" className="h-16 w-16 shrink-0" fill="none">
                  <circle
                    cx="36"
                    cy="36"
                    r="30"
                    stroke="#FDE047"
                    strokeOpacity="0.2"
                    strokeWidth="1.2"
                    strokeDasharray="2 4"
                  />
                  <circle
                    cx="36"
                    cy="36"
                    r="21"
                    stroke="#FFD000"
                    strokeOpacity="0.5"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M36 22V36L45 41"
                    stroke="#FFD000"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <circle cx="36" cy="36" r="2.5" fill="#FFD000" />
                </svg>
                <div className="space-y-1.5">
                  <div className="font-mono text-[11px] tracking-[0.14em] text-[#FFD000]">
                    CONTINUOUS MARKET HOURS
                  </div>
                  <div className="h-1.5 w-40 overflow-hidden rounded-full bg-[#1C1A16]">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#CA8A04] to-[#FFD000]" />
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
            <div className="divide-y divide-[#FFD000]/14 rounded-2xl border border-[#FFD000]/16 bg-[#111111]">
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
                        <span className="mr-3 font-mono text-sm font-semibold tracking-[0.12em] text-[#FFD000]">
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

            <div className="mt-8 rounded-2xl border border-[#FFD000]/30 bg-gradient-to-br from-[#191811] via-[#13120D] to-[#0E0D0B] p-6 sm:p-8">
              <div className="border-l-2 border-[#FFD000] pl-5 space-y-3">
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
