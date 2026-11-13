import { HOMEPAGE_COPY } from '../content/homepageCopy';

interface BrandMarkProps {
  compact?: boolean;
}

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-3 select-none">
      <span
        aria-hidden="true"
        className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E7CF8B]/25 bg-gradient-to-b from-[#1A1711] to-[#0B0A08] shadow-[inset_0_1px_0_rgba(231,207,139,0.2)]"
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
          <path
            d="M16 3.5L26.5 9.6V22.4L16 28.5L5.5 22.4V9.6L16 3.5Z"
            stroke="url(#titanMarkGrad)"
            strokeWidth="1.5"
          />
          <path
            d="M16 8.2L22.3 11.9V20.1L16 23.8L9.7 20.1V11.9L16 8.2Z"
            fill="#14120D"
            stroke="#E7CF8B"
            strokeOpacity="0.65"
            strokeWidth="1.1"
          />
          <path
            d="M12.2 13.2H19.8M16 13.2V20.2"
            stroke="#E7CF8B"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="titanMarkGrad"
              x1="5.5"
              y1="3.5"
              x2="26.5"
              y2="28.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E7CF8B" />
              <stop offset="0.5" stopColor="#C9A24A" />
              <stop offset="1" stopColor="#8E6B2E" />
            </linearGradient>
          </defs>
        </svg>
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
