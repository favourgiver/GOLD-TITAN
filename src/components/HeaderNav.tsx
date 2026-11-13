import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { HOMEPAGE_COPY } from '../content/homepageCopy';
import { BrandMark } from './BrandMark';

export function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  useEffect(() => {
    const navIds = HOMEPAGE_COPY.nav.links.map((l) => l.href.slice(1));

    const updateScrollState = () => {
      setScrolled(window.scrollY > 24);

      // Reference line roughly 30% down the viewport (below sticky header)
      const triggerY = Math.min(220, Math.max(120, window.innerHeight * 0.3));
      let matched = '';

      for (const id of navIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY && rect.bottom > triggerY) {
          matched = `#${id}`;
          break;
        }
      }

      setActiveSection(matched);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
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
          ? 'border-b border-[#FFD000]/18 bg-[#070707]/92 backdrop-blur-md'
          : 'border-b border-transparent bg-[#070707]/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-[74px] max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="rounded-lg py-1 pr-2 focus-visible:outline-2"
          aria-label="GOLD TITAN home"
        >
          <BrandMark />
        </a>

        {/* Desktop navigation:
            - Active section is highlighted when scrolled into view
            - Exclusive single underline appears ONLY under the currently hovered link */}
        <nav
          aria-label="Primary"
          onMouseLeave={() => setHoveredHref(null)}
          className="hidden lg:flex items-center gap-1.5"
        >
          {HOMEPAGE_COPY.nav.links.map((item) => {
            const isActive = activeSection === item.href;
            const isHovered = hoveredHref === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredHref(item.href)}
                onFocus={() => setHoveredHref(item.href)}
                onBlur={() => setHoveredHref(null)}
                aria-current={isActive ? 'location' : undefined}
                className={`relative rounded-full px-4 py-2 text-[14px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#FFD000]/15 text-[#FFD000] font-semibold shadow-[0_0_14px_rgba(255,208,0,0.18)]'
                    : 'text-[#AAA49A] hover:text-[#F5F2EA]'
                }`}
              >
                {item.label}
                {isHovered && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 right-3.5 -bottom-[2px] h-[2px] rounded-full bg-[#FFD000] shadow-[0_0_8px_rgba(255,208,0,0.75)]"
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
          className="btn-outline-glow inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#FFD000]/28 bg-[#111111] text-[#F5F2EA] lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-[#FFD000]" aria-hidden="true" />
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
          className="border-t border-[#FFD000]/18 bg-[#090909] px-4 pt-3 pb-6 lg:hidden"
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
                        ? 'bg-[#FFD000]/15 text-[#FFD000] font-semibold'
                        : 'text-[#F5F2EA] hover:bg-[#141414]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-[#FFD000]" aria-hidden="true">
                      →
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-4 border-t border-[#FFD000]/14">
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
