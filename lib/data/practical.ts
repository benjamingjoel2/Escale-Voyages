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
  { label: { en: "Time zone", fr: "Fuseau horaire", de: "Zeitzone", es: "Huso horario" }, value: { en: "WAT, UTC+1, no daylight saving", fr: "WAT, UTC+1, pas d'heure d'été", de: "WAT, UTC+1, keine Sommerzeit", es: "WAT, UTC+1, sin horario de verano" } },
  { label: { en: "Languages", fr: "Langues", de: "Sprachen", es: "Idiomas" }, value: { en: "French official; Fon, Yoruba, Bariba, Dendi", fr: "Français officiel ; fon, yoruba, bariba, dendi", de: "Amtssprache Französisch; Fon, Yoruba, Bariba, Dendi", es: "Francés oficial; fon, yoruba, bariba, dendi" } },
  { label: { en: "Currency", fr: "Monnaie", de: "Währung", es: "Moneda" }, value: { en: "CFA franc (XOF), pegged at 655.957 per euro", fr: "Franc CFA (XOF), parité fixe 655,957 pour un euro", de: "CFA-Franc (XOF), fest an den Euro gekoppelt: 655,957 pro Euro", es: "Franco CFA (XOF), con paridad fija de 655,957 por euro" } },
  { label: { en: "Visa", fr: "Visa", de: "Visum", es: "Visado" }, value: { en: "E-visa online before travel for most nationalities", fr: "E-visa en ligne avant le départ pour la plupart des nationalités", de: "Für die meisten Nationalitäten E-Visum online vor der Reise", es: "Visado electrónico en línea antes del viaje para la mayoría de nacionalidades" } },
  { label: { en: "Electricity", fr: "Électricité", de: "Strom", es: "Electricidad" }, value: { en: "220 V, 50 Hz, European plugs (C and E)", fr: "220 V, 50 Hz, prises européennes (C et E)", de: "220 V, 50 Hz, europäische Stecker (C und E)", es: "220 V, 50 Hz, enchufes europeos (C y E)" } },
  { label: { en: "Best time", fr: "Meilleure période", de: "Beste Reisezeit", es: "Mejor época" }, value: { en: "November to March", fr: "Novembre à mars", de: "November bis März", es: "De noviembre a marzo" } },
];

