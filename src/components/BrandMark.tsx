import { HOMEPAGE_COPY } from '../content/homepageCopy';

interface BrandMarkProps {
  compact?: boolean;
}

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-3 select-none">
      <span
        aria-hidden="true"
        className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#FFD000]/35 bg-[#070707] shadow-[0_0_12px_rgba(255,208,0,0.2)] ${
          compact ? 'h-9 w-9' : 'h-11 w-11'
        }`}
      >
        <picture>
          <source
            srcSet={`${import.meta.env.BASE_URL}images/titan-screaming-logo.webp`}
            type="image/webp"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/titan-screaming-logo.png`}
            alt=""
            width={256}
            height={256}
            className="h-full w-full object-cover object-center"
          />
        </picture>
      </span>
      <span
        className={`font-semibold tracking-[0.14em] text-[#F5F2EA] ${
          compact ? 'text-sm' : 'text-[15px] sm:text-base'
        }`}
      >
        {HOMEPAGE_COPY.brand}
      </span>
    </span>
  );
}
