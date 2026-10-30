import { getLocale, getTranslations } from "next-intl/server";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { getStays } from "@/lib/content";
import type { Lang } from "@/lib/data/journeys";

/** "Where you stay": the journey's stays in order, each with its photos. */
export async function StaysSection({ slugs }: { slugs: string[] }) {
  if (!slugs.length) return null;
  const [t, locale, all] = await Promise.all([getTranslations("JourneyDetail"), getLocale(), getStays()]);
  const lang = locale as Lang;
  const stays = slugs.map((s) => all.find((x) => x.slug === s)).filter((x) => x !== undefined);
  if (!stays.length) return null;
  const altOf = (alt: Partial<Record<Lang, string>> | string | undefined, fallback: string) =>
    typeof alt === "object" ? (alt[lang] ?? alt.en ?? fallback) : (alt ?? fallback);

  return (
    <Reveal className="grid gap-6">
      <div className="grid gap-2.5">
        <span className="eyebrow">{t("staysEyebrow")}</span>
        <h2 className="t-h2">{t("staysTitle")}</h2>
        <p className="t-body">{t("staysIntro")}</p>
      </div>
      <ol className="grid border-t border-line">
        {stays.map((s) => {
          const [cover, ...rest] = s.images;
          return (
            <li key={s.slug} className="grid gap-5 border-b border-line py-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] lg:gap-10">
              <div className="grid gap-2">
                <MediaSlot
                  label={`${cover.file} · ${cover.width}×${cover.height}`}
                  file={cover.file}
                  src={cover.src}
                  alt={altOf(cover.alt, s.name[lang])}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  tone={s.tone}
                  className="aspect-[3/2] rounded-[2px]"
                />
                {rest.length ? (
                  <div className={`grid gap-2 ${rest.length === 1 ? "grid-cols-2" : rest.length === 2 ? "grid-cols-2" : "grid-cols-4"}`}>
                    {rest.slice(0, 4).map((im) => (
                      <MediaSlot
                        key={im.file}
                        label={im.file}
                        file={im.file}
                        src={im.src}
                        alt={altOf(im.alt, s.name[lang])}
                        sizes="(min-width: 1024px) 10vw, 25vw"
                        tone={s.tone}
                        className="aspect-[4/3] rounded-[2px]"
                      />
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="grid content-start gap-3">
                <span className="eyebrow">{s.place[lang]}</span>
                <h3 className="text-[clamp(22px,2.2vw,30px)] font-medium leading-[1.15] text-ink">{s.name[lang]}</h3>
                <p className="t-italic text-[19px] leading-[1.3] text-ink">{s.pitch[lang]}</p>
                <p className="t-body">{s.body[lang]}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </Reveal>
  );
}
