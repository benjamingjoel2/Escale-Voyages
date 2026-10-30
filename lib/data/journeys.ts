/**
 * Placeholder journey data until Sanity is wired in (Phase 5).
 * Prices are per person in FCFA. Shapes mirror the planned Sanity schema.
 */
export type Lang = "en" | "fr" | "de" | "es";
export type L<T = string> = Record<Lang, T>;

export type JourneyType =
  | "grand"
  | "heritage"
  | "kingdoms"
  | "wildlife"
  | "coast"
  | "festival";

/** A media file: local in public/media, or a CMS asset URL via `src`. */
export type MediaRef = { file: string; width: number; height: number; src?: string; alt?: L | string };

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
  image: MediaRef;
  heroImage: MediaRef;
  highlights: L<string[]>;
  itinerary: ItineraryDay[];
  /** Destination slugs in the order visited. */
  stops: string[];
  /** Stay slugs (lib/data/stays.ts) in the order used. */
  stays: string[];
  included: L<string[]>;
  excluded: L<string[]>;
  departures: Departure[];
  faq: { q: L; a: L }[];
  gallery: (MediaRef & { alt: L | string })[];
};

const INCLUDED_COMMON: L<string[]> = {
  en: [
    "Private driver throughout, English and French speaking",
    "All road transport in an air-conditioned 4×4 with driver",
    "Accommodation as described, breakfast included",
    "All entry fees, permits and ceremony contributions",
    "Airport meeting and transfers in Cotonou",
    "Round-the-clock support from our Cotonou office",
  ],
  fr: [
    "Chauffeur privé francophone et anglophone pendant tout le voyage",
    "Tous les transports routiers en 4×4 climatisé avec chauffeur",
    "Hébergement tel que décrit, petit-déjeuner inclus",
    "Droits d'entrée, permis et contributions aux cérémonies",
    "Accueil à l'aéroport et transferts à Cotonou",
    "Assistance 24h/24 par notre bureau de Cotonou",
  ],
  de: ["Privater Fahrer während der ganzen Reise, englisch- und französischsprachig", "Alle Fahrten im klimatisierten 4×4 mit Fahrer", "Unterkunft wie beschrieben, mit Frühstück", "Alle Eintritte, Genehmigungen und Beiträge zu Zeremonien", "Empfang am Flughafen und Transfers in Cotonou", "Rund-um-die-Uhr-Betreuung durch unser Büro in Cotonou"],
  es: ["Conductor privado durante todo el viaje, de habla inglesa y francesa", "Todos los trayectos por carretera en 4×4 climatizado con conductor", "Alojamiento según lo descrito, con desayuno", "Todas las entradas, permisos y contribuciones a ceremonias", "Recibimiento en el aeropuerto y traslados en Cotonú", "Asistencia permanente desde nuestra oficina de Cotonú"],
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
  de: ["Internationale Flüge", "E-Visum-Gebühren", "Reiseversicherung, die wir voraussetzen", "Mittag- und Abendessen, sofern nicht angegeben", "Trinkgelder und persönliche Einkäufe"],
  es: ["Vuelos internacionales", "Tasas del visado electrónico", "Seguro de viaje, que exigimos", "Almuerzos y cenas salvo que se indique", "Propinas y compras personales"],
};

const FAQ_COMMON: Journey["faq"] = [
  {
    q: { en: "How do I pay?", fr: "Comment payer ?", de: "Wie bezahle ich?", es: "¿Cómo se paga?" },
    a: {
      en: "A 30% deposit confirms your dates. Pay in FCFA by MTN or Moov mobile money, or in euros by card. The balance is due 45 days before departure.",
      fr: "Un acompte de 30 % confirme vos dates. Réglez en FCFA par mobile money MTN ou Moov, ou en euros par carte. Le solde est dû 45 jours avant le départ.",
      de: "Eine Anzahlung von 30 % sichert Ihre Termine. Zahlung in FCFA per MTN- oder Moov-Mobile-Money oder in Euro per Karte. Der Restbetrag ist 45 Tage vor Abreise fällig.",
      es: "Un depósito del 30 % confirma sus fechas. Pague en FCFA por dinero móvil MTN o Moov, o en euros con tarjeta. El saldo se paga 45 días antes de la salida.",
    },
  },
  {
    q: { en: "Can I travel on other dates?", fr: "Puis-je partir à d'autres dates ?", de: "Kann ich zu anderen Terminen reisen?", es: "¿Puedo viajar en otras fechas?" },
    a: {
      en: "Yes. Every journey runs privately on request, from two travellers. Private departures carry a small supplement outside the dry season.",
      fr: "Oui. Chaque voyage se fait en privé sur demande, à partir de deux voyageurs. Les départs privés comportent un petit supplément hors saison sèche.",
      de: "Ja. Jede Reise ist auf Anfrage privat ab zwei Reisenden möglich. Außerhalb der Trockenzeit kommt für private Termine ein kleiner Aufpreis hinzu.",
      es: "Sí. Todos los viajes pueden hacerse en privado a petición, desde dos viajeros. Las salidas privadas fuera de la estación seca llevan un pequeño suplemento.",
    },
  },
  {
    q: { en: "Is Benin safe?", fr: "Le Bénin est-il sûr ?", de: "Ist Benin sicher?", es: "¿Es Benín un país seguro?" },
    a: {
      en: "The south and centre are calm and welcoming. For the far north we follow the latest government advice and adapt routes with our local partners; we will tell you plainly if a leg has to change.",
      fr: "Le sud et le centre sont calmes et accueillants. Pour l'extrême nord, nous suivons les recommandations officielles et adaptons les itinéraires avec nos partenaires locaux ; nous vous le dirons clairement si une étape doit changer.",
      de: "Der Süden und die Mitte sind ruhig und gastfreundlich. Für den äußersten Norden folgen wir den aktuellen Hinweisen der Regierungen und passen die Routen mit unseren lokalen Partnern an; muss sich eine Etappe ändern, sagen wir es Ihnen offen.",
      es: "El sur y el centro son tranquilos y acogedores. Para el extremo norte seguimos las recomendaciones oficiales más recientes y adaptamos las rutas con nuestros socios locales; si una etapa tiene que cambiar, se lo diremos con claridad.",
    },
  },
];

