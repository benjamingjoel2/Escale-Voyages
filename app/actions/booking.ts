"use server";

import { z } from "zod";
import { redirect as externalRedirect } from "next/navigation";
import { getLocale } from "next-intl/server";
import { redirect } from "@/i18n/navigation";
import { getJourneys, getSiteSettings } from "@/lib/content";
import { writeClient } from "@/lib/sanity/write";
import { sendEmail } from "@/lib/email";
import { getProvider } from "@/lib/payments";
import { newReference, quote } from "@/lib/bookings";
import { formatXof, convertFromXof } from "@/lib/currency";
import { site } from "@/lib/site";

const schema = z.object({
  journey: z.string().min(1),
  departure: z.string().optional().or(z.literal("")),
  privateDates: z.string().trim().max(160).optional().or(z.literal("")),
  travellers: z.coerce.number().int().min(1).max(8),
  extras: z.array(z.string()).default([]),
  name: z.string().trim().min(2).max(120),
  email: z.email(),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  preferredContact: z.enum(["email", "whatsapp", "call"]).default("email"),
  mode: z.enum(["pay", "call"]),
  method: z.enum(["momo", "card"]).optional(),
  website: z.string().max(0).optional(),
});

export type BookingState = { status: "idle" | "error"; errors?: Record<string, string>; message?: string };

export async function submitBooking(_prev: BookingState, formData: FormData): Promise<BookingState> {
  const raw = {
    ...Object.fromEntries(formData.entries()),
    extras: formData.getAll("extras").map(String),
  };
  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) errors[String(issue.path[0])] = issue.code === "invalid_format" ? "invalidEmail" : "required";
    return { status: "error", errors };
  }
  const d = parsed.data;
  const locale = (await getLocale()) as "en" | "fr";
  if (d.website) redirect({ href: { pathname: "/book/confirmation", query: { ref: "EV-TEST", status: "call" } }, locale });

  const [journeys, settings] = await Promise.all([getJourneys(), getSiteSettings()]);
  const journey = journeys.find((j) => j.slug === d.journey);
  if (!journey) return { status: "error", errors: { journey: "required" } };
  if (!d.departure && !d.privateDates) return { status: "error", errors: { departure: "required" } };

  const q = quote(journey, d.travellers, d.extras, d.departure || undefined);
  const reference = newReference();
  const receivedAt = new Date().toISOString();
  const docId = `booking-${reference}`;

  const doc = {
    _id: docId,
    _type: "bookingRequest",
    name: d.name,
    email: d.email,
    phone: d.phone || undefined,
    preferredContact: d.preferredContact,
    locale,
    receivedAt,
    status: "new",
    journey: { _type: "reference", _ref: `journey-${journey.slug}` },
    departureStart: d.departure || undefined,
    privateDates: d.privateDates || undefined,
    travellers: d.travellers,
    extras: d.extras,
    totalXof: q.totalXof,
    depositXof: q.depositXof,
    payment: d.mode === "pay" ? { provider: "mock", status: "pending" } : undefined,
  };

  let redirectUrl: string | undefined;
  let finalStatus: "paid" | "pending" | "call" = "call";

  try {
    if (writeClient) await writeClient.createOrReplace(doc);
    else console.info("[booking] (Sanity write not configured)", doc);

    if (d.mode === "pay") {
      const method = d.method ?? "momo";
      const provider = getProvider(method);
      const currency = method === "card" ? "EUR" : "XOF";
      const amount = method === "card" ? Math.round(convertFromXof(q.depositXof, "EUR") * 100) / 100 : q.depositXof;
      const returnUrl = `${site.url}/${locale}/${locale === "fr" ? "reserver" : "book"}/confirmation?ref=${reference}`;
      const result = await provider.createDeposit({
        reference,
        amount,
        currency,
        method,
        customer: { name: d.name, email: d.email, phone: d.phone || undefined },
        description: `${site.name} deposit ${reference} · ${journey.title.en}`,
        returnUrl,
        locale,
      });
      if (writeClient) {
        await writeClient.patch(docId).set({
          payment: { provider: result.provider, reference: result.providerReference, status: result.status, paidAt: result.status === "paid" ? receivedAt : undefined },
        }).commit();
      }
      redirectUrl = result.redirectUrl;
      finalStatus = result.status === "paid" ? "paid" : "pending";
    }

    const lines = [
      `Reference: ${reference}`,
      `Journey: ${journey.title.en}`,
      d.departure ? `Departure: ${d.departure}` : `Private dates: ${d.privateDates}`,
      `Travellers: ${d.travellers}`,
      d.extras.length ? `Extras: ${d.extras.join(", ")}` : null,
      `Total: ${formatXof(q.totalXof)} · Deposit: ${formatXof(q.depositXof)}`,
      `Mode: ${d.mode}${d.method ? ` (${d.method})` : ""} · Status: ${finalStatus}`,
      `Contact: ${d.name} <${d.email}> ${d.phone ?? ""} via ${d.preferredContact}`,
    ].filter(Boolean).join("\n");
    await Promise.all([
      sendEmail({ to: settings.guestEmail, subject: `Booking request ${reference} · ${journey.title.en}`, text: lines, replyTo: d.email }),
      sendEmail({
        to: d.email,
        subject: locale === "fr" ? `Votre demande de réservation ${reference}` : `Your booking request ${reference}`,
        text: locale === "fr"
          ? `Bonjour ${d.name},\n\nNous avons bien reçu votre demande.\n\n${lines}\n\nNous confirmons sous un jour ouvré.\n\nEscale Voyages, Cotonou`
          : `Hello ${d.name},\n\nWe have your booking request.\n\n${lines}\n\nWe confirm within one working day.\n\nEscale Voyages, Cotonou`,
      }),
    ]);
  } catch (err) {
    console.error("[booking] failed", err);
    return { status: "error", message: "failed" };
  }

  if (redirectUrl) externalRedirect(redirectUrl);
  redirect({ href: { pathname: "/book/confirmation", query: { ref: reference, status: finalStatus } }, locale });
  return { status: "idle" };
}
