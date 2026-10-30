import type { Lang } from "./journeys";

/**
 * Placeholder destination data until Sanity is wired in (Phase 5).
 * Covers the whole country, south to north. Coordinates are to the nearest
 * minute and must be cross-checked against OpenStreetMap before launch.
 */
export type Region = "coast" | "south" | "centre" | "north";

export type Destination = {
  slug: string;
  name: Record<Lang, string>;
  pitch: Record<Lang, string>;
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
    name: { en: "Cotonou", fr: "Cotonou", de: "Cotonou", es: "Cotonú" },
    pitch: {
      en: "The big city on the lagoon: Dantokpa market, the Fondation Zinsou, the art scene and the best kitchens in the country.",
      fr: "La grande ville sur la lagune : le marché Dantokpa, la Fondation Zinsou, la scène artistique et les meilleures tables du pays.",
      de: "Die große Stadt an der Lagune: der Dantokpa-Markt, die Fondation Zinsou, die Kunstszene und die besten Küchen des Landes.",
      es: "La gran ciudad de la laguna: el mercado de Dantokpa, la Fondation Zinsou, la escena artística y las mejores cocinas del país.",
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
    name: { en: "Ouidah", fr: "Ouidah", de: "Ouidah", es: "Uidá" },
    pitch: {
      en: "The Route des Esclaves, the Python Temple and the Door of No Return. Where Vodun and the Atlantic meet.",
      fr: "La Route des Esclaves, le Temple des Pythons et la Porte du Non-Retour. Là où le Vodun rencontre l'Atlantique.",
      de: "Die Route des Esclaves, der Pythontempel und das Tor ohne Wiederkehr. Wo Vodun und Atlantik sich begegnen.",
      es: "La Ruta de los Esclavos, el Templo de las Pitones y la Puerta del No Retorno. Donde el vudú se encuentra con el Atlántico.",
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
    name: { en: "Ganvié", fr: "Ganvié", de: "Ganvié", es: "Ganvié" },
    pitch: {
      en: "A town of 30,000 on stilts in Lake Nokoué, founded by people who fled the slave raids and never left.",
      fr: "Une ville de 30 000 habitants sur pilotis dans le lac Nokoué, fondée par ceux qui fuyaient les razzias et n'en sont jamais repartis.",
      de: "Eine Stadt mit 30 000 Menschen auf Pfählen im Nokoué-See, gegründet von Menschen, die vor den Sklavenjagden flohen und nie zurückgingen.",
      es: "Una ciudad de 30 000 habitantes sobre pilotes en el lago Nokoué, fundada por quienes huían de las razias esclavistas y nunca se marcharon.",
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
    name: { en: "Porto-Novo", fr: "Porto-Novo", de: "Porto-Novo", es: "Porto Novo" },
    pitch: {
      en: "The quiet capital: Afro-Brazilian mansions, the Great Mosque, the Honmè royal palace.",
      fr: "La capitale tranquille : maisons afro-brésiliennes, la Grande Mosquée, le palais royal Honmè.",
      de: "Die stille Hauptstadt: afro-brasilianische Villen, die Große Moschee, der Königspalast Honmè.",
      es: "La capital tranquila: mansiones afrobrasileñas, la Gran Mezquita, el palacio real de Honmè.",
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
    name: { en: "Grand-Popo", fr: "Grand-Popo", de: "Grand-Popo", es: "Grand-Popo" },
    pitch: {
      en: "Coconut palms, the Mono river mouth and a beach with nobody on it.",
      fr: "Cocotiers, la bouche du Mono et une plage où il n'y a personne.",
      de: "Kokospalmen, die Mündung des Mono und ein Strand, an dem niemand ist.",
      es: "Cocoteros, la desembocadura del río Mono y una playa sin nadie.",
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
    name: { en: "Possotomè & Lake Ahémé", fr: "Possotomè & lac Ahémé", de: "Possotomè & Ahémé-See", es: "Possotomè y el lago Ahémé" },
    pitch: {
      en: "Hot springs, fishing villages and a lake the Pedah people read like a book.",
      fr: "Sources chaudes, villages de pêcheurs et un lac que les Pédah lisent comme un livre.",
      de: "Heiße Quellen, Fischerdörfer und ein See, den die Pedah lesen wie ein Buch.",
      es: "Aguas termales, pueblos de pescadores y un lago que el pueblo pedah lee como un libro.",
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
    name: { en: "Abomey", fr: "Abomey", de: "Abomey", es: "Abomey" },
    pitch: {
      en: "The royal palaces of twelve kings, their bas-reliefs, and the court that ruled Dahomey for 300 years.",
      fr: "Les palais royaux de douze rois, leurs bas-reliefs, et la cour qui a gouverné le Dahomey pendant 300 ans.",
      de: "Die Königspaläste von zwölf Herrschern, ihre Flachreliefs und der Hof, der Dahomey 300 Jahre lang regierte.",
      es: "Los palacios reales de doce reyes, sus bajorrelieves y la corte que gobernó Dahomey durante 300 años.",
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
    name: { en: "Kétou", fr: "Kétou", de: "Kétou", es: "Kétou" },
    pitch: {
      en: "The Yoruba kingdom on the Nigerian border, home of the Gèlèdé masquerades on UNESCO's list.",
      fr: "Le royaume yoruba à la frontière du Nigeria, berceau des mascarades Gèlèdé inscrites à l'UNESCO.",
      de: "Das Yoruba-Königreich an der nigerianischen Grenze, Heimat der Gèlèdé-Maskeraden auf der UNESCO-Liste.",
      es: "El reino yoruba en la frontera con Nigeria, cuna de las mascaradas gèlèdé inscritas por la UNESCO.",
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
    name: { en: "Dassa-Zoumé & the Collines", fr: "Dassa-Zoumé & les Collines", de: "Dassa-Zoumé & die Collines", es: "Dassa-Zoumé y las Collines" },
    pitch: {
      en: "Forty-one sacred hills, the grotto of the Virgin, and the centre of the country where every road meets.",
      fr: "Quarante et une collines sacrées, la grotte de la Vierge, et le centre du pays où toutes les routes se croisent.",
      de: "Einundvierzig heilige Hügel, die Mariengrotte und die Mitte des Landes, wo alle Straßen zusammenlaufen.",
      es: "Cuarenta y una colinas sagradas, la gruta de la Virgen y el centro del país, donde se cruzan todos los caminos.",
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
    name: { en: "Parakou", fr: "Parakou", de: "Parakou", es: "Parakou" },
    pitch: {
      en: "The crossroads of the north: Bariba horsemen, the big market, and the Gaani festival.",
      fr: "Le carrefour du nord : cavaliers bariba, le grand marché et la fête de la Gaani.",
      de: "Die Drehscheibe des Nordens: Bariba-Reiter, der große Markt und das Gaani-Fest.",
      es: "La encrucijada del norte: jinetes bariba, el gran mercado y la fiesta del Gaani.",
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
    name: { en: "Natitingou", fr: "Natitingou", de: "Natitingou", es: "Natitingou" },
    pitch: {
      en: "The base for the Atakora: the regional museum, the Kota falls and the road to the parks.",
      fr: "La base pour l'Atakora : le musée régional, les chutes de Kota et la route des parcs.",
      de: "Ausgangspunkt für den Atakora: das Regionalmuseum, die Kota-Fälle und die Straße zu den Parks.",
      es: "La base para el Atakora: el museo regional, las cascadas de Kota y la carretera a los parques.",
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
    name: { en: "Koutammakou & the Tata Somba", fr: "Koutammakou & les Tata Somba", de: "Koutammakou & die Tata Somba", es: "Koutammakou y las tata somba" },
    pitch: {
      en: "The fortified mud houses of the Batammariba, built like castles, still lived in. A World Heritage landscape.",
      fr: "Les maisons-forteresses en terre des Batammariba, bâties comme des châteaux, toujours habitées. Un paysage classé au patrimoine mondial.",
      de: "Die befestigten Lehmhäuser der Batammariba, gebaut wie Burgen und bis heute bewohnt. Eine Welterbe-Landschaft.",
      es: "Las casas fortificadas de barro de los batammariba, construidas como castillos y aún habitadas. Un paisaje Patrimonio de la Humanidad.",
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
    name: { en: "Tanougou falls", fr: "Chutes de Tanougou", de: "Tanougou-Wasserfälle", es: "Cascadas de Tanougou" },
    pitch: {
      en: "A waterfall and a natural pool at the foot of the Atakora, on the road into Pendjari.",
      fr: "Une cascade et un bassin naturel au pied de l'Atakora, sur la route de la Pendjari.",
      de: "Ein Wasserfall mit natürlichem Becken am Fuß des Atakora, auf dem Weg in die Pendjari.",
      es: "Una cascada y una poza natural al pie del Atakora, camino de la Pendjari.",
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
    name: { en: "Pendjari National Park", fr: "Parc national de la Pendjari", de: "Nationalpark Pendjari", es: "Parque Nacional de la Pendjari" },
    pitch: {
      en: "Lions, elephants, hippos and cheetahs in the W-Arly-Pendjari complex, the largest wild savannah left in West Africa.",
      fr: "Lions, éléphants, hippopotames et guépards dans le complexe W-Arly-Pendjari, la plus vaste savane sauvage d'Afrique de l'Ouest.",
      de: "Löwen, Elefanten, Flusspferde und Geparden im Schutzgebiet W-Arly-Pendjari, der größten wilden Savanne Westafrikas.",
      es: "Leones, elefantes, hipopótamos y guepardos en el complejo W-Arly-Pendjari, la mayor sabana salvaje que queda en África Occidental.",
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
    name: { en: "W National Park", fr: "Parc national du W", de: "Nationalpark W", es: "Parque Nacional W" },
    pitch: {
      en: "The Niger river's great bend, shared with Niger and Burkina Faso. Wilder and emptier than Pendjari.",
      fr: "Le grand méandre du fleuve Niger, partagé avec le Niger et le Burkina Faso. Plus sauvage et plus vide que la Pendjari.",
      de: "Der große Bogen des Niger, geteilt mit Niger und Burkina Faso. Wilder und einsamer als die Pendjari.",
      es: "La gran curva del río Níger, compartida con Níger y Burkina Faso. Más salvaje y solitario que la Pendjari.",
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
