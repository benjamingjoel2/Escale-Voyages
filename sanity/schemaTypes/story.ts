import { defineField, defineType } from "sanity";

export const story = defineType({
  name: "story",
  title: "Story",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localeString" }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "title.en", maxLength: 80 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "excerpt", title: "Excerpt", type: "localeText" }),
    defineField({ name: "body", title: "Body", type: "localeBlock" }),
    defineField({ name: "cover", title: "Cover image (3:2)", type: "imageWithAlt" }),
    defineField({ name: "publishedAt", title: "Published", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "readingMinutes", title: "Reading time (minutes)", type: "number" }),
    defineField({
      name: "destinations",
      title: "Related destinations",
      type: "array",
      of: [{ type: "reference", to: [{ type: "destination" }] }],
    }),
    defineField({
      name: "journeys",
      title: "Related journeys",
      type: "array",
      of: [{ type: "reference", to: [{ type: "journey" }] }],
    }),
  ],
  orderings: [{ title: "Newest", name: "newest", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: { select: { title: "title.en", subtitle: "publishedAt", media: "cover" } },
});
