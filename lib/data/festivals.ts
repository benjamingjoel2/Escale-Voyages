import type { L } from "./journeys";

/**
 * Festivals and events across the country. `nextStart` drives the
 * countdown; `datesConfirmed` is false until the official programme is out.
 * Dates follow the lunar or church calendar where noted; verify yearly.
 */
export type Festival = {
  slug: string;
  name: L;
  pitch: L;
  body: L;
  when: L;
  nextStart?: string;
  nextEnd?: string;
  datesConfirmed: boolean;
  destinationSlug: string;
  journeySlug?: string;
  image: { file: string; width: number; height: number };
  tone: "accent" | "lagoon" | "savannah" | "coast" | "night";
  featured?: boolean;
};

export const festivals: Festival[] = [
  {
    slug: "vodun-days",
    name: { en: "Vodun Days", fr: "Vodun Days", de: "Vodun Days", es: "Vodun Days" },
    pitch: {
      en: "Three days in January when Ouidah becomes the centre of the Vodun world.",
      fr: "Trois jours de janvier où Ouidah devient le centre du monde vodun.",
      de: "Drei Tage im Januar, an denen Ouidah zum Mittelpunkt der Vodun-Welt wird.",
      es: "Tres días de enero en que Uidá se convierte en el centro del mundo vudú.",
    },
    body: {
      en: "Vodun Days grew out of the 10 January public holiday, Benin's national day of traditional religions, into a three-day festival of ceremonies, processions and concerts on the beach at Ouidah. The 2026 edition ran from 8 to 10 January and drew visitors from across West Africa, Brazil, Haiti and the United States. We attend as guests of a temple, whose elders explain what you are seeing and what you should not photograph.",
      fr: "Les Vodun Days sont nés du jour férié du 10 janvier, fête nationale des religions traditionnelles, pour devenir un festival de trois jours de cérémonies, de processions et de concerts sur la plage de Ouidah. L'édition 2026 s'est tenue du 8 au 10 janvier et a attiré des visiteurs de toute l'Afrique de l'Ouest, du Brésil, d'Haïti et des États-Unis. Nous y assistons en invités d'un temple, dont les anciens expliquent ce que vous voyez et ce qu'il ne faut pas photographier.",
      de: "Die Vodun Days sind aus dem Feiertag am 10. Januar hervorgegangen, dem Nationaltag der traditionellen Religionen Benins, und heute ein dreitägiges Fest mit Zeremonien, Prozessionen und Konzerten am Strand von Ouidah. Die Ausgabe 2026 fand vom 8. bis 10. Januar statt und zog Besucher aus ganz Westafrika, Brasilien, Haiti und den USA an. Wir sind Gäste eines Tempels, dessen Älteste erklären, was Sie sehen und was Sie nicht fotografieren sollten.",
      es: "Los Vodun Days nacieron del festivo del 10 de enero, día nacional de las religiones tradicionales de Benín, y hoy son tres días de ceremonias, procesiones y conciertos en la playa de Uidá. La edición de 2026 se celebró del 8 al 10 de enero y atrajo a visitantes de toda África Occidental, Brasil, Haití y Estados Unidos. Asistimos como invitados de un templo, cuyos ancianos explican lo que está viendo y lo que no debe fotografiar.",
    },
    when: { en: "Every January, Ouidah", fr: "Chaque janvier, Ouidah", de: "Jeden Januar, Ouidah", es: "Cada enero, Uidá" },
    nextStart: "2027-01-08",
    nextEnd: "2027-01-10",
    datesConfirmed: false,
    destinationSlug: "ouidah",
    journeySlug: "vodun-days",
    image: { file: "journey-vodun-days.jpg", width: 1600, height: 1000 },
    tone: "night",
    featured: true,
  },
  {
    slug: "gelede",
    name: { en: "Gèlèdé masquerades", fr: "Mascarades Gèlèdé", de: "Gèlèdé-Maskeraden", es: "Mascaradas gèlèdé" },
    pitch: {
      en: "The Yoruba mask society of Kétou, on UNESCO's intangible heritage list.",
      fr: "La société des masques yoruba de Kétou, inscrite au patrimoine immatériel de l'UNESCO.",
      de: "Der Maskenbund der Yoruba in Kétou, auf der UNESCO-Liste des immateriellen Erbes.",
      es: "La sociedad de máscaras yoruba de Kétou, inscrita en la lista del patrimonio inmaterial de la UNESCO.",
    },
    body: {
      en: "Gèlèdé honours the mothers, the ancestral women whose power the society placates with carved masks, song and dance. Performances happen through the dry season in Kétou and the villages around it, usually at night. Dates are set by each society; we are told a few weeks ahead and build journeys around them.",
      fr: "Le Gèlèdé honore les mères, ces femmes ancestrales dont la société apaise le pouvoir par des masques sculptés, des chants et des danses. Les sorties ont lieu pendant la saison sèche à Kétou et dans les villages alentour, le plus souvent la nuit. Les dates sont fixées par chaque société ; nous les connaissons quelques semaines à l'avance et construisons les voyages autour.",
      de: "Gèlèdé ehrt die Mütter, die Ahninnen, deren Macht der Bund mit geschnitzten Masken, Gesang und Tanz besänftigt. Aufführungen finden während der Trockenzeit in Kétou und den umliegenden Dörfern statt, meist nachts. Die Termine legt jeder Bund selbst fest; wir erfahren sie einige Wochen vorher und planen Reisen darum herum.",
      es: "El gèlèdé honra a las madres, las antepasadas cuyo poder la sociedad apacigua con máscaras talladas, canto y danza. Las representaciones tienen lugar durante la estación seca en Kétou y los pueblos de alrededor, normalmente de noche. Cada sociedad fija sus fechas; nos avisan con unas semanas de antelación y organizamos los viajes en torno a ellas.",
    },
    when: { en: "Dry season, Kétou region", fr: "Saison sèche, région de Kétou", de: "Trockenzeit, Region Kétou", es: "Estación seca, región de Kétou" },
    datesConfirmed: false,
    destinationSlug: "ketou",
    journeySlug: "collines-and-centre",
    image: { file: "dest-ketou.jpg", width: 1600, height: 1000 },
    tone: "accent",
  },
  {
    slug: "nonvitcha",
    name: { en: "Nonvitcha", fr: "Nonvitcha", de: "Nonvitcha", es: "Nonvitcha" },
    pitch: {
      en: "The Xwla and Xweda gathering at Grand-Popo every Pentecost weekend.",
      fr: "Le rassemblement des Xwla et des Xwéda à Grand-Popo chaque week-end de Pentecôte.",
      de: "Das Treffen der Xwla und Xweda in Grand-Popo, jedes Pfingstwochenende.",
      es: "El encuentro de los xwla y los xweda en Grand-Popo, cada fin de semana de Pentecostés.",
    },
    body: {
      en: "Nonvitcha means \"brotherhood\". Since 1923 the fishing peoples of the coast have come back to Grand-Popo for Pentecost: a weekend of processions, Zangbeto night-watchmen masquerades, boat races on the Mono and a great deal of food. The friendliest festival in the country.",
      fr: "Nonvitcha signifie « fraternité ». Depuis 1923, les peuples de pêcheurs de la côte reviennent à Grand-Popo pour la Pentecôte : un week-end de processions, de mascarades Zangbéto, de courses de pirogues sur le Mono et de beaucoup de cuisine. Le festival le plus chaleureux du pays.",
      de: "Nonvitcha bedeutet „Brüderlichkeit“. Seit 1923 kehren die Fischervölker der Küste zu Pfingsten nach Grand-Popo zurück: ein Wochenende mit Prozessionen, Maskeraden der Zangbeto-Nachtwächter, Bootsrennen auf dem Mono und sehr viel Essen. Das herzlichste Fest des Landes.",
      es: "Nonvitcha significa «fraternidad». Desde 1923 los pueblos pescadores de la costa vuelven a Grand-Popo por Pentecostés: un fin de semana de procesiones, mascaradas de los zangbeto, los guardianes de la noche, regatas en el Mono y muchísima comida. La fiesta más acogedora del país.",
    },
    when: { en: "Pentecost weekend, Grand-Popo", fr: "Week-end de Pentecôte, Grand-Popo", de: "Pfingstwochenende, Grand-Popo", es: "Fin de semana de Pentecostés, Grand-Popo" },
    nextStart: "2027-05-15",
    nextEnd: "2027-05-17",
    datesConfirmed: false,
    destinationSlug: "grand-popo",
    journeySlug: "lagoon-and-coast",
    image: { file: "dest-grand-popo.jpg", width: 1600, height: 1000 },
    tone: "coast",
  },
  {
    slug: "yam-festival",
    name: { en: "Yam festival of Savalou", fr: "Fête de l'igname de Savalou", de: "Yamsfest von Savalou", es: "Fiesta del ñame de Savalou" },
    pitch: {
      en: "The new yam is tasted on 15 August, and nobody eats it before.",
      fr: "La nouvelle igname se goûte le 15 août, et personne ne la mange avant.",
      de: "Der neue Yams wird am 15. August gekostet, und niemand isst ihn vorher.",
      es: "El ñame nuevo se prueba el 15 de agosto, y nadie lo come antes.",
    },
    body: {
      en: "In the Collines the yam is the year. On 15 August the king of Savalou tastes the first of the new harvest and the town eats, dances and gives thanks. It falls in the green season, when the hills are at their most beautiful and the roads at their most patient.",
      fr: "Dans les Collines, l'igname, c'est l'année. Le 15 août, le roi de Savalou goûte la première de la nouvelle récolte et la ville mange, danse et rend grâce. C'est la saison verte, quand les collines sont les plus belles et les routes les plus patientes.",
      de: "In den Collines ist der Yams das Jahr. Am 15. August kostet der König von Savalou die ersten Knollen der neuen Ernte, und die Stadt isst, tanzt und dankt. Es fällt in die grüne Jahreszeit, wenn die Hügel am schönsten sind und die Straßen am meisten Geduld verlangen.",
      es: "En las Collines, el ñame es el año. El 15 de agosto el rey de Savalou prueba los primeros de la nueva cosecha y la ciudad come, baila y da gracias. Cae en la estación verde, cuando las colinas están más bellas y los caminos piden más paciencia.",
    },
    when: { en: "15 August, Savalou", fr: "15 août, Savalou", de: "15. August, Savalou", es: "15 de agosto, Savalou" },
    nextStart: "2027-08-15",
    nextEnd: "2027-08-15",
    datesConfirmed: true,
    destinationSlug: "dassa",
    journeySlug: "collines-and-centre",
    image: { file: "dest-dassa.jpg", width: 1600, height: 1000 },
    tone: "savannah",
  },
  {
    slug: "gaani",
    name: { en: "Gaani", fr: "La Gaani", de: "Gaani", es: "Gaani" },
    pitch: {
      en: "The Bariba horsemen of Nikki ride for their king, once a year, in full regalia.",
      fr: "Les cavaliers bariba de Nikki défilent pour leur roi, une fois l'an, en grande tenue.",
      de: "Die Bariba-Reiter von Nikki reiten einmal im Jahr in vollem Ornat für ihren König.",
      es: "Los jinetes bariba de Nikki cabalgan para su rey una vez al año, con todas sus galas.",
    },
    body: {
      en: "Gaani is the great festival of the Bariba kingdom of Nikki, in the north-east: three days of cavalry parades, drums and homage to the king, held around the Prophet's birthday and so moving each year with the lunar calendar. The riders are the point: hundreds of them, in indigo and red, on horses dressed for war.",
      fr: "La Gaani est la grande fête du royaume bariba de Nikki, au nord-est : trois jours de défilés de cavalerie, de tambours et d'hommages au roi, autour de la naissance du Prophète, et qui se déplace donc chaque année avec le calendrier lunaire. Les cavaliers sont l'essentiel : des centaines, en indigo et rouge, sur des chevaux parés pour la guerre.",
      de: "Gaani ist das große Fest des Bariba-Königreichs Nikki im Nordosten: drei Tage Reiterparaden, Trommeln und Huldigung des Königs, rund um den Geburtstag des Propheten gefeiert und daher jedes Jahr mit dem Mondkalender wandernd. Die Reiter sind das Herzstück: Hunderte, in Indigo und Rot, auf kriegerisch geschmückten Pferden.",
      es: "El Gaani es la gran fiesta del reino bariba de Nikki, en el noreste: tres días de desfiles de caballería, tambores y homenaje al rey, celebrados en torno al nacimiento del Profeta, por lo que cambian de fecha cada año con el calendario lunar. Los jinetes son lo esencial: cientos, de añil y rojo, sobre caballos engalanados para la guerra.",
    },
    when: { en: "Around the Mawlid, Nikki (dates follow the lunar calendar)", fr: "Autour du Mawlid, Nikki (dates selon le calendrier lunaire)", de: "Rund um den Mawlid, Nikki (Termine nach dem Mondkalender)", es: "En torno al Mawlid, Nikki (fechas según el calendario lunar)" },
    datesConfirmed: false,
    destinationSlug: "parakou",
    image: { file: "festival-gaani.jpg", width: 1600, height: 1000 },
    tone: "savannah",
  },
];
