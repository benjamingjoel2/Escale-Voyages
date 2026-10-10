import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";

export function Intro() {
  const t = useTranslations("Intro");

  return (
    <section className="container-wide py-16 md:py-28">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-16 lg:gap-20">
        <Reveal className="grid content-start gap-4">
          <span className="eyebrow">{t("eyebrow")}</span>
          <p className="t-italic text-[28px] leading-[1.1] md:text-[36px] lg:text-[48px]">
            {t("statement")}
          </p>
          <svg
            className="mt-2 block h-7 w-[120px]"
            viewBox="0 0 120 28"
            aria-hidden="true"
          >
            <path
              d="M2 20 C 20 4, 30 26, 48 12 S 76 6, 92 18 S 112 10, 118 14"
              fill="none"
              stroke="var(--laterite)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </Reveal>
        <Reveal delay={0.1} className="grid content-start gap-4">
          <p className="t-body">{t("body1")}</p>
          <p className="t-body">{t("body2")}</p>
          <Link href="/about" className="btn btn-inline mt-2 w-max">
            {t("cta")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
