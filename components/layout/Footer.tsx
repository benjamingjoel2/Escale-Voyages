import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getDestinations, getJourneys, getSiteSettings } from "@/lib/content";
import { addressLine } from "@/lib/site";
import { getCurrentYear } from "@/lib/time";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { CurrencySwitcher } from "@/components/ui/Currency";
import type { Lang } from "@/lib/data/journeys";

export async function Footer() {
  const [t, rawLocale, year, journeys, destinations, settings] = await Promise.all([
    getTranslations("Footer"),
    getLocale(),
    getCurrentYear(),
    getJourneys(),
    getDestinations(),
    getSiteSettings(),
  ]);
  const locale = rawLocale as Lang;
  const closingQuote = settings.closingQuote?.[locale] ?? t("quote");
  const closingSource = settings.closingQuoteSource?.[locale] ?? t("quoteSource");

  return (
    <footer className="bg-grey text-ink">
      <div className="container-wide py-14 md:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="grid content-start gap-2">
            <p className="t-italic mb-1 text-xl">{t("guest")}</p>
            <a className="text-sm opacity-65 hover:opacity-100" href={`mailto:${settings.guestEmail}`}>{settings.guestEmail}</a>
            <Link className="text-sm opacity-65 hover:opacity-100" href="/enquire">{t("scheduleCall")}</Link>
          </div>
          <div className="grid content-start gap-2">
            <p className="t-italic mb-1 text-xl">{t("trade")}</p>
            {[settings.tradeEmail, settings.pressEmail]
              .filter((e, i, all) => all.indexOf(e) === i)
              .map((e) => (
                <a key={e} className="text-sm opacity-65 hover:opacity-100" href={`mailto:${e}`}>{e}</a>
              ))}
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
            {destinations.slice(0, 8).map((d) => (
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
            <CurrencySwitcher className="mt-2" />
          </div>
          <div className="grid content-start gap-2">
            <p className="t-italic mb-1 text-xl">{t("office")}</p>
            <address className="text-sm not-italic opacity-65">{addressLine}<br />{t("country")}</address>
          </div>
        </div>

        <div className="mt-10 grid gap-2 md:grid-cols-3">
          <Link href="/dates-prices" className="btn btn-lg bg-paper">{t("datesPrices")}</Link>
          <Link href="/enquire" className="btn btn-lg btn-solid">{t("enquire")}</Link>
          <Link href="/journeys" className="btn btn-lg bg-paper">{t("allJourneys")}</Link>
        </div>

        <div className="mt-16 grid gap-3 md:mt-20">
          <p className="t-italic max-w-[28ch] text-2xl md:text-3xl">{closingQuote}</p>
          <span className="eyebrow">{closingSource}</span>
          <p className="mt-4 text-[12.5px] opacity-70">{t("footerLine")}</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-line pt-5 text-xs opacity-70">
          <span>{t("rights", { year })}</span>
          <div className="flex flex-wrap gap-4">
            <Link href={{ pathname: "/legal/[page]", params: { page: "terms" } }}>{t("terms")}</Link>
            <Link href={{ pathname: "/legal/[page]", params: { page: "booking-terms" } }}>{t("bookingTerms")}</Link>
            <Link href={{ pathname: "/legal/[page]", params: { page: "privacy" } }}>{t("privacy")}</Link>
            <Link href={{ pathname: "/legal/[page]", params: { page: "cookies" } }}>{t("cookies")}</Link>
            <Link href={{ pathname: "/legal/[page]", params: { page: "credits" } }}>{t("credits")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
