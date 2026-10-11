import type { L, MediaRef } from "./journeys";

/**
 * Where guests sleep. Each journey lists the stays it uses, in order, by
 * slug. Placeholder data until Sanity; the shapes match the `stay` schema.
 */
export type Stay = {
  slug: string;
  name: L;
  /** Town or area, shown as the eyebrow. */
  place: L;
  /** One line under the name. */
  pitch: L;
  body: L;
  /** First image is the card; the rest show as a strip beneath it. */
  images: MediaRef[];
  tone: "accent" | "lagoon" | "savannah" | "coast" | "night";
};

export const stays: Stay[] = [
  {
    slug: "cotonou-marina",
    name: { en: "A five-star hotel on the marina", fr: "Un cinq étoiles sur la marina" },
    place: { en: "Cotonou", fr: "Cotonou" },
    pitch: {
      en: "The first and last night of most journeys, with the Atlantic on one side and the lagoon on the other.",
      fr: "La première et la dernière nuit de la plupart des voyages, l'Atlantique d'un côté, la lagune de l'autre.",
    },
    body: {
      en: "Terraced stone balconies over a long pool, a lobby hung with Beninese painting and sculpture, a bar under a glass chandelier, a spa and tennis courts. Close enough to the airport to arrive late and leave early without losing the day.",
      fr: "Des balcons de pierre en terrasses au-dessus d'une longue piscine, un hall habillé de peinture et de sculpture béninoises, un bar sous un lustre de verre, un spa et des courts de tennis. Assez près de l'aéroport pour arriver tard et partir tôt sans perdre la journée.",
    },
    images: [
      { file: "stay-cotonou-marina.jpg", width: 1500, height: 1125, alt: { en: "Stone terraces of the hotel above its long turquoise pool", fr: "Les terrasses de pierre de l'hôtel au-dessus de sa longue piscine turquoise" } },
      { file: "stay-cotonou-lobby.jpg", width: 1500, height: 1125, alt: { en: "The lobby, its shelving lit and hung with Beninese art", fr: "Le hall, ses étagères éclairées et garnies d'art béninois" } },
      { file: "stay-cotonou-bar.jpg", width: 1500, height: 1125, alt: { en: "The bar under a glass chandelier, green velvet seating", fr: "Le bar sous un lustre de verre, banquettes de velours vert" } },
      { file: "stay-cotonou-tennis.jpg", width: 1500, height: 1125, alt: { en: "A tennis court in front of the hotel, palms behind", fr: "Un court de tennis devant l'hôtel, palmiers en arrière-plan" } },
      { file: "stay-cotonou-pool.jpg", width: 1500, height: 838, alt: { en: "An afternoon by the pool", fr: "Un après-midi au bord de la piscine" } },
    ],
    tone: "coast",
  },
  {
    slug: "lagoon-lodge",
    name: { en: "A lodge over the water", fr: "Un lodge au-dessus de l'eau" },
    place: { en: "The lagoons", fr: "Les lagunes" },
    pitch: {
      en: "Wooden decks on stilts, a shower under the trees, pirogues at the step.",
      fr: "Des pontons en bois sur pilotis, une douche sous les arbres, des pirogues au pied des marches.",
    },
    body: {
      en: "Small lodges built out over the lagoon, where the day starts with fishermen going past and ends with the water gone still. Rooms are simple and cool; the food is grilled fish and what the market had that morning.",
      fr: "De petits lodges bâtis sur la lagune, où la journée commence avec le passage des pêcheurs et finit quand l'eau s'est immobilisée. Les chambres sont simples et fraîches ; à table, du poisson grillé et ce que le marché offrait le matin.",
    },
    images: [
      { file: "stay-lagoon-lodge.jpg", width: 1170, height: 780, alt: { en: "A wooden deck over the lagoon with parasols and loungers", fr: "Un ponton en bois sur la lagune, parasols et transats" } },
      { file: "stay-lagoon-channel.jpg", width: 1500, height: 1058, alt: { en: "A pirogue on a palm-lined channel, from above", fr: "Une pirogue sur un chenal bordé de palmiers, vue du ciel" } },
    ],
    tone: "lagoon",
  },
  {
    slug: "ouidah-guesthouse",
    name: { en: "A guesthouse with a courtyard", fr: "Une maison d'hôtes avec cour" },
    place: { en: "Ouidah", fr: "Ouidah" },
    pitch: {
      en: "A quiet house a short walk from the Route des Esclaves, run by a family.",
      fr: "Une maison calme à quelques minutes à pied de la Route des Esclaves, tenue par une famille.",
    },
    body: {
      en: "Red earth, a mango tree, a long table where dinner is cooked for the house. Rooms open onto the courtyard. This is where the Return journey sleeps, because the days are heavy and the evenings should not be.",
      fr: "De la terre rouge, un manguier, une longue table où l'on cuisine pour la maisonnée. Les chambres donnent sur la cour. C'est ici que dort le voyage Retour, parce que les journées sont lourdes et que les soirées ne doivent pas l'être.",
    },
    images: [
      { file: "stay-ouidah-guesthouse.jpg", width: 1500, height: 781, alt: { en: "Two guests reading under a tree in the red-earth courtyard", fr: "Deux voyageuses lisent sous un arbre dans la cour de terre rouge" } },
      { file: "stay-ouidah-salon.jpg", width: 1500, height: 763, alt: { en: "Friends dancing in the guesthouse living room", fr: "Des amis dansent dans le salon de la maison d'hôtes" } },
    ],
    tone: "accent",
  },
  {
    slug: "tata-somba",
    name: { en: "A night in a Tata Somba", fr: "Une nuit dans un Tata Somba" },
    place: { en: "The Atakora", fr: "L'Atakora" },
    pitch: {
      en: "The fortified earth houses of Koutammakou, hosted by the family who built theirs.",
      fr: "Les maisons-forteresses en terre du Koutammakou, chez la famille qui a bâti la sienne.",
    },
    body: {
      en: "You sleep on the roof terrace under the granary towers, as the family does in the dry season. Water is drawn, food is cooked on the fire, and the night is the darkest you will have seen. One night, by design.",
      fr: "On dort sur la terrasse du toit sous les greniers, comme la famille en saison sèche. L'eau se tire, le repas se cuit au feu, et la nuit est la plus noire que vous aurez connue. Une seule nuit, c'est voulu.",
    },
    images: [
      { file: "stay-tata-somba.jpg", width: 1600, height: 1067, alt: { en: "A Tata Somba house at dusk", fr: "Un Tata Somba au crépuscule" } },
    ],
    tone: "savannah",
  },
  {
    slug: "pendjari-lodge",
    name: { en: "A lodge inside the park", fr: "Un lodge dans le parc" },
    place: { en: "Pendjari", fr: "Pendjari" },
    pitch: {
      en: "Bungalows by the river, so the first game drive starts at the door.",
      fr: "Des bungalows près de la rivière, pour que le premier safari commence à la porte.",
    },
    body: {
      en: "Inside the park boundary, with the Pendjari river below and the Atakora cliffs behind. Elephants come to the water at dusk. Rooms are fan-cooled and simple; dinner is early because the morning drive is earlier.",
      fr: "À l'intérieur du parc, la rivière Pendjari en contrebas et les falaises de l'Atakora derrière. Les éléphants viennent boire au crépuscule. Chambres simples, ventilées ; on dîne tôt parce que le safari du matin l'est encore plus.",
    },
    images: [
      { file: "stay-pendjari-lodge.jpg", width: 1600, height: 1067, alt: { en: "Lodge bungalows above the Pendjari river", fr: "Les bungalows du lodge au-dessus de la rivière Pendjari" } },
    ],
    tone: "savannah",
  },
  {
    slug: "collines-lodge",
    name: { en: "Under the hills", fr: "Au pied des collines" },
    place: { en: "Dassa-Zoumé", fr: "Dassa-Zoumé" },
    pitch: {
      en: "A small hotel at the foot of the sacred hills, with the rocks lit at sunrise.",
      fr: "Un petit hôtel au pied des collines sacrées, les rochers éclairés au lever du soleil.",
    },
    body: {
      en: "The stopover on the road north: a garden, cold drinks, and the hills of Dassa framed from the terrace. Nothing to do after dark, which is the point after a long day of driving.",
      fr: "L'étape sur la route du nord : un jardin, des boissons fraîches et les collines de Dassa encadrées depuis la terrasse. Rien à faire après la tombée de la nuit, et c'est ce qu'il faut après une longue journée de route.",
    },
    images: [
      { file: "stay-collines.jpg", width: 1600, height: 1067, alt: { en: "The Dassa hills from a hotel terrace", fr: "Les collines de Dassa depuis la terrasse d'un hôtel" } },
    ],
    tone: "accent",
  },
];
