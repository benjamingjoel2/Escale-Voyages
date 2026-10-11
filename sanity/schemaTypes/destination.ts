import { defineField, defineType } from "sanity";

export const destination = defineType({
  name: "destination",
  title: "Destination",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "location", title: "Location" },
    { name: "media", title: "Media" },
  ],
  fields: [
    defineField({ name: "name", title: "Name", type: "localeString", group: "content" }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "name.en", maxLength: 60 },
      validation: (r) => r.required(),
      group: "content",
    }),
    defineField({ name: "pitch", title: "One-line pitch", type: "localeText", group: "content" }),
    defineField({ name: "body", title: "Page text", type: "localeBlock", group: "content" }),
    defineField({
      name: "region",
      title: "Region",
      type: "string",
      options: {
        list: [
          { title: "The coast", value: "coast" },
          { title: "The south", value: "south" },
          { title: "The centre", value: "centre" },
          { title: "The north", value: "north" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
      group: "location",
    }),
    defineField({
      name: "location",
      title: "Coordinates",
      type: "geopoint",
      description: "Verify against OpenStreetMap. Shown on cards to the nearest minute.",
      validation: (r) => r.required(),
      group: "location",
    }),
    defineField({
      name: "tone",
      title: "Placeholder tone",
      type: "string",
      description: "Colour of the placeholder frame used when no image is set.",
      options: { list: ["accent", "lagoon", "savannah", "coast", "night", "indigo"] },
      initialValue: "accent",
      group: "media",
    }),
    defineField({ name: "image", title: "Card image (4:5)", type: "imageWithAlt", group: "media" }),
    defineField({ name: "heroImage", title: "Page hero (16:9)", type: "imageWithAlt", group: "media" }),
    defineField({
      name: "order",
      title: "Sort order",
      type: "number",
      description: "Lower numbers first. Coast to north reads well.",
      initialValue: 50,
      group: "content",
    }),
  ],
  orderings: [{ title: "Sort order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name.en", subtitle: "region", media: "image" },
  },
});
