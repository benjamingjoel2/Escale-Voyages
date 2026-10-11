import { defineField, defineType } from "sanity";

export const festival = defineType({
  name: "festival",
  title: "Festival / event",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "localeString" }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "name.en", maxLength: 60 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "pitch", title: "One-line pitch", type: "localeText" }),
    defineField({ name: "body", title: "Page text", type: "localeBlock" }),
    defineField({ name: "when", title: "When (label)", type: "localeString", description: "e.g. \"Every January, Ouidah\"" }),
    defineField({
      name: "nextStart",
      title: "Next edition starts",
      type: "date",
      description: "Drives the countdown. Leave the \"dates confirmed\" box unticked until the official programme is out.",
    }),
    defineField({ name: "nextEnd", title: "Next edition ends", type: "date" }),
    defineField({ name: "datesConfirmed", title: "Dates confirmed officially", type: "boolean", initialValue: false }),
    defineField({ name: "destination", title: "Where", type: "reference", to: [{ type: "destination" }] }),
    defineField({ name: "journey", title: "Related journey", type: "reference", to: [{ type: "journey" }] }),
    defineField({ name: "image", title: "Image (16:10)", type: "imageWithAlt" }),
    defineField({ name: "featured", title: "Feature on the festivals page", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "name.en", subtitle: "when.en", media: "image" } },
});
