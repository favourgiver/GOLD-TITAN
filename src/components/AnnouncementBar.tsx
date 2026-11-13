import { HOMEPAGE_COPY } from '../content/homepageCopy';

const REPEATS = [0, 1, 2, 3] as const;

export function AnnouncementBar() {
  return (
    <div
      role="region"
      aria-label="Launch announcement"
      className="relative z-50 overflow-hidden border-b border-[#FFD000]/20 bg-[#0B0A08] py-2.5"
    >
      {/* Accessible single read for screen readers */}
      <p className="sr-only">{HOMEPAGE_COPY.announcementBar}</p>

      {/* Continuous seamless infinite moving marquee */}
      <div aria-hidden="true" className="titan-marquee-track">
        {[0, 1].map((groupIndex) => (
          <div key={groupIndex} className="flex shrink-0 items-center">
            {REPEATS.map((idx) => (
              <a
                key={`${groupIndex}-${idx}`}
                href="#pricing"
                tabIndex={groupIndex === 0 && idx === 0 ? 0 : -1}
                className="inline-flex shrink-0 items-center gap-4 px-6 text-xs sm:text-[13px] font-semibold tracking-[0.02em] text-[#F5F2EA] hover:text-[#FFD000] transition-colors"
              >
                <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD000] shadow-[0_0_8px_#FFD000]" />
                <span>{HOMEPAGE_COPY.announcementBar}</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
