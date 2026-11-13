import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';

export function HeroSection() {
  const { section1Hero } = HOMEPAGE_COPY;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#070707] pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28"
    >
      {/* Subtle yellow studio glow behind hero stage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[4%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(255,208,0,0.12)_0%,rgba(255,208,0,0.03)_42%,transparent_72%)] blur-2xl"
      />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Editorial Column */}
          <div className="relative z-10 lg:col-span-7">
            <div className="mb-6 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FFD000]/28 bg-[#12110C] px-3.5 py-1 font-mono text-[11px] font-medium tracking-[0.12em] text-[#FDE047]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFD000]" aria-hidden="true" />
                XAUUSD
              </span>
              <span className="inline-flex items-center rounded-full border border-[#FFD000]/16 bg-[#0E0E0E] px-3.5 py-1 font-mono text-[11px] tracking-[0.1em] text-[#AAA49A]">
                MT4 &amp; MT5
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-[2.25rem] sm:text-[3.1rem] lg:text-[3.75rem] xl:text-[4.1rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[#F5F2EA]"
            >
              Stop Watching the Charts. Start Trading Smarter with{' '}
              <span className="bg-gradient-to-r from-[#FFF078] via-[#FFD000] to-[#FDE047] bg-clip-text text-transparent">
                GOLD TITAN.
              </span>
            </h1>

            <div className="mt-6 max-w-[610px] space-y-4 text-[16px] sm:text-[17px] leading-[1.65] text-[#B8B2A7]">
              <p className="text-[#E5E0D5] font-normal">{section1Hero.paragraphs[0]}</p>
              <p>{section1Hero.paragraphs[1]}</p>
              <p className="inline-flex items-center gap-2.5 pt-1 font-medium text-[#FFD000]">
                <span
                  aria-hidden="true"
                  className="inline-block h-[1.5px] w-5 bg-[#FFD000]"
                />
                {section1Hero.paragraphs[2]}
              </p>
            </div>

            {/* Dual Glowing CTA Stack */}
            <div className="mt-9 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5">
              <a
                href="#pricing"
                className="btn-gold-primary inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[13px] font-bold tracking-[0.06em]"
              >
                <span>{section1Hero.primaryCta}</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
              </a>

              <a
                href="#how-it-works"
                className="btn-outline-glow inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-[#FFD000]/35 bg-[#111111]/90 px-7 py-3.5 text-[13px] font-semibold tracking-[0.06em] text-[#F5F2EA] hover:border-[#FFD000]/70 hover:bg-[#171610]"
              >
                <span>{section1Hero.secondaryCta}</span>
                <ArrowDownRight className="h-4 w-4 text-[#FFD000]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Hero Visual: Vault Box Opening with Trading Bot & Gold Bars */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-[460px] lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border border-[#FFD000]/20 bg-[#070707] shadow-[0_24px_80px_-20px_rgba(0,0,0,0.9)]">
                <picture>
                  <source
                    srcSet={`${import.meta.env.BASE_URL}images/titan-hero-box.webp`}
                    type="image/webp"
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}images/titan-hero-box.png`}
                    alt="Matte-black vault box opening with a glowing trading bot core and gold bars emerging"
                    width={1024}
                    height={1536}
                    loading="eager"
                    decoding="async"
                    className="relative z-10 mx-auto h-[390px] sm:h-[470px] lg:h-[520px] w-full object-cover object-center select-none"
                  />
                </picture>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#070707] via-[#070707]/65 to-transparent"
                />

                <div className="relative z-30 flex items-center justify-between border-t border-[#FFD000]/16 bg-[#0B0A08]/90 px-5 py-3.5 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-[#FFD000] shadow-[0_0_8px_#FFD000]"
                    />
                    <span className="font-mono text-[11px] tracking-[0.12em] text-[#FFD000]">
                      GOLD TITAN · XAUUSD
                    </span>
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.08em] text-[#AAA49A]">
                    MT4 / MT5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Specification Rail: Key Product Highlights + Audience Positioning */}
        <div className="mt-14 lg:mt-20 rounded-2xl border border-[#FFD000]/18 bg-[#0D0C0A] p-6 sm:p-8 lg:p-9">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <h2 className="font-mono text-[11px] font-semibold tracking-[0.16em] text-[#FFD000]">
                {section1Hero.highlightsHeading}
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {section1Hero.highlights.map((item, idx) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 rounded-xl border border-[#FFD000]/14 bg-[#13120F] px-4 py-3 text-[14px] leading-snug text-[#F5F2EA] ${
                      idx === section1Hero.highlights.length - 1 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD000]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between border-t border-[#FFD000]/14 pt-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <div>
                <h2 className="font-mono text-[11px] font-semibold tracking-[0.16em] text-[#FFD000]">
                  {section1Hero.audienceHeading}
                </h2>
                <p className="mt-4 text-[15px] sm:text-[15.5px] leading-[1.68] text-[#B8B2A7]">
                  {section1Hero.audienceBody}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 pt-2">
                <span className="rounded-md border border-[#FFD000]/16 bg-[#151411] px-2.5 py-1 font-mono text-[11px] text-[#AAA49A]">
                  CORE RANGE · 21-35
                </span>
                <span className="rounded-md border border-[#FFD000]/16 bg-[#151411] px-2.5 py-1 font-mono text-[11px] text-[#AAA49A]">
                  LIVE MT4 / MT5
                </span>
                <span className="rounded-md border border-[#FFD000]/22 bg-[#151411] px-2.5 py-1 font-mono text-[11px] text-[#FFD000]">
                  $50 / MONTH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
