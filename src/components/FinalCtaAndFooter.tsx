import { ArrowUpRight, AlertTriangle } from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';
import { BrandMark } from './BrandMark';

export function FinalCtaAndFooter() {
  const { finalCta, riskDisclosure } = HOMEPAGE_COPY;

  return (
    <>
      {/* Final Call to Action + Complete Visible Risk Disclosure */}
      <section
        id="final-cta"
        aria-labelledby="final-cta-heading"
        className="relative border-t border-[#E7CF8B]/14 bg-[#070707] pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24"
      >
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          {/* Restrained Architectural Final CTA Stage */}
          <div className="relative overflow-hidden rounded-3xl border border-[#C9A24A]/35 bg-gradient-to-br from-[#1C1A16] via-[#12100D] to-[#090807] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[520px] rounded-full bg-[radial-gradient(circle,rgba(201,162,74,0.18)_0%,transparent_70%)] blur-2xl"
            />

            <div className="relative z-10 mx-auto max-w-[740px]">
              <h2
                id="final-cta-heading"
                className="text-[2rem] sm:text-[2.65rem] lg:text-[3.1rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F5F2EA]"
              >
                {finalCta.heading}
              </h2>

              <div className="mt-6 space-y-3 text-[16px] sm:text-[17.5px] leading-[1.65] text-[#D2CCC0]">
                {finalCta.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-9 flex justify-center">
                <a
                  href="#pricing"
                  className="btn-gold-primary inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full px-8 py-4 text-[13px] font-bold tracking-[0.06em]"
                >
                  <span>{finalCta.cta}</span>
                  <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
                </a>
              </div>

              <p className="mt-8 font-mono text-xs sm:text-[13px] font-semibold tracking-[0.14em] text-[#E7CF8B]">
                {finalCta.tagline}
              </p>
            </div>
          </div>

          {/* Complete Visible Risk Disclosure (comfortably legible, never hidden or collapsed) */}
          <div
            id="risk-disclosure"
            role="note"
            aria-labelledby="risk-disclosure-heading"
            className="mt-10 rounded-2xl border border-[#E7CF8B]/20 bg-[#11100E] p-6 sm:p-8"
          >
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="h-4 w-4 shrink-0 text-[#C9A24A]" aria-hidden="true" />
              <h3
                id="risk-disclosure-heading"
                className="font-mono text-xs sm:text-[13px] font-semibold tracking-[0.15em] text-[#E7CF8B]"
              >
                {riskDisclosure.heading}
              </h3>
            </div>
            <p className="mt-3.5 text-[15px] sm:text-[15.5px] leading-[1.72] text-[#CFC9BD]">
              {riskDisclosure.body}
            </p>
          </div>
        </div>
      </section>

      {/* Restrained In-Page Utility Footer (no invented addresses, phone numbers, or fake pages) */}
      <footer className="border-t border-[#E7CF8B]/12 bg-[#050505] py-10">
        <div className="mx-auto flex max-w-[1240px] flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <div className="space-y-2">
            <BrandMark compact />
            <p className="text-xs text-[#AAA49A]">
              Automated XAUUSD trading software for MetaTrader 4 and MetaTrader 5.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[#AAA49A]">
            <a href="#how-it-works" className="hover:text-[#E7CF8B] transition-colors">
              How It Works
            </a>
            <a href="#why-gold-titan" className="hover:text-[#E7CF8B] transition-colors">
              Why GOLD TITAN
            </a>
            <a href="#technology" className="hover:text-[#E7CF8B] transition-colors">
              Get to Know the Technology
            </a>
            <a href="#pricing" className="hover:text-[#E7CF8B] transition-colors">
              Pricing
            </a>
            <a href="#faqs" className="hover:text-[#E7CF8B] transition-colors">
              FAQs
            </a>
            <a href="#risk-disclosure" className="hover:text-[#E7CF8B] transition-colors">
              Risk Disclosure
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
