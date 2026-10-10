import { useFormatter, useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Departure, Journey } from "@/lib/data/journeys";
import { formatConverted, formatXof } from "@/lib/currency";

type Row = Departure & { journey?: Journey };

type Props = {
  rows: Row[];
  /** Show the journey column (for the cross-journey Dates & prices page). */
  showJourney?: boolean;
};

export function DeparturesTable({ rows, showJourney = false }: Props) {
  const t = useTranslations("JourneyDetail");
  const tj = useTranslations("Journeys");
  const locale = useLocale() as "en" | "fr";
  const format = useFormatter();

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-[13.5px]">
        <thead>
          <tr className="border-b border-line text-left">
            {showJourney ? <th className="eyebrow py-3 pr-4 font-semibold">{t("colJourney")}</th> : null}
            <th className="eyebrow py-3 pr-4 font-semibold">{t("colDates")}</th>
            <th className="eyebrow py-3 pr-4 font-semibold">{t("colDuration")}</th>
            <th className="eyebrow py-3 pr-4 font-semibold">{t("colPrice")}</th>
            <th className="eyebrow py-3 pr-4 font-semibold">{t("colAvailability")}</th>
            <th className="py-3" />
          </tr>
        </thead>
        <tbody>
          {rows.map((d) => {
            const days = d.journey?.days ?? Math.round((Date.parse(d.end) - Date.parse(d.start)) / 86_400_000) + 1;
            const slug = d.journey?.slug;
            return (
              <tr key={`${slug ?? ""}-${d.start}`} className="border-b border-line align-top">
                {showJourney && d.journey ? (
                  <td className="py-4 pr-4 font-medium text-ink">
                    <Link href={{ pathname: "/journeys/[slug]", params: { slug: d.journey.slug } }} className="hover:text-accent">
                      {d.journey.title[locale]}
                    </Link>
                  </td>
                ) : null}
                <td className="py-4 pr-4 text-ink">
                  {format.dateTimeRange(new Date(d.start), new Date(d.end), {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="py-4 pr-4">{tj("days", { count: days })}</td>
                <td className="py-4 pr-4 tabular-nums">
                  <span className="font-medium text-ink">{formatXof(d.priceXof)}</span>
                  <span className="ml-1.5 text-charcoal">
                    {tj("approx", { amount: formatConverted(d.priceXof, "EUR", locale) })}
                  </span>
                </td>
                <td className="py-4 pr-4">
                  {d.spotsLeft > 0 ? (
                    <span className={d.spotsLeft <= 2 ? "text-accent-deep" : ""}>
                      {t("spots", { count: d.spotsLeft })}
                    </span>
                  ) : (
                    <span className="text-charcoal">{t("soldOut")}</span>
                  )}
                </td>
                <td className="py-3 text-right">
                  {slug ? (
                    <Link
                      href={{ pathname: "/enquire", query: { journey: slug, date: d.start } }}
                      className="btn btn-inline h-9"
                    >
                      {t("book")}
                    </Link>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
