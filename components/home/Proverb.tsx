import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

export function Proverb() {
  const t = useTranslations("Proverb");

  return (
    <section className="container-wide py-10 md:py-16">
      <Reveal className="grid max-w-[760px] gap-5">
        <blockquote className="t-italic m-0 text-[24px] leading-[1.2] md:text-[32px] lg:text-[40px]">
          {t("text")}
        </blockquote>
        <div className="grid gap-0.5">
          <b className="text-[13px] font-semibold text-ink">{t("source")}</b>
          <span className="eyebrow">{t("detail")}</span>
        </div>
      </Reveal>
    </section>
  );
}
