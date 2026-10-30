"use client";

import { useActionState, useMemo, useState } from "react";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import { submitBooking, type BookingState } from "@/app/actions/booking";
import type { Journey } from "@/lib/data/journeys";
import type { Extra } from "@/lib/data/extras";
import { DEPOSIT_RATE, MAX_TRAVELLERS } from "@/lib/bookings";
import { formatXof } from "@/lib/currency";
import { Approx } from "@/components/ui/Currency";
import { Link } from "@/i18n/navigation";
import type { Lang } from "@/lib/data/journeys";

type Props = { journey: Journey; extras: Extra[]; defaultDeparture?: string; paymentsLive: boolean };

const STEPS = ["date", "travellers", "extras", "contact", "review"] as const;
const field = "h-11 w-full rounded-[2px] border border-line bg-paper px-3 text-[15px] text-ink placeholder:text-charcoal/60 focus:border-ink";

export function BookingFlow({ journey, extras, defaultDeparture, paymentsLive }: Props) {
  const t = useTranslations("Booking");
  const te = useTranslations("Enquire");
  const locale = useLocale() as Lang;
  const format = useFormatter();
  const [step, setStep] = useState(0);
  const [departure, setDeparture] = useState<string>(defaultDeparture && journey.departures.some((d) => d.start === defaultDeparture) ? defaultDeparture : journey.departures[0]?.start ?? "private");
  const [privateDates, setPrivateDates] = useState("");
  const [travellers, setTravellers] = useState(2);
  const [chosen, setChosen] = useState<string[]>([]);
  const [contact, setContact] = useState({ name: "", email: "", phone: "", preferredContact: "email" });
  const [method, setMethod] = useState<"momo" | "card">("momo");
  const [mode, setMode] = useState<"pay" | "call">("pay");
  const [state, action, pending] = useActionState<BookingState, FormData>(submitBooking, { status: "idle" });

  const dep = journey.departures.find((d) => d.start === departure);
  const q = useMemo(() => {
    const n = Math.min(Math.max(1, travellers), MAX_TRAVELLERS);
    const unit = dep?.priceXof ?? journey.priceXof;
    const extrasXof = extras.filter((e) => chosen.includes(e.id)).reduce((s, e) => s + e.priceXof * (e.perTraveller ? n : 1), 0);
    const total = unit * n + extrasXof;
    return { total, deposit: Math.round(total * DEPOSIT_RATE), extrasXof };
  }, [travellers, dep, journey.priceXof, extras, chosen]);

  const canNext = [
    departure === "private" ? privateDates.trim().length > 2 : Boolean(departure),
    travellers >= 1 && travellers <= MAX_TRAVELLERS,
    true,
    contact.name.trim().length > 1 && /.+@.+\..+/.test(contact.email),
    true,
  ][step];

  const range = (d: { start: string; end: string }) => format.dateTimeRange(new Date(d.start), new Date(d.end), { day: "numeric", month: "short", year: "numeric" });

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="grid content-start gap-8 lg:col-span-8">
        <ol className="flex flex-wrap gap-x-5 gap-y-2 border-b border-line pb-4">
          {STEPS.map((s, i) => (
            <li key={s} className={`text-[12px] font-semibold uppercase tracking-[0.12em] ${i === step ? "text-ink" : i < step ? "text-ink/80" : "text-ink/60"}`}>
              {String(i + 1).padStart(2, "0")} {t(`step${s[0].toUpperCase()}${s.slice(1)}` as "stepDate")}
            </li>
          ))}
        </ol>

        {step === 0 ? (
          <fieldset className="grid gap-4">
            <legend className="t-h2 text-[26px]">{t("stepDate")}</legend>
            <span className="eyebrow">{t("scheduled")}</span>
            <div className="grid gap-2">
              {journey.departures.map((d) => (
                <label key={d.start} className={`flex cursor-pointer items-center justify-between gap-4 rounded-[2px] border px-4 py-3 text-[14.5px] ${departure === d.start ? "border-ink bg-ink/5" : "border-line"}`}>
                  <span className="flex items-center gap-3"><input type="radio" name="dep" checked={departure === d.start} onChange={() => setDeparture(d.start)} disabled={d.spotsLeft === 0} /><span className="text-ink">{range(d)}</span></span>
                  <span className="tabular-nums text-charcoal">{formatXof(d.priceXof)} · {d.spotsLeft > 0 ? `${d.spotsLeft}` : "—"}</span>
                </label>
              ))}
              <label className={`flex cursor-pointer items-center gap-3 rounded-[2px] border px-4 py-3 text-[14.5px] ${departure === "private" ? "border-ink bg-ink/5" : "border-line"}`}>
                <input type="radio" name="dep" checked={departure === "private"} onChange={() => setDeparture("private")} /><span className="text-ink">{t("privateDates")}</span>
              </label>
              {departure === "private" ? (
                <label className="grid gap-1.5 pl-1"><span className="eyebrow">{t("privateDatesLabel")}</span><input id="bk-private" value={privateDates} onChange={(e) => setPrivateDates(e.target.value)} className={field} placeholder={t("privateDatesHint")} /></label>
              ) : null}
            </div>
          </fieldset>
        ) : null}

        {step === 1 ? (
          <fieldset className="grid gap-4">
            <legend className="t-h2 text-[26px]">{t("stepTravellers")}</legend>
            <label className="grid max-w-[240px] gap-1.5"><span className="eyebrow">{t("travellersLabel")}</span><input id="bk-travellers" type="number" min={1} max={MAX_TRAVELLERS} value={travellers} onChange={(e) => setTravellers(Number(e.target.value))} className={field} /></label>
            <p className="text-[13px] text-charcoal">{t("travellersHint")}</p>
          </fieldset>
        ) : null}

        {step === 2 ? (
          <fieldset className="grid gap-4">
            <legend className="t-h2 text-[26px]">{t("stepExtras")}</legend>
            <p className="t-body">{t("extrasIntro")}</p>
            <div className="grid gap-2">
              {extras.map((e) => (
                <label key={e.id} className={`flex cursor-pointer items-start justify-between gap-4 rounded-[2px] border px-4 py-3 ${chosen.includes(e.id) ? "border-ink bg-ink/5" : "border-line"}`}>
                  <span className="flex items-start gap-3"><input type="checkbox" className="mt-1" checked={chosen.includes(e.id)} onChange={(ev) => setChosen(ev.target.checked ? [...chosen, e.id] : chosen.filter((x) => x !== e.id))} /><span><b className="block text-[15px] font-medium text-ink">{e.name[locale]}</b><span className="text-[13px]">{e.description[locale]}</span></span></span>
                  <span className="whitespace-nowrap text-[13.5px] tabular-nums text-charcoal">{formatXof(e.priceXof)} <span className="text-[11px] uppercase tracking-wide">{e.perTraveller ? t("perTraveller") : t("perBooking")}</span></span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        {step === 3 ? (
          <fieldset className="grid gap-4">
            <legend className="t-h2 text-[26px]">{t("stepContact")}</legend>
            <p className="t-body">{t("contactIntro")}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5"><span className="eyebrow">{te("name")}</span><input id="bk-name" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} className={field} autoComplete="name" /></label>
              <label className="grid gap-1.5"><span className="eyebrow">{te("email")}</span><input id="bk-email" type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className={field} autoComplete="email" /></label>
              <label className="grid gap-1.5"><span className="eyebrow">{te("phone")}</span><input id="bk-phone" type="tel" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} className={field} autoComplete="tel" /></label>
              <div className="grid gap-1.5"><span className="eyebrow">{te("preferredContact")}</span>
                <div className="flex flex-wrap gap-4 pt-2 text-[14px] text-ink">
                  {(["email", "call"] as const).map((v) => (
                    <label key={v} className="inline-flex items-center gap-2"><input type="radio" name="pc" checked={contact.preferredContact === v} onChange={() => setContact({ ...contact, preferredContact: v })} /> {te(`contact${v[0].toUpperCase()}${v.slice(1)}` as "contactEmail")}</label>
                  ))}
                </div>
              </div>
            </div>
          </fieldset>
        ) : null}

        {step === 4 ? (
          <form action={action} className="grid gap-6">
            <h2 className="t-h2 text-[26px]">{t("stepReview")}</h2>
            {state.status === "error" ? (
              <div className="rounded-[2px] border border-accent/40 bg-accent/5 p-4" role="alert"><b className="text-ink">{t("errorTitle")}</b><p className="mt-1 text-[14px]">{t("errorBody")}</p></div>
            ) : null}
            <input type="hidden" name="journey" value={journey.slug} />
            <input type="hidden" name="departure" value={departure === "private" ? "" : departure} />
            <input type="hidden" name="privateDates" value={departure === "private" ? privateDates : ""} />
            <input type="hidden" name="travellers" value={travellers} />
            {chosen.map((id) => <input key={id} type="hidden" name="extras" value={id} />)}
            <input type="hidden" name="name" value={contact.name} />
            <input type="hidden" name="email" value={contact.email} />
            <input type="hidden" name="phone" value={contact.phone} />
            <input type="hidden" name="preferredContact" value={contact.preferredContact} />
            <input type="hidden" name="mode" value={mode} />
            <input type="hidden" name="method" value={method} />
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="grid gap-3 rounded-[2px] border border-line p-5">
              <div className="flex gap-3 text-[14.5px]"><span className="w-28 shrink-0 eyebrow pt-1">{t("journey")}</span><span className="text-ink">{journey.title[locale]}</span></div>
              <div className="flex gap-3 text-[14.5px]"><span className="w-28 shrink-0 eyebrow pt-1">{t("dates")}</span><span className="text-ink">{dep ? range(dep) : privateDates}</span></div>
              <div className="flex gap-3 text-[14.5px]"><span className="w-28 shrink-0 eyebrow pt-1">{t("travellers")}</span><span className="text-ink">{travellers}</span></div>
              <div className="flex gap-3 text-[14.5px]"><span className="w-28 shrink-0 eyebrow pt-1">{t("extras")}</span><span className="text-ink">{chosen.length ? extras.filter((e) => chosen.includes(e.id)).map((e) => e.name[locale]).join(", ") : t("none")}</span></div>
              <div className="flex gap-3 text-[14.5px]"><span className="w-28 shrink-0 eyebrow pt-1">{t("stepContact")}</span><span className="text-ink">{contact.name} · {contact.email}{contact.phone ? ` · ${contact.phone}` : ""}</span></div>
            </div>

            <div className="grid gap-3">
              <label className={`flex cursor-pointer items-center gap-3 rounded-[2px] border px-4 py-3 ${mode === "pay" ? "border-ink bg-ink/5" : "border-line"}`}><input type="radio" name="md" checked={mode === "pay"} onChange={() => setMode("pay")} /><span className="text-[15px] font-medium text-ink">{t("payDeposit")} · {formatXof(q.deposit)}</span></label>
              {mode === "pay" ? (
                <div className="grid gap-2 pl-8">
                  <p className="text-[13.5px]">{t("payIntro")}</p>
                  <label className="inline-flex items-center gap-2 text-[14px] text-ink"><input type="radio" name="pm" checked={method === "momo"} onChange={() => setMethod("momo")} /> {t("payMomo")} · {formatXof(q.deposit)}</label>
                  <label className="inline-flex items-center gap-2 text-[14px] text-ink"><input type="radio" name="pm" checked={method === "card"} onChange={() => setMethod("card")} /> {t("payCard")} · <Approx xof={q.deposit} /></label>
                  {!paymentsLive ? <p className="text-[12.5px] text-accent-bright">{t("mockNotice")}</p> : null}
                </div>
              ) : null}
              <label className={`flex cursor-pointer items-center gap-3 rounded-[2px] border px-4 py-3 ${mode === "call" ? "border-ink bg-ink/5" : "border-line"}`}><input type="radio" name="md" checked={mode === "call"} onChange={() => setMode("call")} /><span className="text-[15px] font-medium text-ink">{t("requestCall")}</span></label>
            </div>

            <p className="text-[12.5px] text-charcoal">{t("terms")} <Link href={{ pathname: "/legal/[page]", params: { page: "booking-terms" } }} className="underline">→</Link></p>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => setStep(3)} className="btn btn-lg !w-auto px-6">{t("back")}</button>
              <button type="submit" disabled={pending} className="btn btn-lg btn-solid !w-auto px-7 disabled:opacity-60">
                {pending ? t("paying") : mode === "pay" ? t("payNow", { amount: formatXof(q.deposit) }) : t("requestCall")}
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-wrap gap-3">
            {step > 0 ? <button type="button" onClick={() => setStep(step - 1)} className="btn btn-lg !w-auto px-6">{t("back")}</button> : null}
            <button type="button" disabled={!canNext} onClick={() => setStep(step + 1)} className="btn btn-lg btn-solid !w-auto px-7 disabled:opacity-50">{t("next")}</button>
          </div>
        )}
      </div>

      <aside className="lg:col-span-4">
        <div className="grid gap-3 rounded-[2px] border border-line bg-paper p-6 lg:sticky lg:top-24">
          <span className="eyebrow">{t("summary")}</span>
          <b className="text-[18px] font-medium text-ink">{journey.title[locale]}</b>
          <p className="text-[13.5px]">{dep ? range(dep) : privateDates || "—"} · {travellers} × {formatXof(dep?.priceXof ?? journey.priceXof)}</p>
          {q.extrasXof ? <p className="text-[13.5px]">{t("extras")}: {formatXof(q.extrasXof)}</p> : null}
          <div className="border-t border-line pt-3">
            <div className="flex items-baseline justify-between"><span className="eyebrow">{t("total")}</span><span className="text-[22px] font-medium tabular-nums text-ink">{formatXof(q.total)}</span></div>
            <p className="text-right text-[12.5px] text-charcoal"><Approx xof={q.total} /></p>
          </div>
          <div className="border-t border-line pt-3">
            <div className="flex items-baseline justify-between"><span className="eyebrow">{t("deposit")}</span><span className="text-[18px] font-medium tabular-nums text-ink">{formatXof(q.deposit)}</span></div>
            <p className="text-[12.5px] text-charcoal">{t("balance")}: {formatXof(q.total - q.deposit)}</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