export const practical: PracticalSection[] = [
  {
    slug: "visas",
    title: { en: "Visas and e-visa", fr: "Visas et e-visa", de: "Visum und E-Visum", es: "Visados y visado electrónico" },
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
      de: ["Staatsangehörige der ECOWAS-Länder reisen ohne Visum ein. Die meisten anderen Nationalitäten, darunter EU, Vereinigtes Königreich, USA, Kanada und Brasilien, beantragen vor der Abreise online ein E-Visum über das Regierungsportal. Visa bei Ankunft werden nicht mehr ausgestellt.", "Es gibt drei Varianten: 30 Tage einfache Einreise, 30 Tage mehrfache Einreise und 90 Tage mehrfache Einreise. Die Gebühren lagen bei unserer letzten Prüfung bei etwa 50, 75 und 100 Euro. Die Bearbeitung dauert zwei Werktage bis eine Woche; beantragen Sie es also mindestens zwei Wochen vor dem Flug.", "Ihr Reisepass muss noch sechs Monate über die Ankunft hinaus gültig sein und mindestens eine freie Seite haben. Führen Sie einen Ausdruck der E-Visum-Bestätigung mit; die Fluggesellschaften verlangen ihn beim Check-in. Mit jeder bestätigten Buchung schicken wir eine Checkliste und erinnern Sie, bis alles erledigt ist."],
      es: ["Los ciudadanos de los países de la CEDEAO entran sin visado. La mayoría de las demás nacionalidades, incluidas las de la UE, el Reino Unido, EE. UU., Canadá y Brasil, solicitan en línea un visado electrónico en el portal oficial antes de salir. Ya no se expiden visados a la llegada.", "Hay tres opciones: 30 días con una entrada, 30 días con entradas múltiples y 90 días con entradas múltiples. En nuestra última comprobación las tasas eran de unos 50, 75 y 100 euros. La tramitación tarda de dos días hábiles a una semana, así que solicítelo al menos dos semanas antes del vuelo.", "Su pasaporte debe tener una validez de seis meses después de la llegada y al menos una página en blanco. Lleve una copia impresa de la aprobación del visado; las aerolíneas la piden al facturar. Con cada reserva confirmada enviamos una lista de comprobación y le recordamos lo pendiente hasta que esté todo hecho."],
    },
    verified: "2026-10-01",
  },
  {
    slug: "health",
    title: { en: "Health and vaccinations", fr: "Santé et vaccins", de: "Gesundheit und Impfungen", es: "Salud y vacunas" },
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
      de: ["Gelbfieber: Im April 2026 gab das Gesundheitsministerium bekannt, dass Impfnachweise an den Einreisestellen nicht mehr kontrolliert werden. Die Impfung wird dennoch dringend empfohlen, manche E-Visum-Hinweise nennen sie noch, und Nachbarländer können sie verlangen. Wir raten daher, sich impfen zu lassen und den Nachweis mitzuführen.", "Malaria kommt ganzjährig im ganzen Land vor. Nehmen Sie eine Prophylaxe nach ärztlichem Rat, schlafen Sie unter den Netzen, die wir bereitstellen, und benutzen Sie in der Dämmerung Mückenschutz. Die Standardimpfungen (Hepatitis A und B, Typhus, Tetanus) sollten aufgefrischt sein.", "Cotonou hat gute Privatkliniken, der Norden nur eine Grundversorgung. Jede Reise führt ein Erste-Hilfe-Set mit, und unser Büro hat Ihre Versicherungs- und Notfalldaten. Eine Reiseversicherung mit Krankenrücktransport ist Buchungsvoraussetzung."],
      es: ["Fiebre amarilla: en abril de 2026 el Ministerio de Salud anunció que los certificados de vacunación ya no se comprueban en los puntos de entrada. Aun así, la vacuna se recomienda encarecidamente, algunas guías del visado electrónico todavía la mencionan y los países vecinos pueden exigirla, por lo que aconsejamos vacunarse y llevar el certificado.", "La malaria está presente todo el año en todo el país. Tome la profilaxis que le indique su médico, duerma bajo las mosquiteras que proporcionamos y use repelente al atardecer. Las vacunas habituales (hepatitis A y B, fiebre tifoidea, tétanos) deben estar al día.", "Cotonú cuenta con buenas clínicas privadas; en el norte la atención es básica. Cada viaje lleva un botiquín y nuestra oficina guarda sus datos de seguro y de emergencia. El seguro de viaje con evacuación médica es condición para reservar."],
    },
    verified: "2026-10-01",
  },
  {
    slug: "money",
    title: { en: "Money and mobile payments", fr: "Argent et paiement mobile", de: "Geld und mobiles Bezahlen", es: "Dinero y pagos móviles" },
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
      de: ["Der CFA-Franc ist fest an den Euro gekoppelt, Ihr Budget in Euro bleibt also berechenbar. Außerhalb von Cotonou regiert Bargeld. Geldautomaten in den größeren Städten akzeptieren Visa; mit Mastercard ist es lückenhafter. Bringen Sie Euro in bar zum Wechseln mit, statt sich auf Karten zu verlassen.", "Mit Mobile Money (MTN MoMo und Moov Money) bezahlt Benin alles. Wir richten Ihnen am ersten Tag eine lokale SIM-Karte und ein Konto ein, damit Sie Märkte, Taxis und Trinkgelder wie Einheimische bezahlen können.", "Trinkgeld wird geschätzt, aber nicht erwartet. Im Reisedokument schlagen wir einen Tagesbetrag für Ihren Fahrer vor, damit es am Ende keine Verlegenheit gibt."],
      es: ["El franco CFA tiene paridad fija con el euro, así que su presupuesto en euros es previsible. Fuera de Cotonú manda el efectivo. Los cajeros de las ciudades principales aceptan Visa; con Mastercard es más irregular. Traiga euros en efectivo para cambiar en lugar de depender de las tarjetas.", "Con el dinero móvil (MTN MoMo y Moov Money) se paga todo en Benín. Podemos darle de alta una SIM local y un monedero el primer día para que pague mercados, taxis y propinas como un residente.", "La propina se agradece pero no se espera. En el documento del itinerario sugerimos un importe diario para su conductor, para evitar situaciones incómodas al final."],
    },
    verified: "2026-10-01",
  },
  {
    slug: "when",
    title: { en: "Best time to visit", fr: "Quand partir", de: "Beste Reisezeit", es: "Mejor época para viajar" },
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
      de: ["Die Trockenzeit dauert im ganzen Land von November bis März. Das ist die Zeit für den Norden: Die Straßen sind befahrbar, der Harmattan bringt kühle Morgen und staubig-goldenes Licht, und ab Januar sammeln sich die Tiere der Pendjari an den Wasserstellen.", "Der Süden hat zwei Regenzeiten, von April bis Juli und eine kürzere im Oktober. Der Regen fällt in nachmittäglichen Schauern statt den ganzen Tag, die Lagunen sind voll und grün, und die Preise niedriger. Die Küste und Ouidah sind ganzjährig schön.", "Der Januar ist wegen der Vodun Days der gefragteste Monat. Buchen Sie diese Reise sechs Monate im Voraus. Der August mit dem Yamsfest und den grünen Hügeln ist unser liebster ruhiger Monat in den Collines."],
      es: ["La estación seca va de noviembre a marzo en todo el país. Es la época del norte: las carreteras están abiertas, el harmatán trae mañanas frescas y una luz dorada y polvorienta, y desde enero los animales de la Pendjari se concentran junto al agua.", "El sur tiene dos estaciones de lluvias, de abril a julio y otra más corta en octubre. La lluvia cae en chaparrones por la tarde, no todo el día, las lagunas están llenas y verdes y los precios son más bajos. La costa y Uidá están bien todo el año.", "Enero es el mes de más demanda por los Vodun Days. Reserve ese viaje con seis meses de antelación. Agosto, con la fiesta del ñame y las colinas verdes, es nuestro mes tranquilo favorito en las Collines."],
    },
    verified: "2026-10-01",
  },
  {
    slug: "safety",
    title: { en: "Safety", fr: "Sécurité", de: "Sicherheit", es: "Seguridad" },
    paragraphs: {
      en: [
        "Benin is one of the calmest countries in West Africa. The south and centre are relaxed; ordinary city sense applies in Cotonou at night. Our drivers never travel after dark on intercity roads.",
        "The far north along the Burkina Faso and Niger borders carries a security advisory from most governments because of regional instability. Pendjari and the W are open, with a security presence, and we follow official advice and our park partners day by day. If a leg has to change, we tell you plainly and propose an alternative at no cost.",
      ],
      fr: [
        "Le Bénin est l'un des pays les plus calmes d'Afrique de l'Ouest. Le sud et le centre sont tranquilles ; le bon sens habituel s'applique à Cotonou la nuit. Nos chauffeurs ne roulent jamais de nuit sur les routes interurbaines.",
        "L'extrême nord, le long des frontières du Burkina Faso et du Niger, fait l'objet d'avis de prudence de la plupart des gouvernements en raison de l'instabilité régionale. La Pendjari et le W sont ouverts, avec une présence sécuritaire, et nous suivons les recommandations officielles et nos partenaires des parcs jour par jour. Si une étape doit changer, nous vous le disons clairement et proposons une alternative sans frais.",
      ],
      de: ["Benin ist eines der ruhigsten Länder Westafrikas. Der Süden und die Mitte sind entspannt; in Cotonou gilt nachts die übliche Großstadtvorsicht. Unsere Fahrer sind nach Einbruch der Dunkelheit nie auf Überlandstraßen unterwegs.", "Für den äußersten Norden entlang der Grenzen zu Burkina Faso und Niger geben die meisten Regierungen wegen der regionalen Instabilität Sicherheitshinweise heraus. Pendjari und W sind geöffnet und gesichert, und wir folgen Tag für Tag den offiziellen Hinweisen und unseren Parkpartnern. Muss sich eine Etappe ändern, sagen wir es Ihnen offen und schlagen kostenlos eine Alternative vor."],
      es: ["Benín es uno de los países más tranquilos de África Occidental. El sur y el centro son apacibles; en Cotonú de noche basta con la prudencia habitual de cualquier ciudad. Nuestros conductores nunca circulan de noche por carreteras interurbanas.", "El extremo norte, a lo largo de las fronteras con Burkina Faso y Níger, tiene avisos de seguridad de la mayoría de los gobiernos por la inestabilidad regional. La Pendjari y el W están abiertos, con presencia de seguridad, y seguimos día a día las recomendaciones oficiales y a nuestros socios en los parques. Si una etapa tiene que cambiar, se lo decimos con claridad y proponemos una alternativa sin coste."],
    },
    verified: "2026-10-01",
  },
  {
    slug: "getting-there",
    title: { en: "Getting there", fr: "Venir au Bénin", de: "Anreise", es: "Cómo llegar" },
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
      de: ["Der Flughafen Cadjehoun in Cotonou (COO) hat Direktflüge aus Paris, Brüssel, Istanbul, Addis Abeba, Casablanca, Lomé, Abidjan und Lagos. Aus Nordamerika und Brasilien führen die üblichen Verbindungen über Paris, Brüssel oder Lissabon.", "Wir holen jeden Gast am Flughafen ab, zu jeder Uhrzeit, und die erste Nacht verbringen Sie immer in Cotonou oder an der Küste, damit Sie ausgeruht beginnen.", "Die Anreise auf dem Landweg aus Togo oder Nigeria ist möglich, und wir organisieren sie für Reisende, die mehrere Länder verbinden; planen Sie Zeit an der Grenze ein."],
      es: ["El aeropuerto de Cadjehoun en Cotonú (COO) tiene vuelos directos desde París, Bruselas, Estambul, Adís Abeba, Casablanca, Lomé, Abiyán y Lagos. Desde Norteamérica y Brasil las rutas habituales pasan por París, Bruselas o Lisboa.", "Recibimos a cada viajero en el aeropuerto, sea la hora que sea, y la primera noche es siempre en Cotonú o en la costa para empezar descansado.", "Es posible llegar por tierra desde Togo o Nigeria y lo organizamos para quienes combinan países; cuente con tiempo en la frontera."],
    },
    verified: "2026-10-01",
  },
  {
    slug: "getting-around",
    title: { en: "Getting around", fr: "Se déplacer", de: "Unterwegs im Land", es: "Desplazarse" },
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
      de: ["Alle unsere Reisen sind in klimatisierten 4×4 mit einem Fahrer unterwegs, der die Strecke kennt. Die Hauptstraße von Nord nach Süd ist asphaltiert; Parkpisten und der Atakora sind stellenweise holprig, was zum Reiz gehört.", "Von Cotonou nach Natitingou ist es ein langer Tag von rund zehn Stunden, deshalb teilen wir die Strecke. An einigen Wochentagen gibt es einen Inlandsflug aus dem Norden; wir nutzen ihn, wenn der Flugplan passt.", "Der Zémidjan, das Motorradtaxi mit gelbem Hemd, ist das Verkehrsmittel Cotonous. Probieren Sie es für kurze Strecken mit Helm; wir zeigen Ihnen, wie es geht."],
      es: ["Todos nuestros viajes se hacen en 4×4 climatizados con un conductor que conoce la ruta. La carretera principal norte-sur está asfaltada; las pistas de los parques y el Atakora son irregulares en algunos tramos, y eso forma parte del encanto.", "De Cotonú a Natitingou hay una jornada larga de unas diez horas, así que la dividimos. Algunos días de la semana hay un vuelo interno desde el norte; lo usamos cuando el horario lo permite.", "El zémidjan, la mototaxi de camisa amarilla, es como se mueve Cotonú. Pruébelo en trayectos cortos y con casco; le enseñaremos cómo."],
    },
    verified: "2026-10-01",
  },
  {
    slug: "packing",
    title: { en: "What to pack", fr: "Que mettre dans la valise", de: "Was einpacken", es: "Qué llevar" },
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
      de: ["Leicht, locker, lang: Baumwolle oder Leinen, das Schultern und Knie für Tempel, Paläste und Dörfer bedeckt. Ein Tuch für Frauen bei Zeremonien. Gedeckte Farben für die Parks; keine Tarnmuster, die dem Militär vorbehalten sind.", "Gute Wanderschuhe, Sandalen, ein Hut, Sonnencreme mit hohem Schutzfaktor, Mückenschutz, eine nachfüllbare Flasche, eine Stirnlampe und außerhalb der Trockenzeit eine leichte Regenjacke. Ein Fernglas für die Pendjari.", "Kleine Geschenke sind willkommen, doch fragen Sie Ihre Gastgeber, bevor Sie Kindern etwas geben. Fotos von Menschen und Zeremonien brauchen immer eine Erlaubnis; Ihre Gastgeber fragen für Sie."],
      es: ["Ligero, holgado y largo: algodón o lino que cubra hombros y rodillas para templos, palacios y pueblos. Un pañuelo para las mujeres en las ceremonias. Colores neutros para los parques; nada de camuflaje, reservado al ejército.", "Buen calzado para caminar, sandalias, sombrero, protector solar alto, repelente, una botella reutilizable, una linterna frontal y, fuera de la estación seca, un chubasquero ligero. Prismáticos para la Pendjari.", "Si quiere, traiga pequeños regalos, pero pregunte a su anfitrión antes de dar algo a los niños. Las fotos de personas y ceremonias siempre necesitan permiso; su anfitrión lo pedirá por usted."],
    },
    verified: "2026-10-01",
  },
  {
    slug: "connectivity",
    title: { en: "Connectivity", fr: "Connexion", de: "Erreichbarkeit", es: "Conectividad" },
    paragraphs: {
      en: [
        "4G is good in towns and along the main road, thin in the parks and the Atakora. A local SIM with data costs a few euros; we buy one for you on arrival if you wish. Messaging apps are how everyone keeps in touch.",
        "Hotels on our journeys have Wi-Fi except the park lodges, where you are better off without it.",
      ],
      fr: [
        "La 4G est bonne en ville et le long de l'axe principal, faible dans les parcs et l'Atakora. Une carte SIM locale avec données coûte quelques euros ; nous vous en achetons une à l'arrivée si vous le souhaitez. Les messageries sont le moyen de communication de tout le pays.",
        "Les hôtels de nos voyages ont le Wi-Fi, sauf les lodges des parcs, où l'on s'en passe volontiers.",
      ],
      de: ["4G ist in den Städten und entlang der Hauptstraße gut, in den Parks und im Atakora schwach. Eine lokale SIM-Karte mit Daten kostet ein paar Euro; auf Wunsch kaufen wir sie Ihnen bei der Ankunft. Messenger-Apps sind das, worüber alle in Kontakt bleiben.", "Die Hotels auf unseren Reisen haben WLAN, außer den Lodges in den Parks, wo man ohnehin besser darauf verzichtet."],
      es: ["El 4G funciona bien en las ciudades y a lo largo de la carretera principal, y es débil en los parques y el Atakora. Una SIM local con datos cuesta unos pocos euros; si lo desea, se la compramos a su llegada. Las aplicaciones de mensajería son la forma en que todo el mundo se comunica.", "Los hoteles de nuestros viajes tienen wifi, salvo los lodges de los parques, donde se está mejor sin él."],
    },
    verified: "2026-10-01",
  },
];
