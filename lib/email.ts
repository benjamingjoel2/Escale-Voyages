import { Resend } from "resend";
import { site } from "./site";

/**
 * Transactional email through Resend. Without RESEND_API_KEY the message is
 * logged instead, so forms still complete in development.
 */
const from = process.env.EMAIL_FROM ?? `${site.name} <${site.email.guest}>`;
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendEmail(opts: { to: string | string[]; subject: string; text: string; replyTo?: string }) {
  if (!resend) {
    console.info(`[email] (not sent, RESEND_API_KEY unset) to=${opts.to} subject=${opts.subject}\n${opts.text}`);
    return { sent: false as const };
  }
  const { error } = await resend.emails.send({ from, to: opts.to, subject: opts.subject, text: opts.text, replyTo: opts.replyTo });
  if (error) {
    console.error("[email] send failed", error);
    return { sent: false as const };
  }
  return { sent: true as const };
}
