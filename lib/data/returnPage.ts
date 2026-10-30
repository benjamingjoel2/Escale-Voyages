import type { L } from "./journeys";

/** Content for the Return (diaspora heritage) page. */
export const returnPage = {
  eyebrow: { en: "Return · Retour", fr: "Retour · Return", de: "Rückkehr · Return", es: "Retorno · Return" } as L,
  title: { en: "Return to the source", fr: "Retour à la source", de: "Rückkehr zum Ursprung", es: "Retorno al origen" } as L,
  intro: {
    en: "For travellers of African descent whose family story passed through the Bight of Benin. Not a tour of the slave route; a return, paced for feeling, with people who have kept the memory and can hold the silence.",
    fr: "Pour les voyageurs d'ascendance africaine dont l'histoire familiale est passée par le golfe du Bénin. Pas une visite de la route des esclaves ; un retour, au rythme du ressenti, avec des gens qui ont gardé la mémoire et savent tenir le silence.",
    de: "Für Reisende afrikanischer Abstammung, deren Familiengeschichte durch die Bucht von Benin führte. Keine Tour über die Sklavenroute, sondern eine Rückkehr, im Tempo des Gefühls, mit Menschen, die die Erinnerung bewahrt haben und die Stille mittragen.",
    es: "Para viajeros de ascendencia africana cuya historia familiar pasó por el golfo de Benín. No es un circuito por la ruta de los esclavos, sino un retorno, al ritmo de la emoción, con personas que han guardado la memoria y saben sostener el silencio.",
  } as L,
  pillars: [
    {
      title: { en: "Before you come", fr: "Avant de venir", de: "Vor Ihrer Reise", es: "Antes de venir" },
      body: {
        en: "A two-hour session with our researcher to go through what you have: DNA results, surnames, oral history, documents. We say plainly what the records can and cannot tell, and we build the journey around the directions they give.",
        fr: "Deux heures avec notre chercheur pour parcourir ce que vous avez : résultats ADN, noms de famille, histoire orale, documents. Nous disons clairement ce que les archives peuvent et ne peuvent pas dire, et nous construisons le voyage autour des pistes qu'elles donnent.",
        de: "Eine zweistündige Sitzung mit unserer Rechercheurin, um durchzugehen, was Sie haben: DNA-Ergebnisse, Nachnamen, mündliche Überlieferung, Dokumente. Wir sagen offen, was die Quellen verraten können und was nicht, und bauen die Reise entlang der Richtungen, die sie weisen.",
        es: "Una sesión de dos horas con nuestra investigadora para revisar lo que tiene: resultados de ADN, apellidos, historia oral, documentos. Decimos con franqueza lo que los registros pueden y no pueden decir, y construimos el viaje según las direcciones que señalan.",
      },
    },
    {
      title: { en: "In Ouidah", fr: "À Ouidah", de: "In Ouidah", es: "En Uidá" },
      body: {
        en: "The Route des Esclaves walked at your pace with a historian from the town, the fort and the archives, the Zomachi memorial, the Door of No Return at dawn with nobody else there. A welcome ceremony with a temple if you wish one, never as a show.",
        fr: "La Route des Esclaves parcourue à votre rythme avec un historien de la ville, le fort et les archives, le mémorial Zomachi, la Porte du Non-Retour à l'aube sans personne d'autre. Une cérémonie d'accueil avec un temple si vous le souhaitez, jamais en spectacle.",
        de: "Die Route des Esclaves in Ihrem Tempo mit einem Historiker aus der Stadt, das Fort und die Archive, das Zomachi-Denkmal, das Tor ohne Wiederkehr im Morgengrauen ohne andere Menschen. Auf Wunsch eine Willkommenszeremonie mit einem Tempel, niemals als Schauspiel.",
        es: "La Ruta de los Esclavos a su ritmo con un historiador de la ciudad, el fuerte y los archivos, el memorial de Zomachi, la Puerta del No Retorno al amanecer sin nadie más. Una ceremonia de bienvenida con un templo si lo desea, nunca como espectáculo.",
      },
    },
    {
      title: { en: "Inland", fr: "Dans les terres", de: "Im Landesinneren", es: "En el interior" },
      body: {
        en: "Where the records point to a region, a day there: Abomey and the kingdom that sold and was sold, the Yoruba towns of Kétou, the Mahi villages of the Collines. A family name can open a door; we knock first.",
        fr: "Là où les archives désignent une région, une journée sur place : Abomey et le royaume qui a vendu et a été vendu, les villes yoruba de Kétou, les villages mahi des Collines. Un nom de famille peut ouvrir une porte ; nous frappons d'abord.",
        de: "Wo die Quellen auf eine Region weisen, ein Tag dort: Abomey und das Königreich, das verkaufte und verkauft wurde, die Yoruba-Städte um Kétou, die Mahi-Dörfer der Collines. Ein Familienname kann eine Tür öffnen; wir klopfen zuerst an.",
        es: "Si los registros apuntan a una región, un día allí: Abomey y el reino que vendió y fue vendido, las ciudades yoruba de Kétou, los pueblos mahi de las Collines. Un apellido puede abrir una puerta; primero llamamos.",
      },
    },
    {
      title: { en: "Practical help", fr: "Aide pratique", de: "Praktische Hilfe", es: "Ayuda práctica" },
      body: {
        en: "E-visa, Beninese citizenship enquiries for people of African descent under the 2024 law, documents, translations, and the quiet logistics of staying longer or coming back. We have done this before and we stay in touch after.",
        fr: "E-visa, démarches de nationalité béninoise pour les personnes d'ascendance africaine en vertu de la loi de 2024, documents, traductions, et la logistique discrète d'un séjour prolongé ou d'un retour. Nous l'avons déjà fait et nous restons en contact après.",
        de: "E-Visum, Fragen zur beninischen Staatsbürgerschaft für Menschen afrikanischer Abstammung nach dem Gesetz von 2024, Dokumente, Übersetzungen und die stille Logistik eines längeren Aufenthalts oder einer Wiederkehr. Wir haben das schon oft gemacht und bleiben danach in Kontakt.",
        es: "Visado electrónico, consultas sobre la ciudadanía beninesa para personas de ascendencia africana según la ley de 2024, documentos, traducciones y la logística discreta de quedarse más tiempo o volver. Ya lo hemos hecho antes y seguimos en contacto después.",
      },
    },
  ] as { title: L; body: L }[],
  faq: [
    {
      q: { en: "I have no documents at all. Is it still worth coming?", fr: "Je n'ai aucun document. Est-ce que ça vaut quand même la peine de venir ?", de: "Ich habe überhaupt keine Dokumente. Lohnt sich die Reise trotzdem?", es: "No tengo ningún documento. ¿Vale la pena venir?" },
      a: {
        en: "Yes. Most people arrive with very little. Ouidah itself, the memorial route and the communities that trace their lineage to the returnees from Brazil are the heart of the journey, with or without a paper trail.",
        fr: "Oui. La plupart des gens arrivent avec très peu. Ouidah elle-même, la route mémorielle et les communautés qui font remonter leur lignée aux retornados du Brésil sont le cœur du voyage, avec ou sans archives.",
        de: "Ja. Die meisten kommen mit sehr wenig. Ouidah selbst, der Gedenkweg und die Gemeinschaften, die ihre Abstammung auf die Rückkehrer aus Brasilien zurückführen, sind das Herz der Reise, mit oder ohne Papierspur.",
        es: "Sí. La mayoría llega con muy poco. La propia Uidá, la ruta memorial y las comunidades cuyo linaje se remonta a los retornados de Brasil son el corazón del viaje, con o sin rastro documental.",
      },
    },
    {
      q: { en: "Can you help with the citizenship law for people of African descent?", fr: "Pouvez-vous aider avec la loi sur la nationalité pour les personnes d'ascendance africaine ?", de: "Helfen Sie beim Staatsbürgerschaftsgesetz für Menschen afrikanischer Abstammung?", es: "¿Pueden ayudar con la ley de ciudadanía para personas de ascendencia africana?" },
      a: {
        en: "We explain the process and introduce you to the official platform and to a lawyer in Cotonou who handles applications. We do not act as your legal representative.",
        fr: "Nous expliquons la procédure et vous mettons en relation avec la plateforme officielle et un avocat à Cotonou qui traite les demandes. Nous n'agissons pas comme votre représentant légal.",
        de: "Wir erklären das Verfahren und stellen Ihnen die offizielle Plattform sowie eine Anwältin in Cotonou vor, die Anträge betreut. Wir handeln nicht als Ihre rechtliche Vertretung.",
        es: "Explicamos el procedimiento y le ponemos en contacto con la plataforma oficial y con una abogada de Cotonú que tramita solicitudes. No actuamos como su representante legal.",
      },
    },
    {
      q: { en: "Is this journey only for African Americans?", fr: "Ce voyage est-il réservé aux Afro-Américains ?", de: "Ist diese Reise nur für Afroamerikaner?", es: "¿Este viaje es solo para afroamericanos?" },
      a: {
        en: "No. It is for anyone from the Americas, the Caribbean or Europe whose ancestry runs through this coast: Brazilian, Haitian, Cuban, Jamaican, French Caribbean and others. Our team works in French, English and Portuguese.",
        fr: "Non. Il s'adresse à toute personne des Amériques, des Caraïbes ou d'Europe dont les origines passent par cette côte : brésiliennes, haïtiennes, cubaines, jamaïcaines, antillaises et autres. Notre équipe travaille en français, en anglais et en portugais.",
        de: "Nein. Sie ist für alle aus Amerika, der Karibik oder Europa, deren Vorfahren über diese Küste kamen: Brasilianer, Haitianer, Kubaner, Jamaikaner, Menschen aus den französischen Antillen und andere. Unser Team arbeitet auf Französisch, Englisch und Portugiesisch.",
        es: "No. Es para cualquier persona de América, el Caribe o Europa cuya ascendencia pase por esta costa: brasileños, haitianos, cubanos, jamaicanos, antillanos franceses y otros. Nuestro equipo trabaja en francés, inglés y portugués.",
      },
    },
  ] as { q: L; a: L }[],
};
