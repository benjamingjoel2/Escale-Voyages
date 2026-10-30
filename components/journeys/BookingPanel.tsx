import { useFormatter, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Journey } from "@/lib/data/journeys";
import { formatXof } from "@/lib/currency";
import { Approx } from "@/components/ui/Currency";
import { lowestPrice } from "@/lib/journeys";

/**
 * Sticky booking panel for the journey detail page. On phones it collapses
 * into a fixed bottom bar with the price and the primary CTA.
 */
export function BookingPanel({ journey: j }: { journey: Journey }) {
  const t = useTranslations("JourneyDetail");
  const tj = useTranslations("Journeys");
  const format = useFormatter();
  const from = lowestPrice(j);
  const next = j.departures.slice(0, 3);

  return (
    <>
      <aside
        aria-label={t("bookTitle")}
        className="hidden rounded-[2px] border border-line bg-paper p-6 lg:sticky lg:top-24 lg:block"
      >
        <span className="eyebrow">{t("from")}</span>
        <p className="mt-1 text-[32px] font-medium leading-none tabular-nums text-ink">
          {formatXof(from)}
        </p>
        <p className="mt-1 text-[13px] text-charcoal">
          <Approx xof={from} /> · {tj("perPerson")} · {tj("days", { count: j.days })}
        </p>

        <div className="mt-6 border-t border-line pt-5">
          <span className="eyebrow">{t("nextDepartures")}</span>
          <ul className="mt-3 grid gap-2.5">
            {next.map((d) => (
              <li key={d.start} className="flex items-baseline justify-between gap-3 text-[13.5px]">
                <span className="text-ink">
                  {format.dateTimeRange(new Date(d.start), new Date(d.end), {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span className="whitespace-nowrap text-charcoal">
                  {t("spots", { count: d.spotsLeft })}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[12.5px] text-charcoal">{t("privateNote")}</p>
        </div>

        <div className="mt-6 grid gap-2">
          <Link
            href={{ pathname: "/book/[slug]", params: { slug: j.slug } }}
            className="btn btn-lg btn-solid"
          >
            {t("request")}
          </Link>
        </div>
        <p className="mt-4 text-[12px] leading-relaxed text-charcoal">{t("depositNote")}</p>
      </aside>

      <div
        className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 border-t border-line bg-paper/95 py-3 pl-4 pr-[84px] backdrop-blur lg:hidden"
        style={{ paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))" }}
      >
        <div className="min-w-0">
          <span className="eyebrow">{t("from")}</span>
          <p className="truncate text-lg font-medium leading-tight tabular-nums text-ink">
            {formatXof(from)}
          </p>
        </div>
        <Link
          href={{ pathname: "/book/[slug]", params: { slug: j.slug } }}
          className="btn btn-solid h-11 px-5"
        >
          {t("request")}
        </Link>
      </div>
    </>
  );
}
