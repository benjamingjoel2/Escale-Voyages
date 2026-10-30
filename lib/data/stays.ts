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
    name: { en: "A five-star hotel on the marina", fr: "Un cinq étoiles sur la marina", de: "Ein Fünf-Sterne-Hotel an der Marina", es: "Un hotel de cinco estrellas en el puerto deportivo" },
    place: { en: "Cotonou", fr: "Cotonou", de: "Cotonou", es: "Cotonú" },
    pitch: {
      en: "The first and last night of most journeys, with the Atlantic on one side and the lagoon on the other.",
      fr: "La première et la dernière nuit de la plupart des voyages, l'Atlantique d'un côté, la lagune de l'autre.",
      de: "Die erste und letzte Nacht der meisten Reisen, mit dem Atlantik auf der einen und der Lagune auf der anderen Seite.",
      es: "La primera y la última noche de la mayoría de los viajes, con el Atlántico a un lado y la laguna al otro.",
    },
    body: {
      en: "Terraced stone balconies over a long pool, a lobby hung with Beninese painting and sculpture, a bar under a glass chandelier, a spa and tennis courts. Close enough to the airport to arrive late and leave early without losing the day.",
      fr: "Des balcons de pierre en terrasses au-dessus d'une longue piscine, un hall habillé de peinture et de sculpture béninoises, un bar sous un lustre de verre, un spa et des courts de tennis. Assez près de l'aéroport pour arriver tard et partir tôt sans perdre la journée.",
      de: "Terrassierte Steinbalkone über einem langen Pool, eine Lobby voller beninischer Malerei und Skulptur, eine Bar unter einem gläsernen Kronleuchter, ein Spa und Tennisplätze. Nah genug am Flughafen, um spät anzukommen und früh abzureisen, ohne den Tag zu verlieren.",
      es: "Balcones escalonados de piedra sobre una piscina alargada, un vestíbulo lleno de pintura y escultura beninesas, un bar bajo una lámpara de cristal, spa y pistas de tenis. Lo bastante cerca del aeropuerto para llegar tarde y salir temprano sin perder el día.",
    },
    images: [
      { file: "stay-cotonou-marina.jpg", width: 1500, height: 1125, alt: { en: "Stone terraces of the hotel above its long turquoise pool", fr: "Les terrasses de pierre de l'hôtel au-dessus de sa longue piscine turquoise", de: "Steinterrassen des Hotels über seinem langen türkisfarbenen Pool", es: "Las terrazas de piedra del hotel sobre su larga piscina turquesa" } },
      { file: "stay-cotonou-lobby.jpg", width: 1500, height: 1125, alt: { en: "The lobby, its shelving lit and hung with Beninese art", fr: "Le hall, ses étagères éclairées et garnies d'art béninois", de: "Die Lobby mit beleuchteten Regalen und beninischer Kunst", es: "El vestíbulo, con estanterías iluminadas y arte beninés" } },
      { file: "stay-cotonou-bar.jpg", width: 1500, height: 1125, alt: { en: "The bar under a glass chandelier, green velvet seating", fr: "Le bar sous un lustre de verre, banquettes de velours vert", de: "Die Bar unter einem gläsernen Kronleuchter, grüne Samtsessel", es: "El bar bajo una lámpara de cristal, asientos de terciopelo verde" } },
      { file: "stay-cotonou-tennis.jpg", width: 1500, height: 1125, alt: { en: "A tennis court in front of the hotel, palms behind", fr: "Un court de tennis devant l'hôtel, palmiers en arrière-plan", de: "Ein Tennisplatz vor dem Hotel, dahinter Palmen", es: "Una pista de tenis delante del hotel, con palmeras detrás" } },
      { file: "stay-cotonou-pool.jpg", width: 1500, height: 838, alt: { en: "An afternoon by the pool", fr: "Un après-midi au bord de la piscine", de: "Ein Nachmittag am Pool", es: "Una tarde junto a la piscina" } },
    ],
    tone: "coast",
  },
  {
    slug: "lagoon-lodge",
    name: { en: "A lodge over the water", fr: "Un lodge au-dessus de l'eau", de: "Eine Lodge über dem Wasser", es: "Un lodge sobre el agua" },
    place: { en: "The lagoons", fr: "Les lagunes", de: "Die Lagunen", es: "Las lagunas" },
    pitch: {
      en: "Wooden decks on stilts, a shower under the trees, pirogues at the step.",
      fr: "Des pontons en bois sur pilotis, une douche sous les arbres, des pirogues au pied des marches.",
      de: "Holzdecks auf Pfählen, eine Dusche unter Bäumen, Pirogen vor der Stufe.",
      es: "Terrazas de madera sobre pilotes, una ducha bajo los árboles, piraguas junto al escalón.",
    },
    body: {
      en: "Small lodges built out over the lagoon, where the day starts with fishermen going past and ends with the water gone still. Rooms are simple and cool; the food is grilled fish and what the market had that morning.",
      fr: "De petits lodges bâtis sur la lagune, où la journée commence avec le passage des pêcheurs et finit quand l'eau s'est immobilisée. Les chambres sont simples et fraîches ; à table, du poisson grillé et ce que le marché offrait le matin.",
      de: "Kleine Lodges, über die Lagune hinaus gebaut, wo der Tag mit vorbeifahrenden Fischern beginnt und mit stillem Wasser endet. Die Zimmer sind schlicht und kühl; gegessen wird gegrillter Fisch und was der Markt am Morgen hatte.",
      es: "Pequeños lodges construidos sobre la laguna, donde el día empieza con los pescadores pasando y termina con el agua en calma. Las habitaciones son sencillas y frescas; se come pescado a la brasa y lo que hubiera esa mañana en el mercado.",
    },
    images: [
      { file: "stay-lagoon-lodge.jpg", width: 1170, height: 780, alt: { en: "A wooden deck over the lagoon with parasols and loungers", fr: "Un ponton en bois sur la lagune, parasols et transats", de: "Ein Holzdeck über der Lagune mit Sonnenschirmen und Liegen", es: "Una terraza de madera sobre la laguna con sombrillas y tumbonas" } },
      { file: "stay-lagoon-channel.jpg", width: 1500, height: 1058, alt: { en: "A pirogue on a palm-lined channel, from above", fr: "Une pirogue sur un chenal bordé de palmiers, vue du ciel", de: "Eine Piroge in einem palmengesäumten Kanal, von oben", es: "Una piragua en un canal bordeado de palmeras, vista desde arriba" } },
    ],
    tone: "lagoon",
  },
  {
    slug: "ouidah-guesthouse",
    name: { en: "A guesthouse with a courtyard", fr: "Une maison d'hôtes avec cour", de: "Ein Gästehaus mit Innenhof", es: "Una casa de huéspedes con patio" },
    place: { en: "Ouidah", fr: "Ouidah", de: "Ouidah", es: "Uidá" },
    pitch: {
      en: "A quiet house a short walk from the Route des Esclaves, run by a family.",
      fr: "Une maison calme à quelques minutes à pied de la Route des Esclaves, tenue par une famille.",
      de: "Ein ruhiges Haus, wenige Schritte von der Route des Esclaves, von einer Familie geführt.",
      es: "Una casa tranquila a pocos pasos de la Ruta de los Esclavos, llevada por una familia.",
    },
    body: {
      en: "Red earth, a mango tree, a long table where dinner is cooked for the house. Rooms open onto the courtyard. This is where the Return journey sleeps, because the days are heavy and the evenings should not be.",
      fr: "De la terre rouge, un manguier, une longue table où l'on cuisine pour la maisonnée. Les chambres donnent sur la cour. C'est ici que dort le voyage Retour, parce que les journées sont lourdes et que les soirées ne doivent pas l'être.",
      de: "Rote Erde, ein Mangobaum, ein langer Tisch, an dem für das ganze Haus gekocht wird. Die Zimmer öffnen sich zum Hof. Hier übernachtet die Rückkehr-Reise, denn die Tage sind schwer und die Abende sollen es nicht sein.",
      es: "Tierra roja, un mango, una mesa larga donde se cocina para toda la casa. Las habitaciones dan al patio. Aquí duerme el viaje Retorno, porque los días son intensos y las noches no deberían serlo.",
    },
    images: [
      { file: "stay-ouidah-guesthouse.jpg", width: 1500, height: 781, alt: { en: "Two guests reading under a tree in the red-earth courtyard", fr: "Deux voyageuses lisent sous un arbre dans la cour de terre rouge", de: "Zwei Gäste lesen unter einem Baum im Hof aus roter Erde", es: "Dos huéspedes leyendo bajo un árbol en el patio de tierra roja" } },
      { file: "stay-ouidah-salon.jpg", width: 1500, height: 763, alt: { en: "Friends dancing in the guesthouse living room", fr: "Des amis dansent dans le salon de la maison d'hôtes", de: "Freunde tanzen im Wohnzimmer des Gästehauses", es: "Amigos bailando en el salón de la casa de huéspedes" } },
    ],
    tone: "accent",
  },
  {
    slug: "tata-somba",
    name: { en: "A night in a Tata Somba", fr: "Une nuit dans un Tata Somba", de: "Eine Nacht in einem Tata Somba", es: "Una noche en una tata somba" },
    place: { en: "The Atakora", fr: "L'Atakora", de: "Der Atakora", es: "El Atakora" },
    pitch: {
      en: "The fortified earth houses of Koutammakou, hosted by the family who built theirs.",
      fr: "Les maisons-forteresses en terre du Koutammakou, chez la famille qui a bâti la sienne.",
      de: "Die befestigten Lehmhäuser von Koutammakou, zu Gast bei der Familie, die ihres selbst gebaut hat.",
      es: "Las casas fortificadas de barro de Koutammakou, acogidos por la familia que construyó la suya.",
    },
    body: {
      en: "You sleep on the roof terrace under the granary towers, as the family does in the dry season. Water is drawn, food is cooked on the fire, and the night is the darkest you will have seen. One night, by design.",
      fr: "On dort sur la terrasse du toit sous les greniers, comme la famille en saison sèche. L'eau se tire, le repas se cuit au feu, et la nuit est la plus noire que vous aurez connue. Une seule nuit, c'est voulu.",
      de: "Sie schlafen auf der Dachterrasse unter den Speichertürmen, wie die Familie in der Trockenzeit. Wasser wird geschöpft, gekocht wird auf dem Feuer, und die Nacht ist die dunkelste, die Sie je erlebt haben. Eine Nacht, ganz bewusst.",
      es: "Dormirá en la azotea bajo las torres del granero, como hace la familia en la estación seca. El agua se saca del pozo, se cocina al fuego y la noche es la más oscura que habrá visto. Una sola noche, a propósito.",
    },
    images: [
      { file: "dest-koutammakou.jpg", width: 1600, height: 1067, alt: { en: "Tata Somba houses in the Koutammakou landscape", fr: "Des Tata Somba dans le paysage du Koutammakou", de: "Tata-Somba-Häuser in der Landschaft von Koutammakou", es: "Casas tata somba en el paisaje de Koutammakou" } },
    ],
    tone: "savannah",
  },
  {
    slug: "pendjari-lodge",
    name: { en: "A lodge inside the park", fr: "Un lodge dans le parc", de: "Eine Lodge im Park", es: "Un lodge dentro del parque" },
    place: { en: "Pendjari", fr: "Pendjari", de: "Pendjari", es: "Pendjari" },
    pitch: {
      en: "Bungalows by the river, so the first game drive starts at the door.",
      fr: "Des bungalows près de la rivière, pour que le premier safari commence à la porte.",
      de: "Bungalows am Fluss, sodass die erste Pirschfahrt vor der Tür beginnt.",
      es: "Bungalós junto al río, para que el primer safari empiece en la puerta.",
    },
    body: {
      en: "Inside the park boundary, with the Pendjari river below and the Atakora cliffs behind. Elephants come to the water at dusk. Rooms are fan-cooled and simple; dinner is early because the morning drive is earlier.",
      fr: "À l'intérieur du parc, la rivière Pendjari en contrebas et les falaises de l'Atakora derrière. Les éléphants viennent boire au crépuscule. Chambres simples, ventilées ; on dîne tôt parce que le safari du matin l'est encore plus.",
      de: "Innerhalb der Parkgrenze, unten der Pendjari-Fluss, dahinter die Klippen des Atakora. In der Dämmerung kommen Elefanten zum Wasser. Die Zimmer haben Ventilatoren und sind schlicht; das Abendessen ist früh, weil die Morgenfahrt noch früher beginnt.",
      es: "Dentro de los límites del parque, con el río Pendjari abajo y los acantilados del Atakora detrás. Los elefantes bajan al agua al atardecer. Las habitaciones tienen ventilador y son sencillas; la cena es temprano porque el safari de la mañana lo es todavía más.",
    },
    images: [
      { file: "dest-pendjari.jpg", width: 1600, height: 1067, alt: { en: "Hippos in the sacred pool of Pendjari National Park", fr: "Des hippopotames dans la mare sacrée du parc national de la Pendjari", de: "Flusspferde im heiligen Tümpel des Nationalparks Pendjari", es: "Hipopótamos en la charca sagrada del Parque Nacional de la Pendjari" } },
    ],
    tone: "savannah",
  },
  {
    slug: "collines-lodge",
    name: { en: "Under the hills", fr: "Au pied des collines", de: "Unter den Hügeln", es: "Bajo las colinas" },
    place: { en: "Dassa-Zoumé", fr: "Dassa-Zoumé", de: "Dassa-Zoumé", es: "Dassa-Zoumé" },
    pitch: {
      en: "A small hotel at the foot of the sacred hills, with the rocks lit at sunrise.",
      fr: "Un petit hôtel au pied des collines sacrées, les rochers éclairés au lever du soleil.",
      de: "Ein kleines Hotel am Fuß der heiligen Hügel, die Felsen bei Sonnenaufgang beleuchtet.",
      es: "Un pequeño hotel al pie de las colinas sagradas, con las rocas iluminadas al amanecer.",
    },
    body: {
      en: "The stopover on the road north: a garden, cold drinks, and the hills of Dassa framed from the terrace. Nothing to do after dark, which is the point after a long day of driving.",
      fr: "L'étape sur la route du nord : un jardin, des boissons fraîches et les collines de Dassa encadrées depuis la terrasse. Rien à faire après la tombée de la nuit, et c'est ce qu'il faut après une longue journée de route.",
      de: "Der Zwischenstopp auf dem Weg nach Norden: ein Garten, kalte Getränke und die Hügel von Dassa im Blick von der Terrasse. Nach Einbruch der Dunkelheit gibt es nichts zu tun, und genau das ist nach einem langen Fahrtag der Sinn.",
      es: "La parada en la carretera del norte: un jardín, bebidas frías y las colinas de Dassa enmarcadas desde la terraza. Nada que hacer después de anochecer, que es justo lo que se necesita tras un largo día de carretera.",
    },
    images: [
      { file: "dest-dassa.jpg", width: 1600, height: 1067, alt: { en: "A gathering on the hill shrine of Dassa-Zoumé", fr: "Un rassemblement au calvaire de Dassa-Zoumé", de: "Eine Versammlung am Hügelheiligtum von Dassa-Zoumé", es: "Una reunión en el santuario de la colina de Dassa-Zoumé" } },
    ],
    tone: "accent",
  },
];
