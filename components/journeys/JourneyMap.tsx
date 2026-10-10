import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { destinations } from "@/lib/data/destinations";

/**
 * Schematic route map: destinations plotted by real latitude and longitude
 * on a simplified frame of Benin. The commissioned line-art map replaces the
 * frame; the plotted stops stay.
 */
export function JourneyMap({ stops }: { stops: string[] }) {
  const t = useTranslations("JourneyDetail");
  const locale = useLocale() as "en" | "fr";
  const points = stops
    .map((slug) => destinations.find((d) => d.slug === slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  // Benin spans roughly 0.8–3.9°E and 6.2–12.4°N. Map to a 400×520 box.
  const x = (lng: number) => 40 + ((lng - 0.8) / 3.1) * 320;
  const y = (lat: number) => 500 - ((lat - 6.2) / 6.2) * 460;
  const path = points.map((p, i) => `${i ? "L" : "M"}${x(p.lng).toFixed(1)} ${y(p.lat).toFixed(1)}`).join(" ");

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div
        className="relative aspect-[400/520] max-w-full overflow-hidden rounded-[2px] bg-grey"
        role="img"
        aria-label={t("mapAlt")}
      >
        <svg viewBox="0 0 400 520" className="block h-full w-full">
          <path
            d="M120 40 L300 40 L330 180 L360 300 L330 470 L120 500 L60 480 L40 300 L80 160 Z"
            fill="none"
            stroke="var(--line)"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
          <path d={path} fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="3 5" />
          <g fontFamily="var(--font-sans)" fontSize="10.5" letterSpacing=".06em" fill="var(--ink)">
            {points.map((p, i) => (
              <g key={p.slug}>
                <circle cx={x(p.lng)} cy={y(p.lat)} r={i === 0 || i === points.length - 1 ? 4 : 2.5} fill={i === points.length - 1 ? "var(--accent)" : "var(--ink)"} />
                <text x={x(p.lng) + 10} y={y(p.lat) + 4}>{p.name[locale].toUpperCase()}</text>
              </g>
            ))}
          </g>
          <text x="16" y="508" fontFamily="var(--font-sans)" fontSize="10" fill="var(--ink)" opacity=".6">
            {t("mapSlot")}
          </text>
        </svg>
      </div>
      <ol className="grid content-start gap-0 border-t border-line">
        {points.map((p, i) => (
          <li key={p.slug} className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-b border-line py-4">
            <span className="text-xs tabular-nums text-ink/50">{String(i + 1).padStart(2, "0")}</span>
            <Link
              href={{ pathname: "/destinations/[slug]", params: { slug: p.slug } }}
              className="text-[15px] font-medium text-ink hover:text-accent"
            >
              {p.name[locale]}
            </Link>
            <span className="coords">[ {p.coords} ]</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
