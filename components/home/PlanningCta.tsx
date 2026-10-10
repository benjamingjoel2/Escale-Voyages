import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { whatsappUrl } from "@/lib/site";
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
          <a
            href={whatsappUrl("Hello Danxomè, I'd like to plan a journey.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg !w-auto px-7"
          >
            {t("whatsapp")}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
