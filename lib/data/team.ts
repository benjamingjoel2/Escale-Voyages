import type { L } from "./journeys";

/** Team and guides. All placeholders until the owner supplies real people. */
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
    slug: "guide-ouidah",
    name: "[Guide name]",
    role: { en: "Lead guide, heritage", fr: "Guide principal, mémoire" },
    region: { en: "Ouidah and the coast", fr: "Ouidah et la côte" },
    bio: {
      en: "Placeholder. Historian from Ouidah, leads the Return and Vodun Days journeys, trained with the Ouidah museum. Replace with the real biography.",
      fr: "Texte provisoire. Historien de Ouidah, mène les voyages Retour et Vodun Days, formé au musée de Ouidah. À remplacer.",
    },
    languages: ["FR", "EN", "Fon", "PT"],
    image: { file: "team-guide-ouidah.jpg", width: 1200, height: 1500 },
    tone: "lagoon",
  },
  {
    slug: "guide-abomey",
    name: "[Guide name]",
    role: { en: "Guide, kingdoms and culture", fr: "Guide, royaumes et culture" },
    region: { en: "Abomey, Kétou and the Collines", fr: "Abomey, Kétou et les Collines" },
    bio: {
      en: "Placeholder. From a family of court artisans in Abomey; reads the bas-reliefs symbol by symbol. Replace with the real biography.",
      fr: "Texte provisoire. Issu d'une famille d'artisans de la cour d'Abomey ; lit les bas-reliefs symbole par symbole. À remplacer.",
    },
    languages: ["FR", "EN", "Fon", "Yoruba"],
    image: { file: "team-guide-abomey.jpg", width: 1200, height: 1500 },
    tone: "accent",
  },
  {
    slug: "guide-north",
    name: "[Guide name]",
    role: { en: "Guide, the north and the parks", fr: "Guide, le nord et les parcs" },
    region: { en: "Natitingou, the Atakora, Pendjari", fr: "Natitingou, l'Atakora, la Pendjari" },
    bio: {
      en: "Placeholder. Park-trained guide from the Atakora, grew up in a Tata Somba, knows where the lions drink. Replace with the real biography.",
      fr: "Texte provisoire. Guide formé par le parc, originaire de l'Atakora, a grandi dans un Tata Somba, sait où boivent les lions. À remplacer.",
    },
    languages: ["FR", "EN", "Ditammari", "Bariba"],
    image: { file: "team-guide-north.jpg", width: 1200, height: 1500 },
    tone: "savannah",
  },
];
