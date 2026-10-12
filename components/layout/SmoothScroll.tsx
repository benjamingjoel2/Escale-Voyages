"use client";

import { useEffect } from "react";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

/**
 * Lenis smooth scrolling, but only where it helps: fine-pointer devices with
 * motion allowed. Touch devices keep native scrolling for performance and
 * accessibility. The library is imported on demand, so phones never download
 * it, and the page renders and hydrates with native scroll either way.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const fine = useMediaQuery("(pointer: fine)");
  const reduce = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enabled = fine && !reduce;

  useEffect(() => {
    if (!enabled) return;
    let alive = true;
    let raf = 0;
    let destroy = () => {};
    import("lenis").then(({ default: Lenis }) => {
      if (!alive) return;
      const lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
      const loop = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      destroy = () => {
        cancelAnimationFrame(raf);
        lenis.destroy();
      };
    });
    return () => {
      alive = false;
      destroy();
    };
  }, [enabled]);

  return <>{children}</>;
}
