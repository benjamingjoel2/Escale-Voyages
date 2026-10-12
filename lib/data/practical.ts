import type { L } from "./journeys";

/**
 * Practical information. Each section carries the date it was last checked;
 * show it, and re-verify before launch. Entry rules change: the yellow-fever
 * circular of April 2026 is the latest change we know of.
 */
export type PracticalSection = {
  slug: string;
  title: L;
  paragraphs: L<string[]>;
  verified: string;
};

export const glance: { label: L; value: L }[] = [
  { label: { en: "Time zone", fr: "Fuseau horaire" }, value: { en: "WAT, UTC+1, no daylight saving", fr: "WAT, UTC+1, pas d'heure d'été" } },
  { label: { en: "Languages", fr: "Langues" }, value: { en: "French official; Fon, Yoruba, Bariba, Dendi", fr: "Français officiel ; fon, yoruba, bariba, dendi" } },
  { label: { en: "Currency", fr: "Monnaie" }, value: { en: "CFA franc (XOF), pegged at 655.957 per euro", fr: "Franc CFA (XOF), parité fixe 655,957 pour un euro" } },
  { label: { en: "Visa", fr: "Visa" }, value: { en: "E-visa online before travel for most nationalities", fr: "E-visa en ligne avant le départ pour la plupart des nationalités" } },
  { label: { en: "Electricity", fr: "Électricité" }, value: { en: "220 V, 50 Hz, European plugs (C and E)", fr: "220 V, 50 Hz, prises européennes (C et E)" } },
  { label: { en: "Best time", fr: "Meilleure période" }, value: { en: "November to March", fr: "Novembre à mars" } },
];

