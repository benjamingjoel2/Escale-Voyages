import { useTranslations } from "next-intl";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";

export function FounderQuote() {
  const t = useTranslations("Founder");

  return (
    <section className="container-wide py-10 md:py-16">
      <Reveal>
        <MediaSlot
          label={t("mediaSlot")}
          file="founder-portrait.jpg"
          alt="Two travellers reading together under a tree in a red-earth courtyard"
          sizes="(min-width: 1320px) 1224px, 100vw"
          tone="indigo"
          className="min-h-[360px] rounded-[2px] md:min-h-[480px]"
        />
      </Reveal>
      <Reveal className="mt-10 grid max-w-[760px] gap-5 md:mt-14">
        <span className="font-display text-7xl leading-[0.6] text-accent" aria-hidden="true">
          “
        </span>
        <blockquote className="t-italic m-0 text-[24px] leading-[1.2] md:text-[32px] lg:text-[40px]">
          {t("quote")}
        </blockquote>
        <div className="grid gap-0.5">
          <b className="text-[13px] font-semibold text-ink">{t("name")}</b>
          <span className="eyebrow">{t("role")}</span>
        </div>
      </Reveal>
    </section>
  );
}
