import { Sparkle } from 'lucide-react';

const PHRASES = ['Specialized in XAUUSD (GOLD)', 'Automated Trading'] as const;
const REPEATS = [0, 1, 2, 3, 4, 5] as const;

export function HeroTicker() {
  return (
    <div
      role="region"
      aria-label="Key product strengths ticker"
      className="relative overflow-hidden border-y border-[#FFD000]/15 bg-[#090909] py-4 sm:py-5"
    >
      {/* Accessible single read for screen readers */}
      <p className="sr-only">{PHRASES.join(' — ')}</p>

      {/* Continuous seamless infinite moving ticker */}
      <div aria-hidden="true" className="titan-ticker-track">
        {[0, 1].map((groupIndex) => (
          <div key={groupIndex} className="flex shrink-0 items-center">
            {REPEATS.map((repeat) => (
              <div key={repeat} className="flex shrink-0 items-center">
                {PHRASES.map((phrase) => (
                  <div key={phrase} className="flex shrink-0 items-center">
                    <span className="whitespace-nowrap pl-8 pr-6 text-lg sm:text-2xl font-bold tracking-[0.02em] text-[#F5F2EA]">
                      {phrase}
                    </span>
                    <Sparkle
                      aria-hidden="true"
                      fill="currentColor"
                      strokeWidth={1}
                      className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-[#FFD000]"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
