import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";

export function PlanningCta() {
  const t = useTranslations("Planning");

  return (
    <section className="container-wide py-10 md:py-16">
      <Reveal className="grid max-w-[760px] gap-4">
        <h2 className="t-h2">{t("title")}</h2>
        <p className="t-body">{t("body")}</p>
        <div className="mt-2 flex flex-wrap gap-2.5">
          <Link href="/enquire" className="btn btn-lg btn-solid !w-auto px-7">
            {t("enquire")}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
