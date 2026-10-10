import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { journeys } from "@/lib/data/journeys";
import { destinations } from "@/lib/data/destinations";
import { site, whatsappUrl } from "@/lib/site";
import { getCurrentYear } from "@/lib/time";
import { LocaleSwitcher } from "./LocaleSwitcher";

export async function Footer() {
  const [t, rawLocale, year] = await Promise.all([
    getTranslations("Footer"),
    getLocale(),
    getCurrentYear(),
  ]);
  const locale = rawLocale as "en" | "fr";

  return (
    <footer className="bg-grey text-ink">
      <div className="container-wide py-14 md:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="grid content-start gap-2">
            <p className="t-italic mb-1 text-xl">{t("guest")}</p>
            <a className="text-sm opacity-65 hover:opacity-100" href={`mailto:${site.email.guest}`}>{site.email.guest}</a>
            <a className="text-sm opacity-65 hover:opacity-100" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            <a className="text-sm opacity-65 hover:opacity-100" href={whatsappUrl("Hello Danxomè")} target="_blank" rel="noopener noreferrer">{t("whatsapp")}</a>
            <Link className="text-sm opacity-65 hover:opacity-100" href="/enquire">{t("scheduleCall")}</Link>
          </div>
          <div className="grid content-start gap-2">
            <p className="t-italic mb-1 text-xl">{t("trade")}</p>
            <a className="text-sm opacity-65 hover:opacity-100" href={`mailto:${site.email.trade}`}>{site.email.trade}</a>
            <a className="text-sm opacity-65 hover:opacity-100" href={`mailto:${site.email.press}`}>{site.email.press}</a>
          </div>
          <div className="grid content-start gap-2">
            <p className="t-italic mb-1 text-xl">{t("journeys")}</p>
            {journeys.map((j) => (
              <Link
                key={j.slug}
                className="text-sm opacity-65 hover:opacity-100"
                href={{ pathname: "/journeys/[slug]", params: { slug: j.slug } }}
              >
                {j.title[locale]}
              </Link>
            ))}
            <Link className="text-sm opacity-65 hover:opacity-100" href="/journeys">{t("viewAll")}</Link>
          </div>
          <div className="grid content-start gap-2">
            <p className="t-italic mb-1 text-xl">{t("destinations")}</p>
            {destinations.slice(0, 6).map((d) => (
              <Link
                key={d.slug}
                className="text-sm opacity-65 hover:opacity-100"
                href={{ pathname: "/destinations/[slug]", params: { slug: d.slug } }}
              >
                {d.name[locale]}
              </Link>
            ))}
            <Link className="text-sm opacity-65 hover:opacity-100" href="/destinations">{t("viewAll")}</Link>
          </div>
          <div className="grid content-start gap-2">
            <p className="t-italic mb-1 text-xl">{t("benin")}</p>
            <Link className="text-sm opacity-65 hover:opacity-100" href="/practical">{t("practical")}</Link>
            <Link className="text-sm opacity-65 hover:opacity-100" href="/festivals">{t("festivals")}</Link>
            <Link className="text-sm opacity-65 hover:opacity-100" href="/stories">{t("stories")}</Link>
            <Link className="text-sm opacity-65 hover:opacity-100" href="/about">{t("about")}</Link>
            <LocaleSwitcher className="mt-1 w-max" />
          </div>
          <div className="grid content-start gap-2">
            <p className="t-italic mb-1 text-xl">{t("social")}</p>
            <a className="text-sm opacity-65 hover:opacity-100" href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="text-sm opacity-65 hover:opacity-100" href={site.social.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
            <a className="text-sm opacity-65 hover:opacity-100" href={site.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
            <a className="text-sm opacity-65 hover:opacity-100" href={site.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="mt-10 grid gap-2 md:grid-cols-3">
          <Link href="/dates-prices" className="btn btn-lg bg-paper">{t("datesPrices")}</Link>
          <Link href="/enquire" className="btn btn-lg btn-solid">{t("enquire")}</Link>
          <a href="#newsletter" className="btn btn-lg bg-paper">{t("newsletter")}</a>
        </div>

        <div className="mt-16 grid gap-3 md:mt-20">
          <p className="t-italic max-w-[28ch] text-2xl md:text-3xl">{t("quote")}</p>
          <span className="eyebrow">{t("quoteSource")}</span>
          <p className="mt-4 text-[12.5px] opacity-70">{t("pronunciation")}</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-line pt-5 text-xs opacity-70">
          <span>{t("rights", { year })}</span>
          <div className="flex flex-wrap gap-4">
            <Link href="/legal/terms">{t("terms")}</Link>
            <Link href="/legal/booking-terms">{t("bookingTerms")}</Link>
            <Link href="/legal/privacy">{t("privacy")}</Link>
            <Link href="/legal/cookies">{t("cookies")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
