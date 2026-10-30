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
    title: { en: "What the records in Ouidah can and cannot tell you", fr: "Ce que les archives de Ouidah peuvent et ne peuvent pas vous dire", de: "Was die Archive in Ouidah verraten können und was nicht", es: "Lo que los registros de Uidá pueden y no pueden decirle" },
    excerpt: {
      en: "A researcher on the limits of the paper trail, and why a DNA match to the Bight of Benin is a beginning, not an answer.",
      fr: "Un chercheur sur les limites des archives, et pourquoi une correspondance ADN avec le golfe du Bénin est un début, pas une réponse.",
      de: "Eine Rechercheurin über die Grenzen der Papierspur und warum ein DNA-Treffer für die Bucht von Benin ein Anfang ist, keine Antwort.",
      es: "Una investigadora sobre los límites del rastro documental, y por qué una coincidencia de ADN con el golfo de Benín es un comienzo, no una respuesta.",
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
      de: ["Die Menschen kommen mit einer Mappe nach Ouidah. Darin ein DNA-Bericht mit einer Prozentzahl neben „Benin und Togo“, manchmal ein Nachname aus dem Register einer Plantage, manchmal ein Abfahrtshafen. Sie wollen wissen, welches Dorf. Wir müssen damit beginnen, dass die Archive das fast nie verraten.", "Das portugiesische Fort führte Bücher über Schiffe, nicht über Menschen. Das französische Kolonialarchiv beginnt in den 1890er-Jahren, lange nach dem Ende des Handels. Erhalten sind Bruchstücke: das Register eines Kaplans in Bahia, eine Liste von „Rückkehrern“, die in den 1830er-Jahren mit portugiesischen Nachnamen aus Brasilien kamen und die Häuser bauten, die noch heute an der Rue des Esclaves stehen.", "Also arbeiten wir seitwärts. Ein regionaler DNA-Treffer weist auf eine Sprachgruppe. Ein Nachname, der in Amerika überlebt hat, kann Fon, Yoruba oder Gun sein, und jede hat ihre Geografie. Ein Ritual, das Ihre Großmutter pflegte, ohne zu wissen warum, kann hier einen Namen haben. Nichts davon ist ein Beweis. Alles davon ist eine Richtung, und eine Richtung genügt, um loszugehen.", "Auf der Rückkehr-Reise gehen wir die Mappe am ersten Abend gemeinsam durch, damit niemand am Tor ohne Wiederkehr eine Urkunde erwartet. Was man stattdessen bekommt, ist ein Ort, eine Gemeinschaft, die die Erinnerung bewahrt hat, und Zeit."],
      es: ["La gente llega a Uidá con una carpeta. Dentro hay un informe de ADN con un porcentaje junto a «Benín y Togo», a veces un apellido del registro de una plantación, a veces un puerto de salida. Quieren saber qué pueblo. Tenemos que empezar diciendo que los registros casi nunca lo dicen.", "El fuerte portugués llevaba registros de barcos, no de personas. El archivo colonial francés empieza en la década de 1890, mucho después del fin de la trata. Lo que sobrevive son fragmentos: el registro de un capellán en Bahía, una lista de «retornados» que volvieron de Brasil en la década de 1830 con apellidos portugueses y construyeron las casas que aún siguen en pie en la Rue des Esclaves.", "Así que trabajamos de lado. Una coincidencia regional de ADN apunta a un grupo lingüístico. Un apellido que sobrevivió en América puede ser fon, yoruba o gun, y cada uno tiene su geografía. Un ritual que su abuela mantenía sin saber por qué puede tener aquí un nombre. Nada de esto es una prueba. Todo ello es una dirección, y una dirección basta para echar a andar.", "En el viaje Retorno dedicamos la primera noche a revisar juntos la carpeta, para que nadie llegue a la Puerta del No Retorno esperando un certificado. Lo que encuentran, en cambio, es un lugar, una comunidad que ha guardado la memoria, y tiempo."],
    },
    cover: { file: "return-door.jpg", width: 1600, height: 1067 },
    tone: "lagoon",
    publishedAt: "2026-09-12",
    readingMinutes: 8,
    category: { en: "Return", fr: "Retour", de: "Rückkehr", es: "Retorno" },
    destinationSlugs: ["ouidah"],
    journeySlugs: ["return"],
  },
  {
    slug: "a-market-that-floats",
    title: { en: "A market that floats: a morning on Lake Nokoué", fr: "Un marché qui flotte : une matinée sur le lac Nokoué", de: "Ein Markt, der schwimmt: ein Morgen auf dem Nokoué-See", es: "Un mercado que flota: una mañana en el lago Nokoué" },
    excerpt: {
      en: "Ganvié before the tour boats, when the fishermen are out and the water is the colour of tea.",
      fr: "Ganvié avant les bateaux de touristes, quand les pêcheurs sont de sortie et que l'eau a la couleur du thé.",
      de: "Ganvié vor den Ausflugsbooten, wenn die Fischer draußen sind und das Wasser die Farbe von Tee hat.",
      es: "Ganvié antes de las barcas turísticas, cuando los pescadores están fuera y el agua tiene color de té.",
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
      de: ["Die Piroge legt um zehn nach sechs in Abomey-Calavi ab. Es gibt keinen Motor; der Bootsmann stakt. Zwanzig Minuten lang nur Wasserhyazinthen und Reiher, dann tauchen die ersten Pfähle aus dem Dunst auf.", "Ganvié wurde im 17. Jahrhundert von Tofinu gegründet, die vor den Sklavenjagden der Armee Dahomeys flohen, der religiöses Gesetz den Kampf auf dem Wasser verbot. Seitdem ist die Stadt hier: dreißigtausend Menschen, ein Markt, eine Schule, eine Kirche, eine Moschee, ein Hotel, alles auf Pfählen oder Booten.", "Der schwimmende Markt ist nicht für Besucher gedacht. Frauen verkaufen von Kanu zu Kanu geräucherten Fisch, Maniok, Tomaten und Handyguthaben. Um neun kommen die Ausflugsboote aus Cotonou, und der Markt ist weitergezogen. Kommen Sie früh, und kommen Sie leise."],
      es: ["La piragua sale de Abomey-Calavi a las seis y diez. No hay motor; el barquero empuja con la pértiga. Durante veinte minutos solo hay jacintos de agua y garcetas, y entonces los primeros pilotes surgen de la bruma.", "Ganvié la fundaron en el siglo XVII los tofinu, que huían de las razias esclavistas del ejército de Dahomey, al que una ley religiosa prohibía combatir en el agua. La ciudad sigue aquí desde entonces: treinta mil personas, un mercado, una escuela, una iglesia, una mezquita, un hotel, todo sobre pilotes o en barcas.", "El mercado flotante no es para los visitantes. Las mujeres venden de canoa en canoa pescado ahumado, mandioca, tomates y saldo para el móvil. A las nueve llegan las barcas de excursión desde Cotonú y el mercado ya se ha ido. Vaya temprano, y vaya en silencio."],
    },
    cover: { file: "dest-ganvie.jpg", width: 1600, height: 1067 },
    tone: "lagoon",
    publishedAt: "2026-08-28",
    readingMinutes: 5,
    category: { en: "Lagoons", fr: "Lagunes", de: "Lagunen", es: "Lagunas" },
    destinationSlugs: ["ganvie"],
    journeySlugs: ["lagoon-and-coast", "grand-tour-of-benin"],
  },
  {
    slug: "why-the-lions-of-pendjari-matter",
    title: { en: "Why the lions of Pendjari matter to all of West Africa", fr: "Pourquoi les lions de la Pendjari comptent pour toute l'Afrique de l'Ouest", de: "Warum die Löwen der Pendjari für ganz Westafrika wichtig sind", es: "Por qué los leones de la Pendjari importan a toda África Occidental" },
    excerpt: {
      en: "Fewer than 500 West African lions survive. Most of them live in one park complex, and Benin holds a third of it.",
      fr: "Moins de 500 lions d'Afrique de l'Ouest subsistent. La plupart vivent dans un seul complexe de parcs, dont le Bénin détient un tiers.",
      de: "Weniger als 500 westafrikanische Löwen überleben. Die meisten leben in einem einzigen Parkverbund, und Benin hält ein Drittel davon.",
      es: "Sobreviven menos de 500 leones de África Occidental. La mayoría vive en un único complejo de parques, y Benín alberga un tercio.",
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
      de: ["Der westafrikanische Löwe unterscheidet sich genetisch von seinen Verwandten im Osten und Süden und steht dem ausgestorbenen Berberlöwen Nordafrikas sogar näher. Einst lebte er von Senegal bis Nigeria. Heute lebt fast die gesamte Population im Verbund W-Arly-Pendjari, den sich Benin, Burkina Faso und Niger teilen.", "Die Pendjari ist sein am besten geschützter Teil. Seit 2017 wird der Park in Partnerschaft mit African Parks verwaltet, Ranger wurden ausgebildet und ausgerüstet, und die Zahl der Elefanten und Löwen ist gestiegen. Sie ist auch einer der letzten Orte, an denen man den westafrikanischen Geparden sehen kann.", "Besuche zählen. Parkgebühren und Arbeitsplätze in den Lodges sorgen dafür, dass sich Naturschutz für die Dörfer am Parkrand lohnt. Unsere Reise Nach Norden in die Pendjari verbringt drei volle Tage im Park mit seinen Rangern, in der Trockenzeit, wenn die Tiere zum Wasser kommen."],
      es: ["El león de África Occidental es genéticamente distinto de sus parientes del este y del sur, y de hecho está más cerca del extinto león del Atlas del norte de África. En otro tiempo vivía desde Senegal hasta Nigeria. Hoy casi toda la población vive en el complejo W-Arly-Pendjari, que comparten Benín, Burkina Faso y Níger.", "La Pendjari es su parte mejor protegida. Desde 2017 el parque se gestiona en colaboración con African Parks, se ha formado y equipado a los guardas y han aumentado las poblaciones de elefantes y leones. Es también uno de los últimos lugares donde ver el guepardo de África Occidental.", "Visitar importa. Las tasas del parque y los empleos en los lodges hacen que la conservación compense a los pueblos del borde del parque. Nuestro viaje Al norte, a la Pendjari pasa tres días completos dentro con los guardas del parque, en la estación seca, cuando los animales acuden al agua."],
    },
    cover: { file: "journey-pendjari-hero.jpg", width: 1600, height: 1067 },
    tone: "savannah",
    publishedAt: "2026-07-30",
    readingMinutes: 6,
    category: { en: "Wildlife", fr: "Faune", de: "Tierwelt", es: "Fauna" },
    destinationSlugs: ["pendjari", "parc-w"],
    journeySlugs: ["north-to-pendjari"],
  },
  {
    slug: "how-to-behave-at-a-vodun-ceremony",
    title: { en: "How to behave at a Vodun ceremony", fr: "Comment se comporter à une cérémonie vodun", de: "Wie man sich bei einer Vodun-Zeremonie verhält", es: "Cómo comportarse en una ceremonia vudú" },
    excerpt: {
      en: "Vodun is a religion, not a show. Seven things we tell every guest before the first temple.",
      fr: "Le Vodun est une religion, pas un spectacle. Sept choses que nous disons à chaque voyageur avant le premier temple.",
      de: "Vodun ist eine Religion, keine Show. Sieben Dinge, die wir jedem Gast vor dem ersten Tempel sagen.",
      es: "El vudú es una religión, no un espectáculo. Siete cosas que contamos a cada viajero antes del primer templo.",
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
      de: ["Fragen Sie, bevor Sie etwas fotografieren, und akzeptieren Sie die Antwort. Manche Zeremonien erlauben es, manche nur zeitweise, manche gar nicht. Ihre Gastgeber fragen für Sie.", "Tragen Sie Kleidung, die Schultern und Knie bedeckt. Frauen bringen ein Tuch mit. Ziehen Sie die Schuhe aus, wo andere es tun. Steigen Sie nicht über Opfergaben am Boden und berühren Sie keinen Schrein.", "Verwenden Sie gegenüber den Menschen, denen Sie begegnen, nicht die Wörter „Voodoo“, „Magie“ oder „Fetisch“. Die Religion heißt Vodun, ihre Priester sind Hounon, ihre Gottheiten Vodun. Wird Ihnen etwas zu trinken oder zu essen angeboten, nehmen Sie ein wenig.", "Bleiben Sie, solange Sie willkommen sind, und gehen Sie, wenn Ihre Gastgeber es sagen. Nichts hier ist für Sie geplant, und genau deshalb ist es sehenswert."],
      es: ["Pregunte antes de fotografiar nada y acepte la respuesta. Algunas ceremonias lo permiten, otras solo en parte y otras no. Su anfitrión preguntará por usted.", "Vista con hombros y rodillas cubiertos. Las mujeres llevan un pañuelo. Descálcese donde lo hagan los demás. No pase por encima de las ofrendas en el suelo ni toque un santuario.", "No use las palabras «vudú» en sentido de magia, «brujería» o «fetiche» con las personas que conozca. La religión se llama vodun; sus sacerdotes son los hounon y sus divinidades, los vodun. Si le ofrecen bebida o comida, tome un poco.", "Quédese mientras sea bienvenido y márchese cuando su anfitrión lo indique. Aquí nada está programado para usted, y por eso merece la pena verlo."],
    },
    cover: { file: "journey-vodun-days.jpg", width: 1600, height: 1067 },
    tone: "night",
    publishedAt: "2026-06-18",
    readingMinutes: 4,
    category: { en: "Vodun", fr: "Vodun", de: "Vodun", es: "Vodun" },
    destinationSlugs: ["ouidah"],
    journeySlugs: ["vodun-days", "the-twelve-kings"],
  },
];