export const practical: PracticalSection[] = [
  {
    slug: "visas",
    title: { en: "Visas and e-visa", fr: "Visas et e-visa" },
    paragraphs: {
      en: [
        "Citizens of ECOWAS countries enter without a visa. Most other nationalities, including the EU, UK, US, Canada and Brazil, apply online for an e-visa at the government portal before departure. Visas on arrival are no longer issued.",
        "Three options are offered: 30 days single entry, 30 days multiple entry, and 90 days multiple entry. Fees were around 50, 75 and 100 euros at our last check. Processing takes from two working days to a week, so apply at least two weeks before you fly.",
        "Your passport must be valid for six months beyond your arrival with at least one blank page. Carry a printed copy of the e-visa approval; airlines ask for it at check-in. We send a checklist with every confirmed booking and chase you until it is done.",
      ],
      fr: [
        "Les ressortissants des pays de la CEDEAO entrent sans visa. La plupart des autres nationalités, dont l'UE, le Royaume-Uni, les États-Unis, le Canada et le Brésil, demandent un e-visa en ligne sur le portail officiel avant le départ. Le visa à l'arrivée n'est plus délivré.",
        "Trois options : 30 jours à entrée unique, 30 jours à entrées multiples, 90 jours à entrées multiples. Les frais étaient d'environ 50, 75 et 100 euros lors de notre dernière vérification. Le traitement prend de deux jours ouvrés à une semaine ; faites la demande au moins deux semaines avant le vol.",
        "Le passeport doit être valable six mois après l'arrivée avec au moins une page vierge. Emportez une copie imprimée de l'approbation ; les compagnies la demandent à l'enregistrement. Nous envoyons une liste de contrôle avec chaque réservation confirmée et nous vous relançons jusqu'à ce que ce soit fait.",
      ],
    },
    verified: "2026-10-01",
  },
  {
    slug: "health",
    title: { en: "Health and vaccinations", fr: "Santé et vaccins" },
    paragraphs: {
      en: [
        "Yellow fever: in April 2026 the Ministry of Health announced that vaccination certificates are no longer checked at ports of entry. The vaccine is still strongly recommended, some e-visa guidance still lists it, and neighbouring countries may ask for it, so we advise getting it and carrying the certificate.",
        "Malaria is present year round across the country. Take prophylaxis as advised by your doctor, sleep under the nets we provide, and use repellent at dusk. Routine vaccines (hepatitis A and B, typhoid, tetanus) should be up to date.",
        "Cotonou has good private clinics; the north has basic care. Every journey carries a first-aid kit and our office holds your insurance and emergency details. Travel insurance with medical evacuation is a condition of booking.",
      ],
      fr: [
        "Fièvre jaune : en avril 2026, le ministère de la Santé a annoncé que le certificat de vaccination n'est plus contrôlé aux points d'entrée. Le vaccin reste fortement recommandé, certaines consignes de l'e-visa le mentionnent encore et les pays voisins peuvent l'exiger ; nous conseillons de le faire et d'emporter le certificat.",
        "Le paludisme est présent toute l'année dans tout le pays. Prenez la prophylaxie conseillée par votre médecin, dormez sous les moustiquaires que nous fournissons et utilisez un répulsif au crépuscule. Les vaccins courants (hépatites A et B, typhoïde, tétanos) doivent être à jour.",
        "Cotonou dispose de bonnes cliniques privées ; le nord de soins de base. Chaque voyage emporte une trousse de premiers secours et notre bureau conserve vos coordonnées d'assurance et d'urgence. Une assurance voyage avec rapatriement médical est une condition de réservation.",
      ],
    },
    verified: "2026-10-01",
  },
  {
    slug: "money",
    title: { en: "Money and mobile payments", fr: "Argent et paiement mobile" },
    paragraphs: {
      en: [
        "The CFA franc is pegged to the euro, so your euro budget is predictable. Cash is still king outside Cotonou. ATMs in the main towns take Visa; Mastercard is patchier. Bring euros in cash to change rather than relying on cards.",
        "Mobile money (MTN MoMo and Moov Money) is how Benin pays for everything. We can set you up with a local SIM and wallet on day one so you can pay markets, taxis and tips like a resident.",
        "Tipping is appreciated and not expected. We suggest a daily amount for your driver in the itinerary document, so there is no awkwardness at the end.",
      ],
      fr: [
        "Le franc CFA a une parité fixe avec l'euro, votre budget en euros est donc prévisible. L'espèce reste reine hors de Cotonou. Les distributeurs des grandes villes acceptent Visa ; Mastercard est plus aléatoire. Apportez des euros en espèces à changer plutôt que de compter sur les cartes.",
        "Le mobile money (MTN MoMo et Moov Money) est le moyen de paiement du Bénin. Nous pouvons vous installer une carte SIM locale et un portefeuille dès le premier jour pour payer marchés, taxis et pourboires comme un résident.",
        "Le pourboire est apprécié, pas attendu. Nous indiquons un montant journalier conseillé pour le chauffeur dans le document d'itinéraire, pour éviter toute gêne à la fin.",
      ],
    },
    verified: "2026-10-01",
  },
  {
    slug: "when",
    title: { en: "Best time to visit", fr: "Quand partir" },
    paragraphs: {
      en: [
        "The dry season runs from November to March across the country. This is the time for the north: roads are open, the harmattan brings cool mornings and dusty golden light, and the animals of Pendjari gather at water from January.",
        "The south has two rainy seasons, April to July and a shorter one in October. Rain comes in afternoon bursts rather than all day, the lagoons are full and green, and prices are lower. The coast and Ouidah are good year round.",
        "January is the busiest month because of Vodun Days. Book that journey six months ahead. August, the yam festival and the green hills, is our favourite quiet month in the Collines.",
      ],
      fr: [
        "La saison sèche va de novembre à mars dans tout le pays. C'est la période du nord : routes ouvertes, harmattan aux matins frais et lumière dorée et poussiéreuse, et les animaux de la Pendjari qui se rassemblent aux points d'eau dès janvier.",
        "Le sud connaît deux saisons des pluies, d'avril à juillet et une plus courte en octobre. La pluie tombe par averses l'après-midi plutôt que toute la journée, les lagunes sont pleines et vertes, et les prix plus bas. La côte et Ouidah se visitent toute l'année.",
        "Janvier est le mois le plus chargé à cause des Vodun Days ; réservez ce voyage six mois à l'avance. Août, la fête de l'igname et les collines vertes, est notre mois calme préféré dans les Collines.",
      ],
    },
    verified: "2026-10-01",
  },
  {
    slug: "safety",
    title: { en: "Safety", fr: "Sécurité" },
    paragraphs: {
      en: [
        "Benin is one of the calmest countries in West Africa. The south and centre are relaxed; ordinary city sense applies in Cotonou at night. Our drivers never travel after dark on intercity roads.",
        "The far north along the Burkina Faso and Niger borders carries a security advisory from most governments because of regional instability. Pendjari and the W are open, with a security presence, and we follow official advice and our park partners day by day. If a leg has to change, we tell you plainly and propose an alternative at no cost.",
      ],
      fr: [
        "Le Bénin est l'un des pays les plus calmes d'Afrique de l'Ouest. Le sud et le centre sont tranquilles ; le bon sens habituel s'applique à Cotonou la nuit. Nos chauffeurs ne roulent jamais de nuit sur les routes interurbaines.",
        "L'extrême nord, le long des frontières du Burkina Faso et du Niger, fait l'objet d'avis de prudence de la plupart des gouvernements en raison de l'instabilité régionale. La Pendjari et le W sont ouverts, avec une présence sécuritaire, et nous suivons les recommandations officielles et nos partenaires des parcs jour par jour. Si une étape doit changer, nous vous le disons clairement et proposons une alternative sans frais.",
      ],
    },
    verified: "2026-10-01",
  },
  {
    slug: "getting-there",
    title: { en: "Getting there", fr: "Venir au Bénin" },
    paragraphs: {
      en: [
        "Cotonou's Cadjehoun airport (COO) has direct flights from Paris, Brussels, Istanbul, Addis Ababa, Casablanca, Lomé, Abidjan and Lagos. From North America and Brazil the usual routes are through Paris, Brussels or Lisbon.",
        "We meet every guest at the airport, whatever the hour, and the first night is always in Cotonou or on the coast so you start rested.",
        "Overland from Togo or Nigeria is possible and we arrange it for travellers combining countries; allow time at the border.",
      ],
      fr: [
        "L'aéroport de Cotonou-Cadjehoun (COO) est relié en direct à Paris, Bruxelles, Istanbul, Addis-Abeba, Casablanca, Lomé, Abidjan et Lagos. Depuis l'Amérique du Nord et le Brésil, on passe en général par Paris, Bruxelles ou Lisbonne.",
        "Nous accueillons chaque voyageur à l'aéroport, quelle que soit l'heure, et la première nuit se passe toujours à Cotonou ou sur la côte pour commencer reposé.",
        "L'arrivée par la route depuis le Togo ou le Nigeria est possible et nous l'organisons pour les voyageurs qui combinent plusieurs pays ; prévoyez du temps à la frontière.",
      ],
    },
    verified: "2026-10-01",
  },
  {
    slug: "getting-around",
    title: { en: "Getting around", fr: "Se déplacer" },
    paragraphs: {
      en: [
        "All our journeys travel in air-conditioned 4×4s with a driver who knows the road. The main north–south road is paved; park tracks and the Atakora are rough in places, which is part of the point.",
        "Cotonou to Natitingou is a long day of around ten hours, so we split it. A domestic flight from the north runs on some days of the week; we use it when the schedule allows.",
        "The zémidjan, the motorbike taxi in a yellow shirt, is how Cotonou moves. Try it for short hops with a helmet; we will show you how.",
      ],
      fr: [
        "Tous nos voyages se font en 4×4 climatisé avec un chauffeur qui connaît la route. L'axe principal nord–sud est goudronné ; les pistes des parcs et de l'Atakora sont rudes par endroits, et c'est un peu le but.",
        "Cotonou–Natitingou est une longue journée d'une dizaine d'heures ; nous la coupons en deux. Un vol intérieur depuis le nord existe certains jours de la semaine ; nous l'utilisons quand les horaires le permettent.",
        "Le zémidjan, la moto-taxi à chemise jaune, c'est le moyen de transport de Cotonou. Essayez-le pour de courts trajets, avec un casque ; nous vous montrerons comment.",
      ],
    },
    verified: "2026-10-01",
  },
  {
    slug: "packing",
    title: { en: "What to pack", fr: "Que mettre dans la valise" },
    paragraphs: {
      en: [
        "Light, loose, long: cotton or linen that covers shoulders and knees for temples, palaces and villages. A scarf for women at ceremonies. Neutral colours for the parks; no camouflage, which is reserved for the army.",
        "Good walking shoes, sandals, a hat, high-factor sun cream, repellent, a refillable bottle, a head torch, and a light rain shell outside the dry season. Binoculars for Pendjari.",
        "Bring small gifts if you like, but ask your host before handing anything to children. Photographs of people and ceremonies always need permission; your host will ask for you.",
      ],
      fr: [
        "Léger, ample, long : du coton ou du lin qui couvre épaules et genoux pour les temples, les palais et les villages. Un foulard pour les femmes lors des cérémonies. Des couleurs neutres dans les parcs ; pas de camouflage, réservé à l'armée.",
        "De bonnes chaussures de marche, des sandales, un chapeau, une crème solaire à indice élevé, un répulsif, une gourde, une lampe frontale et un coupe-pluie léger hors saison sèche. Des jumelles pour la Pendjari.",
        "Apportez de petits cadeaux si vous le souhaitez, mais demandez à votre hôte avant de donner quoi que ce soit aux enfants. Les photos de personnes et de cérémonies exigent toujours une autorisation ; votre hôte la demandera pour vous.",
      ],
    },
    verified: "2026-10-01",
  },
  {
    slug: "connectivity",
    title: { en: "Connectivity", fr: "Connexion" },
    paragraphs: {
      en: [
        "4G is good in towns and along the main road, thin in the parks and the Atakora. A local SIM with data costs a few euros; we buy one for you on arrival if you wish. WhatsApp is the national telephone.",
        "Hotels on our journeys have Wi-Fi except the park lodges, where you are better off without it.",
      ],
      fr: [
        "La 4G est bonne en ville et le long de l'axe principal, faible dans les parcs et l'Atakora. Une carte SIM locale avec données coûte quelques euros ; nous vous en achetons une à l'arrivée si vous le souhaitez. WhatsApp est le téléphone national.",
        "Les hôtels de nos voyages ont le Wi-Fi, sauf les lodges des parcs, où l'on s'en passe volontiers.",
      ],
    },
    verified: "2026-10-01",
  },
];
