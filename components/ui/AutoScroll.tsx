"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** Drift speed in CSS pixels per second. */
  speed?: number;
  className?: string;
  children: React.ReactNode;
};

/**
 * Horizontal strip that drifts on its own at a constant speed and loops
 * seamlessly. The caller renders its items twice (the second set
 * aria-hidden) and marks the first clone with `data-clone`; the loop
 * width is measured from it. Native scrolling still works: the drift
 * pauses while the pointer is over the strip, while anything inside has
 * focus, and for a few seconds after the visitor scrolls it themselves.
 * It also pauses off-screen and does nothing under reduced motion.
 */
export function AutoScroll({ speed = 28, className = "", children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let last = 0;
    let hovered = false;
    let focused = false;
    let visible = false;
    let manualUntil = 0;
    // Fractional position: scrollLeft itself rounds to whole pixels, so a
    // slow drift would never accumulate if we read it back every frame.
    let pos = el.scrollLeft;
    let written = Math.round(pos);

    const loopWidth = () => {
      const clone = el.querySelector<HTMLElement>("[data-clone]");
      const first = el.firstElementChild as HTMLElement | null;
      return clone && first ? clone.offsetLeft - first.offsetLeft : 0;
    };

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const dt = last ? Math.min(now - last, 100) / 1000 : 0;
      last = now;
      if (!visible || hovered || focused || now < manualUntil) return;
      const width = loopWidth();
      if (!width) return;
      pos += speed * dt;
      if (pos >= width) pos -= width;
      const next = Math.round(pos);
      if (next !== written) {
        written = next;
        el.scrollLeft = next;
      }
    };

    const onScroll = () => {
      // A scroll we did not cause is the visitor's: hold off for a while.
      if (Math.abs(el.scrollLeft - written) > 1.5) {
        manualUntil = performance.now() + 4000;
        pos = el.scrollLeft;
        written = Math.round(pos);
      }
    };
    const enter = () => { hovered = true; };
    const leave = () => { hovered = false; };
    const focusIn = () => { focused = true; };
    const focusOut = () => { focused = false; };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0.1 });

    io.observe(el);
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    el.addEventListener("focusin", focusIn);
    el.addEventListener("focusout", focusOut);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
      el.removeEventListener("focusin", focusIn);
      el.removeEventListener("focusout", focusOut);
    };
  }, [speed]);

  return (
    <div ref={ref} data-autoscroll={speed} className={className}>
      {children}
    </div>
  );
}
