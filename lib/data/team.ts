import type { L } from "./journeys";

/**
 * The team. All placeholders until the owner supplies real people. Escale
 * Voyages has no guides of its own: the agency plans and runs the journey,
 * a driver travels with the group, and each place is explained by the
 * people who live there. Keep roles honest to that.
 */
export type Person = {
  slug: string;
  name: string;
  role: L;
  region: L;
  bio: L;
  languages: string[];
  image: { file: string; width: number; height: number };
  tone: "accent" | "lagoon" | "savannah" | "coast" | "night";
};

export const team: Person[] = [
  {
    slug: "founder",
    name: "[Founder name]",
    role: { en: "Founder", fr: "Fondateur" },
    region: { en: "Cotonou", fr: "Cotonou" },
    bio: {
      en: "Placeholder. Born in Cotonou, worked in hospitality abroad, came home to build the agency that shows the whole country. Replace with the real story.",
      fr: "Texte provisoire. Né à Cotonou, a travaillé dans l'hôtellerie à l'étranger, est revenu créer l'agence qui montre tout le pays. À remplacer par la vraie histoire.",
    },
    languages: ["FR", "EN", "Fon"],
    image: { file: "team-founder.jpg", width: 1200, height: 1500 },
    tone: "night",
  },
  {
    slug: "planner",
    name: "[Name]",
    role: { en: "Journey planning", fr: "Conception des voyages" },
    region: { en: "Cotonou", fr: "Cotonou" },
    bio: {
      en: "Placeholder. Builds every day-by-day, books the rooms and the people who receive you, and writes the single itinerary document you travel with. Replace with the real biography.",
      fr: "Texte provisoire. Construit chaque jour par jour, réserve les chambres et les personnes qui vous reçoivent, et rédige le document d'itinéraire unique avec lequel vous voyagez. À remplacer.",
    },
    languages: ["FR", "EN"],
    image: { file: "team-planner.jpg", width: 1200, height: 1500 },
    tone: "lagoon",
  },
  {
    slug: "guest-relations",
    name: "[Name]",
    role: { en: "Guest relations", fr: "Relations voyageurs" },
    region: { en: "Cotonou, and on WhatsApp", fr: "Cotonou, et sur WhatsApp" },
    bio: {
      en: "Placeholder. The voice on the WhatsApp line before, during and after your journey; meets every arrival at the airport. Replace with the real biography.",
      fr: "Texte provisoire. La voix de la ligne WhatsApp avant, pendant et après votre voyage ; accueille chaque arrivée à l'aéroport. À remplacer.",
    },
    languages: ["FR", "EN", "Fon", "Yoruba"],
    image: { file: "team-guest-relations.jpg", width: 1200, height: 1500 },
    tone: "accent",
  },
  {
    slug: "lead-driver",
    name: "[Name]",
    role: { en: "Lead driver", fr: "Chauffeur principal" },
    region: { en: "The whole country", fr: "Tout le pays" },
    bio: {
      en: "Placeholder. Has driven the Cotonou to Pendjari road more times than anyone on the team; knows every fuel stop and every good lunch between them. Replace with the real biography.",
      fr: "Texte provisoire. A fait la route Cotonou–Pendjari plus souvent que quiconque dans l'équipe ; connaît chaque station et chaque bon déjeuner entre les deux. À remplacer.",
    },
    languages: ["FR", "Fon", "Bariba"],
    image: { file: "team-lead-driver.jpg", width: 1200, height: 1500 },
    tone: "savannah",
  },
];
