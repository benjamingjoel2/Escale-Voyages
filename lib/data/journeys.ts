/**
 * Placeholder journey data until Sanity is wired in (Phase 5).
 * Prices are per person in FCFA.
 */
export type Journey = {
  slug: string;
  title: Record<"en" | "fr", string>;
  pitch: Record<"en" | "fr", string>;
  season: Record<"en" | "fr", string>;
  days: number;
  priceXof: number;
  /** Coordinates of the journey's anchor destination, shown on the card. */
  coords: string;
  tone: "laterite" | "lagoon" | "savannah" | "coast" | "night";
  image: { file: string; width: number; height: number };
};

export const journeys: Journey[] = [
  {
    slug: "the-twelve-kings",
    title: { en: "The Twelve Kings", fr: "Les Douze Rois" },
    pitch: {
      en: "Abomey's palaces and bas-reliefs, then the road the kingdom took to the sea.",
      fr: "Les palais et bas-reliefs d'Abomey, puis la route que le royaume a prise vers la mer.",
    },
    season: { en: "Nov – Feb", fr: "Nov. – fév." },
    days: 7,
    priceXof: 1_450_000,
    coords: "7°11′ N, 1°59′ E",
    tone: "laterite",
    image: { file: "journey-kings.jpg", width: 1600, height: 2133 },
  },
  {
    slug: "return",
    title: { en: "Return", fr: "Retour" },
    pitch: {
      en: "Ouidah, the Route des Esclaves and the Door of No Return, walked slowly with people who can hold the silence.",
      fr: "Ouidah, la Route des Esclaves et la Porte du Non-Retour, parcourues lentement avec des gens qui savent tenir le silence.",
    },
    season: { en: "Year round", fr: "Toute l'année" },
    days: 5,
    priceXof: 980_000,
    coords: "6°22′ N, 2°05′ E",
    tone: "lagoon",
    image: { file: "journey-return.jpg", width: 1600, height: 2133 },
  },
  {
    slug: "north-to-pendjari",
    title: { en: "North to Pendjari", fr: "Vers le nord, la Pendjari" },
    pitch: {
      en: "Tata Somba country, the Atakora hills and West Africa's last great lion and elephant park.",
      fr: "Le pays des Tata Somba, les collines de l'Atakora et le dernier grand parc aux lions et éléphants d'Afrique de l'Ouest.",
    },
    season: { en: "Dec – Apr", fr: "Déc. – avr." },
    days: 9,
    priceXof: 2_300_000,
    coords: "10°54′ N, 1°33′ E",
    tone: "savannah",
    image: { file: "journey-pendjari.jpg", width: 1600, height: 2133 },
  },
  {
    slug: "lagoon-and-coast",
    title: { en: "Lagoon & Coast", fr: "Lagune & Côte" },
    pitch: {
      en: "Ganvié by pirogue at dawn, Porto-Novo's Afro-Brazilian streets, Grand-Popo's empty beach.",
      fr: "Ganvié en pirogue à l'aube, les rues afro-brésiliennes de Porto-Novo, la plage déserte de Grand-Popo.",
    },
    season: { en: "Year round", fr: "Toute l'année" },
    days: 4,
    priceXof: 620_000,
    coords: "6°28′ N, 2°25′ E",
    tone: "coast",
    image: { file: "journey-lagoon.jpg", width: 1600, height: 2133 },
  },
  {
    slug: "vodun-days",
    title: { en: "Vodun Days", fr: "Vodun Days" },
    pitch: {
      en: "Three days of ceremony in Ouidah with the people it belongs to, then the coast to recover.",
      fr: "Trois jours de cérémonies à Ouidah avec ceux à qui elles appartiennent, puis la côte pour reprendre souffle.",
    },
    season: { en: "January", fr: "Janvier" },
    days: 6,
    priceXof: 1_250_000,
    coords: "6°22′ N, 2°05′ E",
    tone: "night",
    image: { file: "journey-vodun-days.jpg", width: 1600, height: 2133 },
  },
];
