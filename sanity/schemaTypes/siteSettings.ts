import { defineField, defineType } from "sanity";

/** Singleton. Edited from the "Site settings" entry in the Studio sidebar. */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "guestEmail", title: "Guest enquiries email", type: "string", validation: (r) => r.email() }),
    defineField({ name: "tradeEmail", title: "Trade enquiries email", type: "string", validation: (r) => r.email() }),
    defineField({ name: "pressEmail", title: "Press email", type: "string", validation: (r) => r.email() }),
    defineField({ name: "founderName", title: "Founder name", type: "string" }),
    defineField({ name: "founderRole", title: "Founder role", type: "localeString" }),
    defineField({ name: "founderQuote", title: "Founder quote", type: "localeText" }),
    defineField({ name: "founderPortrait", title: "Founder portrait (3:2)", type: "imageWithAlt" }),
    defineField({ name: "closingQuote", title: "Closing quote (footer)", type: "localeText" }),
    defineField({ name: "closingQuoteSource", title: "Closing quote source", type: "localeString" }),
    defineField({
      name: "trust",
      title: "Trust row",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "localeString" }),
            defineField({ name: "logo", title: "Logo", type: "imageWithAlt" }),
            defineField({ name: "url", title: "Link", type: "url" }),
          ],
          preview: { select: { title: "label.en", media: "logo" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});
