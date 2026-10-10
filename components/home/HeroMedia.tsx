"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery, useSaveData } from "@/lib/hooks/useMediaQuery";

type Props = {
  slotLabel: string;
  /** Set once the real assets exist. */
  videoSrc?: string;
  posterSrc?: string;
};

/**
 * Hero media layer with a subtle parallax. The video only loads on
 * wide screens when the browser is not asking to save data; phones get
 * the poster. Until assets are commissioned it renders the toned gradient
 * with the slot label.
 */
export function HeroMedia({ slotLabel, videoSrc, posterSrc }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const wide = useMediaQuery("(min-width: 768px)");
  const saveData = useSaveData();
  const playVideo = Boolean(videoSrc) && wide && !saveData && !reduce;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);

  return (
    <div ref={ref} className="absolute inset-0 -z-20 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 tone-hero">
        {posterSrc ? (
          // eslint-disable-next-line @next/next/no-img-element -- replaced by next/image when the asset exists
          <img
            src={posterSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
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
      </motion.div>
    </div>
  );
}
