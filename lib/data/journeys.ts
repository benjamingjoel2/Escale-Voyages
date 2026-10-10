/**
 * Placeholder journey data until Sanity is wired in (Phase 5).
 * Prices are per person in FCFA. Shapes mirror the planned Sanity schema.
 */
export type Lang = "en" | "fr";
export type L<T = string> = Record<Lang, T>;

export type JourneyType =
  | "grand"
  | "heritage"
  | "kingdoms"
  | "wildlife"
  | "coast"
  | "festival";

export type Departure = {
  /** ISO date, first day of the journey. */
  start: string;
  /** ISO date, last day. */
  end: string;
  priceXof: number;
  spotsLeft: number;
};

export type ItineraryDay = {
  day: number;
  title: L;
  body: L;
  /** Overnight location. */
  stay?: L;
};

export type Journey = {
  slug: string;
  title: L;
  pitch: L;
  summary: L;
  season: L;
  /** Departure months, 1–12. */
  months: number[];
  days: number;
  priceXof: number;
  groupMax: number;
  type: JourneyType;
  /** Coordinates of the journey's anchor destination, shown on the card. */
  coords: string;
  tone: "accent" | "lagoon" | "savannah" | "coast" | "night";
  image: { file: string; width: number; height: number };
  heroImage: { file: string; width: number; height: number };
  highlights: L<string[]>;
  itinerary: ItineraryDay[];
  /** Destination slugs in the order visited. */
  stops: string[];
  included: L<string[]>;
  excluded: L<string[]>;
  departures: Departure[];
  faq: { q: L; a: L }[];
  gallery: { file: string; width: number; height: number; alt: L }[];
};

const INCLUDED_COMMON: L<string[]> = {
  en: [
    "Private guide throughout, English and French speaking",
    "All road transport in an air-conditioned 4×4 with driver",
    "Accommodation as described, breakfast included",
    "All entry fees, permits and ceremony contributions",
    "Airport meeting and transfers in Cotonou",
    "24-hour WhatsApp line to our Cotonou office",
  ],
  fr: [
    "Guide privé francophone et anglophone pendant tout le voyage",
    "Tous les transports routiers en 4×4 climatisé avec chauffeur",
    "Hébergement tel que décrit, petit-déjeuner inclus",
    "Droits d'entrée, permis et contributions aux cérémonies",
    "Accueil à l'aéroport et transferts à Cotonou",
    "Ligne WhatsApp 24h/24 vers notre bureau de Cotonou",
  ],
};

const EXCLUDED_COMMON: L<string[]> = {
  en: [
    "International flights",
    "E-visa fees",
    "Travel insurance, which we require",
    "Lunches and dinners unless stated",
    "Tips and personal purchases",
  ],
  fr: [
    "Vols internationaux",
    "Frais d'e-visa",
    "Assurance voyage, obligatoire",
    "Déjeuners et dîners sauf mention contraire",
    "Pourboires et achats personnels",
  ],
};

const FAQ_COMMON: Journey["faq"] = [
  {
    q: { en: "How do I pay?", fr: "Comment payer ?" },
    a: {
      en: "A 30% deposit confirms your dates. Pay in FCFA by MTN or Moov mobile money, or in euros by card. The balance is due 45 days before departure.",
      fr: "Un acompte de 30 % confirme vos dates. Réglez en FCFA par mobile money MTN ou Moov, ou en euros par carte. Le solde est dû 45 jours avant le départ.",
    },
  },
  {
    q: { en: "Can I travel on other dates?", fr: "Puis-je partir à d'autres dates ?" },
    a: {
      en: "Yes. Every journey runs privately on request, from two travellers. Private departures carry a small supplement outside the dry season.",
      fr: "Oui. Chaque voyage se fait en privé sur demande, à partir de deux voyageurs. Les départs privés comportent un petit supplément hors saison sèche.",
    },
  },
  {
    q: { en: "Is Benin safe?", fr: "Le Bénin est-il sûr ?" },
    a: {
      en: "The south and centre are calm and welcoming. For the far north we follow the latest government advice and adapt routes with our local partners; we will tell you plainly if a leg has to change.",
      fr: "Le sud et le centre sont calmes et accueillants. Pour l'extrême nord, nous suivons les recommandations officielles et adaptons les itinéraires avec nos partenaires locaux ; nous vous le dirons clairement si une étape doit changer.",
    },
  },
];

