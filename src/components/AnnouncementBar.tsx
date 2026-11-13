import { HOMEPAGE_COPY } from '../content/homepageCopy';

export function AnnouncementBar() {
  return (
    <div
      role="region"
      aria-label="Launch announcement"
      className="relative z-50 border-b border-[#E7CF8B]/15 bg-[#0B0A08] px-4 py-2.5 text-center"
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-center gap-2.5 text-xs sm:text-[13px] leading-snug text-[#F5F2EA]">
        <span
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A24A] shadow-[0_0_10px_#C9A24A]"
        />
        <p className="font-medium tracking-[0.01em]">
          <a
            href="#pricing"
            className="hover:text-[#E7CF8B] transition-colors underline-offset-4 hover:underline"
          >
            {HOMEPAGE_COPY.announcementBar}
          </a>
        </p>
      </div>
    </div>
  );
}
