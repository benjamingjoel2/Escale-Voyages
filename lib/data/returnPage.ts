import type { L } from "./journeys";

/** Content for the Return (diaspora heritage) page. */
export const returnPage = {
  eyebrow: { en: "Return · Retour", fr: "Retour · Return" } as L,
  title: { en: "Return to the source", fr: "Retour à la source" } as L,
  intro: {
    en: "For travellers of African descent whose family story passed through the Bight of Benin. Not a tour of the slave route; a return, paced for feeling, with people who have kept the memory and can hold the silence.",
    fr: "Pour les voyageurs d'ascendance africaine dont l'histoire familiale est passée par le golfe du Bénin. Pas une visite de la route des esclaves ; un retour, au rythme du ressenti, avec des gens qui ont gardé la mémoire et savent tenir le silence.",
  } as L,
  pillars: [
    {
      title: { en: "Before you come", fr: "Avant de venir" },
      body: {
        en: "A two-hour session with our researcher to go through what you have: DNA results, surnames, oral history, documents. We say plainly what the records can and cannot tell, and we build the journey around the directions they give.",
        fr: "Deux heures avec notre chercheur pour parcourir ce que vous avez : résultats ADN, noms de famille, histoire orale, documents. Nous disons clairement ce que les archives peuvent et ne peuvent pas dire, et nous construisons le voyage autour des pistes qu'elles donnent.",
      },
    },
    {
      title: { en: "In Ouidah", fr: "À Ouidah" },
      body: {
        en: "The Route des Esclaves walked at your pace with a historian from the town, the fort and the archives, the Zomachi memorial, the Door of No Return at dawn with nobody else there. A welcome ceremony with a temple if you wish one, never as a show.",
        fr: "La Route des Esclaves parcourue à votre rythme avec un historien de la ville, le fort et les archives, le mémorial Zomachi, la Porte du Non-Retour à l'aube sans personne d'autre. Une cérémonie d'accueil avec un temple si vous le souhaitez, jamais en spectacle.",
      },
    },
    {
      title: { en: "Inland", fr: "Dans les terres" },
      body: {
        en: "Where the records point to a region, a day there: Abomey and the kingdom that sold and was sold, the Yoruba towns of Kétou, the Mahi villages of the Collines. A family name can open a door; we knock first.",
        fr: "Là où les archives désignent une région, une journée sur place : Abomey et le royaume qui a vendu et a été vendu, les villes yoruba de Kétou, les villages mahi des Collines. Un nom de famille peut ouvrir une porte ; nous frappons d'abord.",
      },
    },
    {
      title: { en: "Practical help", fr: "Aide pratique" },
      body: {
        en: "E-visa, Beninese citizenship enquiries for people of African descent under the 2024 law, documents, translations, and the quiet logistics of staying longer or coming back. We have done this before and we stay in touch after.",
        fr: "E-visa, démarches de nationalité béninoise pour les personnes d'ascendance africaine en vertu de la loi de 2024, documents, traductions, et la logistique discrète d'un séjour prolongé ou d'un retour. Nous l'avons déjà fait et nous restons en contact après.",
      },
    },
  ] as { title: L; body: L }[],
  faq: [
    {
      q: { en: "I have no documents at all. Is it still worth coming?", fr: "Je n'ai aucun document. Est-ce que ça vaut quand même la peine de venir ?" },
      a: {
        en: "Yes. Most people arrive with very little. Ouidah itself, the memorial route and the communities that trace their lineage to the returnees from Brazil are the heart of the journey, with or without a paper trail.",
        fr: "Oui. La plupart des gens arrivent avec très peu. Ouidah elle-même, la route mémorielle et les communautés qui font remonter leur lignée aux retornados du Brésil sont le cœur du voyage, avec ou sans archives.",
      },
    },
    {
      q: { en: "Can you help with the citizenship law for people of African descent?", fr: "Pouvez-vous aider avec la loi sur la nationalité pour les personnes d'ascendance africaine ?" },
      a: {
        en: "We explain the process and introduce you to the official platform and to a lawyer in Cotonou who handles applications. We do not act as your legal representative.",
        fr: "Nous expliquons la procédure et vous mettons en relation avec la plateforme officielle et un avocat à Cotonou qui traite les demandes. Nous n'agissons pas comme votre représentant légal.",
      },
    },
    {
      q: { en: "Is this journey only for African Americans?", fr: "Ce voyage est-il réservé aux Afro-Américains ?" },
      a: {
        en: "No. It is for anyone from the Americas, the Caribbean or Europe whose ancestry runs through this coast: Brazilian, Haitian, Cuban, Jamaican, French Caribbean and others. Our team works in French, English and Portuguese.",
        fr: "Non. Il s'adresse à toute personne des Amériques, des Caraïbes ou d'Europe dont les origines passent par cette côte : brésiliennes, haïtiennes, cubaines, jamaïcaines, antillaises et autres. Notre équipe travaille en français, en anglais et en portugais.",
      },
    },
  ] as { q: L; a: L }[],
};
