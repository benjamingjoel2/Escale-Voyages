import { defineField, defineType } from "sanity";

const contactFields = [
  defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
  defineField({ name: "email", title: "Email", type: "string", validation: (r) => r.required().email() }),
  defineField({ name: "phone", title: "Phone / WhatsApp", type: "string" }),
  defineField({ name: "preferredContact", title: "Preferred contact", type: "string", options: { list: ["email", "whatsapp", "call"] } }),
  defineField({ name: "locale", title: "Language", type: "string", options: { list: ["en", "fr"] } }),
  defineField({ name: "receivedAt", title: "Received", type: "datetime", readOnly: true }),
  defineField({
    name: "status",
    title: "Status",
    type: "string",
    options: { list: ["new", "replied", "quoted", "confirmed", "closed"], layout: "radio" },
    initialValue: "new",
  }),
  defineField({ name: "notes", title: "Internal notes", type: "text", rows: 4 }),
];

/** Written by the enquiry form (Phase 6). Read-only in the Studio except status and notes. */
export const enquiry = defineType({
  name: "enquiry",
  title: "Enquiry",
  type: "document",
  fields: [
    ...contactFields,
    defineField({ name: "journey", title: "Journey of interest", type: "reference", to: [{ type: "journey" }] }),
    defineField({ name: "travelDates", title: "Travel dates (free text)", type: "string" }),
    defineField({ name: "travellers", title: "Travellers", type: "number" }),
    defineField({ name: "message", title: "Message", type: "text", rows: 6 }),
  ],
  orderings: [{ title: "Newest", name: "newest", by: [{ field: "receivedAt", direction: "desc" }] }],
  preview: {
    select: { name: "name", status: "status", journey: "journey.title.en", date: "receivedAt" },
    prepare: ({ name, status, journey, date }) => ({
      title: `${name ?? "?"} · ${status ?? "new"}`,
      subtitle: [journey, date?.slice(0, 10)].filter(Boolean).join(" · "),
    }),
  },
});

/** Written by the booking flow (Phase 6). */
export const bookingRequest = defineType({
  name: "bookingRequest",
  title: "Booking request",
  type: "document",
  fields: [
    ...contactFields,
    defineField({ name: "journey", title: "Journey", type: "reference", to: [{ type: "journey" }], validation: (r) => r.required() }),
    defineField({ name: "departureStart", title: "Departure (first day)", type: "date" }),
    defineField({ name: "privateDates", title: "Private departure dates", type: "string" }),
    defineField({ name: "travellers", title: "Travellers", type: "number", validation: (r) => r.required().min(1) }),
    defineField({ name: "extras", title: "Extras", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "totalXof", title: "Quoted total (FCFA)", type: "number" }),
    defineField({ name: "depositXof", title: "Deposit due (FCFA)", type: "number" }),
    defineField({
      name: "payment",
      title: "Payment",
      type: "object",
      fields: [
        defineField({ name: "provider", title: "Provider", type: "string", options: { list: ["mock", "fedapay", "kkiapay", "stripe"] } }),
        defineField({ name: "reference", title: "Provider reference", type: "string" }),
        defineField({ name: "status", title: "Status", type: "string", options: { list: ["pending", "paid", "failed", "refunded"] } }),
        defineField({ name: "paidAt", title: "Paid at", type: "datetime" }),
      ],
    }),
  ],
  orderings: [{ title: "Newest", name: "newest", by: [{ field: "receivedAt", direction: "desc" }] }],
  preview: {
    select: { name: "name", journey: "journey.title.en", date: "departureStart", pay: "payment.status" },
    prepare: ({ name, journey, date, pay }) => ({
      title: `${name ?? "?"} · ${journey ?? ""}`,
      subtitle: [date, pay ? `payment ${pay}` : null].filter(Boolean).join(" · "),
    }),
  },
});
