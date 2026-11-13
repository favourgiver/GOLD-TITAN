import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';

export function FaqSection() {
  const { section8Faqs } = HOMEPAGE_COPY;
  const [openIndices, setOpenIndices] = useState<Set<number>>(() => new Set([0]));

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  const allExpanded = openIndices.size === section8Faqs.items.length;

  const handleToggleAll = () => {
    if (allExpanded) {
      setOpenIndices(new Set());
    } else {
      setOpenIndices(new Set(section8Faqs.items.map((_, i) => i)));
    }
  };

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-heading"
      className="relative scroll-mt-20 border-t border-[#E7CF8B]/14 bg-[#0B0A08] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A24A]">
              08 / {section8Faqs.overline}
            </p>
            <h2
              id="faqs-heading"
              className="mt-4 text-[1.95rem] sm:text-[2.5rem] lg:text-[2.85rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F5F2EA]"
            >
              {section8Faqs.heading}
            </h2>
          </div>

          <button
            type="button"
            onClick={handleToggleAll}
            className="self-start sm:self-auto min-h-[42px] rounded-full border border-[#E7CF8B]/20 bg-[#12110E] px-4 py-2 font-mono text-xs tracking-[0.08em] text-[#E7CF8B] transition-colors hover:border-[#C9A24A]"
          >
            {allExpanded ? 'COLLAPSE ALL' : 'EXPAND ALL (12)'}
          </button>
        </div>

        <div className="mt-12 divide-y divide-[#E7CF8B]/14 rounded-3xl border border-[#E7CF8B]/16 bg-[#111111]">
          {section8Faqs.items.map((faq, idx) => {
            const isOpen = openIndices.has(idx);
            const panelId = `faq-answer-${idx + 1}`;
            const buttonId = `faq-question-${idx + 1}`;

            return (
              <div key={faq.question} className="px-5 sm:px-8">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleIndex(idx)}
                    className="flex min-h-[64px] w-full items-center justify-between gap-4 py-5 text-left text-[16.5px] sm:text-[18.5px] font-semibold leading-snug tracking-[-0.01em] text-[#F5F2EA] transition-colors hover:text-[#E7CF8B]"
                  >
                    <span>{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isOpen
                          ? 'border-[#C9A24A] bg-[#1C1A16] text-[#E7CF8B]'
                          : 'border-[#E7CF8B]/20 bg-[#0B0A08] text-[#AAA49A]'
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-6 pr-2 sm:pr-12"
                >
                  <p className="text-[15.5px] sm:text-[16px] leading-[1.7] text-[#B8B2A7]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
