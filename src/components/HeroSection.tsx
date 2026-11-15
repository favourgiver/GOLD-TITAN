import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

export function HeroSection() {
  const { section1Hero } = HOMEPAGE_COPY;
  const slides = section1Hero.slides;

  const [{ active, prev }, setSlideState] = useState({ active: 0, prev: -1 });
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  // Auto-swap the two hero slides every 5 seconds (swiping to the left)
  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = window.setInterval(() => {
      setSlideState((s) => ({ prev: s.active, active: (s.active + 1) % slides.length }));
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion, slides.length, cycle]);

  // Slide-indicator dots: jump to a visual and restart the 5s cadence
  const goToSlide = (idx: number) => {
    setSlideState((s) => ({ prev: s.active, active: idx }));
    setCycle((c) => c + 1);
  };

  const slidePosClass = (idx: number) => {
    if (idx === active) return 'translate-x-0 opacity-100';
    if (idx === prev) return '-translate-x-8 opacity-0 pointer-events-none';
    return 'translate-x-8 opacity-0 pointer-events-none';
  };

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#070707] pt-8 pb-8 sm:pt-12 sm:pb-12 lg:pt-14 lg:pb-14"
    >
      {/* Slow randomly-drifting golden gradient backdrop, kept under this section's content */}
      <div aria-hidden="true" className="titan-ambient">
        <div className="titan-ambient-blob titan-ambient-blob-a" />
        <div className="titan-ambient-blob titan-ambient-blob-b" />
      </div>

      {/* Subtle yellow studio glow behind hero stage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[4%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(255,208,0,0.12)_0%,rgba(255,208,0,0.03)_42%,transparent_72%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Editorial Column */}
          <div className="relative z-10 lg:col-span-7">
            <div className="mb-6 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FFD000]/28 bg-[#12110C] px-3.5 py-1 font-mono text-[11px] font-medium tracking-[0.12em] text-[#FDE047]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFD000]" aria-hidden="true" />
                XAUUSD
              </span>
            </div>

            {/* Alternating slide messages, synced with the hero visuals */}
            <div className="grid">
              {slides.map((slide, idx) => (
                <div
                  key={slide.headline}
                  aria-hidden={idx !== active}
                  className={`col-start-1 row-start-1 transition-[transform,opacity] duration-700 ease-out ${slidePosClass(idx)}`}
                >
                  <h1
                    id={idx === active ? 'hero-heading' : undefined}
                    className="text-[2.25rem] sm:text-[3.1rem] lg:text-[3.75rem] xl:text-[4.1rem] font-bold leading-[1.05] tracking-[-0.03em] text-[#F5F2EA]"
                  >
                    {(() => {
                      const [before, ...rest] = slide.headline.split(slide.accent);
                      return (
                        <>
                          {before}
                          <span className="text-[#FFD000]">{slide.accent}</span>
                          {rest.join(slide.accent)}
                        </>
                      );
                    })()}
                  </h1>
                  <p className="mt-6 max-w-[610px] text-[16px] sm:text-[17px] font-medium leading-[1.65] text-[#D8D2C6]">
                    {slide.tagline}
                  </p>
                </div>
              ))}
            </div>

            {/* Glowing Primary CTA (secondary 'DISCOVER HOW IT WORKS' button removed per user direction) */}
            <div className="mt-9 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5">
              <a
                href="#pricing"
                className="btn-gold-primary inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[13px] font-bold tracking-[0.06em]"
              >
                <span>{section1Hero.primaryCta}</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Hero Visuals: alternating floating slides */}
          <div
            className="relative lg:col-span-5"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div className="relative mx-auto max-w-[460px] lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border border-[#FFD000]/20 bg-black shadow-[0_24px_80px_-20px_rgba(0,0,0,0.9)]">
                <div className="grid">
                  {/* Slide 1: Bonus box with bonus coupons & gold bars (opening choreography removed per user direction, just floating) */}
                  <div
                    aria-hidden={active !== 0}
                    className={`col-start-1 row-start-1 relative h-[390px] sm:h-[470px] lg:h-[520px] w-full transition-[transform,opacity] duration-700 ease-out ${slidePosClass(0)}`}
                  >
                    <div className="titan-hero-float absolute inset-0">
                      <picture>
                        <source
                          srcSet={`${import.meta.env.BASE_URL}images/titan-hero-box.webp`}
                          type="image/webp"
                        />
                        <img
                          src={`${import.meta.env.BASE_URL}images/titan-hero-box.jpg`}
                          alt="GOLD TITAN bonus box opening to reveal a 20% OFF coupon, a 30% OFF coupon and gold bars"
                          width={1066}
                          height={1008}
                          loading="eager"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover object-center select-none"
                        />
                      </picture>
                    </div>
                  </div>

                  {/* Slide 2: Trading bot */}
                  <div
                    aria-hidden={active !== 1}
                    className={`col-start-1 row-start-1 relative h-[390px] sm:h-[470px] lg:h-[520px] w-full transition-[transform,opacity] duration-700 ease-out ${slidePosClass(1)}`}
                  >
                    <div className="titan-hero-float absolute inset-0">
                      <picture>
                        <source
                          srcSet={`${import.meta.env.BASE_URL}images/titan-hero-bot.webp`}
                          type="image/webp"
                        />
                        <img
                          src={`${import.meta.env.BASE_URL}images/titan-hero-bot.jpg`}
                          alt="GOLD TITAN trading bot with a glowing candlestick chart visor and an XAU/USD gold coin"
                          width={1066}
                          height={1008}
                          loading="eager"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover object-center select-none"
                        />
                      </picture>
                    </div>
                  </div>
                </div>

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
                </div>
              </div>

              {/* Slide indicator: there are two hero visuals */}
              <div className="relative z-30 mt-4 flex items-center justify-center gap-2.5">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.headline}
                    type="button"
                    aria-label={`Show hero visual ${idx + 1} of ${slides.length}`}
                    aria-current={active === idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      active === idx
                        ? 'w-7 bg-[#FFD000] shadow-[0_0_10px_rgba(255,208,0,0.45)]'
                        : 'w-2.5 border border-[#FFD000]/35 bg-[#111111] hover:border-[#FFD000]/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
