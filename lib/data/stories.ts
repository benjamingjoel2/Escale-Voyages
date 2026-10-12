import type { L } from "./journeys";

/** Journal stories. Placeholder pieces until the owner publishes real ones in the Studio. */
export type Story = {
  slug: string;
  title: L;
  excerpt: L;
  body: L<string[]>;
  cover: { file: string; width: number; height: number };
  tone: "accent" | "lagoon" | "savannah" | "coast" | "night";
  publishedAt: string;
  readingMinutes: number;
  category: L;
  destinationSlugs: string[];
  journeySlugs: string[];
};

export const stories: Story[] = [
  {
    slug: "what-the-records-in-ouidah-can-tell-you",
    title: { en: "What the records in Ouidah can and cannot tell you", fr: "Ce que les archives de Ouidah peuvent et ne peuvent pas vous dire" },
    excerpt: {
      en: "A researcher on the limits of the paper trail, and why a DNA match to the Bight of Benin is a beginning, not an answer.",
      fr: "Un chercheur sur les limites des archives, et pourquoi une correspondance ADN avec le golfe du Bénin est un début, pas une réponse.",
    },
    body: {
      en: [
        "People arrive in Ouidah with a folder. Inside is a DNA report with a percentage next to \"Benin and Togo\", sometimes a surname from a plantation ledger, sometimes a port of departure. They want to know which village. We have to begin by saying that the records almost never say.",
        "The Portuguese fort kept ledgers of ships, not of people. The French colonial archive begins in the 1890s, long after the trade ended. What survives are fragments: a chaplain's register in Bahia, a list of \"returnees\" who came back from Brazil in the 1830s with Portuguese surnames and built the houses that still stand on the Rue des Esclaves.",
        "So we work sideways. A regional DNA match points to a language group. A surname that survived in the Americas can be Fon, Yoruba or Gun, and each has a geography. A ritual your grandmother kept without knowing why can have a name here. None of this is proof. All of it is a direction, and a direction is enough to walk.",
        "On the Return journey we spend the first evening going through the folder together, so that nobody arrives at the Door of No Return expecting a certificate. What they get instead is a place, a community that has kept the memory, and time.",
      ],
      fr: [
        "Les gens arrivent à Ouidah avec un dossier. Dedans, un rapport ADN avec un pourcentage à côté de « Bénin et Togo », parfois un nom de famille tiré d'un registre de plantation, parfois un port d'embarquement. Ils veulent savoir quel village. Nous devons commencer par dire que les archives ne le disent presque jamais.",
        "Le fort portugais tenait des registres de navires, pas de personnes. Les archives coloniales françaises commencent dans les années 1890, bien après la fin de la traite. Ce qui survit, ce sont des fragments : un registre d'aumônier à Bahia, une liste de « retornados » revenus du Brésil dans les années 1830 avec des noms portugais, qui ont bâti les maisons encore debout sur la rue des Esclaves.",
        "Alors nous travaillons de biais. Une correspondance ADN régionale désigne un groupe linguistique. Un nom de famille qui a survécu aux Amériques peut être fon, yoruba ou goun, et chacun a sa géographie. Un rituel que votre grand-mère gardait sans savoir pourquoi peut avoir un nom ici. Rien de tout cela n'est une preuve. Tout cela est une direction, et une direction suffit pour marcher.",
        "Sur le voyage Retour, nous passons la première soirée à parcourir le dossier ensemble, pour que personne n'arrive à la Porte du Non-Retour en attendant un certificat. Ce qu'on y trouve à la place, c'est un lieu, une communauté qui a gardé la mémoire, et du temps.",
      ],
    },
    cover: { file: "return-door.jpg", width: 1600, height: 1067 },
    tone: "lagoon",
    publishedAt: "2026-09-12",
    readingMinutes: 8,
    category: { en: "Return", fr: "Retour" },
    destinationSlugs: ["ouidah"],
    journeySlugs: ["return"],
  },
  {
    slug: "a-market-that-floats",
    title: { en: "A market that floats: a morning on Lake Nokoué", fr: "Un marché qui flotte : une matinée sur le lac Nokoué" },
    excerpt: {
      en: "Ganvié before the tour boats, when the fishermen are out and the water is the colour of tea.",
      fr: "Ganvié avant les bateaux de touristes, quand les pêcheurs sont de sortie et que l'eau a la couleur du thé.",
    },
    body: {
      en: [
        "The pirogue leaves Abomey-Calavi at ten past six. There is no engine; the boatman poles. For twenty minutes there is nothing but water hyacinth and egrets, and then the first stilts come out of the haze.",
        "Ganvié was founded in the seventeenth century by Tofinu people fleeing the slave raids of the Dahomey army, which by religious law could not fight on water. The town has been here ever since: thirty thousand people, a market, a school, a church, a mosque, a hotel, all on stilts or on boats.",
        "The floating market is not for visitors. Women sell smoked fish, cassava, tomatoes and phone credit from canoe to canoe. By nine the day boats arrive from Cotonou and the market has moved on. Go early, and go quietly.",
      ],
      fr: [
        "La pirogue quitte Abomey-Calavi à six heures dix. Pas de moteur ; le piroguier pousse à la perche. Pendant vingt minutes, il n'y a que des jacinthes d'eau et des aigrettes, puis les premiers pilotis sortent de la brume.",
        "Ganvié a été fondée au XVIIe siècle par des Tofinu fuyant les razzias de l'armée du Dahomey, qui, par interdit religieux, ne pouvait combattre sur l'eau. La ville est là depuis : trente mille habitants, un marché, une école, une église, une mosquée, un hôtel, tous sur pilotis ou sur l'eau.",
        "Le marché flottant n'est pas fait pour les visiteurs. Les femmes vendent du poisson fumé, du manioc, des tomates et du crédit téléphonique de pirogue en pirogue. Vers neuf heures, les bateaux de la journée arrivent de Cotonou et le marché s'est déplacé. Venez tôt, et venez en silence.",
      ],
    },
    cover: { file: "dest-ganvie.jpg", width: 1600, height: 1067 },
    tone: "lagoon",
    publishedAt: "2026-08-28",
    readingMinutes: 5,
    category: { en: "Lagoons", fr: "Lagunes" },
    destinationSlugs: ["ganvie"],
    journeySlugs: ["lagoon-and-coast", "grand-tour-of-benin"],
  },
  {
    slug: "why-the-lions-of-pendjari-matter",
    title: { en: "Why the lions of Pendjari matter to all of West Africa", fr: "Pourquoi les lions de la Pendjari comptent pour toute l'Afrique de l'Ouest" },
    excerpt: {
      en: "Fewer than 500 West African lions survive. Most of them live in one park complex, and Benin holds a third of it.",
      fr: "Moins de 500 lions d'Afrique de l'Ouest subsistent. La plupart vivent dans un seul complexe de parcs, dont le Bénin détient un tiers.",
    },
    body: {
      en: [
        "The West African lion is genetically distinct from its cousins in the east and south, closer in fact to the extinct Barbary lion of North Africa. It once ranged from Senegal to Nigeria. Today almost the whole population lives in the W-Arly-Pendjari complex shared by Benin, Burkina Faso and Niger.",
        "Pendjari is the best-protected part of it. Since 2017 the park has been managed in partnership with African Parks, rangers have been trained and equipped, and elephant and lion numbers have risen. It is also one of the last places to see the West African cheetah.",
        "Visiting matters. Park fees and lodge jobs are what make conservation pay for the villages on the park edge. Our North to Pendjari journey spends three full days inside with the park's rangers, in the dry season when the animals come to the water.",
      ],
      fr: [
        "Le lion d'Afrique de l'Ouest est génétiquement distinct de ses cousins de l'est et du sud, plus proche en fait du lion de l'Atlas disparu. Il occupait autrefois du Sénégal au Nigeria. Aujourd'hui, presque toute la population vit dans le complexe W-Arly-Pendjari partagé par le Bénin, le Burkina Faso et le Niger.",
        "La Pendjari en est la partie la mieux protégée. Depuis 2017, le parc est géré en partenariat avec African Parks, les écogardes ont été formés et équipés, et les effectifs d'éléphants et de lions ont augmenté. C'est aussi l'un des derniers endroits où voir le guépard d'Afrique de l'Ouest.",
        "Venir compte. Les droits d'entrée et les emplois des lodges sont ce qui rend la conservation rentable pour les villages en bordure du parc. Notre voyage Vers le nord, la Pendjari passe trois journées complètes à l'intérieur avec les écogardes du parc, en saison sèche, quand les animaux viennent à l'eau.",
      ],
    },
    cover: { file: "journey-pendjari-hero.jpg", width: 1600, height: 1067 },
    tone: "savannah",
    publishedAt: "2026-07-30",
    readingMinutes: 6,
    category: { en: "Wildlife", fr: "Faune" },
    destinationSlugs: ["pendjari", "parc-w"],
    journeySlugs: ["north-to-pendjari"],
  },
  {
    slug: "how-to-behave-at-a-vodun-ceremony",
    title: { en: "How to behave at a Vodun ceremony", fr: "Comment se comporter à une cérémonie vodun" },
    excerpt: {
      en: "Vodun is a religion, not a show. Seven things we tell every guest before the first temple.",
      fr: "Le Vodun est une religion, pas un spectacle. Sept choses que nous disons à chaque voyageur avant le premier temple.",
    },
    body: {
      en: [
        "Ask before photographing anything, and accept the answer. Some ceremonies allow it, some allow it for part of the time, some do not. Your host will ask for you.",
        "Dress with covered shoulders and knees. Women bring a scarf. Take off your shoes where others do. Do not step over offerings on the ground, and do not touch a shrine.",
        "Do not use the words \"voodoo\", \"magic\" or \"fetish\" with the people you meet. The religion is called Vodun; its priests are hounon and its deities are vodun. If you are offered a drink or food, take a little.",
        "Stay as long as you are welcome and leave when your host says. Nothing here is scheduled for you, and that is why it is worth seeing.",
      ],
      fr: [
        "Demandez avant de photographier quoi que ce soit, et acceptez la réponse. Certaines cérémonies le permettent, d'autres seulement par moments, d'autres pas du tout. Votre hôte demandera pour vous.",
        "Habillez-vous épaules et genoux couverts. Les femmes apportent un foulard. Déchaussez-vous là où les autres le font. N'enjambez pas les offrandes au sol et ne touchez pas un autel.",
        "N'utilisez pas les mots « vaudou », « magie » ou « fétiche » avec les gens que vous rencontrez. La religion s'appelle le Vodun ; ses prêtres sont des hounon et ses divinités des vodun. Si l'on vous offre à boire ou à manger, prenez-en un peu.",
        "Restez tant que vous êtes bienvenu et partez quand votre hôte le dit. Rien ici n'est programmé pour vous, et c'est précisément pour cela que ça vaut la peine.",
      ],
    },
    cover: { file: "journey-vodun-days.jpg", width: 1600, height: 1067 },
    tone: "night",
    publishedAt: "2026-06-18",
    readingMinutes: 4,
    category: { en: "Vodun", fr: "Vodun" },
    destinationSlugs: ["ouidah"],
    journeySlugs: ["vodun-days", "the-twelve-kings"],
  },
];
