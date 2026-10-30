import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";

export function ReturnFeature() {
  const t = useTranslations("Return");

  return (
    <section id="return" className="container-wide py-10 md:py-16">
      <Reveal>
        <MediaSlot
          label={t("mediaSlot")}
          file="return-feature.jpg"
          alt={t("alt")}
          sizes="(min-width: 1320px) 1224px, 100vw"
          tone="indigo"
          labelPosition="top-right"
          className="grid min-h-[min(78vh,640px)] content-end rounded-[2px] text-white"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/55" />
          <div className="relative grid max-w-[560px] gap-3.5 p-5 md:p-10 lg:p-14">
            <span className="eyebrow !text-white !opacity-80">{t("eyebrow")}</span>
            <p className="t-italic text-[22px] text-white md:text-[28px] lg:text-[32px]">
              {t("title")}
            </p>
            <p className="t-body !text-white/85">{t("body")}</p>
            <Link href="/return" className="btn mt-1 w-max">
              {t("cta")}
            </Link>
          </div>
        </MediaSlot>
      </Reveal>
    </section>
  );
}
