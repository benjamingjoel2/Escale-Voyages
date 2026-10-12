"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useMediaQuery, useSaveData } from "@/lib/hooks/useMediaQuery";

type Props = {
  slotLabel: string;
  /** Set once the real assets exist. */
  videoSrc?: string;
  posterSrc?: string;
};

/**
 * Hero media layer with a subtle parallax (a few lines of rAF, no animation
 * library). The video only loads on wide screens when the browser is not
 * asking to save data; phones get the poster. Until assets are commissioned
 * it renders the toned gradient with the slot label.
 */
export function HeroMedia({ slotLabel, videoSrc, posterSrc }: Props) {
  const layer = useRef<HTMLDivElement>(null);
  const reduce = useMediaQuery("(prefers-reduced-motion: reduce)");
  const wide = useMediaQuery("(min-width: 768px)");
  const saveData = useSaveData();
  const playVideo = Boolean(videoSrc) && wide && !saveData && !reduce;

  useEffect(() => {
    const el = layer.current;
    if (!el || reduce) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const height = el.parentElement?.offsetHeight || window.innerHeight;
      const progress = Math.min(Math.max(window.scrollY / height, 0), 1);
      el.style.transform = `translate3d(0, ${(progress * 18).toFixed(2)}%, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = "";
    };
  }, [reduce]);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <div ref={layer} className="absolute inset-0 tone-hero will-change-transform">
        {posterSrc ? (
          <Image
            src={posterSrc}
            alt=""
            fill
            priority
            fetchPriority="high"
            quality={70}
            sizes="100vw"
            className="object-cover"
          />
        ) : null}
        {playVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : null}
        {!posterSrc && !videoSrc ? (
          <span className="absolute right-4 top-24 z-10 max-w-[70vw] rounded-[3px] border border-dashed border-white/50 bg-black/25 px-3.5 py-2.5 text-right text-[11.5px] leading-snug md:right-12 md:top-28 md:max-w-[40vw]">
            {slotLabel}
          </span>
        ) : null}
      </div>
    </div>
  );
}
