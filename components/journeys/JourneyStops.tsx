import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Destination } from "@/lib/data/destinations";
import type { Lang } from "@/lib/data/journeys";

/** The journey's stops in order, each with its coordinates. No map illustrations (owner decision, 6 Nov 2026). */
export function JourneyStops({ stops, destinations }: { stops: string[]; destinations: Destination[] }) {
  const locale = useLocale() as Lang;
  const points = stops
    .map((slug) => destinations.find((d) => d.slug === slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <ol className="grid content-start gap-0 border-t border-line">
      {points.map((p, i) => (
        <li key={p.slug} className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-b border-line py-4">
          <span className="text-xs tabular-nums text-ink/50">{String(i + 1).padStart(2, "0")}</span>
          <Link
            href={{ pathname: "/destinations/[slug]", params: { slug: p.slug } }}
            className="text-[15px] font-medium text-ink hover:text-accent-bright"
          >
            {p.name[locale]}
          </Link>
          <span className="coords">[ {p.coords} ]</span>
        </li>
      ))}
    </ol>
  );
}
