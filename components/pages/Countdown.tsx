"use client";

import { useSyncExternalStore } from "react";

type Labels = { days: string; hours: string; minutes: string; seconds: string };

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
}

/**
 * Live countdown to a date. Renders dashes on the server and until hydration
 * so the static shell never shows a stale number.
 */
export function Countdown({ to, labels }: { to: string; labels: Labels }) {
  const now = useSyncExternalStore(subscribe, () => Date.now(), () => null);
  const target = Date.parse(`${to}T00:00:00+01:00`);
  const diff = now === null ? null : Math.max(0, target - now);
  const parts = diff === null
    ? ["—", "—", "—", "—"]
    : [
        Math.floor(diff / 86_400_000),
        Math.floor((diff / 3_600_000) % 24),
        Math.floor((diff / 60_000) % 60),
        Math.floor((diff / 1000) % 60),
      ].map((n) => String(n).padStart(2, "0"));
  const names = [labels.days, labels.hours, labels.minutes, labels.seconds];

  return (
    <div className="grid max-w-[560px] grid-cols-4 gap-2.5" role="timer" aria-live="off">
      {parts.map((v, i) => (
        <div key={names[i]} className="border border-line bg-paper px-2 py-4 text-left">
          <span className="block text-[clamp(26px,3vw,40px)] font-medium leading-none tabular-nums text-ink">{v}</span>
          <span className="eyebrow mt-2 block">{names[i]}</span>
        </div>
      ))}
    </div>
  );
}