export const journeys: Journey[] = [
  {
    slug: "the-twelve-kings",
    title: { en: "The Twelve Kings", fr: "Les Douze Rois" },
    pitch: {
      en: "Abomey's palaces and bas-reliefs, then the road the kingdom took to the sea.",
      fr: "Les palais et bas-reliefs d'Abomey, puis la route que le royaume a prise vers la mer.",
    },
    summary: {
      en: "Seven days through the heart of the Kingdom of Dahomey: the palaces of Abomey, the sacred hills of Dassa, the royal court of Porto-Novo and the port of Ouidah, where the kingdom met the Atlantic. Told by guides whose families served the court.",
      fr: "Sept jours au cœur du royaume du Dahomey : les palais d'Abomey, les collines sacrées de Dassa, la cour royale de Porto-Novo et le port de Ouidah, où le royaume a rencontré l'Atlantique. Racontés par des guides dont les familles ont servi la cour.",
    },
    season: { en: "Nov – Feb", fr: "Nov. – fév." },
    months: [11, 12, 1, 2],
    days: 7,
    priceXof: 1_450_000,
    groupMax: 8,
    type: "kingdoms",
    coords: "7°11′ N, 1°59′ E",
    tone: "accent",
    image: { file: "journey-kings.jpg", width: 1600, height: 2133 },
    heroImage: { file: "journey-kings-hero.jpg", width: 2800, height: 1600 },
    highlights: {
      en: [
        "Private visit of the Abomey palaces with a descendant of the royal guard",
        "The bas-reliefs read symbol by symbol: chameleon, lion, shark",
        "Sunrise on the sacred hills of Dassa-Zoumé",
        "The Honmè palace and Afro-Brazilian quarter of Porto-Novo",
        "The Route des Esclaves walked end to end in Ouidah",
      ],
      fr: [
        "Visite privée des palais d'Abomey avec un descendant de la garde royale",
        "Les bas-reliefs lus symbole par symbole : caméléon, lion, requin",
        "Lever du soleil sur les collines sacrées de Dassa-Zoumé",
        "Le palais Honmè et le quartier afro-brésilien de Porto-Novo",
        "La Route des Esclaves parcourue d'un bout à l'autre à Ouidah",
      ],
    },
    itinerary: [
      { day: 1, title: { en: "Arrive in Cotonou", fr: "Arrivée à Cotonou" }, body: { en: "We meet you at the airport. Dinner by the lagoon and a briefing on the week.", fr: "Nous vous accueillons à l'aéroport. Dîner au bord de la lagune et présentation de la semaine." }, stay: { en: "Cotonou", fr: "Cotonou" } },
      { day: 2, title: { en: "Porto-Novo, the quiet capital", fr: "Porto-Novo, la capitale tranquille" }, body: { en: "The Honmè royal palace, the Great Mosque in its Brazilian baroque, and the ethnographic museum. Evening drive north.", fr: "Le palais royal Honmè, la Grande Mosquée de style baroque brésilien et le musée ethnographique. Route vers le nord en fin de journée." }, stay: { en: "Abomey", fr: "Abomey" } },
      { day: 3, title: { en: "The palaces of Abomey", fr: "Les palais d'Abomey" }, body: { en: "A full day inside the royal compound: the palaces of Ghezo and Glele, the bas-reliefs, the tombs. Lunch with a family of court artisans.", fr: "Une journée entière dans l'enceinte royale : les palais de Ghézo et de Glélé, les bas-reliefs, les tombeaux. Déjeuner chez une famille d'artisans de la cour." }, stay: { en: "Abomey", fr: "Abomey" } },
      { day: 4, title: { en: "Weavers and the Dassa hills", fr: "Tisserands et collines de Dassa" }, body: { en: "The appliqué workshops of Abomey, then the sacred hills of Dassa-Zoumé and the cave of the Virgin.", fr: "Les ateliers d'appliqués d'Abomey, puis les collines sacrées de Dassa-Zoumé et la grotte de la Vierge." }, stay: { en: "Dassa-Zoumé", fr: "Dassa-Zoumé" } },
      { day: 5, title: { en: "South to Ouidah", fr: "Vers le sud, Ouidah" }, body: { en: "The road the slave caravans took. Afternoon in Ouidah: the Portuguese fort, the Python Temple, the sacred forest of Kpassè.", fr: "La route des caravanes d'esclaves. Après-midi à Ouidah : le fort portugais, le Temple des Pythons, la forêt sacrée de Kpassè." }, stay: { en: "Ouidah", fr: "Ouidah" } },
      { day: 6, title: { en: "The Route des Esclaves", fr: "La Route des Esclaves" }, body: { en: "Four kilometres walked slowly from the auction square to the Door of No Return, with time to sit. Afternoon free on the beach.", fr: "Quatre kilomètres parcourus lentement, de la place des enchères à la Porte du Non-Retour, avec le temps de s'asseoir. Après-midi libre sur la plage." }, stay: { en: "Ouidah", fr: "Ouidah" } },
      { day: 7, title: { en: "Ganvié and departure", fr: "Ganvié et départ" }, body: { en: "Dawn pirogue through the stilt town of Ganvié, then transfer to the airport.", fr: "Pirogue à l'aube à travers la cité lacustre de Ganvié, puis transfert à l'aéroport." } },
    ],
    stops: ["porto-novo", "abomey", "ouidah", "ganvie"],
    included: INCLUDED_COMMON,
    excluded: EXCLUDED_COMMON,
    departures: [
      { start: "2026-11-14", end: "2026-11-20", priceXof: 1_450_000, spotsLeft: 6 },
      { start: "2026-12-05", end: "2026-12-11", priceXof: 1_450_000, spotsLeft: 4 },
      { start: "2027-01-16", end: "2027-01-22", priceXof: 1_490_000, spotsLeft: 8 },
      { start: "2027-02-13", end: "2027-02-19", priceXof: 1_490_000, spotsLeft: 8 },
    ],
    faq: FAQ_COMMON,
    gallery: [
      { file: "kings-01.jpg", width: 1600, height: 1067, alt: { en: "Bas-relief on a palace wall in Abomey", fr: "Bas-relief sur un mur de palais à Abomey" } },
      { file: "kings-02.jpg", width: 1067, height: 1600, alt: { en: "Appliqué cloth being sewn", fr: "Tissu appliqué en cours de couture" } },
      { file: "kings-03.jpg", width: 1600, height: 1067, alt: { en: "Dassa hills at sunrise", fr: "Collines de Dassa au lever du soleil" } },
      { file: "kings-04.jpg", width: 1600, height: 1067, alt: { en: "The Door of No Return, Ouidah", fr: "La Porte du Non-Retour, Ouidah" } },
    ],
  },
  {
    slug: "return",
    title: { en: "Return", fr: "Retour" },
    pitch: {
      en: "Ouidah, the Route des Esclaves and the Door of No Return, walked slowly with people who can hold the silence.",
      fr: "Ouidah, la Route des Esclaves et la Porte du Non-Retour, parcourues lentement avec des gens qui savent tenir le silence.",
    },
    summary: {
      en: "Five days built for travellers of African descent coming back. Ouidah's memorial route, the archives, the Vodun communities that kept the memory, and, where records allow, the villages your family came from. Paced for feeling, not sightseeing.",
      fr: "Cinq jours conçus pour les voyageurs d'ascendance africaine qui reviennent. La route mémorielle de Ouidah, les archives, les communautés vodun gardiennes de la mémoire et, lorsque les archives le permettent, les villages d'origine de votre famille. Un rythme fait pour ressentir, pas pour visiter.",
    },
    season: { en: "Year round", fr: "Toute l'année" },
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    days: 5,
    priceXof: 980_000,
    groupMax: 6,
    type: "heritage",
    coords: "6°22′ N, 2°05′ E",
    tone: "lagoon",
    image: { file: "journey-return.jpg", width: 1600, height: 2133 },
    heroImage: { file: "journey-return-hero.jpg", width: 2800, height: 1600 },
    highlights: {
      en: [
        "The Route des Esclaves walked with a historian from Ouidah",
        "A private naming and welcome ceremony, if you wish one",
        "Time in the archives with our researcher before and during the trip",
        "A day in a village linked to your records, where the records allow",
        "The Door of No Return at dawn, alone",
      ],
      fr: [
        "La Route des Esclaves avec un historien de Ouidah",
        "Une cérémonie privée d'accueil et de nomination, si vous le souhaitez",
        "Du temps aux archives avec notre chercheur avant et pendant le voyage",
        "Une journée dans un village lié à vos archives, lorsque c'est possible",
        "La Porte du Non-Retour à l'aube, seul",
      ],
    },
    itinerary: [
      { day: 1, title: { en: "Arrive, and breathe", fr: "Arriver, respirer" }, body: { en: "Airport meeting, a quiet guesthouse in Ouidah, dinner with your guide and researcher to set the pace of the week.", fr: "Accueil à l'aéroport, maison d'hôtes paisible à Ouidah, dîner avec votre guide et notre chercheur pour poser le rythme de la semaine." }, stay: { en: "Ouidah", fr: "Ouidah" } },
      { day: 2, title: { en: "The memorial route", fr: "La route mémorielle" }, body: { en: "The Portuguese fort and museum, then the Route des Esclaves on foot: the Tree of Forgetting, the Zomachi memorial, the Door of No Return.", fr: "Le fort portugais et son musée, puis la Route des Esclaves à pied : l'Arbre de l'Oubli, le mémorial Zomachi, la Porte du Non-Retour." }, stay: { en: "Ouidah", fr: "Ouidah" } },
      { day: 3, title: { en: "The keepers of memory", fr: "Les gardiens de la mémoire" }, body: { en: "A morning with a Vodun community that traces its lineage to the returnees from Brazil. Afternoon in the Afro-Brazilian houses of Ouidah and Porto-Novo.", fr: "Une matinée avec une communauté vodun qui fait remonter sa lignée aux retornados du Brésil. Après-midi dans les maisons afro-brésiliennes de Ouidah et de Porto-Novo." }, stay: { en: "Ouidah", fr: "Ouidah" } },
      { day: 4, title: { en: "Your line, where it leads", fr: "Votre lignée, là où elle mène" }, body: { en: "A day shaped by your records: a village in the interior, a family name, a shrine. Where no records exist, a day on the Abomey road with its history instead.", fr: "Une journée façonnée par vos archives : un village de l'intérieur, un nom de famille, un sanctuaire. En l'absence d'archives, une journée sur la route d'Abomey et son histoire." }, stay: { en: "Ouidah", fr: "Ouidah" } },
      { day: 5, title: { en: "Dawn at the door", fr: "L'aube à la porte" }, body: { en: "The beach at first light, then breakfast and departure, or onward to another journey.", fr: "La plage aux premières lueurs, puis petit-déjeuner et départ, ou poursuite vers un autre voyage." } },
    ],
    stops: ["ouidah", "porto-novo"],
    included: {
      en: [...INCLUDED_COMMON.en, "Pre-trip archival research session (2 hours, online)"],
      fr: [...INCLUDED_COMMON.fr, "Séance de recherche d'archives avant le voyage (2 h, en ligne)"],
    },
    excluded: EXCLUDED_COMMON,
    departures: [
      { start: "2026-11-07", end: "2026-11-11", priceXof: 980_000, spotsLeft: 4 },
      { start: "2026-12-12", end: "2026-12-16", priceXof: 980_000, spotsLeft: 6 },
      { start: "2027-01-23", end: "2027-01-27", priceXof: 980_000, spotsLeft: 6 },
      { start: "2027-02-20", end: "2027-02-24", priceXof: 980_000, spotsLeft: 6 },
      { start: "2027-03-13", end: "2027-03-17", priceXof: 980_000, spotsLeft: 6 },
    ],
    faq: [
      {
        q: { en: "I have DNA results but no names. Can you still help?", fr: "J'ai des résultats ADN mais aucun nom. Pouvez-vous quand même m'aider ?" },
        a: {
          en: "Yes. Regional DNA matches point to language groups and areas; our researcher works from there with the Ouidah and Abomey archives. We are honest about what can and cannot be known.",
          fr: "Oui. Les correspondances ADN régionales indiquent des groupes linguistiques et des zones ; notre chercheur part de là avec les archives de Ouidah et d'Abomey. Nous sommes honnêtes sur ce qui peut être su ou non.",
        },
      },
      ...FAQ_COMMON,
    ],
    gallery: [
      { file: "return-01.jpg", width: 1600, height: 1067, alt: { en: "The Door of No Return at dawn", fr: "La Porte du Non-Retour à l'aube" } },
      { file: "return-02.jpg", width: 1067, height: 1600, alt: { en: "Zomachi memorial, Ouidah", fr: "Mémorial Zomachi, Ouidah" } },
      { file: "return-03.jpg", width: 1600, height: 1067, alt: { en: "Afro-Brazilian house, Porto-Novo", fr: "Maison afro-brésilienne, Porto-Novo" } },
      { file: "return-04.jpg", width: 1600, height: 1067, alt: { en: "Archive pages in the Ouidah museum", fr: "Pages d'archives au musée de Ouidah" } },
    ],
  },
  {
    slug: "north-to-pendjari",
    title: { en: "North to Pendjari", fr: "Vers le nord, la Pendjari" },
    pitch: {
      en: "Tata Somba country, the Atakora hills and West Africa's last great lion and elephant park.",
      fr: "Le pays des Tata Somba, les collines de l'Atakora et le dernier grand parc aux lions et éléphants d'Afrique de l'Ouest.",
    },
    summary: {
      en: "Nine days from the lagoon to the savannah. The road north through Abomey and the Collines, the fortified Tata Somba houses of the Atakora, and three full days of safari in Pendjari National Park with its lions, elephants and the Tanougou falls.",
      fr: "Neuf jours de la lagune à la savane. La route du nord par Abomey et les Collines, les maisons-forteresses Tata Somba de l'Atakora, et trois journées complètes de safari dans le parc national de la Pendjari, avec ses lions, ses éléphants et les cascades de Tanougou.",
    },
    season: { en: "Dec – Apr", fr: "Déc. – avr." },
    months: [12, 1, 2, 3, 4],
    days: 9,
    priceXof: 2_300_000,
    groupMax: 6,
    type: "wildlife",
    coords: "10°54′ N, 1°33′ E",
    tone: "savannah",
    image: { file: "journey-pendjari.jpg", width: 1600, height: 2133 },
    heroImage: { file: "journey-pendjari-hero.jpg", width: 2800, height: 1600 },
    highlights: {
      en: [
        "Three full days of game drives in Pendjari with a park-trained guide",
        "A night inside a Tata Somba, hosted by the family",
        "Swimming at the Tanougou waterfalls",
        "The Atakora hills and the Koutammakou landscape",
        "Abomey and the Dassa hills on the way north",
      ],
      fr: [
        "Trois journées complètes de safari dans la Pendjari avec un guide formé par le parc",
        "Une nuit dans un Tata Somba, chez l'habitant",
        "Baignade aux cascades de Tanougou",
        "Les collines de l'Atakora et le paysage du Koutammakou",
        "Abomey et les collines de Dassa sur la route du nord",
      ],
    },
    itinerary: [
      { day: 1, title: { en: "Arrive in Cotonou", fr: "Arrivée à Cotonou" }, body: { en: "Airport meeting, a night by the lagoon and an early start the next day.", fr: "Accueil à l'aéroport, nuit au bord de la lagune et départ matinal le lendemain." }, stay: { en: "Cotonou", fr: "Cotonou" } },
      { day: 2, title: { en: "Abomey", fr: "Abomey" }, body: { en: "The royal palaces, then the road to the Collines.", fr: "Les palais royaux, puis la route vers les Collines." }, stay: { en: "Dassa-Zoumé", fr: "Dassa-Zoumé" } },
      { day: 3, title: { en: "The long road north", fr: "La longue route du nord" }, body: { en: "Through Savalou and Djougou to Natitingou, with stops in market towns. About six hours of driving.", fr: "Par Savalou et Djougou jusqu'à Natitingou, avec des haltes dans les villes de marché. Environ six heures de route." }, stay: { en: "Natitingou", fr: "Natitingou" } },
      { day: 4, title: { en: "Tata Somba country", fr: "Le pays des Tata Somba" }, body: { en: "The fortified houses of the Atakora and a night hosted inside one of them.", fr: "Les maisons-forteresses de l'Atakora et une nuit dans l'une d'elles." }, stay: { en: "Koussoukoingou", fr: "Koussoukoingou" } },
      { day: 5, title: { en: "Into Pendjari", fr: "Entrée dans la Pendjari" }, body: { en: "Tanougou falls for a swim, then through the Batia gate. Evening game drive.", fr: "Baignade aux cascades de Tanougou, puis entrée par la porte de Batia. Safari en fin de journée." }, stay: { en: "Pendjari lodge", fr: "Lodge de la Pendjari" } },
      { day: 6, title: { en: "Pendjari, full day", fr: "Pendjari, journée complète" }, body: { en: "Dawn and dusk drives along the Pendjari river: elephants, buffalo, hippos, and the lions when they allow it.", fr: "Safaris à l'aube et au crépuscule le long de la rivière Pendjari : éléphants, buffles, hippopotames, et les lions quand ils le veulent bien." }, stay: { en: "Pendjari lodge", fr: "Lodge de la Pendjari" } },
      { day: 7, title: { en: "Pendjari, full day", fr: "Pendjari, journée complète" }, body: { en: "The Mare Bali and the northern tracks. A night walk with the rangers, conditions permitting.", fr: "La mare Bali et les pistes du nord. Marche nocturne avec les écogardes, si les conditions le permettent." }, stay: { en: "Pendjari lodge", fr: "Pendjari lodge" } },
      { day: 8, title: { en: "Natitingou and the flight south", fr: "Natitingou et le retour vers le sud" }, body: { en: "Morning drive out of the park. Flight or drive back to Cotonou depending on the schedule.", fr: "Sortie du parc dans la matinée. Vol ou route vers Cotonou selon les horaires." }, stay: { en: "Cotonou", fr: "Cotonou" } },
      { day: 9, title: { en: "Departure", fr: "Départ" }, body: { en: "Transfer to the airport.", fr: "Transfert à l'aéroport." } },
    ],
    stops: ["abomey", "natitingou", "pendjari"],
    included: {
      en: [...INCLUDED_COMMON.en, "Park fees and three days of game drives in a park vehicle"],
      fr: [...INCLUDED_COMMON.fr, "Droits d'entrée au parc et trois jours de safari en véhicule du parc"],
    },
    excluded: EXCLUDED_COMMON,
    departures: [
      { start: "2026-12-19", end: "2026-12-27", priceXof: 2_300_000, spotsLeft: 4 },
      { start: "2027-01-30", end: "2027-02-07", priceXof: 2_300_000, spotsLeft: 6 },
      { start: "2027-02-27", end: "2027-03-07", priceXof: 2_300_000, spotsLeft: 6 },
      { start: "2027-03-20", end: "2027-03-28", priceXof: 2_200_000, spotsLeft: 6 },
    ],
    faq: [
      {
        q: { en: "Will we see lions?", fr: "Verrons-nous des lions ?" },
        a: {
          en: "Pendjari holds one of the last lion populations in West Africa and sightings are good from January to April, but it is a wild park, not a zoo. Elephants, buffalo, hippos and antelope are near certain.",
          fr: "La Pendjari abrite l'une des dernières populations de lions d'Afrique de l'Ouest et les observations sont bonnes de janvier à avril, mais c'est un parc sauvage, pas un zoo. Éléphants, buffles, hippopotames et antilopes sont quasi certains.",
        },
      },
      ...FAQ_COMMON,
    ],
    gallery: [
      { file: "pendjari-01.jpg", width: 1600, height: 1067, alt: { en: "Elephants at the Pendjari river", fr: "Éléphants à la rivière Pendjari" } },
      { file: "pendjari-02.jpg", width: 1067, height: 1600, alt: { en: "A Tata Somba house", fr: "Une maison Tata Somba" } },
      { file: "pendjari-03.jpg", width: 1600, height: 1067, alt: { en: "Tanougou waterfalls", fr: "Cascades de Tanougou" } },
      { file: "pendjari-04.jpg", width: 1600, height: 1067, alt: { en: "Atakora hills at dusk", fr: "Collines de l'Atakora au crépuscule" } },
    ],
  },
  {
    slug: "lagoon-and-coast",
    title: { en: "Lagoon & Coast", fr: "Lagune & Côte" },
    pitch: {
      en: "Ganvié by pirogue at dawn, Porto-Novo's Afro-Brazilian streets, Grand-Popo's empty beach.",
      fr: "Ganvié en pirogue à l'aube, les rues afro-brésiliennes de Porto-Novo, la plage déserte de Grand-Popo.",
    },
    summary: {
      en: "Four slow days along the water. The stilt town of Ganvié at first light, the quiet capital Porto-Novo, the mouth of the Mono river and the palm beach of Grand-Popo. A short journey on its own, or the gentle end to a longer one.",
      fr: "Quatre jours lents au fil de l'eau. La cité lacustre de Ganvié aux premières lueurs, la capitale tranquille Porto-Novo, l'embouchure du Mono et la plage de cocotiers de Grand-Popo. Un court voyage en soi, ou la fin douce d'un plus long.",
    },
    season: { en: "Year round", fr: "Toute l'année" },
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    days: 4,
    priceXof: 620_000,
    groupMax: 8,
    type: "coast",
    coords: "6°28′ N, 2°25′ E",
    tone: "coast",
    image: { file: "journey-lagoon.jpg", width: 1600, height: 2133 },
    heroImage: { file: "journey-lagoon-hero.jpg", width: 2800, height: 1600 },
    highlights: {
      en: [
        "Ganvié at dawn by pirogue, before the day boats",
        "Porto-Novo's Afro-Brazilian houses and the Honmè palace",
        "The Bouche du Roy, where the Mono meets the sea",
        "A night in Grand-Popo with nothing to do",
      ],
      fr: [
        "Ganvié à l'aube en pirogue, avant les bateaux de la journée",
        "Les maisons afro-brésiliennes de Porto-Novo et le palais Honmè",
        "La Bouche du Roy, où le Mono rencontre la mer",
        "Une nuit à Grand-Popo sans rien à faire",
      ],
    },
    itinerary: [
      { day: 1, title: { en: "Cotonou and Porto-Novo", fr: "Cotonou et Porto-Novo" }, body: { en: "Airport meeting, the Dantokpa market if you have the energy, then the road to Porto-Novo.", fr: "Accueil à l'aéroport, le marché Dantokpa si vous en avez l'énergie, puis la route de Porto-Novo." }, stay: { en: "Porto-Novo", fr: "Porto-Novo" } },
      { day: 2, title: { en: "Ganvié at dawn", fr: "Ganvié à l'aube" }, body: { en: "On the water before sunrise. Breakfast in the stilt town, then west along the coast road.", fr: "Sur l'eau avant le lever du soleil. Petit-déjeuner dans la cité lacustre, puis la route côtière vers l'ouest." }, stay: { en: "Grand-Popo", fr: "Grand-Popo" } },
      { day: 3, title: { en: "The Mono and the sea", fr: "Le Mono et la mer" }, body: { en: "Boat to the Bouche du Roy through the mangroves. Afternoon on the beach.", fr: "En bateau jusqu'à la Bouche du Roy à travers la mangrove. Après-midi sur la plage." }, stay: { en: "Grand-Popo", fr: "Grand-Popo" } },
      { day: 4, title: { en: "Ouidah and departure", fr: "Ouidah et départ" }, body: { en: "The Python Temple and the beach at Ouidah on the way back to the airport.", fr: "Le Temple des Pythons et la plage de Ouidah sur le chemin de l'aéroport." } },
    ],
    stops: ["porto-novo", "ganvie", "grand-popo", "ouidah"],
    included: INCLUDED_COMMON,
    excluded: EXCLUDED_COMMON,
    departures: [
      { start: "2026-11-21", end: "2026-11-24", priceXof: 620_000, spotsLeft: 8 },
      { start: "2026-12-26", end: "2026-12-29", priceXof: 650_000, spotsLeft: 5 },
      { start: "2027-01-09", end: "2027-01-12", priceXof: 620_000, spotsLeft: 8 },
      { start: "2027-02-06", end: "2027-02-09", priceXof: 620_000, spotsLeft: 8 },
      { start: "2027-03-06", end: "2027-03-09", priceXof: 620_000, spotsLeft: 8 },
    ],
    faq: FAQ_COMMON,
    gallery: [
      { file: "lagoon-01.jpg", width: 1600, height: 1067, alt: { en: "Pirogues at Ganvié at dawn", fr: "Pirogues à Ganvié à l'aube" } },
      { file: "lagoon-02.jpg", width: 1067, height: 1600, alt: { en: "Mangroves on the Mono", fr: "Mangrove sur le Mono" } },
      { file: "lagoon-03.jpg", width: 1600, height: 1067, alt: { en: "Grand-Popo beach", fr: "Plage de Grand-Popo" } },
    ],
  },
  {
    slug: "vodun-days",
    title: { en: "Vodun Days", fr: "Vodun Days" },
    pitch: {
      en: "Three days of ceremony in Ouidah with the people it belongs to, then the coast to recover.",
      fr: "Trois jours de cérémonies à Ouidah avec ceux à qui elles appartiennent, puis la côte pour reprendre souffle.",
    },
    summary: {
      en: "Every January, Ouidah becomes the centre of the Vodun world for three days around the 10 January public holiday. We attend as guests of a temple, with a guide who explains what you are seeing and what you should not photograph. Then two days on the coast to let it settle.",
      fr: "Chaque janvier, Ouidah devient pendant trois jours le centre du monde vodun autour du jour férié du 10 janvier. Nous y assistons comme invités d'un temple, avec un guide qui explique ce que vous voyez et ce qu'il ne faut pas photographier. Puis deux jours sur la côte pour laisser reposer.",
    },
    season: { en: "January", fr: "Janvier" },
    months: [1],
    days: 6,
    priceXof: 1_250_000,
    groupMax: 8,
    type: "festival",
    coords: "6°22′ N, 2°05′ E",
    tone: "night",
    image: { file: "journey-vodun-days.jpg", width: 1600, height: 2133 },
    heroImage: { file: "journey-vodun-days-hero.jpg", width: 2800, height: 1600 },
    highlights: {
      en: [
        "Three days of Vodun Days as guests of an Ouidah temple",
        "The great ceremony on the beach and the processions of the 10th",
        "Egungun and Zangbeto masquerades explained, not consumed",
        "The Route des Esclaves walked on a quiet morning",
        "Two days in Grand-Popo to come down",
      ],
      fr: [
        "Trois jours de Vodun Days en invités d'un temple de Ouidah",
        "La grande cérémonie sur la plage et les processions du 10",
        "Les mascarades Egungun et Zangbéto expliquées, pas consommées",
        "La Route des Esclaves par une matinée calme",
        "Deux jours à Grand-Popo pour redescendre",
      ],
    },
    itinerary: [
      { day: 1, title: { en: "Arrive in Ouidah", fr: "Arrivée à Ouidah" }, body: { en: "Airport meeting and the road to Ouidah. Evening briefing on protocol: dress, photography, offerings.", fr: "Accueil à l'aéroport et route vers Ouidah. Briefing du soir sur le protocole : tenue, photographie, offrandes." }, stay: { en: "Ouidah", fr: "Ouidah" } },
      { day: 2, title: { en: "Opening", fr: "Ouverture" }, body: { en: "The Route des Esclaves in the morning. The opening evening on the beach.", fr: "La Route des Esclaves le matin. La soirée d'ouverture sur la plage." }, stay: { en: "Ouidah", fr: "Ouidah" } },
      { day: 3, title: { en: "The great ceremony", fr: "La grande cérémonie" }, body: { en: "A full day with our host temple, then the great ceremony at the Door of No Return.", fr: "Une journée entière avec notre temple hôte, puis la grande cérémonie à la Porte du Non-Retour." }, stay: { en: "Ouidah", fr: "Ouidah" } },
      { day: 4, title: { en: "10 January", fr: "10 janvier" }, body: { en: "The processions and the masquerades. We leave when it is right to leave.", fr: "Les processions et les mascarades. Nous partons quand il est juste de partir." }, stay: { en: "Grand-Popo", fr: "Grand-Popo" } },
      { day: 5, title: { en: "Grand-Popo", fr: "Grand-Popo" }, body: { en: "The beach, the Mono by boat, nothing scheduled.", fr: "La plage, le Mono en bateau, rien de prévu." }, stay: { en: "Grand-Popo", fr: "Grand-Popo" } },
      { day: 6, title: { en: "Departure", fr: "Départ" }, body: { en: "Transfer to the airport.", fr: "Transfert à l'aéroport." } },
    ],
    stops: ["ouidah", "grand-popo"],
    included: INCLUDED_COMMON,
    excluded: EXCLUDED_COMMON,
    departures: [
      { start: "2027-01-07", end: "2027-01-12", priceXof: 1_250_000, spotsLeft: 8 },
    ],
    faq: [
      {
        q: { en: "Are the 2027 dates confirmed?", fr: "Les dates 2027 sont-elles confirmées ?" },
        a: {
          en: "The festival is set by the government around the 10 January holiday; the 2026 edition ran 8 to 10 January. We hold the dates above and adjust by a day or two once the programme is published.",
          fr: "Le festival est fixé par le gouvernement autour du jour férié du 10 janvier ; l'édition 2026 s'est tenue du 8 au 10 janvier. Nous retenons les dates ci-dessus et ajustons d'un jour ou deux dès la publication du programme.",
        },
      },
      ...FAQ_COMMON,
    ],
    gallery: [
      { file: "vodun-01.jpg", width: 1600, height: 1067, alt: { en: "Ceremony on the beach at Ouidah", fr: "Cérémonie sur la plage de Ouidah" } },
      { file: "vodun-02.jpg", width: 1067, height: 1600, alt: { en: "Zangbeto masquerade", fr: "Mascarade Zangbéto" } },
      { file: "vodun-03.jpg", width: 1600, height: 1067, alt: { en: "Offerings at a temple", fr: "Offrandes dans un temple" } },
    ],
  },
  {
    slug: "grand-tour-of-benin",
    title: { en: "The Grand Tour of Benin", fr: "Le Grand Tour du Bénin" },
    pitch: {
      en: "Fourteen days, the whole country: the coast, the kingdoms, the Collines, the Atakora and both national parks.",
      fr: "Quatorze jours, tout le pays : la côte, les royaumes, les Collines, l'Atakora et les deux parcs nationaux.",
    },
    summary: {
      en: "The journey we built the company for. Two weeks from the Atlantic to the Niger river: Ganvié and Ouidah, the palaces of Abomey and the masks of Kétou, the sacred hills of Dassa, the Bariba horsemen of Parakou, the Tata Somba of the Atakora, Pendjari and the W. Nobody else sells it, because nobody else drives it.",
      fr: "Le voyage pour lequel nous avons créé la maison. Deux semaines de l'Atlantique au fleuve Niger : Ganvié et Ouidah, les palais d'Abomey et les masques de Kétou, les collines sacrées de Dassa, les cavaliers bariba de Parakou, les Tata Somba de l'Atakora, la Pendjari et le W. Personne d'autre ne le vend, parce que personne d'autre ne le conduit.",
    },
    season: { en: "Nov – Mar", fr: "Nov. – mars" },
    months: [11, 12, 1, 2, 3],
    days: 14,
    priceXof: 3_600_000,
    groupMax: 6,
    type: "grand",
    coords: "9°21′ N, 2°37′ E",
    tone: "savannah",
    image: { file: "journey-grand-tour.jpg", width: 1600, height: 2133 },
    heroImage: { file: "journey-grand-tour-hero.jpg", width: 2800, height: 1600 },
    highlights: {
      en: [
        "Every region of the country in one itinerary, south to north and back",
        "Ganvié, Ouidah, Abomey, Kétou, Dassa, Parakou, the Atakora, Pendjari, the W",
        "Four nights in the parks with park-trained guides",
        "A night in a Tata Somba and a night on Lake Ahémé",
        "Internal flight back from the north when the schedule allows",
      ],
      fr: [
        "Toutes les régions du pays en un seul itinéraire, du sud au nord et retour",
        "Ganvié, Ouidah, Abomey, Kétou, Dassa, Parakou, l'Atakora, la Pendjari, le W",
        "Quatre nuits dans les parcs avec des guides formés par les parcs",
        "Une nuit dans un Tata Somba et une nuit au bord du lac Ahémé",
        "Vol intérieur depuis le nord quand les horaires le permettent",
      ],
    },
    itinerary: [
      { day: 1, title: { en: "Cotonou", fr: "Cotonou" }, body: { en: "Airport meeting, the Fondation Zinsou, dinner by the lagoon.", fr: "Accueil à l'aéroport, la Fondation Zinsou, dîner au bord de la lagune." }, stay: { en: "Cotonou", fr: "Cotonou" } },
      { day: 2, title: { en: "Ganvié and Porto-Novo", fr: "Ganvié et Porto-Novo" }, body: { en: "The stilt town at dawn, then the capital's Afro-Brazilian quarter and the Honmè palace.", fr: "La cité lacustre à l'aube, puis le quartier afro-brésilien de la capitale et le palais Honmè." }, stay: { en: "Porto-Novo", fr: "Porto-Novo" } },
      { day: 3, title: { en: "Kétou", fr: "Kétou" }, body: { en: "The Yoruba kingdom on the Nigerian border and the Gèlèdé mask tradition, with the society that keeps it.", fr: "Le royaume yoruba à la frontière du Nigeria et la tradition des masques Gèlèdé, avec la société qui la garde." }, stay: { en: "Kétou", fr: "Kétou" } },
      { day: 4, title: { en: "Abomey", fr: "Abomey" }, body: { en: "The royal palaces and bas-reliefs, the appliqué workshops.", fr: "Les palais royaux et les bas-reliefs, les ateliers d'appliqués." }, stay: { en: "Abomey", fr: "Abomey" } },
      { day: 5, title: { en: "The Collines", fr: "Les Collines" }, body: { en: "The sacred hills of Dassa-Zoumé and the yam country around Savalou.", fr: "Les collines sacrées de Dassa-Zoumé et le pays de l'igname autour de Savalou." }, stay: { en: "Dassa-Zoumé", fr: "Dassa-Zoumé" } },
      { day: 6, title: { en: "Parakou", fr: "Parakou" }, body: { en: "The crossroads of the north: the big market and the Bariba horsemen.", fr: "Le carrefour du nord : le grand marché et les cavaliers bariba." }, stay: { en: "Parakou", fr: "Parakou" } },
      { day: 7, title: { en: "The W", fr: "Le W" }, body: { en: "North-east to the W National Park and the Niger river's bend. Evening game drive.", fr: "Vers le nord-est, le parc national du W et le méandre du fleuve Niger. Safari en fin de journée." }, stay: { en: "W park camp", fr: "Campement du W" } },
      { day: 8, title: { en: "The W, full day", fr: "Le W, journée complète" }, body: { en: "Dawn and dusk drives along the river.", fr: "Safaris à l'aube et au crépuscule le long du fleuve." }, stay: { en: "W park camp", fr: "Campement du W" } },
      { day: 9, title: { en: "West to the Atakora", fr: "Vers l'ouest, l'Atakora" }, body: { en: "The long road west through Kandi and Natitingou to Tata Somba country.", fr: "La longue route vers l'ouest par Kandi et Natitingou jusqu'au pays des Tata Somba." }, stay: { en: "Koussoukoingou", fr: "Koussoukoingou" } },
      { day: 10, title: { en: "Koutammakou", fr: "Koutammakou" }, body: { en: "A day among the fortified houses with the families who build them.", fr: "Une journée parmi les maisons-forteresses avec les familles qui les bâtissent." }, stay: { en: "Koussoukoingou", fr: "Koussoukoingou" } },
      { day: 11, title: { en: "Tanougou and Pendjari", fr: "Tanougou et la Pendjari" }, body: { en: "A swim at the falls, then into the park by the Batia gate.", fr: "Baignade aux cascades, puis entrée dans le parc par la porte de Batia." }, stay: { en: "Pendjari lodge", fr: "Lodge de la Pendjari" } },
      { day: 12, title: { en: "Pendjari, full day", fr: "Pendjari, journée complète" }, body: { en: "The Pendjari river, the Mare Bali and the lions when they allow it.", fr: "La rivière Pendjari, la mare Bali et les lions quand ils le veulent bien." }, stay: { en: "Pendjari lodge", fr: "Lodge de la Pendjari" } },
      { day: 13, title: { en: "South to the coast", fr: "Retour vers la côte" }, body: { en: "Flight or drive to Cotonou, then the coast road to Grand-Popo.", fr: "Vol ou route jusqu'à Cotonou, puis la côte jusqu'à Grand-Popo." }, stay: { en: "Grand-Popo", fr: "Grand-Popo" } },
      { day: 14, title: { en: "Ouidah and departure", fr: "Ouidah et départ" }, body: { en: "The Route des Esclaves, the beach, and the airport.", fr: "La Route des Esclaves, la plage et l'aéroport." } },
    ],
    stops: ["cotonou", "ganvie", "porto-novo", "ketou", "abomey", "dassa", "parakou", "parc-w", "koutammakou", "tanougou", "pendjari", "grand-popo", "ouidah"],
    included: {
      en: [...INCLUDED_COMMON.en, "Park fees and four days of game drives", "Internal flight from the north when scheduled"],
      fr: [...INCLUDED_COMMON.fr, "Droits d'entrée aux parcs et quatre jours de safari", "Vol intérieur depuis le nord lorsqu'il est programmé"],
    },
    excluded: EXCLUDED_COMMON,
    departures: [
      { start: "2026-11-28", end: "2026-12-11", priceXof: 3_600_000, spotsLeft: 6 },
      { start: "2027-01-16", end: "2027-01-29", priceXof: 3_600_000, spotsLeft: 6 },
      { start: "2027-02-20", end: "2027-03-05", priceXof: 3_600_000, spotsLeft: 6 },
    ],
    faq: [
      {
        q: { en: "Is fourteen days too long for Benin?", fr: "Quatorze jours, est-ce trop long pour le Bénin ?" },
        a: {
          en: "It is the minimum to see the whole country without rushing. Most of the kilometres are in the north, and we break the long days in two. If you have ten days, we suggest The Twelve Kings plus North to Pendjari instead.",
          fr: "C'est le minimum pour voir tout le pays sans courir. L'essentiel des kilomètres est au nord, et nous coupons les longues journées en deux. Avec dix jours, nous conseillons plutôt Les Douze Rois suivi de Vers le nord, la Pendjari.",
        },
      },
      ...FAQ_COMMON,
    ],
    gallery: [
      { file: "grand-01.jpg", width: 1600, height: 1067, alt: { en: "Bariba horseman at Parakou", fr: "Cavalier bariba à Parakou" } },
      { file: "grand-02.jpg", width: 1067, height: 1600, alt: { en: "Gèlèdé mask, Kétou", fr: "Masque Gèlèdé, Kétou" } },
      { file: "grand-03.jpg", width: 1600, height: 1067, alt: { en: "The Niger river in the W park", fr: "Le fleuve Niger dans le parc du W" } },
      { file: "grand-04.jpg", width: 1600, height: 1067, alt: { en: "Tata Somba at dusk", fr: "Tata Somba au crépuscule" } },
    ],
  },
  {
    slug: "collines-and-centre",
    title: { en: "The Collines & the Centre", fr: "Les Collines & le Centre" },
    pitch: {
      en: "Sacred hills, yam country and the Bariba north: the Benin almost nobody visits.",
      fr: "Collines sacrées, pays de l'igname et nord bariba : le Bénin que presque personne ne visite.",
    },
    summary: {
      en: "Five days through the middle of the country. The forty-one hills of Dassa-Zoumé, the yam festival country of Savalou, the Gèlèdé masks of Kétou and the horsemen of Parakou. Slow roads, big skies, almost no other travellers.",
      fr: "Cinq jours à travers le milieu du pays. Les quarante et une collines de Dassa-Zoumé, le pays de la fête de l'igname à Savalou, les masques Gèlèdé de Kétou et les cavaliers de Parakou. Routes lentes, grands ciels, presque aucun autre voyageur.",
    },
    season: { en: "Oct – Mar", fr: "Oct. – mars" },
    months: [10, 11, 12, 1, 2, 3],
    days: 5,
    priceXof: 890_000,
    groupMax: 8,
    type: "kingdoms",
    coords: "7°45′ N, 2°11′ E",
    tone: "savannah",
    image: { file: "journey-collines.jpg", width: 1600, height: 2133 },
    heroImage: { file: "journey-collines-hero.jpg", width: 2800, height: 1600 },
    highlights: {
      en: [
        "Sunrise walk on the sacred hills of Dassa-Zoumé",
        "Kétou and the Gèlèdé mask society",
        "Savalou in yam season, with the harvest festival in August on request",
        "Parakou's market and the Bariba horsemen",
      ],
      fr: [
        "Marche au lever du soleil sur les collines sacrées de Dassa-Zoumé",
        "Kétou et la société des masques Gèlèdé",
        "Savalou en saison de l'igname, avec la fête des récoltes en août sur demande",
        "Le marché de Parakou et les cavaliers bariba",
      ],
    },
    itinerary: [
      { day: 1, title: { en: "Cotonou to Kétou", fr: "De Cotonou à Kétou" }, body: { en: "Airport meeting and the road north-east to the Yoruba kingdom.", fr: "Accueil à l'aéroport et route vers le nord-est jusqu'au royaume yoruba." }, stay: { en: "Kétou", fr: "Kétou" } },
      { day: 2, title: { en: "Kétou to Dassa", fr: "De Kétou à Dassa" }, body: { en: "The Gèlèdé society in the morning, then west to the Collines.", fr: "La société Gèlèdé le matin, puis route vers l'ouest et les Collines." }, stay: { en: "Dassa-Zoumé", fr: "Dassa-Zoumé" } },
      { day: 3, title: { en: "The sacred hills", fr: "Les collines sacrées" }, body: { en: "Sunrise walk, the grotto, and the yam country around Savalou.", fr: "Marche au lever du soleil, la grotte, et le pays de l'igname autour de Savalou." }, stay: { en: "Dassa-Zoumé", fr: "Dassa-Zoumé" } },
      { day: 4, title: { en: "Parakou", fr: "Parakou" }, body: { en: "North to the crossroads city: the market and the horsemen.", fr: "Vers le nord, la ville carrefour : le marché et les cavaliers." }, stay: { en: "Parakou", fr: "Parakou" } },
      { day: 5, title: { en: "Return south", fr: "Retour vers le sud" }, body: { en: "Train or road back to Cotonou and departure.", fr: "Train ou route jusqu'à Cotonou et départ." } },
    ],
    stops: ["ketou", "dassa", "parakou"],
    included: INCLUDED_COMMON,
    excluded: EXCLUDED_COMMON,
    departures: [
      { start: "2026-11-02", end: "2026-11-06", priceXof: 890_000, spotsLeft: 8 },
      { start: "2027-01-11", end: "2027-01-15", priceXof: 890_000, spotsLeft: 8 },
      { start: "2027-03-01", end: "2027-03-05", priceXof: 890_000, spotsLeft: 8 },
    ],
    faq: FAQ_COMMON,
    gallery: [
      { file: "collines-01.jpg", width: 1600, height: 1067, alt: { en: "The hills of Dassa-Zoumé", fr: "Les collines de Dassa-Zoumé" } },
      { file: "collines-02.jpg", width: 1067, height: 1600, alt: { en: "Yam stalls at Savalou", fr: "Étal d'ignames à Savalou" } },
      { file: "collines-03.jpg", width: 1600, height: 1067, alt: { en: "Parakou market", fr: "Marché de Parakou" } },
    ],
  },
];
