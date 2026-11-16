import { useEffect, useRef } from 'react';

/**
 * A little yellow-outlined circle that eases after the mouse pointer,
 * visible anywhere the cursor is. Pointer-events are disabled so it never
 * blocks clicks; it is hidden on touch devices / reduced-motion setups by
 * CSS. Subtle smoothing keeps it feeling gentle.
 */
export function CursorRing() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let visible = false;
    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        pos.x = target.x;
        pos.y = target.y;
        el.style.opacity = '1';
        visible = true;
      }
    };
    const onLeave = () => {
      el.style.opacity = '0';
      visible = false;
    };

    const step = () => {
      pos.x += (target.x - pos.x) * 0.22;
      pos.y += (target.y - pos.y) * 0.22;
      el.style.transform = `translate3d(${pos.x - 9}px, ${pos.y - 9}px, 0)`;
      raf = requestAnimationFrame(step);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(step);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} aria-hidden="true" className="titan-cursor-ring" />;
}
