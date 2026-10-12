import type { L } from "./journeys";

/**
 * Legal pages. DRAFT text for a lawyer to review before launch; it reflects
 * the commercial terms in the booking flow (30% deposit, balance at 45 days,
 * free changes to 60 days) and standard West African tour-operator practice.
 */
export type LegalPage = {
  slug: "terms" | "booking-terms" | "privacy" | "cookies";
  title: L;
  updated: string;
  sections: { heading: L; paragraphs: L<string[]> }[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "terms",
    title: { en: "Website terms of use", fr: "Conditions d'utilisation du site" },
    updated: "2026-10-01",
    sections: [
      {
        heading: { en: "Who we are", fr: "Qui nous sommes" },
        paragraphs: {
          en: ["This website is operated by Escale Voyages, a tour operator based in Cotonou, Republic of Benin. [Company registration number, RCCM and IFU to be added.]"],
          fr: ["Ce site est exploité par Escale Voyages, agence de voyages basée à Cotonou, République du Bénin. [Numéro RCCM et IFU à ajouter.]"],
        },
      },
      {
        heading: { en: "Content", fr: "Contenu" },
        paragraphs: {
          en: ["Prices, dates and itineraries on this site are indicative until confirmed in writing in your booking document. We correct errors as soon as we find them and are not bound by an obviously mistaken price.", "Text, photographs and design are ours or used under licence (see the media credits) and may not be reused without permission."],
          fr: ["Les prix, dates et itinéraires de ce site sont indicatifs jusqu'à confirmation écrite dans votre document de réservation. Nous corrigeons les erreurs dès que nous les constatons et ne sommes pas liés par un prix manifestement erroné.", "Les textes, photographies et le design nous appartiennent ou sont utilisés sous licence (voir les crédits) et ne peuvent être réutilisés sans autorisation."],
        },
      },
      {
        heading: { en: "Liability", fr: "Responsabilité" },
        paragraphs: {
          en: ["Practical information is checked on the dates shown but entry rules, health advice and prices change. Confirm with the relevant authorities before travelling. Links to third-party sites are provided for convenience."],
          fr: ["Les informations pratiques sont vérifiées aux dates indiquées, mais les règles d'entrée, les conseils de santé et les prix changent. Confirmez auprès des autorités compétentes avant de partir. Les liens vers des sites tiers sont fournis à titre de commodité."],
        },
      },
      {
        heading: { en: "Governing law", fr: "Droit applicable" },
        paragraphs: {
          en: ["These terms are governed by the law of the Republic of Benin. Disputes go to the courts of Cotonou after an attempt at amicable settlement."],
          fr: ["Les présentes conditions sont régies par le droit de la République du Bénin. Les litiges relèvent des tribunaux de Cotonou après tentative de règlement amiable."],
        },
      },
    ],
  },
  {
    slug: "booking-terms",
    title: { en: "Booking terms", fr: "Conditions de réservation" },
    updated: "2026-10-01",
    sections: [
      {
        heading: { en: "Confirmation and deposit", fr: "Confirmation et acompte" },
        paragraphs: {
          en: ["A booking is confirmed when we receive your deposit of 30% of the journey price and send a written confirmation. The deposit can be paid in FCFA by mobile money or bank transfer, or in euros by card.", "The balance is due 45 days before departure. For bookings made within 45 days of departure the full amount is due at confirmation."],
          fr: ["Une réservation est confirmée à réception de votre acompte de 30 % du prix du voyage et de l'envoi de notre confirmation écrite. L'acompte se règle en FCFA par mobile money ou virement, ou en euros par carte.", "Le solde est dû 45 jours avant le départ. Pour les réservations à moins de 45 jours du départ, la totalité est due à la confirmation."],
        },
      },
      {
        heading: { en: "Changes and cancellation by you", fr: "Modifications et annulation de votre part" },
        paragraphs: {
          en: ["Changes to dates or travellers are free up to 60 days before departure, subject to availability. Between 59 and 30 days we charge the costs we cannot recover from hotels and parks. Within 30 days the deposit is not refundable.", "Cancellation more than 60 days before departure: full refund minus a 50 000 F administration fee. 59 to 30 days: loss of deposit. Under 30 days: 75% of the price. Under 7 days: 100%. We strongly recommend insurance that covers cancellation."],
          fr: ["Les modifications de dates ou de voyageurs sont gratuites jusqu'à 60 jours avant le départ, sous réserve de disponibilité. Entre 59 et 30 jours, nous facturons les frais que nous ne pouvons récupérer auprès des hôtels et des parcs. À moins de 30 jours, l'acompte n'est pas remboursable.", "Annulation à plus de 60 jours du départ : remboursement intégral moins 50 000 F de frais de dossier. De 59 à 30 jours : perte de l'acompte. À moins de 30 jours : 75 % du prix. À moins de 7 jours : 100 %. Nous recommandons vivement une assurance annulation."],
        },
      },
      {
        heading: { en: "Changes by us", fr: "Modifications de notre part" },
        paragraphs: {
          en: ["If security advice, park closures or weather force a change of route, we propose an equivalent alternative at no extra cost. If we cancel a scheduled departure for lack of numbers, we tell you at least 45 days ahead and refund everything paid or move you to another date."],
          fr: ["Si les recommandations de sécurité, la fermeture d'un parc ou la météo imposent un changement d'itinéraire, nous proposons une alternative équivalente sans surcoût. Si nous annulons un départ programmé faute de participants, nous vous prévenons au moins 45 jours avant et remboursons l'intégralité des sommes versées ou vous reportons à une autre date."],
        },
      },
      {
        heading: { en: "Your responsibilities", fr: "Vos obligations" },
        paragraphs: {
          en: ["You are responsible for a valid passport, e-visa, vaccinations and travel insurance including medical evacuation, which is a condition of travel. Follow the instructions of our driver and your hosts in parks and at ceremonies."],
          fr: ["Vous êtes responsable d'un passeport valide, de l'e-visa, des vaccins et d'une assurance voyage incluant le rapatriement médical, condition du voyage. Suivez les consignes de notre chauffeur et de vos hôtes dans les parcs et lors des cérémonies."],
        },
      },
    ],
  },
  {
    slug: "privacy",
    title: { en: "Privacy policy", fr: "Politique de confidentialité" },
    updated: "2026-10-01",
    sections: [
      {
        heading: { en: "What we collect", fr: "Ce que nous collectons" },
        paragraphs: {
          en: ["When you enquire or book we collect your name, email, phone number, travel dates, the number of travellers and what you tell us about your trip. For a confirmed booking we also need passport details for permits and hotels, and health information you choose to share for your safety."],
          fr: ["Lors d'une demande ou d'une réservation, nous collectons vos nom, e-mail, téléphone, dates de voyage, nombre de voyageurs et ce que vous nous dites de votre projet. Pour une réservation confirmée, nous avons aussi besoin des données de passeport pour les permis et les hôtels, et des informations de santé que vous choisissez de partager pour votre sécurité."],
        },
      },
      {
        heading: { en: "How we use it", fr: "Comment nous les utilisons" },
        paragraphs: {
          en: ["To answer you, plan and run your journey, and comply with permit and insurance requirements. We share details only with the hotels, parks, drivers and payment providers needed for your trip. We do not sell data. Marketing emails are sent only if you opt in, and every one has an unsubscribe link."],
          fr: ["Pour vous répondre, préparer et réaliser votre voyage, et respecter les exigences de permis et d'assurance. Nous ne partageons vos données qu'avec les hôtels, parcs, chauffeurs et prestataires de paiement nécessaires au voyage. Nous ne vendons pas de données. Les e-mails marketing ne sont envoyés qu'avec votre accord, avec un lien de désinscription dans chacun."],
        },
      },
      {
        heading: { en: "Where it lives and your rights", fr: "Où elles sont conservées et vos droits" },
        paragraphs: {
          en: ["Enquiries and bookings are stored in our content system (Sanity) and email provider, with servers in the EU and US, and our office in Cotonou. We keep booking records for the period required by Beninese tax law. You can ask to see, correct or delete your data at any time by writing to our guest email. Benin's data protection authority (APDP) oversees our practice."],
          fr: ["Les demandes et réservations sont conservées dans notre système de contenu (Sanity) et chez notre prestataire d'e-mail, sur des serveurs en UE et aux États-Unis, et dans notre bureau de Cotonou. Nous conservons les dossiers de réservation pendant la durée exigée par la législation fiscale béninoise. Vous pouvez demander à consulter, corriger ou supprimer vos données à tout moment en écrivant à notre adresse voyageurs. L'APDP, autorité béninoise de protection des données, supervise nos pratiques."],
        },
      },
    ],
  },
  {
    slug: "cookies",
    title: { en: "Cookies", fr: "Cookies" },
    updated: "2026-10-01",
    sections: [
      {
        heading: { en: "What we use", fr: "Ce que nous utilisons" },
        paragraphs: {
          en: ["This site sets one cookie, to remember your language choice. We do not run advertising trackers. If we add analytics, they will be privacy-preserving and this page will say so first.", "Your browser lets you refuse or delete cookies; the site keeps working, you may just be asked your language again."],
          fr: ["Ce site dépose un seul cookie, pour mémoriser votre choix de langue. Nous n'utilisons pas de traceurs publicitaires. Si nous ajoutons des statistiques, elles respecteront la vie privée et cette page le dira d'abord.", "Votre navigateur permet de refuser ou de supprimer les cookies ; le site continue de fonctionner, on vous redemandera simplement votre langue."],
        },
      },
    ],
  },
];
