"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { submitEnquiry, type EnquiryState } from "@/app/actions/enquiry";
import { whatsappUrl } from "@/lib/site";

type JourneyOption = { slug: string; title: string };

type Props = { journeys: JourneyOption[]; defaultJourney?: string; defaultMessage?: string };

const field = "h-11 w-full rounded-[2px] border border-line bg-paper px-3 text-[15px] text-ink placeholder:text-charcoal/60 focus:border-ink";
const area = "min-h-[140px] w-full rounded-[2px] border border-line bg-paper px-3 py-2.5 text-[15px] text-ink placeholder:text-charcoal/60 focus:border-ink";

export function EnquiryForm({ journeys, defaultJourney = "", defaultMessage = "" }: Props) {
  const t = useTranslations("Enquire");
  const [state, action, pending] = useActionState<EnquiryState, FormData>(submitEnquiry, { status: "idle" });
  const err = (k: string) => state.errors?.[k as keyof NonNullable<EnquiryState["errors"]>];
  const msg = (k: string) => (err(k) ? <span className="mt-1 block text-[12.5px] text-accent-bright">{t(err(k) === "invalidEmail" ? "invalidEmail" : "required")}</span> : null);

  if (state.status === "success") {
    return (
      <div className="grid max-w-[60ch] gap-3 rounded-[2px] border border-line p-6" role="status">
        <h2 className="t-h2 text-[28px]">{t("successTitle")}</h2>
        <p className="t-body">{t("successBody")}</p>
        <a href={whatsappUrl("Hello Escale Voyages, I just sent an enquiry.")} target="_blank" rel="noopener noreferrer" className="btn btn-inline w-max">WhatsApp</a>
      </div>
    );
  }

  return (
    <form action={action} className="grid max-w-[720px] gap-5" noValidate>
      {state.status === "error" ? (
        <div className="rounded-[2px] border border-accent/40 bg-accent/5 p-4" role="alert">
          <b className="text-ink">{t("errorTitle")}</b>
          <p className="mt-1 text-[14px]">{t("errorBody")}</p>
        </div>
      ) : null}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5"><span className="eyebrow">{t("name")}</span><input id="enq-name" name="name" required className={field} autoComplete="name" />{msg("name")}</label>
        <label className="grid gap-1.5"><span className="eyebrow">{t("email")}</span><input id="enq-email" name="email" type="email" required className={field} autoComplete="email" />{msg("email")}</label>
        <label className="grid gap-1.5"><span className="eyebrow">{t("phone")}</span><input id="enq-phone" name="phone" type="tel" className={field} autoComplete="tel" placeholder="+229 …" /></label>
        <div className="grid gap-1.5">
          <span className="eyebrow">{t("preferredContact")}</span>
          <div className="flex flex-wrap gap-4 pt-2 text-[14px] text-ink">
            {(["email", "whatsapp", "call"] as const).map((v) => (
              <label key={v} className="inline-flex items-center gap-2"><input type="radio" name="preferredContact" value={v} defaultChecked={v === "email"} /> {t(`contact${v[0].toUpperCase()}${v.slice(1)}` as "contactEmail")}</label>
            ))}
          </div>
        </div>
        <label className="grid gap-1.5">
          <span className="eyebrow">{t("journey")}</span>
          <select id="enq-journey" name="journey" defaultValue={defaultJourney} className={field}>
            <option value="">{t("journeyAny")}</option>
            {journeys.map((j) => <option key={j.slug} value={j.slug}>{j.title}</option>)}
          </select>
        </label>
        <label className="grid gap-1.5"><span className="eyebrow">{t("travellers")}</span><input id="enq-travellers" name="travellers" type="number" min={1} max={40} defaultValue={2} className={field} /></label>
        <label className="grid gap-1.5 sm:col-span-2"><span className="eyebrow">{t("travelDates")}</span><input id="enq-dates" name="travelDates" className={field} placeholder={t("travelDatesHint")} /></label>
        <label className="grid gap-1.5 sm:col-span-2"><span className="eyebrow">{t("message")}</span><textarea id="enq-message" name="message" className={area} placeholder={t("messageHint")} defaultValue={defaultMessage} /></label>
      </div>
      <label className="flex items-start gap-3 text-[14px] text-ink"><input type="checkbox" name="consent" required className="mt-1" /> <span>{t("consent")}{msg("consent")}</span></label>
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" disabled={pending} className="btn btn-lg btn-solid !w-auto px-7 disabled:opacity-60">{pending ? t("sending") : t("submit")}</button>
        <a href={whatsappUrl("Hello Escale Voyages, I'd like to plan a journey.")} target="_blank" rel="noopener noreferrer" className="text-[13px] font-semibold text-ink hover:text-accent">{t("whatsappCta")}</a>
      </div>
    </form>
  );
}
