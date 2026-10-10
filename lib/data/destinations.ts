/**
 * Placeholder destination data until Sanity is wired in (Phase 5).
 * Covers the whole country, south to north. Coordinates are to the nearest
 * minute and must be cross-checked against OpenStreetMap before launch.
 */
export type Region = "coast" | "south" | "centre" | "north";

export type Destination = {
  slug: string;
  name: Record<"en" | "fr", string>;
  pitch: Record<"en" | "fr", string>;
  region: Region;
  /** Decimal degrees, WGS84. */
  lat: number;
  lng: number;
  /** Formatted for display, e.g. "6°22′ N, 2°05′ E". */
  coords: string;
  tone: "accent" | "lagoon" | "savannah" | "coast" | "night" | "indigo";
  image: { file: string; width: number; height: number; src?: string };
};

export const REGIONS: Region[] = ["coast", "south", "centre", "north"];

export const destinations: Destination[] = [
  {
    slug: "cotonou",
    name: { en: "Cotonou", fr: "Cotonou" },
    pitch: {
      en: "The big city on the lagoon: Dantokpa market, the Fondation Zinsou, the art scene and the best kitchens in the country.",
      fr: "La grande ville sur la lagune : le marché Dantokpa, la Fondation Zinsou, la scène artistique et les meilleures tables du pays.",
    },
    region: "coast",
    lat: 6.3654,
    lng: 2.4183,
    coords: "6°22′ N, 2°25′ E",
    tone: "night",
    image: { file: "dest-cotonou.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "ouidah",
    name: { en: "Ouidah", fr: "Ouidah" },
    pitch: {
      en: "The Route des Esclaves, the Python Temple and the Door of No Return. Where Vodun and the Atlantic meet.",
      fr: "La Route des Esclaves, le Temple des Pythons et la Porte du Non-Retour. Là où le Vodun rencontre l'Atlantique.",
    },
    region: "coast",
    lat: 6.3667,
    lng: 2.0833,
    coords: "6°22′ N, 2°05′ E",
    tone: "accent",
    image: { file: "dest-ouidah.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "ganvie",
    name: { en: "Ganvié", fr: "Ganvié" },
    pitch: {
      en: "A town of 30,000 on stilts in Lake Nokoué, founded by people who fled the slave raids and never left.",
      fr: "Une ville de 30 000 habitants sur pilotis dans le lac Nokoué, fondée par ceux qui fuyaient les razzias et n'en sont jamais repartis.",
    },
    region: "south",
    lat: 6.4667,
    lng: 2.4167,
    coords: "6°28′ N, 2°25′ E",
    tone: "lagoon",
    image: { file: "dest-ganvie.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "porto-novo",
    name: { en: "Porto-Novo", fr: "Porto-Novo" },
    pitch: {
      en: "The quiet capital: Afro-Brazilian mansions, the Great Mosque, the Honmè royal palace.",
      fr: "La capitale tranquille : maisons afro-brésiliennes, la Grande Mosquée, le palais royal Honmè.",
    },
    region: "south",
    lat: 6.4969,
    lng: 2.6289,
    coords: "6°30′ N, 2°36′ E",
    tone: "night",
    image: { file: "dest-porto-novo.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "grand-popo",
    name: { en: "Grand-Popo", fr: "Grand-Popo" },
    pitch: {
      en: "Coconut palms, the Mono river mouth and a beach with nobody on it.",
      fr: "Cocotiers, la bouche du Mono et une plage où il n'y a personne.",
    },
    region: "coast",
    lat: 6.2833,
    lng: 1.8167,
    coords: "6°17′ N, 1°49′ E",
    tone: "coast",
    image: { file: "dest-grand-popo.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "possotome",
    name: { en: "Possotomè & Lake Ahémé", fr: "Possotomè & lac Ahémé" },
    pitch: {
      en: "Hot springs, fishing villages and a lake the Pedah people read like a book.",
      fr: "Sources chaudes, villages de pêcheurs et un lac que les Pédah lisent comme un livre.",
    },
    region: "south",
    lat: 6.5667,
    lng: 1.9333,
    coords: "6°34′ N, 1°56′ E",
    tone: "lagoon",
    image: { file: "dest-possotome.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "abomey",
    name: { en: "Abomey", fr: "Abomey" },
    pitch: {
      en: "The royal palaces of twelve kings, their bas-reliefs, and the court that ruled Dahomey for 300 years.",
      fr: "Les palais royaux de douze rois, leurs bas-reliefs, et la cour qui a gouverné le Dahomey pendant 300 ans.",
    },
    region: "south",
    lat: 7.1833,
    lng: 1.9917,
    coords: "7°11′ N, 1°59′ E",
    tone: "indigo",
    image: { file: "dest-abomey.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "ketou",
    name: { en: "Kétou", fr: "Kétou" },
    pitch: {
      en: "The Yoruba kingdom on the Nigerian border, home of the Gèlèdé masquerades on UNESCO's list.",
      fr: "Le royaume yoruba à la frontière du Nigeria, berceau des mascarades Gèlèdé inscrites à l'UNESCO.",
    },
    region: "south",
    lat: 7.3633,
    lng: 2.6,
    coords: "7°22′ N, 2°36′ E",
    tone: "accent",
    image: { file: "dest-ketou.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "dassa",
    name: { en: "Dassa-Zoumé & the Collines", fr: "Dassa-Zoumé & les Collines" },
    pitch: {
      en: "Forty-one sacred hills, the grotto of the Virgin, and the centre of the country where every road meets.",
      fr: "Quarante et une collines sacrées, la grotte de la Vierge, et le centre du pays où toutes les routes se croisent.",
    },
    region: "centre",
    lat: 7.75,
    lng: 2.1833,
    coords: "7°45′ N, 2°11′ E",
    tone: "savannah",
    image: { file: "dest-dassa.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "parakou",
    name: { en: "Parakou", fr: "Parakou" },
    pitch: {
      en: "The crossroads of the north: Bariba horsemen, the big market, and the Gaani festival.",
      fr: "Le carrefour du nord : cavaliers bariba, le grand marché et la fête de la Gaani.",
    },
    region: "centre",
    lat: 9.35,
    lng: 2.6167,
    coords: "9°21′ N, 2°37′ E",
    tone: "savannah",
    image: { file: "dest-parakou.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "natitingou",
    name: { en: "Natitingou", fr: "Natitingou" },
    pitch: {
      en: "The base for the Atakora: the regional museum, the Kota falls and the road to the parks.",
      fr: "La base pour l'Atakora : le musée régional, les chutes de Kota et la route des parcs.",
    },
    region: "north",
    lat: 10.3042,
    lng: 1.3797,
    coords: "10°18′ N, 1°23′ E",
    tone: "savannah",
    image: { file: "dest-natitingou.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "koutammakou",
    name: { en: "Koutammakou & the Tata Somba", fr: "Koutammakou & les Tata Somba" },
    pitch: {
      en: "The fortified mud houses of the Batammariba, built like castles, still lived in. A World Heritage landscape.",
      fr: "Les maisons-forteresses en terre des Batammariba, bâties comme des châteaux, toujours habitées. Un paysage classé au patrimoine mondial.",
    },
    region: "north",
    lat: 10.1667,
    lng: 1.1,
    coords: "10°10′ N, 1°06′ E",
    tone: "accent",
    image: { file: "dest-koutammakou.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "tanougou",
    name: { en: "Tanougou falls", fr: "Chutes de Tanougou" },
    pitch: {
      en: "A waterfall and a natural pool at the foot of the Atakora, on the road into Pendjari.",
      fr: "Une cascade et un bassin naturel au pied de l'Atakora, sur la route de la Pendjari.",
    },
    region: "north",
    lat: 10.8,
    lng: 1.4333,
    coords: "10°48′ N, 1°26′ E",
    tone: "coast",
    image: { file: "dest-tanougou.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "pendjari",
    name: { en: "Pendjari National Park", fr: "Parc national de la Pendjari" },
    pitch: {
      en: "Lions, elephants, hippos and cheetahs in the W-Arly-Pendjari complex, the largest wild savannah left in West Africa.",
      fr: "Lions, éléphants, hippopotames et guépards dans le complexe W-Arly-Pendjari, la plus vaste savane sauvage d'Afrique de l'Ouest.",
    },
    region: "north",
    lat: 10.9,
    lng: 1.55,
    coords: "10°54′ N, 1°33′ E",
    tone: "savannah",
    image: { file: "dest-pendjari.jpg", width: 1600, height: 2000 },
  },
  {
    slug: "parc-w",
    name: { en: "W National Park", fr: "Parc national du W" },
    pitch: {
      en: "The Niger river's great bend, shared with Niger and Burkina Faso. Wilder and emptier than Pendjari.",
      fr: "Le grand méandre du fleuve Niger, partagé avec le Niger et le Burkina Faso. Plus sauvage et plus vide que la Pendjari.",
    },
    region: "north",
    lat: 11.9,
    lng: 2.6,
    coords: "11°54′ N, 2°36′ E",
    tone: "savannah",
    image: { file: "dest-parc-w.jpg", width: 1600, height: 2000 },
  },
];

export function byRegion(region: Region) {
  return destinations.filter((d) => d.region === region);
}
