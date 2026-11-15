import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Pop-slowly-into-view wrapper. Toggles the visible class BOTH ways so the
 * reveal re-plays every time the section enters the screen (scrolling up or
 * down, any number of times).
 */
export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle('titan-reveal-visible', entry.isIntersecting);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className ? `titan-reveal ${className}` : 'titan-reveal'}>
      {children}
    </div>
  );
}
