/**
 * Placeholder destination data until Sanity is wired in (Phase 5).
 * Coordinates are to the nearest minute and must be cross-checked against
 * OpenStreetMap before launch (Ganvié, Grand-Popo and the Batia gate especially).
 */
export type Destination = {
  slug: string;
  name: Record<"en" | "fr", string>;
  pitch: Record<"en" | "fr", string>;
  /** Decimal degrees, WGS84. */
  lat: number;
  lng: number;
  /** Formatted for display, e.g. "6°22′ N, 2°05′ E". */
  coords: string;
  tone: "laterite" | "lagoon" | "savannah" | "coast" | "night" | "indigo";
  image: { file: string; width: number; height: number };
};

export const destinations: Destination[] = [
  {
    slug: "ouidah",
    name: { en: "Ouidah", fr: "Ouidah" },
    pitch: {
      en: "The Route des Esclaves, the Python Temple and the Door of No Return. Where Vodun and the Atlantic meet.",
      fr: "La Route des Esclaves, le Temple des Pythons et la Porte du Non-Retour. Là où le Vodun rencontre l'Atlantique.",
    },
    lat: 6.3667,
    lng: 2.0833,
    coords: "6°22′ N, 2°05′ E",
    tone: "laterite",
    image: { file: "dest-ouidah.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "ganvie",
    name: { en: "Ganvié", fr: "Ganvié" },
    pitch: {
      en: "A town of 30,000 on stilts in Lake Nokoué, founded by people who fled the slave raids and never left.",
      fr: "Une ville de 30 000 habitants sur pilotis dans le lac Nokoué, fondée par ceux qui fuyaient les razzias et n'en sont jamais repartis.",
    },
    lat: 6.4667,
    lng: 2.4167,
    coords: "6°28′ N, 2°25′ E",
    tone: "lagoon",
    image: { file: "dest-ganvie.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "abomey",
    name: { en: "Abomey", fr: "Abomey" },
    pitch: {
      en: "The royal palaces of twelve kings, their bas-reliefs, and the court that ruled Dahomey for 300 years.",
      fr: "Les palais royaux de douze rois, leurs bas-reliefs, et la cour qui a gouverné le Dahomey pendant 300 ans.",
    },
    lat: 7.1833,
    lng: 1.9917,
    coords: "7°11′ N, 1°59′ E",
    tone: "indigo",
    image: { file: "dest-abomey.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "pendjari",
    name: { en: "Pendjari", fr: "Pendjari" },
    pitch: {
      en: "Lions, elephants, hippos and cheetahs in the W-Arly-Pendjari complex, the largest wild savannah left in West Africa.",
      fr: "Lions, éléphants, hippopotames et guépards dans le complexe W-Arly-Pendjari, la plus vaste savane sauvage d'Afrique de l'Ouest.",
    },
    lat: 10.9,
    lng: 1.55,
    coords: "10°54′ N, 1°33′ E",
    tone: "savannah",
    image: { file: "dest-pendjari.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "grand-popo",
    name: { en: "Grand-Popo", fr: "Grand-Popo" },
    pitch: {
      en: "Coconut palms, the Mono river mouth and a beach with nobody on it.",
      fr: "Cocotiers, la bouche du Mono et une plage où il n'y a personne.",
    },
    lat: 6.2833,
    lng: 1.8167,
    coords: "6°17′ N, 1°49′ E",
    tone: "coast",
    image: { file: "dest-grand-popo.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "porto-novo",
    name: { en: "Porto-Novo", fr: "Porto-Novo" },
    pitch: {
      en: "The quiet capital: Afro-Brazilian mansions, the Great Mosque, the Honmè royal palace.",
      fr: "La capitale tranquille : maisons afro-brésiliennes, la Grande Mosquée, le palais royal Honmè.",
    },
    lat: 6.4969,
    lng: 2.6289,
    coords: "6°30′ N, 2°36′ E",
    tone: "night",
    image: { file: "dest-porto-novo.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "natitingou",
    name: { en: "Natitingou & Tata Somba", fr: "Natitingou & Tata Somba" },
    pitch: {
      en: "The fortified mud houses of the Atakora, built like castles, still lived in.",
      fr: "Les maisons-forteresses en terre de l'Atakora, bâties comme des châteaux, toujours habitées.",
    },
    lat: 10.3042,
    lng: 1.3797,
    coords: "10°18′ N, 1°23′ E",
    tone: "savannah",
    image: { file: "dest-natitingou.jpg", width: 1600, height: 2000 },
  },
];
