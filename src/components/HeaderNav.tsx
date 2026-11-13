import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';
import { BrandMark } from './BrandMark';

export function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['how-it-works', 'why-gold-titan', 'technology', 'pricing', 'faqs'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.3, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-[#E7CF8B]/15 bg-[#070707]/90 backdrop-blur-md'
          : 'border-b border-transparent bg-[#070707]/65 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="rounded-lg py-1 pr-2 focus-visible:outline-2"
          aria-label="GOLD TITAN home"
        >
          <BrandMark />
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {HOMEPAGE_COPY.nav.links.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                  isActive
                    ? 'text-[#E7CF8B] bg-[#1C1A16]/90'
                    : 'text-[#AAA49A] hover:text-[#F5F2EA]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-4 -bottom-[1px] h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#pricing"
            className="btn-gold-primary inline-flex min-h-[42px] items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-bold tracking-[0.06em]"
          >
            <span>{HOMEPAGE_COPY.nav.cta}</span>
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation-panel"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E7CF8B]/20 bg-[#111111] text-[#F5F2EA] transition-colors hover:border-[#C9A24A]/50 lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-[#E7CF8B]" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation-panel"
          aria-label="Mobile Primary"
          className="border-t border-[#E7CF8B]/15 bg-[#090909] px-4 pt-3 pb-6 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {HOMEPAGE_COPY.nav.links.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex min-h-[46px] items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'bg-[#1C1A16] text-[#E7CF8B]'
                        : 'text-[#F5F2EA] hover:bg-[#141414]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-[#8E6B2E]" aria-hidden="true">
                      →
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-4 border-t border-[#E7CF8B]/12">
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="btn-gold-primary flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-bold tracking-[0.06em]"
            >
              <span>{HOMEPAGE_COPY.nav.cta}</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
