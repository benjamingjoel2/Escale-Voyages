"use server";

import { z } from "zod";
import { getLocale } from "next-intl/server";
import { writeClient } from "@/lib/sanity/write";
import { sendEmail } from "@/lib/email";
import { getJourneys, getSiteSettings } from "@/lib/content";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email(),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  preferredContact: z.enum(["email", "whatsapp", "call"]),
  journey: z.string().trim().max(80).optional().or(z.literal("")),
  travelDates: z.string().trim().max(160).optional().or(z.literal("")),
  travellers: z.coerce.number().int().min(1).max(40).optional(),
  message: z.string().trim().max(4000).optional().or(z.literal("")),
  consent: z.literal("on"),
  website: z.string().max(0).optional(), // honeypot
});

export type EnquiryState = {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<keyof z.infer<typeof schema>, string>>;
};

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const errors: EnquiryState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof schema>;
      errors[key] = issue.code === "invalid_format" ? "invalidEmail" : "required";
    }
    return { status: "error", errors };
  }
  const d = parsed.data;
  if (d.website) return { status: "success" }; // bot: pretend
  const locale = (await getLocale()) as "en" | "fr";
  const [journeys, settings] = await Promise.all([getJourneys(), getSiteSettings()]);
  const journey = journeys.find((j) => j.slug === d.journey);
  const receivedAt = new Date().toISOString();

  try {
    if (writeClient) {
      await writeClient.create({
        _type: "enquiry",
        name: d.name,
        email: d.email,
        phone: d.phone || undefined,
        preferredContact: d.preferredContact,
        locale,
        receivedAt,
        status: "new",
        journey: journey ? { _type: "reference", _ref: `journey-${journey.slug}` } : undefined,
        travelDates: d.travelDates || undefined,
        travellers: d.travellers,
        message: d.message || undefined,
      });
    } else {
      console.info("[enquiry] (Sanity write not configured)", { ...d, locale, receivedAt });
    }
    const summary = [
      `Name: ${d.name}`,
      `Email: ${d.email}`,
      d.phone ? `Phone: ${d.phone}` : null,
      `Reply by: ${d.preferredContact}`,
      journey ? `Journey: ${journey.title.en}` : null,
      d.travelDates ? `Dates: ${d.travelDates}` : null,
      d.travellers ? `Travellers: ${d.travellers}` : null,
      d.message ? `\n${d.message}` : null,
    ].filter(Boolean).join("\n");
    await Promise.all([
      sendEmail({ to: settings.guestEmail, subject: `New enquiry from ${d.name}`, text: summary, replyTo: d.email }),
      sendEmail({
        to: d.email,
        subject: locale === "fr" ? "Votre demande à Escale Voyages" : "Your enquiry to Escale Voyages",
        text: locale === "fr"
          ? `Bonjour ${d.name},\n\nMerci pour votre demande. Une vraie personne vous répond sous un jour ouvré.\n\nVotre message :\n${summary}\n\nEscale Voyages, Cotonou`
          : `Hello ${d.name},\n\nThank you for your enquiry. A real person will reply within one working day.\n\nWhat you sent:\n${summary}\n\nEscale Voyages, Cotonou`,
      }),
    ]);
    return { status: "success" };
  } catch (err) {
    console.error("[enquiry] failed", err);
    return { status: "error" };
  }
}
