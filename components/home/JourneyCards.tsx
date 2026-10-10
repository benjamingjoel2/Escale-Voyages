import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { journeys } from "@/lib/data/journeys";
import { JourneyCard } from "@/components/journeys/JourneyCard";
import { Reveal } from "@/components/ui/Reveal";

export function JourneyCards() {
  const t = useTranslations("Journeys");

  return (
    <section id="journeys" className="container-wide py-16 md:py-28">
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="grid gap-2.5">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2 className="t-h2">{t("title")}</h2>
        </div>
        <Link href="/journeys" className="btn btn-inline">
          {t("viewAll")}
        </Link>
      </Reveal>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {journeys.map((j, i) => (
          <Reveal key={j.slug} delay={Math.min(i * 0.06, 0.3)}>
            <JourneyCard journey={j} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
