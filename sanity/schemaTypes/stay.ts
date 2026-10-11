import { defineArrayMember, defineField, defineType } from "sanity";

export const stay = defineType({
  name: "stay",
  title: "Stay",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "localeString", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "name.en", maxLength: 60 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "place", title: "Town or area", type: "localeString", validation: (r) => r.required() }),
    defineField({ name: "pitch", title: "One line", type: "localeText", validation: (r) => r.required() }),
    defineField({ name: "body", title: "Description", type: "localeText", validation: (r) => r.required() }),
    defineField({
      name: "images",
      title: "Photos (first is the card)",
      type: "array",
      of: [defineArrayMember({ type: "imageWithAlt" })],
      validation: (r) => r.min(1),
    }),
    defineField({
      name: "tone",
      title: "Placeholder tone",
      type: "string",
      options: { list: ["accent", "lagoon", "savannah", "coast", "night"] },
      initialValue: "accent",
    }),
    defineField({ name: "order", title: "Sort order", type: "number", initialValue: 50 }),
  ],
  orderings: [{ title: "Sort order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name.en", subtitle: "place.en", media: "images.0" },
  },
});
