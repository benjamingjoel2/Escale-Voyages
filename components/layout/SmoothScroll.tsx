"use client";

import { ReactLenis } from "lenis/react";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

/**
 * Lenis smooth scrolling, but only where it helps: fine-pointer devices with
 * motion allowed. Touch devices keep native scrolling for performance and
 * accessibility. Server render and hydration use native scroll, then Lenis
 * attaches on the client when the media queries allow it.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const fine = useMediaQuery("(pointer: fine)");
  const reduce = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (!fine || reduce) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.085, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
