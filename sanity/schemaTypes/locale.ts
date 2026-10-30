import { defineField, defineType } from "sanity";

/**
 * Multilingual field objects. Every language is required so the site never
 * shows an empty string in one locale. Add `pt` here when Portuguese lands.
 */
const languages = [
  { id: "en", title: "English" },
  { id: "fr", title: "Français" },
  { id: "de", title: "Deutsch" },
  { id: "es", title: "Español" },
] as const;

export const localeString = defineType({
  name: "localeString",
  title: "Text (EN/FR/DE/ES)",
  type: "object",
  options: { collapsible: false },
  fields: languages.map((l) =>
    defineField({
      name: l.id,
      title: l.title,
      type: "string",
      validation: (r) => r.required(),
    }),
  ),
});

export const localeText = defineType({
  name: "localeText",
  title: "Paragraph (EN/FR/DE/ES)",
  type: "object",
  fields: languages.map((l) =>
    defineField({
      name: l.id,
      title: l.title,
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
  ),
});

export const localeStringList = defineType({
  name: "localeStringList",
  title: "List (EN/FR/DE/ES)",
  type: "object",
  fields: languages.map((l) =>
    defineField({
      name: l.id,
      title: l.title,
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required().min(1),
    }),
  ),
});

export const localeBlock = defineType({
  name: "localeBlock",
  title: "Rich text (EN/FR/DE/ES)",
  type: "object",
  fields: languages.map((l) =>
    defineField({
      name: l.id,
      title: l.title,
      type: "array",
      of: [{ type: "block" }, { type: "imageWithAlt" }],
    }),
  ),
});

/** Every image on the site must carry alt text in both languages. */
export const imageWithAlt = defineType({
  name: "imageWithAlt",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Alt text (EN/FR/DE/ES)",
      type: "localeString",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "credit",
      title: "Photo credit",
      type: "string",
      description: "Photographer or licence note, shown in the media credits.",
    }),
  ],
});
