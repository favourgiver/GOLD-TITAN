import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Cpu, Layers, ShieldAlert } from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';

export function SolutionSection() {
  const { section3Solution } = HOMEPAGE_COPY;
  const [selectedPlatform, setSelectedPlatform] = useState<'MT4' | 'MT5'>('MT5');

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
              {section3Solution.heading}
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-[1.68] text-[#B8B2A7]">
              <p className="text-[#EAE5DA]">{section3Solution.paragraphs[0]}</p>
              <p>{section3Solution.paragraphs[1]}</p>
              <p>{section3Solution.paragraphs[2]}</p>
            </div>
          </div>

          {/* Illustrative Software Console */}
          <div className="lg:col-span-7">
            <div
              role="region"
              aria-label="Illustrative GOLD TITAN software interface"
              className="rounded-3xl border border-[#FFD000]/22 bg-[#11100D] p-4 sm:p-6 shadow-[0_30px_90px_-25px_rgba(0,0,0,0.95)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#FFD000]/14 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFD000]" aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold tracking-[0.12em] text-[#F5F2EA]">
                    GOLD TITAN · EXECUTION CONSOLE
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FFD000]/24 bg-[#191811] px-3 py-1 font-mono text-[10.5px] tracking-[0.04em] text-[#FDE047]">
                  <ShieldAlert className="h-3 w-3 text-[#FFD000]" aria-hidden="true" />
                  Illustrative interface - not live trading data
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#FFD000]/14 bg-[#171511] p-3">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-[#FFD000]" aria-hidden="true" />
                  <span className="font-mono text-xs text-[#AAA49A]">PLATFORM ENVIRONMENT:</span>
                </div>
                <div
                  role="group"
                  aria-label="Preview supported platform version"
                  className="inline-flex rounded-full border border-[#FFD000]/18 bg-[#0B0A08] p-1"
                >
                  {(['MT4', 'MT5'] as const).map((platform) => {
                    const active = selectedPlatform === platform;
                    return (
                      <button
                        key={platform}
                        type="button"
                        onClick={() => setSelectedPlatform(platform)}
                        aria-pressed={active}
                        className={`min-h-[34px] rounded-full px-4 py-1 font-mono text-xs font-medium transition-all ${
                          active
                            ? 'bg-[#FFD000] text-[#070707] font-semibold shadow-[0_0_12px_rgba(255,208,0,0.35)]'
                            : 'text-[#AAA49A] hover:text-[#F5F2EA]'
                        }`}
                      >
                        MetaTrader {platform === 'MT4' ? '4' : '5'}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-[#FFD000]/14 bg-[#090908] p-4 sm:p-5 titan-grid-bg">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-mono font-semibold tracking-[0.1em] text-[#FFD000]">
                    MARKET SCOPE · XAUUSD (GOLD)
                  </span>
                  <span className="font-mono text-[11px] text-[#AAA49A]">
                    COMPATIBLE VERSION: {selectedPlatform === 'MT4' ? 'MetaTrader 4' : 'MetaTrader 5'}
                  </span>
                </div>

                <svg
                  aria-hidden="true"
                  viewBox="0 0 600 170"
                  className="mt-4 h-36 w-full"
                  fill="none"
                >
                  <path
                    d="M10 132 C 68 126, 95 88, 145 96 C 195 104, 232 58, 286 72 C 340 86, 378 44, 436 56 C 494 68, 534 32, 590 38"
                    stroke="url(#consoleWave)"
                    strokeWidth="2"
                  />
                  <path
                    d="M10 132 C 68 126, 95 88, 145 96 C 195 104, 232 58, 286 72 C 340 86, 378 44, 436 56 C 494 68, 534 32, 590 38 L 590 165 L 10 165 Z"
                    fill="url(#consoleFill)"
                  />
                  <circle cx="145" cy="96" r="4.5" fill="#090908" stroke="#FDE047" strokeWidth="2" />
                  <circle cx="286" cy="72" r="4.5" fill="#090908" stroke="#FFD000" strokeWidth="2" />
                  <circle cx="436" cy="56" r="5" fill="#FFD000" />
                  <defs>
                    <linearGradient id="consoleWave" x1="10" y1="132" x2="590" y2="38" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#CA8A04" />
                      <stop offset="0.5" stopColor="#FFD000" />
                      <stop offset="1" stopColor="#FDE047" />
                    </linearGradient>
                    <linearGradient id="consoleFill" x1="300" y1="32" x2="300" y2="165" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFD000" stopOpacity="0.16" />
                      <stop offset="1" stopColor="#090908" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-[#FFD000]/12 pt-3 font-mono text-[11px] text-[#AAA49A]">
                  <span>MODE: PROGRAMMED STRATEGY AUTOMATION</span>
                  <span className="text-[#FFD000]">SETUP HANDLED · NO SEPARATE VPS</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-[#FFD000]/14 bg-[#161410] p-3.5">
                  <div className="font-mono text-[10px] tracking-[0.12em] text-[#AAA49A]">
                    ACCOUNT TYPE
                  </div>
                  <div className="mt-1 text-sm font-semibold text-[#F5F2EA]">
                    Live {selectedPlatform} Only
                  </div>
                  <div className="mt-0.5 text-xs text-[#AAA49A]">Demo not supported</div>
                </div>

                <div className="rounded-xl border border-[#FFD000]/14 bg-[#161410] p-3.5">
                  <div className="font-mono text-[10px] tracking-[0.12em] text-[#AAA49A]">
                    MINIMUM BALANCE
                  </div>
                  <div className="mt-1 text-sm font-semibold text-[#FFD000]">$250 USD</div>
                  <div className="mt-0.5 text-xs text-[#AAA49A]">Live-account requirement</div>
                </div>

                <div className="rounded-xl border border-[#FFD000]/14 bg-[#161410] p-3.5">
                  <div className="font-mono text-[10px] tracking-[0.12em] text-[#AAA49A]">
                    SUBSCRIPTION
                  </div>
                  <div className="mt-1 text-sm font-semibold text-[#F5F2EA]">$50 / month</div>
                  <div className="mt-0.5 text-xs text-[#AAA49A]">Multi-month 20% off</div>
                </div>
              </div>
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