export const journeys: Journey[] = [
  {
    slug: "the-twelve-kings",
    title: { en: "The Twelve Kings", fr: "Les Douze Rois", de: "Die zwölf Könige", es: "Los doce reyes" },
    pitch: {
      en: "Abomey's palaces and bas-reliefs, then the road the kingdom took to the sea.",
      fr: "Les palais et bas-reliefs d'Abomey, puis la route que le royaume a prise vers la mer.",
      de: "Die Paläste und Flachreliefs von Abomey, dann der Weg, den das Königreich zum Meer nahm.",
      es: "Los palacios y bajorrelieves de Abomey, y después el camino que el reino siguió hasta el mar.",
    },
    summary: {
      en: "Seven days through the heart of the Kingdom of Dahomey: the palaces of Abomey, the sacred hills of Dassa, the royal court of Porto-Novo and the port of Ouidah, where the kingdom met the Atlantic. Told, at each palace, by the families who keep it.",
      fr: "Sept jours au cœur du royaume du Dahomey : les palais d'Abomey, les collines sacrées de Dassa, la cour royale de Porto-Novo et le port de Ouidah, où le royaume a rencontré l'Atlantique. Racontés, à chaque palais, par les familles qui le gardent.",
      de: "Sieben Tage durch das Herz des Königreichs Dahomey: die Paläste von Abomey, die heiligen Hügel von Dassa, der Königshof von Porto-Novo und der Hafen von Ouidah, wo das Königreich auf den Atlantik traf. An jedem Palast erzählt von den Familien, die ihn bewahren.",
      es: "Siete días por el corazón del reino de Dahomey: los palacios de Abomey, las colinas sagradas de Dassa, la corte real de Porto Novo y el puerto de Uidá, donde el reino se encontraba con el Atlántico. Contado, en cada palacio, por las familias que lo custodian.",
    },
    season: { en: "Nov – Feb", fr: "Nov. – fév.", de: "Nov. – Feb.", es: "Nov. – feb." },
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
      de: ["Private Führung durch die Paläste von Abomey mit einem Nachfahren der königlichen Garde", "Die Flachreliefs Symbol für Symbol gelesen: Chamäleon, Löwe, Hai", "Sonnenaufgang auf den heiligen Hügeln von Dassa-Zoumé", "Der Palast Honmè und das afro-brasilianische Viertel von Porto-Novo", "Die Route des Esclaves in Ouidah von Anfang bis Ende zu Fuß"],
      es: ["Visita privada de los palacios de Abomey con un descendiente de la guardia real", "Los bajorrelieves leídos símbolo a símbolo: camaleón, león, tiburón", "Amanecer en las colinas sagradas de Dassa-Zoumé", "El palacio de Honmè y el barrio afrobrasileño de Porto Novo", "La Ruta de los Esclavos de Uidá recorrida a pie de principio a fin"],
    },
    itinerary: [
      { day: 1, title: { en: "Arrive in Cotonou", fr: "Arrivée à Cotonou", de: "Ankunft in Cotonou", es: "Llegada a Cotonú" }, body: { en: "We meet you at the airport. Dinner by the lagoon and a briefing on the week.", fr: "Nous vous accueillons à l'aéroport. Dîner au bord de la lagune et présentation de la semaine.", de: "Wir holen Sie am Flughafen ab. Abendessen an der Lagune und ein Briefing für die Woche.", es: "Le recibimos en el aeropuerto. Cena junto a la laguna y presentación de la semana." }, stay: { en: "Cotonou", fr: "Cotonou", de: "Cotonou", es: "Cotonú" } },
      { day: 2, title: { en: "Porto-Novo, the quiet capital", fr: "Porto-Novo, la capitale tranquille", de: "Porto-Novo, die stille Hauptstadt", es: "Porto Novo, la capital tranquila" }, body: { en: "The Honmè royal palace, the Great Mosque in its Brazilian baroque, and the ethnographic museum. Evening drive north.", fr: "Le palais royal Honmè, la Grande Mosquée de style baroque brésilien et le musée ethnographique. Route vers le nord en fin de journée.", de: "Der Königspalast Honmè, die Große Moschee im brasilianischen Barock und das ethnografische Museum. Abends Fahrt nach Norden.", es: "El palacio real de Honmè, la Gran Mezquita en su barroco brasileño y el museo etnográfico. Por la tarde, camino al norte." }, stay: { en: "Abomey", fr: "Abomey", de: "Abomey", es: "Abomey" } },
      { day: 3, title: { en: "The palaces of Abomey", fr: "Les palais d'Abomey", de: "Die Paläste von Abomey", es: "Los palacios de Abomey" }, body: { en: "A full day inside the royal compound: the palaces of Ghezo and Glele, the bas-reliefs, the tombs. Lunch with a family of court artisans.", fr: "Une journée entière dans l'enceinte royale : les palais de Ghézo et de Glélé, les bas-reliefs, les tombeaux. Déjeuner chez une famille d'artisans de la cour.", de: "Ein ganzer Tag im königlichen Bezirk: die Paläste von Ghezo und Glele, die Flachreliefs, die Grabstätten. Mittagessen bei einer Familie von Hofkunsthandwerkern.", es: "Un día entero en el recinto real: los palacios de Ghezo y Glele, los bajorrelieves, las tumbas. Almuerzo con una familia de artesanos de la corte." }, stay: { en: "Abomey", fr: "Abomey", de: "Abomey", es: "Abomey" } },
      { day: 4, title: { en: "Weavers and the Dassa hills", fr: "Tisserands et collines de Dassa", de: "Weber und die Hügel von Dassa", es: "Tejedores y las colinas de Dassa" }, body: { en: "The appliqué workshops of Abomey, then the sacred hills of Dassa-Zoumé and the cave of the Virgin.", fr: "Les ateliers d'appliqués d'Abomey, puis les collines sacrées de Dassa-Zoumé et la grotte de la Vierge.", de: "Die Applikationswerkstätten von Abomey, dann die heiligen Hügel von Dassa-Zoumé und die Mariengrotte.", es: "Los talleres de aplicaciones textiles de Abomey, y después las colinas sagradas de Dassa-Zoumé y la gruta de la Virgen." }, stay: { en: "Dassa-Zoumé", fr: "Dassa-Zoumé", de: "Dassa-Zoumé", es: "Dassa-Zoumé" } },
      { day: 5, title: { en: "South to Ouidah", fr: "Vers le sud, Ouidah", de: "Nach Süden, nach Ouidah", es: "Hacia el sur, a Uidá" }, body: { en: "The road the slave caravans took. Afternoon in Ouidah: the Portuguese fort, the Python Temple, the sacred forest of Kpassè.", fr: "La route des caravanes d'esclaves. Après-midi à Ouidah : le fort portugais, le Temple des Pythons, la forêt sacrée de Kpassè.", de: "Der Weg der Sklavenkarawanen. Nachmittag in Ouidah: das portugiesische Fort, der Pythontempel, der heilige Wald von Kpassè.", es: "El camino de las caravanas de esclavos. Tarde en Uidá: el fuerte portugués, el Templo de las Pitones, el bosque sagrado de Kpassè." }, stay: { en: "Ouidah", fr: "Ouidah", de: "Ouidah", es: "Uidá" } },
      { day: 6, title: { en: "The Route des Esclaves", fr: "La Route des Esclaves", de: "Die Route des Esclaves", es: "La Ruta de los Esclavos" }, body: { en: "Four kilometres walked slowly from the auction square to the Door of No Return, with time to sit. Afternoon free on the beach.", fr: "Quatre kilomètres parcourus lentement, de la place des enchères à la Porte du Non-Retour, avec le temps de s'asseoir. Après-midi libre sur la plage.", de: "Vier Kilometer, langsam gegangen, vom Versteigerungsplatz bis zum Tor ohne Wiederkehr, mit Zeit zum Innehalten. Nachmittag frei am Strand.", es: "Cuatro kilómetros recorridos despacio desde la plaza de las subastas hasta la Puerta del No Retorno, con tiempo para sentarse. Tarde libre en la playa." }, stay: { en: "Ouidah", fr: "Ouidah", de: "Ouidah", es: "Uidá" } },
      { day: 7, title: { en: "Ganvié and departure", fr: "Ganvié et départ", de: "Ganvié und Abreise", es: "Ganvié y salida" }, body: { en: "Dawn pirogue through the stilt town of Ganvié, then transfer to the airport.", fr: "Pirogue à l'aube à travers la cité lacustre de Ganvié, puis transfert à l'aéroport.", de: "Im Morgengrauen mit der Piroge durch die Pfahlbaustadt Ganvié, dann Transfer zum Flughafen.", es: "Al amanecer, en piragua por la ciudad lacustre de Ganvié, y traslado al aeropuerto." } },
    ],
    stops: ["porto-novo", "abomey", "ouidah", "ganvie"],
    stays: ["cotonou-marina", "collines-lodge", "ouidah-guesthouse"],
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
      { file: "kings-01.jpg", width: 1600, height: 1067, alt: { en: "Bas-relief on a palace wall in Abomey", fr: "Bas-relief sur un mur de palais à Abomey", de: "Flachrelief an einer Palastmauer in Abomey", es: "Bajorrelieve en un muro de palacio en Abomey" } },
      { file: "kings-02.jpg", width: 1067, height: 1600, alt: { en: "Appliqué cloth being sewn", fr: "Tissu appliqué en cours de couture", de: "Applikationsstoff beim Nähen", es: "Tela de aplicaciones mientras se cose" } },
      { file: "kings-03.jpg", width: 1600, height: 1067, alt: { en: "Dassa hills at sunrise", fr: "Collines de Dassa au lever du soleil", de: "Die Hügel von Dassa bei Sonnenaufgang", es: "Las colinas de Dassa al amanecer" } },
      { file: "kings-04.jpg", width: 1500, height: 779, alt: { en: "A traveller before the Door of No Return, Ouidah", fr: "Une voyageuse devant la Porte du Non-Retour, Ouidah", de: "Eine Reisende vor dem Tor ohne Wiederkehr, Ouidah", es: "Una viajera ante la Puerta del No Retorno, Uidá" } },
    ],
  },
  {
    slug: "return",
    title: { en: "Return", fr: "Retour", de: "Rückkehr", es: "Retorno" },
    pitch: {
      en: "Ouidah, the Route des Esclaves and the Door of No Return, walked slowly with people who can hold the silence.",
      fr: "Ouidah, la Route des Esclaves et la Porte du Non-Retour, parcourues lentement avec des gens qui savent tenir le silence.",
      de: "Ouidah, die Route des Esclaves und das Tor ohne Wiederkehr, langsam gegangen mit Menschen, die die Stille mittragen.",
      es: "Uidá, la Ruta de los Esclavos y la Puerta del No Retorno, recorridas despacio con personas que saben sostener el silencio.",
    },
    summary: {
      en: "Five days built for travellers of African descent coming back. Ouidah's memorial route, the archives, the Vodun communities that kept the memory, and, where records allow, the villages your family came from. Paced for feeling, not sightseeing.",
      fr: "Cinq jours conçus pour les voyageurs d'ascendance africaine qui reviennent. La route mémorielle de Ouidah, les archives, les communautés vodun gardiennes de la mémoire et, lorsque les archives le permettent, les villages d'origine de votre famille. Un rythme fait pour ressentir, pas pour visiter.",
      de: "Fünf Tage für Reisende afrikanischer Abstammung, die zurückkehren. Ouidahs Gedenkweg, die Archive, die Vodun-Gemeinschaften, die die Erinnerung bewahrt haben, und, soweit die Quellen es erlauben, die Dörfer, aus denen Ihre Familie stammt. Im Tempo des Gefühls, nicht des Sightseeings.",
      es: "Cinco días pensados para viajeros de ascendencia africana que vuelven. La ruta memorial de Uidá, los archivos, las comunidades vudú que guardaron la memoria y, cuando los registros lo permiten, los pueblos de los que vino su familia. Al ritmo de la emoción, no del turismo.",
    },
    season: { en: "Year round", fr: "Toute l'année", de: "Ganzjährig", es: "Todo el año" },
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
      de: ["Die Route des Esclaves mit einem Historiker aus Ouidah", "Auf Wunsch eine private Namens- und Willkommenszeremonie", "Zeit in den Archiven mit unserer Rechercheurin, vor und während der Reise", "Ein Tag in einem Dorf, das mit Ihren Unterlagen verbunden ist, soweit die Quellen es erlauben", "Das Tor ohne Wiederkehr im Morgengrauen, allein"],
      es: ["La Ruta de los Esclavos con un historiador de Uidá", "Una ceremonia privada de nombre y bienvenida, si lo desea", "Tiempo en los archivos con nuestra investigadora antes y durante el viaje", "Un día en un pueblo vinculado a sus registros, cuando estos lo permiten", "La Puerta del No Retorno al amanecer, a solas"],
    },
    itinerary: [
      { day: 1, title: { en: "Arrive, and breathe", fr: "Arriver, respirer", de: "Ankommen und durchatmen", es: "Llegar y respirar" }, body: { en: "Airport meeting, a quiet guesthouse in Ouidah, dinner with our researcher to set the pace of the week.", fr: "Accueil à l'aéroport, maison d'hôtes paisible à Ouidah, dîner avec notre chercheur pour poser le rythme de la semaine.", de: "Empfang am Flughafen, ein ruhiges Gästehaus in Ouidah, Abendessen mit unserer Rechercheurin, um das Tempo der Woche festzulegen.", es: "Recibimiento en el aeropuerto, una casa de huéspedes tranquila en Uidá y cena con nuestra investigadora para marcar el ritmo de la semana." }, stay: { en: "Ouidah", fr: "Ouidah", de: "Ouidah", es: "Uidá" } },
      { day: 2, title: { en: "The memorial route", fr: "La route mémorielle", de: "Der Gedenkweg", es: "La ruta memorial" }, body: { en: "The Portuguese fort and museum, then the Route des Esclaves on foot: the Tree of Forgetting, the Zomachi memorial, the Door of No Return.", fr: "Le fort portugais et son musée, puis la Route des Esclaves à pied : l'Arbre de l'Oubli, le mémorial Zomachi, la Porte du Non-Retour.", de: "Das portugiesische Fort und Museum, dann die Route des Esclaves zu Fuß: der Baum des Vergessens, das Zomachi-Denkmal, das Tor ohne Wiederkehr.", es: "El fuerte portugués y su museo, y después la Ruta de los Esclavos a pie: el Árbol del Olvido, el memorial de Zomachi, la Puerta del No Retorno." }, stay: { en: "Ouidah", fr: "Ouidah", de: "Ouidah", es: "Uidá" } },
      { day: 3, title: { en: "The keepers of memory", fr: "Les gardiens de la mémoire", de: "Die Hüter der Erinnerung", es: "Los guardianes de la memoria" }, body: { en: "A morning with a Vodun community that traces its lineage to the returnees from Brazil. Afternoon in the Afro-Brazilian houses of Ouidah and Porto-Novo.", fr: "Une matinée avec une communauté vodun qui fait remonter sa lignée aux retornados du Brésil. Après-midi dans les maisons afro-brésiliennes de Ouidah et de Porto-Novo.", de: "Ein Vormittag mit einer Vodun-Gemeinschaft, die ihre Abstammung auf die Rückkehrer aus Brasilien zurückführt. Nachmittag in den afro-brasilianischen Häusern von Ouidah und Porto-Novo.", es: "Una mañana con una comunidad vudú cuyo linaje se remonta a los retornados de Brasil. Tarde en las casas afrobrasileñas de Uidá y Porto Novo." }, stay: { en: "Ouidah", fr: "Ouidah", de: "Ouidah", es: "Uidá" } },
      { day: 4, title: { en: "Your line, where it leads", fr: "Votre lignée, là où elle mène", de: "Wohin Ihre Linie führt", es: "Adonde lleva su linaje" }, body: { en: "A day shaped by your records: a village in the interior, a family name, a shrine. Where no records exist, a day on the Abomey road with its history instead.", fr: "Une journée façonnée par vos archives : un village de l'intérieur, un nom de famille, un sanctuaire. En l'absence d'archives, une journée sur la route d'Abomey et son histoire.", de: "Ein Tag, geprägt von Ihren Unterlagen: ein Dorf im Landesinneren, ein Familienname, ein Schrein. Wo es keine Unterlagen gibt, stattdessen ein Tag auf der Straße nach Abomey mit ihrer Geschichte.", es: "Un día marcado por sus registros: un pueblo del interior, un apellido, un santuario. Si no hay registros, en su lugar un día por la carretera de Abomey y su historia." }, stay: { en: "Ouidah", fr: "Ouidah", de: "Ouidah", es: "Uidá" } },
      { day: 5, title: { en: "Dawn at the door", fr: "L'aube à la porte", de: "Morgengrauen am Tor", es: "Amanecer ante la puerta" }, body: { en: "The beach at first light, then breakfast and departure, or onward to another journey.", fr: "La plage aux premières lueurs, puis petit-déjeuner et départ, ou poursuite vers un autre voyage.", de: "Der Strand im ersten Licht, dann Frühstück und Abreise oder weiter zu einer anderen Reise.", es: "La playa con la primera luz, después desayuno y salida, o continuación hacia otro viaje." } },
    ],
    stops: ["ouidah", "porto-novo"],
    stays: ["ouidah-guesthouse", "cotonou-marina"],
    included: {
      en: [...INCLUDED_COMMON.en, "Pre-trip archival research session (2 hours, online)"],
      fr: [...INCLUDED_COMMON.fr, "Séance de recherche d'archives avant le voyage (2 h, en ligne)"],
      de: [...INCLUDED_COMMON.de, "Archivrecherche vor der Reise (2 Stunden, online)"],
      es: [...INCLUDED_COMMON.es, "Sesión de investigación de archivo antes del viaje (2 horas, en línea)"],
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
        q: { en: "I have DNA results but no names. Can you still help?", fr: "J'ai des résultats ADN mais aucun nom. Pouvez-vous quand même m'aider ?", de: "Ich habe DNA-Ergebnisse, aber keine Namen. Können Sie trotzdem helfen?", es: "Tengo resultados de ADN pero ningún nombre. ¿Pueden ayudarme?" },
        a: {
          en: "Yes. Regional DNA matches point to language groups and areas; our researcher works from there with the Ouidah and Abomey archives. We are honest about what can and cannot be known.",
          fr: "Oui. Les correspondances ADN régionales indiquent des groupes linguistiques et des zones ; notre chercheur part de là avec les archives de Ouidah et d'Abomey. Nous sommes honnêtes sur ce qui peut être su ou non.",
          de: "Ja. Regionale DNA-Treffer weisen auf Sprachgruppen und Gebiete hin; von dort arbeitet unsere Rechercheurin mit den Archiven von Ouidah und Abomey weiter. Wir sagen offen, was sich wissen lässt und was nicht.",
          es: "Sí. Las coincidencias regionales de ADN apuntan a grupos lingüísticos y zonas; a partir de ahí, nuestra investigadora trabaja con los archivos de Uidá y Abomey. Somos honestos sobre lo que se puede saber y lo que no.",
        },
      },
      ...FAQ_COMMON,
    ],
    gallery: [
      { file: "return-01.jpg", width: 1500, height: 838, alt: { en: "A mural of two faces with traditional scarification, seen from the car in Cotonou", fr: "Une fresque de deux visages aux scarifications traditionnelles, vue depuis la voiture à Cotonou", de: "Ein Wandbild zweier Gesichter mit traditionellen Schmucknarben, aus dem Auto gesehen in Cotonou", es: "Un mural de dos rostros con escarificaciones tradicionales, visto desde el coche en Cotonú" } },
      { file: "return-02.jpg", width: 1067, height: 1600, alt: { en: "Zomachi memorial, Ouidah", fr: "Mémorial Zomachi, Ouidah", de: "Zomachi-Denkmal, Ouidah", es: "Memorial de Zomachi, Uidá" } },
      { file: "return-03.jpg", width: 993, height: 832, alt: { en: "A whitewashed Afro-Brazilian house with a balustraded balcony", fr: "Une maison afro-brésilienne blanchie à la chaux, au balcon à balustres", de: "Ein weiß getünchtes afro-brasilianisches Haus mit Balustradenbalkon", es: "Una casa afrobrasileña encalada con balcón de balaustrada" } },
      { file: "return-04.jpg", width: 1500, height: 774, alt: { en: "A street mural of a market crowd and Zangbeto figures, Cotonou", fr: "Une fresque murale d'une foule de marché et de Zangbéto, Cotonou", de: "Ein Straßenwandbild mit Marktmenge und Zangbeto-Figuren, Cotonou", es: "Un mural callejero con una multitud de mercado y figuras de zangbeto, Cotonú" } },
    ],
  },
  {
    slug: "north-to-pendjari",
    title: { en: "North to Pendjari", fr: "Vers le nord, la Pendjari", de: "Nach Norden in die Pendjari", es: "Al norte, a la Pendjari" },
    pitch: {
      en: "Tata Somba country, the Atakora hills and West Africa's last great lion and elephant park.",
      fr: "Le pays des Tata Somba, les collines de l'Atakora et le dernier grand parc aux lions et éléphants d'Afrique de l'Ouest.",
      de: "Das Land der Tata Somba, die Atakora-Berge und Westafrikas letzter großer Park für Löwen und Elefanten.",
      es: "El país de las tata somba, los montes del Atakora y el último gran parque de leones y elefantes de África Occidental.",
    },
    summary: {
      en: "Nine days from the lagoon to the savannah. The road north through Abomey and the Collines, the fortified Tata Somba houses of the Atakora, and three full days of safari in Pendjari National Park with its lions, elephants and the Tanougou falls.",
      fr: "Neuf jours de la lagune à la savane. La route du nord par Abomey et les Collines, les maisons-forteresses Tata Somba de l'Atakora, et trois journées complètes de safari dans le parc national de la Pendjari, avec ses lions, ses éléphants et les cascades de Tanougou.",
      de: "Neun Tage von der Lagune in die Savanne. Die Straße nach Norden über Abomey und die Collines, die befestigten Tata-Somba-Häuser des Atakora und drei volle Safaritage im Nationalpark Pendjari mit seinen Löwen, Elefanten und den Tanougou-Wasserfällen.",
      es: "Nueve días de la laguna a la sabana. La carretera al norte por Abomey y las Collines, las casas fortificadas tata somba del Atakora y tres días completos de safari en el Parque Nacional de la Pendjari, con sus leones, sus elefantes y las cascadas de Tanougou.",
    },
    season: { en: "Dec – Apr", fr: "Déc. – avr.", de: "Dez. – Apr.", es: "Dic. – abr." },
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
        "Three full days of game drives in Pendjari with the park's own rangers",
        "A night inside a Tata Somba, hosted by the family",
        "Swimming at the Tanougou waterfalls",
        "The Atakora hills and the Koutammakou landscape",
        "Abomey and the Dassa hills on the way north",
      ],
      fr: [
        "Trois journées complètes de safari dans la Pendjari avec les écogardes du parc",
        "Une nuit dans un Tata Somba, chez l'habitant",
        "Baignade aux cascades de Tanougou",
        "Les collines de l'Atakora et le paysage du Koutammakou",
        "Abomey et les collines de Dassa sur la route du nord",
      ],
      de: ["Drei volle Tage Pirschfahrten in der Pendjari mit den Rangern des Parks", "Eine Nacht in einem Tata Somba, zu Gast bei der Familie", "Baden an den Tanougou-Wasserfällen", "Die Atakora-Berge und die Landschaft von Koutammakou", "Abomey und die Hügel von Dassa auf dem Weg nach Norden"],
      es: ["Tres días completos de safari en la Pendjari con los propios guardas del parque", "Una noche en una tata somba, acogidos por la familia", "Baño en las cascadas de Tanougou", "Los montes del Atakora y el paisaje de Koutammakou", "Abomey y las colinas de Dassa camino del norte"],
    },
    itinerary: [
      { day: 1, title: { en: "Arrive in Cotonou", fr: "Arrivée à Cotonou", de: "Ankunft in Cotonou", es: "Llegada a Cotonú" }, body: { en: "Airport meeting, a night by the lagoon and an early start the next day.", fr: "Accueil à l'aéroport, nuit au bord de la lagune et départ matinal le lendemain.", de: "Empfang am Flughafen, eine Nacht an der Lagune und ein früher Aufbruch am nächsten Morgen.", es: "Recibimiento en el aeropuerto, una noche junto a la laguna y salida temprano al día siguiente." }, stay: { en: "Cotonou", fr: "Cotonou", de: "Cotonou", es: "Cotonú" } },
      { day: 2, title: { en: "Abomey", fr: "Abomey", de: "Abomey", es: "Abomey" }, body: { en: "The royal palaces, then the road to the Collines.", fr: "Les palais royaux, puis la route vers les Collines.", de: "Die Königspaläste, dann die Straße in die Collines.", es: "Los palacios reales, y después la carretera a las Collines." }, stay: { en: "Dassa-Zoumé", fr: "Dassa-Zoumé", de: "Dassa-Zoumé", es: "Dassa-Zoumé" } },
      { day: 3, title: { en: "The long road north", fr: "La longue route du nord", de: "Die lange Straße nach Norden", es: "La larga carretera al norte" }, body: { en: "Through Savalou and Djougou to Natitingou, with stops in market towns. About six hours of driving.", fr: "Par Savalou et Djougou jusqu'à Natitingou, avec des haltes dans les villes de marché. Environ six heures de route.", de: "Über Savalou und Djougou nach Natitingou, mit Halt in Marktstädten. Etwa sechs Stunden Fahrt.", es: "Por Savalou y Djougou hasta Natitingou, con paradas en ciudades de mercado. Unas seis horas de conducción." }, stay: { en: "Natitingou", fr: "Natitingou", de: "Natitingou", es: "Natitingou" } },
      { day: 4, title: { en: "Tata Somba country", fr: "Le pays des Tata Somba", de: "Das Land der Tata Somba", es: "El país de las tata somba" }, body: { en: "The fortified houses of the Atakora and a night hosted inside one of them.", fr: "Les maisons-forteresses de l'Atakora et une nuit dans l'une d'elles.", de: "Die befestigten Häuser des Atakora und eine Nacht als Gast in einem von ihnen.", es: "Las casas fortificadas del Atakora y una noche como invitados en una de ellas." }, stay: { en: "Koussoukoingou", fr: "Koussoukoingou", de: "Koussoukoingou", es: "Koussoukoingou" } },
      { day: 5, title: { en: "Into Pendjari", fr: "Entrée dans la Pendjari", de: "In die Pendjari", es: "Hacia la Pendjari" }, body: { en: "Tanougou falls for a swim, then through the Batia gate. Evening game drive.", fr: "Baignade aux cascades de Tanougou, puis entrée par la porte de Batia. Safari en fin de journée.", de: "Ein Bad an den Tanougou-Fällen, dann durch das Tor von Batia. Abendliche Pirschfahrt.", es: "Baño en las cascadas de Tanougou y entrada por la puerta de Batia. Safari al atardecer." }, stay: { en: "Pendjari lodge", fr: "Lodge de la Pendjari", de: "Lodge in der Pendjari", es: "Lodge de la Pendjari" } },
      { day: 6, title: { en: "Pendjari, full day", fr: "Pendjari, journée complète", de: "Pendjari, ganzer Tag", es: "Pendjari, día completo" }, body: { en: "Dawn and dusk drives along the Pendjari river: elephants, buffalo, hippos, and the lions when they allow it.", fr: "Safaris à l'aube et au crépuscule le long de la rivière Pendjari : éléphants, buffles, hippopotames, et les lions quand ils le veulent bien.", de: "Pirschfahrten im Morgengrauen und in der Dämmerung am Pendjari-Fluss: Elefanten, Büffel, Flusspferde und die Löwen, wenn sie es zulassen.", es: "Safaris al amanecer y al atardecer junto al río Pendjari: elefantes, búfalos, hipopótamos y los leones cuando se dejan ver." }, stay: { en: "Pendjari lodge", fr: "Lodge de la Pendjari", de: "Lodge in der Pendjari", es: "Lodge de la Pendjari" } },
      { day: 7, title: { en: "Pendjari, full day", fr: "Pendjari, journée complète", de: "Pendjari, ganzer Tag", es: "Pendjari, día completo" }, body: { en: "The Mare Bali and the northern tracks. A night walk with the rangers, conditions permitting.", fr: "La mare Bali et les pistes du nord. Marche nocturne avec les écogardes, si les conditions le permettent.", de: "Die Mare Bali und die nördlichen Pisten. Wenn die Bedingungen es erlauben, eine Nachtwanderung mit den Rangern.", es: "La Mare Bali y las pistas del norte. Un paseo nocturno con los guardas, si las condiciones lo permiten." }, stay: { en: "Pendjari lodge", fr: "Pendjari lodge", de: "Lodge in der Pendjari", es: "Lodge de la Pendjari" } },
      { day: 8, title: { en: "Natitingou and the flight south", fr: "Natitingou et le retour vers le sud", de: "Natitingou und der Flug nach Süden", es: "Natitingou y el vuelo al sur" }, body: { en: "Morning drive out of the park. Flight or drive back to Cotonou depending on the schedule.", fr: "Sortie du parc dans la matinée. Vol ou route vers Cotonou selon les horaires.", de: "Morgendliche Fahrt aus dem Park. Je nach Flugplan Flug oder Fahrt zurück nach Cotonou.", es: "Salida del parque por la mañana. Vuelo o carretera de vuelta a Cotonú según el horario." }, stay: { en: "Cotonou", fr: "Cotonou", de: "Cotonou", es: "Cotonú" } },
      { day: 9, title: { en: "Departure", fr: "Départ", de: "Abreise", es: "Salida" }, body: { en: "Transfer to the airport.", fr: "Transfert à l'aéroport.", de: "Transfer zum Flughafen.", es: "Traslado al aeropuerto." } },
    ],
    stops: ["abomey", "natitingou", "pendjari"],
    stays: ["cotonou-marina", "collines-lodge", "tata-somba", "pendjari-lodge"],
    included: {
      en: [...INCLUDED_COMMON.en, "Park fees and three days of game drives in a park vehicle"],
      fr: [...INCLUDED_COMMON.fr, "Droits d'entrée au parc et trois jours de safari en véhicule du parc"],
      de: [...INCLUDED_COMMON.de, "Parkgebühren und drei Tage Pirschfahrten im Parkfahrzeug"],
      es: [...INCLUDED_COMMON.es, "Tasas del parque y tres días de safari en vehículo del parque"],
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
        q: { en: "Will we see lions?", fr: "Verrons-nous des lions ?", de: "Werden wir Löwen sehen?", es: "¿Veremos leones?" },
        a: {
          en: "Pendjari holds one of the last lion populations in West Africa and sightings are good from January to April, but it is a wild park, not a zoo. Elephants, buffalo, hippos and antelope are near certain.",
          fr: "La Pendjari abrite l'une des dernières populations de lions d'Afrique de l'Ouest et les observations sont bonnes de janvier à avril, mais c'est un parc sauvage, pas un zoo. Éléphants, buffles, hippopotames et antilopes sont quasi certains.",
          de: "Die Pendjari beherbergt eine der letzten Löwenpopulationen Westafrikas, und von Januar bis April stehen die Chancen gut, doch es ist ein wilder Park, kein Zoo. Elefanten, Büffel, Flusspferde und Antilopen sind so gut wie sicher.",
          es: "La Pendjari alberga una de las últimas poblaciones de leones de África Occidental y de enero a abril los avistamientos son buenos, pero es un parque salvaje, no un zoológico. Elefantes, búfalos, hipopótamos y antílopes son casi seguros.",
        },
      },
      ...FAQ_COMMON,
    ],
    gallery: [
      { file: "pendjari-01.jpg", width: 1600, height: 1067, alt: { en: "Elephants at the Pendjari river", fr: "Éléphants à la rivière Pendjari", de: "Elefanten am Pendjari-Fluss", es: "Elefantes en el río Pendjari" } },
      { file: "pendjari-02.jpg", width: 1067, height: 1600, alt: { en: "A Tata Somba house", fr: "Une maison Tata Somba", de: "Ein Tata-Somba-Haus", es: "Una casa tata somba" } },
      { file: "pendjari-03.jpg", width: 1600, height: 1067, alt: { en: "Tanougou waterfalls", fr: "Cascades de Tanougou", de: "Die Tanougou-Wasserfälle", es: "Las cascadas de Tanougou" } },
      { file: "pendjari-04.jpg", width: 1600, height: 1067, alt: { en: "Atakora hills at dusk", fr: "Collines de l'Atakora au crépuscule", de: "Die Atakora-Berge in der Abenddämmerung", es: "Los montes del Atakora al anochecer" } },
    ],
  },
  {
    slug: "lagoon-and-coast",
    title: { en: "Lagoon & Coast", fr: "Lagune & Côte", de: "Lagune & Küste", es: "Laguna y costa" },
    pitch: {
      en: "Ganvié by pirogue at dawn, Porto-Novo's Afro-Brazilian streets, Grand-Popo's empty beach.",
      fr: "Ganvié en pirogue à l'aube, les rues afro-brésiliennes de Porto-Novo, la plage déserte de Grand-Popo.",
      de: "Ganvié im Morgengrauen mit der Piroge, die afro-brasilianischen Straßen von Porto-Novo, der leere Strand von Grand-Popo.",
      es: "Ganvié en piragua al amanecer, las calles afrobrasileñas de Porto Novo, la playa vacía de Grand-Popo.",
    },
    summary: {
      en: "Four slow days along the water. The stilt town of Ganvié at first light, the quiet capital Porto-Novo, the mouth of the Mono river and the palm beach of Grand-Popo. A short journey on its own, or the gentle end to a longer one.",
      fr: "Quatre jours lents au fil de l'eau. La cité lacustre de Ganvié aux premières lueurs, la capitale tranquille Porto-Novo, l'embouchure du Mono et la plage de cocotiers de Grand-Popo. Un court voyage en soi, ou la fin douce d'un plus long.",
      de: "Vier ruhige Tage am Wasser. Die Pfahlbaustadt Ganvié im ersten Licht, die stille Hauptstadt Porto-Novo, die Mündung des Mono und der Palmenstrand von Grand-Popo. Eine kurze Reise für sich oder der sanfte Ausklang einer längeren.",
      es: "Cuatro días tranquilos junto al agua. La ciudad lacustre de Ganvié con la primera luz, la tranquila capital Porto Novo, la desembocadura del Mono y la playa de palmeras de Grand-Popo. Un viaje corto por sí solo o el final sereno de uno más largo.",
    },
    season: { en: "Year round", fr: "Toute l'année", de: "Ganzjährig", es: "Todo el año" },
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
      de: ["Ganvié im Morgengrauen mit der Piroge, vor den Ausflugsbooten", "Die afro-brasilianischen Häuser von Porto-Novo und der Palast Honmè", "Die Bouche du Roy, wo der Mono ins Meer fließt", "Eine Nacht in Grand-Popo, ohne etwas tun zu müssen"],
      es: ["Ganvié en piragua al amanecer, antes de las barcas de excursión", "Las casas afrobrasileñas de Porto Novo y el palacio de Honmè", "La Bouche du Roy, donde el Mono se encuentra con el mar", "Una noche en Grand-Popo sin nada que hacer"],
    },
    itinerary: [
      { day: 1, title: { en: "Cotonou and Porto-Novo", fr: "Cotonou et Porto-Novo", de: "Cotonou und Porto-Novo", es: "Cotonú y Porto Novo" }, body: { en: "Airport meeting, the Dantokpa market if you have the energy, then the road to Porto-Novo.", fr: "Accueil à l'aéroport, le marché Dantokpa si vous en avez l'énergie, puis la route de Porto-Novo.", de: "Empfang am Flughafen, wenn Sie Lust haben der Dantokpa-Markt, dann die Straße nach Porto-Novo.", es: "Recibimiento en el aeropuerto, el mercado de Dantokpa si le quedan fuerzas y la carretera a Porto Novo." }, stay: { en: "Porto-Novo", fr: "Porto-Novo", de: "Porto-Novo", es: "Porto Novo" } },
      { day: 2, title: { en: "Ganvié at dawn", fr: "Ganvié à l'aube", de: "Ganvié im Morgengrauen", es: "Ganvié al amanecer" }, body: { en: "On the water before sunrise. Breakfast in the stilt town, then west along the coast road.", fr: "Sur l'eau avant le lever du soleil. Petit-déjeuner dans la cité lacustre, puis la route côtière vers l'ouest.", de: "Vor Sonnenaufgang auf dem Wasser. Frühstück in der Pfahlbaustadt, dann auf der Küstenstraße nach Westen.", es: "En el agua antes de que salga el sol. Desayuno en la ciudad lacustre y después hacia el oeste por la carretera de la costa." }, stay: { en: "Grand-Popo", fr: "Grand-Popo", de: "Grand-Popo", es: "Grand-Popo" } },
      { day: 3, title: { en: "The Mono and the sea", fr: "Le Mono et la mer", de: "Der Mono und das Meer", es: "El Mono y el mar" }, body: { en: "Boat to the Bouche du Roy through the mangroves. Afternoon on the beach.", fr: "En bateau jusqu'à la Bouche du Roy à travers la mangrove. Après-midi sur la plage.", de: "Mit dem Boot durch die Mangroven zur Bouche du Roy. Nachmittag am Strand.", es: "En barca a la Bouche du Roy entre manglares. Tarde en la playa." }, stay: { en: "Grand-Popo", fr: "Grand-Popo", de: "Grand-Popo", es: "Grand-Popo" } },
      { day: 4, title: { en: "Ouidah and departure", fr: "Ouidah et départ", de: "Ouidah und Abreise", es: "Uidá y salida" }, body: { en: "The Python Temple and the beach at Ouidah on the way back to the airport.", fr: "Le Temple des Pythons et la plage de Ouidah sur le chemin de l'aéroport.", de: "Der Pythontempel und der Strand von Ouidah auf dem Weg zurück zum Flughafen.", es: "El Templo de las Pitones y la playa de Uidá camino del aeropuerto." } },
    ],
    stops: ["porto-novo", "ganvie", "grand-popo", "ouidah"],
    stays: ["cotonou-marina", "lagoon-lodge"],
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
      { file: "lagoon-01.jpg", width: 1500, height: 814, alt: { en: "Young paddlers racing a pirogue past the stilt houses of Ganvié", fr: "De jeunes pagayeurs en course devant les maisons sur pilotis de Ganvié", de: "Junge Paddler mit ihrer Piroge im Rennen an den Pfahlbauten von Ganvié vorbei", es: "Jóvenes remeros compitiendo en piragua junto a las casas sobre pilotes de Ganvié" } },
      { file: "lagoon-02.jpg", width: 1067, height: 1600, alt: { en: "Mangroves on the Mono", fr: "Mangrove sur le Mono", de: "Mangroven am Mono", es: "Manglares en el Mono" } },
      { file: "lagoon-03.jpg", width: 1500, height: 826, alt: { en: "The coconut coast from the air, fishing boats offshore", fr: "La côte aux cocotiers vue du ciel, barques de pêche au large", de: "Die Kokosküste aus der Luft, Fischerboote vor der Küste", es: "La costa de los cocoteros desde el aire, barcas de pesca mar adentro" } },
      { file: "lagoon-04.jpg", width: 1170, height: 780, alt: { en: "A wooden deck bar over the lagoon, under parasols", fr: "Un bar sur pilotis au-dessus de la lagune, sous les parasols", de: "Eine hölzerne Deckbar über der Lagune, unter Sonnenschirmen", es: "Un bar con terraza de madera sobre la laguna, bajo sombrillas" } },
      { file: "lagoon-05.jpg", width: 1500, height: 838, alt: { en: "An afternoon by the hotel pool in Cotonou", fr: "Un après-midi à la piscine de l'hôtel, Cotonou", de: "Ein Nachmittag am Hotelpool in Cotonou", es: "Una tarde junto a la piscina del hotel en Cotonú" } },
    ],
  },
  {
    slug: "vodun-days",
    title: { en: "Vodun Days", fr: "Vodun Days", de: "Vodun Days", es: "Vodun Days" },
    pitch: {
      en: "Three days of ceremony in Ouidah with the people it belongs to, then the coast to recover.",
      fr: "Trois jours de cérémonies à Ouidah avec ceux à qui elles appartiennent, puis la côte pour reprendre souffle.",
      de: "Drei Tage Zeremonie in Ouidah mit den Menschen, denen sie gehört, dann die Küste zum Ausruhen.",
      es: "Tres días de ceremonia en Uidá con las personas a quienes pertenece, y después la costa para reposar.",
    },
    summary: {
      en: "Every January, Ouidah becomes the centre of the Vodun world for three days around the 10 January public holiday. We attend as guests of a temple, whose elders explain what you are seeing and what you should not photograph. Then two days on the coast to let it settle.",
      fr: "Chaque janvier, Ouidah devient pendant trois jours le centre du monde vodun autour du jour férié du 10 janvier. Nous y assistons comme invités d'un temple, dont les anciens expliquent ce que vous voyez et ce qu'il ne faut pas photographier. Puis deux jours sur la côte pour laisser reposer.",
      de: "Jeden Januar wird Ouidah für drei Tage rund um den Feiertag am 10. Januar zum Mittelpunkt der Vodun-Welt. Wir sind Gäste eines Tempels, dessen Älteste erklären, was Sie sehen und was Sie nicht fotografieren sollten. Danach zwei Tage an der Küste, um alles nachklingen zu lassen.",
      es: "Cada enero, Uidá se convierte durante tres días en el centro del mundo vudú, en torno al festivo del 10 de enero. Asistimos como invitados de un templo, cuyos ancianos explican lo que está viendo y lo que no debe fotografiar. Después, dos días en la costa para dejar que todo se asiente.",
    },
    season: { en: "January", fr: "Janvier", de: "Januar", es: "Enero" },
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
      de: ["Drei Tage Vodun Days als Gäste eines Tempels in Ouidah", "Die große Zeremonie am Strand und die Prozessionen am 10. Januar", "Egungun- und Zangbeto-Maskeraden erklärt, nicht konsumiert", "Die Route des Esclaves an einem ruhigen Morgen", "Zwei Tage in Grand-Popo zum Ankommen"],
      es: ["Tres días de Vodun Days como invitados de un templo de Uidá", "La gran ceremonia en la playa y las procesiones del día 10", "Mascaradas egungun y zangbeto explicadas, no consumidas", "La Ruta de los Esclavos recorrida una mañana tranquila", "Dos días en Grand-Popo para bajar el ritmo"],
    },
    itinerary: [
      { day: 1, title: { en: "Arrive in Ouidah", fr: "Arrivée à Ouidah", de: "Ankunft in Ouidah", es: "Llegada a Uidá" }, body: { en: "Airport meeting and the road to Ouidah. Evening briefing on protocol: dress, photography, offerings.", fr: "Accueil à l'aéroport et route vers Ouidah. Briefing du soir sur le protocole : tenue, photographie, offrandes.", de: "Empfang am Flughafen und Fahrt nach Ouidah. Abendliches Briefing zum Protokoll: Kleidung, Fotografieren, Opfergaben.", es: "Recibimiento en el aeropuerto y carretera a Uidá. Por la noche, explicación del protocolo: vestimenta, fotografía, ofrendas." }, stay: { en: "Ouidah", fr: "Ouidah", de: "Ouidah", es: "Uidá" } },
      { day: 2, title: { en: "Opening", fr: "Ouverture", de: "Eröffnung", es: "Apertura" }, body: { en: "The Route des Esclaves in the morning. The opening evening on the beach.", fr: "La Route des Esclaves le matin. La soirée d'ouverture sur la plage.", de: "Vormittags die Route des Esclaves. Abends die Eröffnung am Strand.", es: "La Ruta de los Esclavos por la mañana. La velada de apertura en la playa." }, stay: { en: "Ouidah", fr: "Ouidah", de: "Ouidah", es: "Uidá" } },
      { day: 3, title: { en: "The great ceremony", fr: "La grande cérémonie", de: "Die große Zeremonie", es: "La gran ceremonia" }, body: { en: "A full day with our host temple, then the great ceremony at the Door of No Return.", fr: "Une journée entière avec notre temple hôte, puis la grande cérémonie à la Porte du Non-Retour.", de: "Ein ganzer Tag mit unserem Gastgebertempel, dann die große Zeremonie am Tor ohne Wiederkehr.", es: "Un día entero con nuestro templo anfitrión y después la gran ceremonia en la Puerta del No Retorno." }, stay: { en: "Ouidah", fr: "Ouidah", de: "Ouidah", es: "Uidá" } },
      { day: 4, title: { en: "10 January", fr: "10 janvier", de: "10. Januar", es: "10 de enero" }, body: { en: "The processions and the masquerades. We leave when it is right to leave.", fr: "Les processions et les mascarades. Nous partons quand il est juste de partir.", de: "Die Prozessionen und die Maskeraden. Wir gehen, wenn es richtig ist zu gehen.", es: "Las procesiones y las mascaradas. Nos vamos cuando es el momento de irse." }, stay: { en: "Grand-Popo", fr: "Grand-Popo", de: "Grand-Popo", es: "Grand-Popo" } },
      { day: 5, title: { en: "Grand-Popo", fr: "Grand-Popo", de: "Grand-Popo", es: "Grand-Popo" }, body: { en: "The beach, the Mono by boat, nothing scheduled.", fr: "La plage, le Mono en bateau, rien de prévu.", de: "Der Strand, der Mono mit dem Boot, nichts geplant.", es: "La playa, el Mono en barca, nada programado." }, stay: { en: "Grand-Popo", fr: "Grand-Popo", de: "Grand-Popo", es: "Grand-Popo" } },
      { day: 6, title: { en: "Departure", fr: "Départ", de: "Abreise", es: "Salida" }, body: { en: "Transfer to the airport.", fr: "Transfert à l'aéroport.", de: "Transfer zum Flughafen.", es: "Traslado al aeropuerto." } },
    ],
    stops: ["ouidah", "grand-popo"],
    stays: ["ouidah-guesthouse", "cotonou-marina"],
    included: INCLUDED_COMMON,
    excluded: EXCLUDED_COMMON,
    departures: [
      { start: "2027-01-07", end: "2027-01-12", priceXof: 1_250_000, spotsLeft: 8 },
    ],
    faq: [
      {
        q: { en: "Are the 2027 dates confirmed?", fr: "Les dates 2027 sont-elles confirmées ?", de: "Stehen die Termine für 2027 fest?", es: "¿Están confirmadas las fechas de 2027?" },
        a: {
          en: "The festival is set by the government around the 10 January holiday; the 2026 edition ran 8 to 10 January. We hold the dates above and adjust by a day or two once the programme is published.",
          fr: "Le festival est fixé par le gouvernement autour du jour férié du 10 janvier ; l'édition 2026 s'est tenue du 8 au 10 janvier. Nous retenons les dates ci-dessus et ajustons d'un jour ou deux dès la publication du programme.",
          de: "Die Regierung legt das Fest rund um den Feiertag am 10. Januar fest; 2026 fand es vom 8. bis 10. Januar statt. Wir halten die obigen Termine und passen sie um einen oder zwei Tage an, sobald das Programm veröffentlicht ist.",
          es: "El Gobierno fija el festival en torno al festivo del 10 de enero; la edición de 2026 fue del 8 al 10 de enero. Mantenemos las fechas indicadas y las ajustamos uno o dos días cuando se publica el programa.",
        },
      },
      ...FAQ_COMMON,
    ],
    gallery: [
      { file: "vodun-01.jpg", width: 1500, height: 809, alt: { en: "An Egungun masquerade in embroidered cloth, mask raised to the sky", fr: "Un masque Egungun en tissu brodé, le visage levé vers le ciel", de: "Eine Egungun-Maskerade in besticktem Stoff, die Maske zum Himmel erhoben", es: "Una mascarada egungun de tela bordada, con la máscara alzada hacia el cielo" } },
      { file: "vodun-02.jpg", width: 1067, height: 1600, alt: { en: "Zangbeto masquerade", fr: "Mascarade Zangbéto", de: "Zangbeto-Maskerade", es: "Mascarada zangbeto" } },
      { file: "vodun-03.jpg", width: 1600, height: 1067, alt: { en: "Offerings at a temple", fr: "Offrandes dans un temple", de: "Opfergaben an einem Tempel", es: "Ofrendas en un templo" } },
    ],
  },
  {
    slug: "grand-tour-of-benin",
    title: { en: "The Grand Tour of Benin", fr: "Le Grand Tour du Bénin", de: "Die große Benin-Reise", es: "El gran viaje por Benín" },
    pitch: {
      en: "Fourteen days, the whole country: the coast, the kingdoms, the Collines, the Atakora and both national parks.",
      fr: "Quatorze jours, tout le pays : la côte, les royaumes, les Collines, l'Atakora et les deux parcs nationaux.",
      de: "Vierzehn Tage, das ganze Land: die Küste, die Königreiche, die Collines, der Atakora und beide Nationalparks.",
      es: "Catorce días, todo el país: la costa, los reinos, las Collines, el Atakora y los dos parques nacionales.",
    },
    summary: {
      en: "The journey we built the company for. Two weeks from the Atlantic to the Niger river: Ganvié and Ouidah, the palaces of Abomey and the masks of Kétou, the sacred hills of Dassa, the Bariba horsemen of Parakou, the Tata Somba of the Atakora, Pendjari and the W. Nobody else sells it, because nobody else drives it.",
      fr: "Le voyage pour lequel nous avons créé la maison. Deux semaines de l'Atlantique au fleuve Niger : Ganvié et Ouidah, les palais d'Abomey et les masques de Kétou, les collines sacrées de Dassa, les cavaliers bariba de Parakou, les Tata Somba de l'Atakora, la Pendjari et le W. Personne d'autre ne le vend, parce que personne d'autre ne le conduit.",
      de: "Die Reise, für die wir das Unternehmen gegründet haben. Zwei Wochen vom Atlantik bis zum Niger: Ganvié und Ouidah, die Paläste von Abomey und die Masken von Kétou, die heiligen Hügel von Dassa, die Bariba-Reiter von Parakou, die Tata Somba des Atakora, die Pendjari und der W. Niemand sonst bietet sie an, weil niemand sonst diese Strecke fährt.",
      es: "El viaje para el que creamos la empresa. Dos semanas del Atlántico al río Níger: Ganvié y Uidá, los palacios de Abomey y las máscaras de Kétou, las colinas sagradas de Dassa, los jinetes bariba de Parakou, las tata somba del Atakora, la Pendjari y el W. Nadie más lo ofrece, porque nadie más hace esa ruta.",
    },
    season: { en: "Nov – Mar", fr: "Nov. – mars", de: "Nov. – März", es: "Nov. – mar." },
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
        "Four nights in the parks, driven by the parks' own rangers",
        "A night in a Tata Somba and a night on Lake Ahémé",
        "Internal flight back from the north when the schedule allows",
      ],
      fr: [
        "Toutes les régions du pays en un seul itinéraire, du sud au nord et retour",
        "Ganvié, Ouidah, Abomey, Kétou, Dassa, Parakou, l'Atakora, la Pendjari, le W",
        "Quatre nuits dans les parcs, avec les écogardes des parcs",
        "Une nuit dans un Tata Somba et une nuit au bord du lac Ahémé",
        "Vol intérieur depuis le nord quand les horaires le permettent",
      ],
      de: ["Jede Region des Landes in einer Reise, von Süden nach Norden und zurück", "Ganvié, Ouidah, Abomey, Kétou, Dassa, Parakou, der Atakora, die Pendjari, der W", "Vier Nächte in den Parks, gefahren von den Rangern der Parks", "Eine Nacht in einem Tata Somba und eine Nacht am Ahémé-See", "Inlandsflug zurück aus dem Norden, wenn der Flugplan es erlaubt"],
      es: ["Todas las regiones del país en un solo itinerario, de sur a norte y vuelta", "Ganvié, Uidá, Abomey, Kétou, Dassa, Parakou, el Atakora, la Pendjari, el W", "Cuatro noches en los parques, con los propios guardas como conductores", "Una noche en una tata somba y otra en el lago Ahémé", "Vuelo interno de regreso desde el norte cuando el horario lo permite"],
    },
    itinerary: [
      { day: 1, title: { en: "Cotonou", fr: "Cotonou", de: "Cotonou", es: "Cotonú" }, body: { en: "Airport meeting, the Fondation Zinsou, dinner by the lagoon.", fr: "Accueil à l'aéroport, la Fondation Zinsou, dîner au bord de la lagune.", de: "Empfang am Flughafen, die Fondation Zinsou, Abendessen an der Lagune.", es: "Recibimiento en el aeropuerto, la Fondation Zinsou, cena junto a la laguna." }, stay: { en: "Cotonou", fr: "Cotonou", de: "Cotonou", es: "Cotonú" } },
      { day: 2, title: { en: "Ganvié and Porto-Novo", fr: "Ganvié et Porto-Novo", de: "Ganvié und Porto-Novo", es: "Ganvié y Porto Novo" }, body: { en: "The stilt town at dawn, then the capital's Afro-Brazilian quarter and the Honmè palace.", fr: "La cité lacustre à l'aube, puis le quartier afro-brésilien de la capitale et le palais Honmè.", de: "Die Pfahlbaustadt im Morgengrauen, dann das afro-brasilianische Viertel der Hauptstadt und der Palast Honmè.", es: "La ciudad lacustre al amanecer, y después el barrio afrobrasileño de la capital y el palacio de Honmè." }, stay: { en: "Porto-Novo", fr: "Porto-Novo", de: "Porto-Novo", es: "Porto Novo" } },
      { day: 3, title: { en: "Kétou", fr: "Kétou", de: "Kétou", es: "Kétou" }, body: { en: "The Yoruba kingdom on the Nigerian border and the Gèlèdé mask tradition, with the society that keeps it.", fr: "Le royaume yoruba à la frontière du Nigeria et la tradition des masques Gèlèdé, avec la société qui la garde.", de: "Das Yoruba-Königreich an der nigerianischen Grenze und die Gèlèdé-Maskentradition, mit dem Bund, der sie bewahrt.", es: "El reino yoruba en la frontera con Nigeria y la tradición de las máscaras gèlèdé, con la sociedad que la custodia." }, stay: { en: "Kétou", fr: "Kétou", de: "Kétou", es: "Kétou" } },
      { day: 4, title: { en: "Abomey", fr: "Abomey", de: "Abomey", es: "Abomey" }, body: { en: "The royal palaces and bas-reliefs, the appliqué workshops.", fr: "Les palais royaux et les bas-reliefs, les ateliers d'appliqués.", de: "Die Königspaläste und Flachreliefs, die Applikationswerkstätten.", es: "Los palacios reales y sus bajorrelieves, los talleres de aplicaciones textiles." }, stay: { en: "Abomey", fr: "Abomey", de: "Abomey", es: "Abomey" } },
      { day: 5, title: { en: "The Collines", fr: "Les Collines", de: "Die Collines", es: "Las Collines" }, body: { en: "The sacred hills of Dassa-Zoumé and the yam country around Savalou.", fr: "Les collines sacrées de Dassa-Zoumé et le pays de l'igname autour de Savalou.", de: "Die heiligen Hügel von Dassa-Zoumé und das Yamsland um Savalou.", es: "Las colinas sagradas de Dassa-Zoumé y la tierra del ñame en torno a Savalou." }, stay: { en: "Dassa-Zoumé", fr: "Dassa-Zoumé", de: "Dassa-Zoumé", es: "Dassa-Zoumé" } },
      { day: 6, title: { en: "Parakou", fr: "Parakou", de: "Parakou", es: "Parakou" }, body: { en: "The crossroads of the north: the big market and the Bariba horsemen.", fr: "Le carrefour du nord : le grand marché et les cavaliers bariba.", de: "Die Drehscheibe des Nordens: der große Markt und die Bariba-Reiter.", es: "La encrucijada del norte: el gran mercado y los jinetes bariba." }, stay: { en: "Parakou", fr: "Parakou", de: "Parakou", es: "Parakou" } },
      { day: 7, title: { en: "The W", fr: "Le W", de: "Der W", es: "El W" }, body: { en: "North-east to the W National Park and the Niger river's bend. Evening game drive.", fr: "Vers le nord-est, le parc national du W et le méandre du fleuve Niger. Safari en fin de journée.", de: "Nach Nordosten in den Nationalpark W und zum Bogen des Niger. Abendliche Pirschfahrt.", es: "Hacia el noreste, al Parque Nacional W y la curva del río Níger. Safari al atardecer." }, stay: { en: "W park camp", fr: "Campement du W", de: "Camp im W-Park", es: "Campamento del parque W" } },
      { day: 8, title: { en: "The W, full day", fr: "Le W, journée complète", de: "Der W, ganzer Tag", es: "El W, día completo" }, body: { en: "Dawn and dusk drives along the river.", fr: "Safaris à l'aube et au crépuscule le long du fleuve.", de: "Pirschfahrten im Morgengrauen und in der Dämmerung am Fluss.", es: "Safaris al amanecer y al atardecer junto al río." }, stay: { en: "W park camp", fr: "Campement du W", de: "Camp im W-Park", es: "Campamento del parque W" } },
      { day: 9, title: { en: "West to the Atakora", fr: "Vers l'ouest, l'Atakora", de: "Nach Westen zum Atakora", es: "Al oeste, hacia el Atakora" }, body: { en: "The long road west through Kandi and Natitingou to Tata Somba country.", fr: "La longue route vers l'ouest par Kandi et Natitingou jusqu'au pays des Tata Somba.", de: "Die lange Straße nach Westen über Kandi und Natitingou ins Land der Tata Somba.", es: "La larga carretera hacia el oeste por Kandi y Natitingou hasta el país de las tata somba." }, stay: { en: "Koussoukoingou", fr: "Koussoukoingou", de: "Koussoukoingou", es: "Koussoukoingou" } },
      { day: 10, title: { en: "Koutammakou", fr: "Koutammakou", de: "Koutammakou", es: "Koutammakou" }, body: { en: "A day among the fortified houses with the families who build them.", fr: "Une journée parmi les maisons-forteresses avec les familles qui les bâtissent.", de: "Ein Tag zwischen den befestigten Häusern, mit den Familien, die sie bauen.", es: "Un día entre las casas fortificadas con las familias que las construyen." }, stay: { en: "Koussoukoingou", fr: "Koussoukoingou", de: "Koussoukoingou", es: "Koussoukoingou" } },
      { day: 11, title: { en: "Tanougou and Pendjari", fr: "Tanougou et la Pendjari", de: "Tanougou und Pendjari", es: "Tanougou y la Pendjari" }, body: { en: "A swim at the falls, then into the park by the Batia gate.", fr: "Baignade aux cascades, puis entrée dans le parc par la porte de Batia.", de: "Ein Bad an den Fällen, dann durch das Tor von Batia in den Park.", es: "Un baño en las cascadas y entrada al parque por la puerta de Batia." }, stay: { en: "Pendjari lodge", fr: "Lodge de la Pendjari", de: "Lodge in der Pendjari", es: "Lodge de la Pendjari" } },
      { day: 12, title: { en: "Pendjari, full day", fr: "Pendjari, journée complète", de: "Pendjari, ganzer Tag", es: "Pendjari, día completo" }, body: { en: "The Pendjari river, the Mare Bali and the lions when they allow it.", fr: "La rivière Pendjari, la mare Bali et les lions quand ils le veulent bien.", de: "Der Pendjari-Fluss, die Mare Bali und die Löwen, wenn sie es zulassen.", es: "El río Pendjari, la Mare Bali y los leones cuando se dejan ver." }, stay: { en: "Pendjari lodge", fr: "Lodge de la Pendjari", de: "Lodge in der Pendjari", es: "Lodge de la Pendjari" } },
      { day: 13, title: { en: "South to the coast", fr: "Retour vers la côte", de: "Nach Süden an die Küste", es: "Al sur, hacia la costa" }, body: { en: "Flight or drive to Cotonou, then the coast road to Grand-Popo.", fr: "Vol ou route jusqu'à Cotonou, puis la côte jusqu'à Grand-Popo.", de: "Flug oder Fahrt nach Cotonou, dann die Küstenstraße nach Grand-Popo.", es: "Vuelo o carretera a Cotonú y después la carretera de la costa a Grand-Popo." }, stay: { en: "Grand-Popo", fr: "Grand-Popo", de: "Grand-Popo", es: "Grand-Popo" } },
      { day: 14, title: { en: "Ouidah and departure", fr: "Ouidah et départ", de: "Ouidah und Abreise", es: "Uidá y salida" }, body: { en: "The Route des Esclaves, the beach, and the airport.", fr: "La Route des Esclaves, la plage et l'aéroport.", de: "Die Route des Esclaves, der Strand und der Flughafen.", es: "La Ruta de los Esclavos, la playa y el aeropuerto." } },
    ],
    stops: ["cotonou", "ganvie", "porto-novo", "ketou", "abomey", "dassa", "parakou", "parc-w", "koutammakou", "tanougou", "pendjari", "grand-popo", "ouidah"],
    stays: ["cotonou-marina", "collines-lodge", "tata-somba", "pendjari-lodge", "lagoon-lodge", "ouidah-guesthouse"],
    included: {
      en: [...INCLUDED_COMMON.en, "Park fees and four days of game drives", "Internal flight from the north when scheduled"],
      fr: [...INCLUDED_COMMON.fr, "Droits d'entrée aux parcs et quatre jours de safari", "Vol intérieur depuis le nord lorsqu'il est programmé"],
      de: [...INCLUDED_COMMON.de, "Parkgebühren und vier Tage Pirschfahrten", "Inlandsflug aus dem Norden, wenn angeboten"],
      es: [...INCLUDED_COMMON.es, "Tasas de los parques y cuatro días de safari", "Vuelo interno desde el norte cuando esté programado"],
    },
    excluded: EXCLUDED_COMMON,
    departures: [
      { start: "2026-11-28", end: "2026-12-11", priceXof: 3_600_000, spotsLeft: 6 },
      { start: "2027-01-16", end: "2027-01-29", priceXof: 3_600_000, spotsLeft: 6 },
      { start: "2027-02-20", end: "2027-03-05", priceXof: 3_600_000, spotsLeft: 6 },
    ],
    faq: [
      {
        q: { en: "Is fourteen days too long for Benin?", fr: "Quatorze jours, est-ce trop long pour le Bénin ?", de: "Sind vierzehn Tage für Benin zu lang?", es: "¿Son demasiados catorce días para Benín?" },
        a: {
          en: "It is the minimum to see the whole country without rushing. Most of the kilometres are in the north, and we break the long days in two. If you have ten days, we suggest The Twelve Kings plus North to Pendjari instead.",
          fr: "C'est le minimum pour voir tout le pays sans courir. L'essentiel des kilomètres est au nord, et nous coupons les longues journées en deux. Avec dix jours, nous conseillons plutôt Les Douze Rois suivi de Vers le nord, la Pendjari.",
          de: "Es ist das Minimum, um das ganze Land ohne Hetze zu sehen. Die meisten Kilometer liegen im Norden, und wir teilen die langen Tage in zwei. Wenn Sie zehn Tage haben, empfehlen wir stattdessen Die zwölf Könige plus Nach Norden in die Pendjari.",
          es: "Es el mínimo para ver todo el país sin prisas. La mayoría de los kilómetros están en el norte y dividimos en dos las jornadas largas. Si tiene diez días, le sugerimos mejor Los doce reyes más Al norte, a la Pendjari.",
        },
      },
      ...FAQ_COMMON,
    ],
    gallery: [
      { file: "grand-01.jpg", width: 1500, height: 836, alt: { en: "A Sunday crowd on the steps of an old church in the south", fr: "La foule du dimanche sur les marches d'une vieille église du sud", de: "Eine Sonntagsmenge auf den Stufen einer alten Kirche im Süden", es: "Una multitud de domingo en la escalinata de una antigua iglesia del sur" } },
      { file: "grand-02.jpg", width: 1067, height: 1600, alt: { en: "Gèlèdé mask, Kétou", fr: "Masque Gèlèdé, Kétou", de: "Gèlèdé-Maske, Kétou", es: "Máscara gèlèdé, Kétou" } },
      { file: "grand-03.jpg", width: 1500, height: 1125, alt: { en: "The pool and terraces of a five-star hotel in Cotonou", fr: "La piscine et les terrasses d'un hôtel cinq étoiles à Cotonou", de: "Pool und Terrassen eines Fünf-Sterne-Hotels in Cotonou", es: "La piscina y las terrazas de un hotel de cinco estrellas en Cotonú" } },
      { file: "grand-04.jpg", width: 1500, height: 1000, alt: { en: "A herd of elephants in the dry grass of Pendjari", fr: "Un troupeau d'éléphants dans les herbes sèches de la Pendjari", de: "Eine Elefantenherde im trockenen Gras der Pendjari", es: "Una manada de elefantes en la hierba seca de la Pendjari" } },
    ],
  },
  {
    slug: "collines-and-centre",
    title: { en: "The Collines & the Centre", fr: "Les Collines & le Centre", de: "Die Collines & die Mitte", es: "Las Collines y el centro" },
    pitch: {
      en: "Sacred hills, yam country and the Bariba north: the Benin almost nobody visits.",
      fr: "Collines sacrées, pays de l'igname et nord bariba : le Bénin que presque personne ne visite.",
      de: "Heilige Hügel, Yamsland und der Bariba-Norden: das Benin, das fast niemand besucht.",
      es: "Colinas sagradas, tierra del ñame y el norte bariba: el Benín que casi nadie visita.",
    },
    summary: {
      en: "Five days through the middle of the country. The forty-one hills of Dassa-Zoumé, the yam festival country of Savalou, the Gèlèdé masks of Kétou and the horsemen of Parakou. Slow roads, big skies, almost no other travellers.",
      fr: "Cinq jours à travers le milieu du pays. Les quarante et une collines de Dassa-Zoumé, le pays de la fête de l'igname à Savalou, les masques Gèlèdé de Kétou et les cavaliers de Parakou. Routes lentes, grands ciels, presque aucun autre voyageur.",
      de: "Fünf Tage durch die Mitte des Landes. Die einundvierzig Hügel von Dassa-Zoumé, das Land des Yamsfests um Savalou, die Gèlèdé-Masken von Kétou und die Reiter von Parakou. Ruhige Straßen, weiter Himmel, kaum andere Reisende.",
      es: "Cinco días por el centro del país. Las cuarenta y una colinas de Dassa-Zoumé, la tierra de la fiesta del ñame en Savalou, las máscaras gèlèdé de Kétou y los jinetes de Parakou. Carreteras tranquilas, cielos amplios y casi ningún otro viajero.",
    },
    season: { en: "Oct – Mar", fr: "Oct. – mars", de: "Okt. – März", es: "Oct. – mar." },
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
      de: ["Wanderung bei Sonnenaufgang auf den heiligen Hügeln von Dassa-Zoumé", "Kétou und der Gèlèdé-Maskenbund", "Savalou in der Yamssaison, auf Wunsch mit dem Erntefest im August", "Der Markt von Parakou und die Bariba-Reiter"],
      es: ["Paseo al amanecer por las colinas sagradas de Dassa-Zoumé", "Kétou y la sociedad de máscaras gèlèdé", "Savalou en temporada de ñame, con la fiesta de la cosecha en agosto a petición", "El mercado de Parakou y los jinetes bariba"],
    },
    itinerary: [
      { day: 1, title: { en: "Cotonou to Kétou", fr: "De Cotonou à Kétou", de: "Von Cotonou nach Kétou", es: "De Cotonú a Kétou" }, body: { en: "Airport meeting and the road north-east to the Yoruba kingdom.", fr: "Accueil à l'aéroport et route vers le nord-est jusqu'au royaume yoruba.", de: "Empfang am Flughafen und Fahrt nach Nordosten ins Yoruba-Königreich.", es: "Recibimiento en el aeropuerto y carretera al noreste, al reino yoruba." }, stay: { en: "Kétou", fr: "Kétou", de: "Kétou", es: "Kétou" } },
      { day: 2, title: { en: "Kétou to Dassa", fr: "De Kétou à Dassa", de: "Von Kétou nach Dassa", es: "De Kétou a Dassa" }, body: { en: "The Gèlèdé society in the morning, then west to the Collines.", fr: "La société Gèlèdé le matin, puis route vers l'ouest et les Collines.", de: "Vormittags der Gèlèdé-Bund, dann nach Westen in die Collines.", es: "La sociedad gèlèdé por la mañana y después hacia el oeste, a las Collines." }, stay: { en: "Dassa-Zoumé", fr: "Dassa-Zoumé", de: "Dassa-Zoumé", es: "Dassa-Zoumé" } },
      { day: 3, title: { en: "The sacred hills", fr: "Les collines sacrées", de: "Die heiligen Hügel", es: "Las colinas sagradas" }, body: { en: "Sunrise walk, the grotto, and the yam country around Savalou.", fr: "Marche au lever du soleil, la grotte, et le pays de l'igname autour de Savalou.", de: "Wanderung bei Sonnenaufgang, die Grotte und das Yamsland um Savalou.", es: "Paseo al amanecer, la gruta y la tierra del ñame en torno a Savalou." }, stay: { en: "Dassa-Zoumé", fr: "Dassa-Zoumé", de: "Dassa-Zoumé", es: "Dassa-Zoumé" } },
      { day: 4, title: { en: "Parakou", fr: "Parakou", de: "Parakou", es: "Parakou" }, body: { en: "North to the crossroads city: the market and the horsemen.", fr: "Vers le nord, la ville carrefour : le marché et les cavaliers.", de: "Nach Norden in die Drehscheibe des Nordens: der Markt und die Reiter.", es: "Al norte, a la ciudad encrucijada: el mercado y los jinetes." }, stay: { en: "Parakou", fr: "Parakou", de: "Parakou", es: "Parakou" } },
      { day: 5, title: { en: "Return south", fr: "Retour vers le sud", de: "Zurück nach Süden", es: "Regreso al sur" }, body: { en: "Train or road back to Cotonou and departure.", fr: "Train ou route jusqu'à Cotonou et départ.", de: "Mit dem Zug oder auf der Straße zurück nach Cotonou und Abreise.", es: "En tren o por carretera de vuelta a Cotonú y salida." } },
    ],
    stops: ["ketou", "dassa", "parakou"],
    stays: ["cotonou-marina", "collines-lodge"],
    included: INCLUDED_COMMON,
    excluded: EXCLUDED_COMMON,
    departures: [
      { start: "2026-11-02", end: "2026-11-06", priceXof: 890_000, spotsLeft: 8 },
      { start: "2027-01-11", end: "2027-01-15", priceXof: 890_000, spotsLeft: 8 },
      { start: "2027-03-01", end: "2027-03-05", priceXof: 890_000, spotsLeft: 8 },
    ],
    faq: FAQ_COMMON,
    gallery: [
      { file: "collines-01.jpg", width: 1600, height: 1067, alt: { en: "The hills of Dassa-Zoumé", fr: "Les collines de Dassa-Zoumé", de: "Die Hügel von Dassa-Zoumé", es: "Las colinas de Dassa-Zoumé" } },
      { file: "collines-02.jpg", width: 1067, height: 1600, alt: { en: "Yam stalls at Savalou", fr: "Étal d'ignames à Savalou", de: "Yamsstände in Savalou", es: "Puestos de ñame en Savalou" } },
      { file: "collines-03.jpg", width: 1600, height: 1067, alt: { en: "Parakou market", fr: "Marché de Parakou", de: "Markt von Parakou", es: "Mercado de Parakou" } },
    ],
  },
];
