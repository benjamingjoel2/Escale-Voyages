import type { L } from "./journeys";
import { addressLine, site } from "../site";

/**
 * Legal pages. Complete text, to be reviewed by a lawyer before launch (that
 * note lives in the PR, never on the page). The commercial terms match the
 * booking flow: 30% deposit, balance at 45 days, free changes to 60 days.
 */
export type LegalPage = {
  slug: "terms" | "booking-terms" | "privacy" | "cookies" | "credits";
  title: L;
  updated: string;
  sections: { heading: L; paragraphs: L<string[]> }[];
};

const email = site.email.guest;
const where = `${addressLine}, Republic of Benin`;
const whereFr = `${addressLine}, République du Bénin`;
const whereDe = `${addressLine}, Republik Benin`;
const whereEs = `${addressLine}, República de Benín`;

export const legalPages: LegalPage[] = [
  {
    slug: "terms",
    title: { en: "Website terms of use", fr: "Conditions d'utilisation du site", de: "Nutzungsbedingungen der Website", es: "Condiciones de uso del sitio web" },
    updated: "2026-10-30",
    sections: [
      {
        heading: { en: "Who we are", fr: "Qui nous sommes", de: "Wer wir sind", es: "Quiénes somos" },
        paragraphs: {
          en: [`This website is operated by Escale Voyages, a tour operator for journeys in the Republic of Benin. Our office is at ${where}. You can reach us at ${email}.`],
          fr: [`Ce site est exploité par Escale Voyages, agence de voyages réceptive pour la République du Bénin. Notre bureau se trouve ${whereFr}. Vous pouvez nous écrire à ${email}.`],
          de: [`Diese Website wird von Escale Voyages betrieben, einem Reiseveranstalter für Reisen in der Republik Benin. Unser Büro befindet sich in ${whereDe}. Sie erreichen uns unter ${email}.`],
          es: [`Este sitio web lo gestiona Escale Voyages, operador de viajes en la República de Benín. Nuestra oficina está en ${whereEs}. Puede escribirnos a ${email}.`],
        },
      },
      {
        heading: { en: "Content", fr: "Contenu", de: "Inhalte", es: "Contenido" },
        paragraphs: {
          en: ["Prices, dates and itineraries on this site are indicative until confirmed in writing in your booking document. We correct errors as soon as we find them and are not bound by an obviously mistaken price.", "Text, photographs and design are ours or used under licence (see the photo credits) and may not be reused without permission."],
          fr: ["Les prix, dates et itinéraires de ce site sont indicatifs jusqu'à confirmation écrite dans votre document de réservation. Nous corrigeons les erreurs dès que nous les constatons et ne sommes pas liés par un prix manifestement erroné.", "Les textes, photographies et le design nous appartiennent ou sont utilisés sous licence (voir les crédits photo) et ne peuvent être réutilisés sans autorisation."],
          de: ["Preise, Termine und Reiseverläufe auf dieser Website sind unverbindlich, bis sie in Ihrer Buchungsbestätigung schriftlich bestätigt werden. Fehler korrigieren wir, sobald wir sie bemerken; an einen offensichtlich falschen Preis sind wir nicht gebunden.", "Texte, Fotos und Gestaltung gehören uns oder werden unter Lizenz genutzt (siehe Bildnachweise) und dürfen ohne Erlaubnis nicht weiterverwendet werden."],
          es: ["Los precios, fechas e itinerarios de este sitio son orientativos hasta que se confirmen por escrito en su documento de reserva. Corregimos los errores en cuanto los detectamos y no nos vincula un precio claramente erróneo.", "Los textos, las fotografías y el diseño son nuestros o se usan bajo licencia (consulte los créditos fotográficos) y no pueden reutilizarse sin permiso."],
        },
      },
      {
        heading: { en: "Liability", fr: "Responsabilité", de: "Haftung", es: "Responsabilidad" },
        paragraphs: {
          en: ["Practical information is checked on the dates shown, but entry rules, health advice and prices change. Confirm with the relevant authorities before travelling. Links to third-party sites are provided for convenience and we are not responsible for their content."],
          fr: ["Les informations pratiques sont vérifiées aux dates indiquées, mais les règles d'entrée, les conseils de santé et les prix changent. Confirmez auprès des autorités compétentes avant de partir. Les liens vers des sites tiers sont fournis à titre de commodité et nous ne sommes pas responsables de leur contenu."],
          de: ["Praktische Informationen werden zu den angegebenen Daten geprüft, doch Einreisebestimmungen, Gesundheitshinweise und Preise ändern sich. Bitte informieren Sie sich vor der Reise bei den zuständigen Behörden. Links zu Websites Dritter dienen nur Ihrer Bequemlichkeit; für deren Inhalte sind wir nicht verantwortlich."],
          es: ["La información práctica se comprueba en las fechas indicadas, pero las normas de entrada, las recomendaciones sanitarias y los precios cambian. Confírmelo con las autoridades competentes antes de viajar. Los enlaces a sitios de terceros se ofrecen por comodidad y no somos responsables de su contenido."],
        },
      },
      {
        heading: { en: "Governing law", fr: "Droit applicable", de: "Anwendbares Recht", es: "Legislación aplicable" },
        paragraphs: {
          en: ["These terms are governed by the law of the Republic of Benin. We will always try to settle a disagreement amicably first; failing that, the competent courts have jurisdiction, without depriving you of any protection the law of your country of residence gives you."],
          fr: ["Les présentes conditions sont régies par le droit de la République du Bénin. Nous chercherons toujours d'abord un règlement amiable ; à défaut, les tribunaux compétents sont saisis, sans vous priver de la protection que vous accorde la loi de votre pays de résidence."],
          de: ["Für diese Bedingungen gilt das Recht der Republik Benin. Wir bemühen uns stets zuerst um eine gütliche Einigung; gelingt das nicht, sind die zuständigen Gerichte zuständig, ohne dass Ihnen der Schutz entzogen wird, den Ihnen das Recht Ihres Wohnsitzlandes gewährt."],
          es: ["Estas condiciones se rigen por la legislación de la República de Benín. Siempre intentaremos primero un acuerdo amistoso; si no fuera posible, serán competentes los tribunales correspondientes, sin privarle de la protección que le otorgue la ley de su país de residencia."],
        },
      },
    ],
  },
  {
    slug: "booking-terms",
    title: { en: "Booking terms", fr: "Conditions de réservation", de: "Buchungsbedingungen", es: "Condiciones de reserva" },
    updated: "2026-10-30",
    sections: [
      {
        heading: { en: "Enquiries and quotes", fr: "Demandes et devis", de: "Anfragen und Angebote", es: "Consultas y presupuestos" },
        paragraphs: {
          en: ["Every journey starts with an enquiry. We reply with a written proposal and quote based on your dates, the number of travellers and what you have asked for. A quote is not a booking: it holds no rooms or places until you confirm and pay the deposit, and its prices can change until then.", "Each quote states what is included and what is not. Anything not listed as included (international flights, visas, insurance, personal spending, tips) is not part of the price."],
          fr: ["Chaque voyage commence par une demande. Nous répondons par une proposition écrite et un devis fondés sur vos dates, le nombre de voyageurs et vos souhaits. Un devis n'est pas une réservation : il ne bloque ni chambre ni place tant que vous n'avez pas confirmé et versé l'acompte, et ses prix peuvent évoluer d'ici là.", "Chaque devis précise ce qui est inclus et ce qui ne l'est pas. Tout ce qui n'est pas indiqué comme inclus (vols internationaux, visas, assurance, dépenses personnelles, pourboires) ne fait pas partie du prix."],
          de: ["Jede Reise beginnt mit einer Anfrage. Wir antworten mit einem schriftlichen Vorschlag und einem Angebot, das auf Ihren Daten, der Zahl der Reisenden und Ihren Wünschen beruht. Ein Angebot ist keine Buchung: Es reserviert weder Zimmer noch Plätze, bis Sie bestätigen und die Anzahlung leisten, und seine Preise können sich bis dahin ändern.", "Jedes Angebot nennt, was enthalten ist und was nicht. Was nicht als inklusive aufgeführt ist (internationale Flüge, Visa, Versicherung, persönliche Ausgaben, Trinkgelder), ist nicht im Preis enthalten."],
          es: ["Cada viaje empieza con una consulta. Respondemos con una propuesta escrita y un presupuesto según sus fechas, el número de viajeros y lo que nos haya pedido. Un presupuesto no es una reserva: no bloquea habitaciones ni plazas hasta que confirme y pague el depósito, y sus precios pueden variar hasta entonces.", "Cada presupuesto indica qué está incluido y qué no. Todo lo que no figure como incluido (vuelos internacionales, visados, seguro, gastos personales, propinas) no forma parte del precio."],
        },
      },
      {
        heading: { en: "Confirmation, deposit and balance", fr: "Confirmation, acompte et solde", de: "Bestätigung, Anzahlung und Restzahlung", es: "Confirmación, depósito y saldo" },
        paragraphs: {
          en: ["A booking is confirmed when we receive your deposit of 30% of the journey price and send a written confirmation. The deposit can be paid in FCFA by mobile money or bank transfer, or in euros by card.", "The balance is due 45 days before departure. For bookings made within 45 days of departure the full amount is due at confirmation. If the balance is not paid on time we may treat the booking as cancelled by you."],
          fr: ["Une réservation est confirmée à réception de votre acompte de 30 % du prix du voyage et de l'envoi de notre confirmation écrite. L'acompte se règle en FCFA par mobile money ou virement, ou en euros par carte.", "Le solde est dû 45 jours avant le départ. Pour les réservations à moins de 45 jours du départ, la totalité est due à la confirmation. Si le solde n'est pas réglé à temps, nous pouvons considérer la réservation comme annulée de votre fait."],
          de: ["Eine Buchung ist bestätigt, sobald Ihre Anzahlung von 30 % des Reisepreises bei uns eingegangen ist und wir Ihnen eine schriftliche Bestätigung geschickt haben. Die Anzahlung kann in FCFA per Mobile Money oder Banküberweisung oder in Euro per Karte geleistet werden.", "Die Restzahlung ist 45 Tage vor Abreise fällig. Bei Buchungen innerhalb von 45 Tagen vor Abreise ist der volle Betrag mit der Bestätigung fällig. Wird die Restzahlung nicht rechtzeitig geleistet, können wir die Buchung als von Ihnen storniert behandeln."],
          es: ["Una reserva queda confirmada cuando recibimos su depósito del 30 % del precio del viaje y le enviamos la confirmación por escrito. El depósito puede pagarse en FCFA por dinero móvil o transferencia bancaria, o en euros con tarjeta.", "El saldo se paga 45 días antes de la salida. Para reservas hechas a menos de 45 días de la salida, el importe total se paga al confirmar. Si el saldo no se paga a tiempo, podemos considerar la reserva cancelada por usted."],
        },
      },
      {
        heading: { en: "Changes and cancellation by you", fr: "Modifications et annulation de votre part", de: "Änderungen und Stornierung durch Sie", es: "Cambios y cancelación por su parte" },
        paragraphs: {
          en: ["Ask for changes in writing. Changes to dates or travellers are free up to 60 days before departure, subject to availability. Between 59 and 30 days we charge the costs we cannot recover from hotels and parks. Within 30 days the deposit is not refundable.", "Cancellation must be made in writing to us. More than 60 days before departure: full refund minus a 50 000 F administration fee. 59 to 30 days: loss of deposit. Under 30 days: 75% of the price. Under 7 days: 100%. We strongly recommend insurance that covers cancellation."],
          fr: ["Demandez les modifications par écrit. Les modifications de dates ou de voyageurs sont gratuites jusqu'à 60 jours avant le départ, sous réserve de disponibilité. Entre 59 et 30 jours, nous facturons les frais que nous ne pouvons récupérer auprès des hôtels et des parcs. À moins de 30 jours, l'acompte n'est pas remboursable.", "Toute annulation doit nous être adressée par écrit. À plus de 60 jours du départ : remboursement intégral moins 50 000 F de frais de dossier. De 59 à 30 jours : perte de l'acompte. À moins de 30 jours : 75 % du prix. À moins de 7 jours : 100 %. Nous vous recommandons vivement une assurance couvrant l'annulation."],
          de: ["Änderungswünsche bitte schriftlich. Änderungen von Terminen oder Reisenden sind bis 60 Tage vor Abreise kostenlos, sofern verfügbar. Zwischen 59 und 30 Tagen berechnen wir die Kosten, die wir von Hotels und Parks nicht zurückerhalten. Innerhalb von 30 Tagen ist die Anzahlung nicht erstattungsfähig.", "Stornierungen müssen uns schriftlich erreichen. Mehr als 60 Tage vor Abreise: volle Erstattung abzüglich einer Bearbeitungsgebühr von 50 000 F. 59 bis 30 Tage: Verlust der Anzahlung. Weniger als 30 Tage: 75 % des Preises. Weniger als 7 Tage: 100 %. Wir empfehlen dringend eine Versicherung, die Stornierungen abdeckt."],
          es: ["Solicite los cambios por escrito. Los cambios de fechas o de viajeros son gratuitos hasta 60 días antes de la salida, según disponibilidad. Entre 59 y 30 días cobramos los gastos que no podamos recuperar de hoteles y parques. A menos de 30 días, el depósito no es reembolsable.", "La cancelación debe hacerse por escrito. Con más de 60 días de antelación: reembolso completo menos 50 000 F de gastos de gestión. De 59 a 30 días: pérdida del depósito. A menos de 30 días: 75 % del precio. A menos de 7 días: 100 %. Le recomendamos encarecidamente un seguro que cubra la cancelación."],
        },
      },
      {
        heading: { en: "Changes and cancellation by us", fr: "Modifications et annulation de notre part", de: "Änderungen und Absage durch uns", es: "Cambios y cancelación por nuestra parte" },
        paragraphs: {
          en: ["If security advice, park closures or weather force a change of route, we propose an equivalent alternative at no extra cost, or a refund of the parts you can no longer use if no alternative suits you.", "If we have to cancel a journey, including a scheduled departure that does not reach its minimum numbers, we tell you as early as possible (at least 45 days ahead for low numbers) and either refund everything you have paid us or move you to another date of your choice. We are not liable for costs you arranged separately, such as flights, which is why we advise flexible tickets and insurance."],
          fr: ["Si les recommandations de sécurité, la fermeture d'un parc ou la météo imposent un changement d'itinéraire, nous proposons une alternative équivalente sans surcoût, ou le remboursement des prestations que vous ne pouvez plus utiliser si aucune alternative ne vous convient.", "Si nous devons annuler un voyage, y compris un départ programmé qui n'atteint pas le nombre minimum de participants, nous vous prévenons le plus tôt possible (au moins 45 jours avant en cas d'effectif insuffisant) et remboursons l'intégralité des sommes versées ou vous reportons à la date de votre choix. Nous ne sommes pas responsables des frais engagés séparément, comme les vols ; c'est pourquoi nous conseillons des billets modifiables et une assurance."],
          de: ["Wenn Sicherheitshinweise, Parkschließungen oder das Wetter eine Routenänderung erzwingen, bieten wir eine gleichwertige Alternative ohne Aufpreis an oder erstatten die Leistungen, die Sie nicht mehr nutzen können, falls Ihnen keine Alternative zusagt.", "Müssen wir eine Reise absagen, auch einen festen Termin, der die Mindestteilnehmerzahl nicht erreicht, informieren wir Sie so früh wie möglich (bei zu geringer Teilnehmerzahl mindestens 45 Tage vorher) und erstatten alle an uns gezahlten Beträge oder buchen Sie auf einen Termin Ihrer Wahl um. Für separat gebuchte Leistungen wie Flüge haften wir nicht; daher empfehlen wir flexible Tickets und eine Versicherung."],
          es: ["Si las recomendaciones de seguridad, el cierre de un parque o el clima obligan a cambiar la ruta, proponemos una alternativa equivalente sin coste adicional, o el reembolso de los servicios que ya no pueda usar si ninguna alternativa le conviene.", "Si tenemos que cancelar un viaje, incluida una salida programada que no alcance el mínimo de viajeros, se lo comunicamos lo antes posible (al menos 45 días antes si faltan participantes) y le devolvemos todo lo pagado o le pasamos a la fecha que elija. No respondemos de los gastos contratados por separado, como los vuelos; por eso aconsejamos billetes flexibles y un seguro."],
        },
      },
      {
        heading: { en: "Travel insurance", fr: "Assurance voyage", de: "Reiseversicherung", es: "Seguro de viaje" },
        paragraphs: {
          en: ["Travel insurance is a condition of travel. Your policy must cover medical treatment and medical evacuation and repatriation, and we strongly recommend that it also covers cancellation and curtailment. We may ask for the policy details before departure."],
          fr: ["L'assurance voyage est une condition du voyage. Votre contrat doit couvrir les frais médicaux ainsi que l'évacuation et le rapatriement sanitaires, et nous recommandons vivement qu'il couvre aussi l'annulation et l'interruption de séjour. Nous pouvons vous demander les références du contrat avant le départ."],
          de: ["Eine Reiseversicherung ist Reisebedingung. Ihre Police muss medizinische Behandlung sowie Krankenrücktransport und Rückführung abdecken; wir empfehlen dringend, auch Reiserücktritt und Reiseabbruch zu versichern. Wir können Sie vor Abreise um die Policendaten bitten."],
          es: ["El seguro de viaje es condición para viajar. Su póliza debe cubrir la asistencia médica y la evacuación y repatriación sanitarias, y le recomendamos encarecidamente que cubra también la cancelación y la interrupción del viaje. Podemos pedirle los datos de la póliza antes de la salida."],
        },
      },
      {
        heading: { en: "Passports, visas and health", fr: "Passeports, visas et santé", de: "Pässe, Visa und Gesundheit", es: "Pasaportes, visados y salud" },
        paragraphs: {
          en: ["You are responsible for holding a passport valid for the whole journey, the right visa or e-visa, and any vaccinations and health precautions required or advised for Benin. We share our checklist and reminders, but entry and health rules are set by the authorities and can change; check them with official sources and your doctor before you travel. Costs arising from missing documents are yours.", "Tell us before booking about any medical condition, mobility need or diet that could affect your journey, so we can plan around it."],
          fr: ["Vous êtes responsable d'un passeport valide pour toute la durée du voyage, du visa ou de l'e-visa adéquat, ainsi que des vaccins et précautions sanitaires exigés ou conseillés pour le Bénin. Nous partageons notre liste de contrôle et nos rappels, mais les règles d'entrée et de santé relèvent des autorités et peuvent changer ; vérifiez-les auprès des sources officielles et de votre médecin avant de partir. Les frais liés à un document manquant restent à votre charge.", "Signalez-nous avant la réservation toute condition médicale, besoin de mobilité ou régime alimentaire susceptible d'affecter votre voyage, afin que nous puissions en tenir compte."],
          de: ["Sie sind dafür verantwortlich, einen für die gesamte Reise gültigen Reisepass, das passende Visum oder E-Visum sowie alle für Benin vorgeschriebenen oder empfohlenen Impfungen und Gesundheitsvorkehrungen zu haben. Wir teilen unsere Checkliste und Erinnerungen, doch Einreise- und Gesundheitsregeln legen die Behörden fest und sie können sich ändern; prüfen Sie diese vor der Reise bei offiziellen Stellen und Ihrem Arzt. Kosten durch fehlende Dokumente tragen Sie selbst.", "Teilen Sie uns vor der Buchung gesundheitliche Einschränkungen, Mobilitätsbedürfnisse oder Ernährungsweisen mit, die Ihre Reise beeinflussen könnten, damit wir sie einplanen können."],
          es: ["Usted es responsable de llevar un pasaporte válido durante todo el viaje, el visado o e-visado correspondiente y las vacunas y precauciones sanitarias exigidas o recomendadas para Benín. Compartimos nuestra lista de comprobación y recordatorios, pero las normas de entrada y de salud las fijan las autoridades y pueden cambiar; compruébelas en fuentes oficiales y con su médico antes de viajar. Los gastos derivados de documentos que falten corren de su cuenta.", "Avísenos antes de reservar de cualquier condición médica, necesidad de movilidad o dieta que pueda afectar al viaje, para que podamos tenerla en cuenta."],
        },
      },
      {
        heading: { en: "Our responsibility", fr: "Notre responsabilité", de: "Unsere Verantwortung", es: "Nuestra responsabilidad" },
        paragraphs: {
          en: ["We take care in choosing the drivers, hosts, lodges and partners who deliver your journey and we are responsible for arranging the services described in your confirmation. We are not liable for loss, damage or delay caused by you, by third parties unconnected with the journey, or by events beyond our reasonable control such as natural events, strikes, unrest, epidemics or government decisions.", "Where we are liable, our liability is limited to the price of the journey except for death or personal injury caused by our negligence, and except where the law does not allow a limit. Follow the instructions of our driver and your hosts in parks and at ceremonies; we may end the journey of anyone whose behaviour endangers others, without refund."],
          fr: ["Nous choisissons avec soin les chauffeurs, hôtes, lodges et partenaires qui réalisent votre voyage et sommes responsables de l'organisation des prestations décrites dans votre confirmation. Nous ne sommes pas responsables des pertes, dommages ou retards causés par vous, par des tiers étrangers au voyage ou par des événements échappant à notre contrôle raisonnable, tels que catastrophes naturelles, grèves, troubles, épidémies ou décisions gouvernementales.", "Lorsque notre responsabilité est engagée, elle est limitée au prix du voyage, sauf en cas de décès ou de dommage corporel dû à notre négligence et sauf lorsque la loi interdit une telle limite. Suivez les consignes de notre chauffeur et de vos hôtes dans les parcs et lors des cérémonies ; nous pouvons interrompre, sans remboursement, le voyage d'une personne dont le comportement met les autres en danger."],
          de: ["Wir wählen Fahrer, Gastgeber, Lodges und Partner, die Ihre Reise durchführen, sorgfältig aus und sind für die Organisation der in Ihrer Bestätigung beschriebenen Leistungen verantwortlich. Wir haften nicht für Verluste, Schäden oder Verspätungen, die von Ihnen, von reisefremden Dritten oder durch Ereignisse außerhalb unserer zumutbaren Kontrolle verursacht werden, etwa Naturereignisse, Streiks, Unruhen, Epidemien oder behördliche Entscheidungen.", "Soweit wir haften, ist unsere Haftung auf den Reisepreis begrenzt, außer bei Tod oder Körperverletzung durch unsere Fahrlässigkeit und außer dort, wo das Gesetz eine Begrenzung nicht zulässt. Folgen Sie in Parks und bei Zeremonien den Anweisungen unseres Fahrers und Ihrer Gastgeber; wer durch sein Verhalten andere gefährdet, kann ohne Erstattung von der weiteren Reise ausgeschlossen werden."],
          es: ["Elegimos con cuidado a los conductores, anfitriones, lodges y socios que hacen posible su viaje y somos responsables de organizar los servicios descritos en su confirmación. No respondemos de pérdidas, daños o retrasos causados por usted, por terceros ajenos al viaje o por hechos fuera de nuestro control razonable, como fenómenos naturales, huelgas, disturbios, epidemias o decisiones gubernamentales.", "Cuando seamos responsables, nuestra responsabilidad se limita al precio del viaje, salvo en caso de muerte o lesiones causadas por nuestra negligencia y salvo cuando la ley no permita dicho límite. Siga las indicaciones de nuestro conductor y de sus anfitriones en los parques y en las ceremonias; podemos dar por terminado, sin reembolso, el viaje de quien ponga en peligro a los demás."],
        },
      },
      {
        heading: { en: "Complaints", fr: "Réclamations", de: "Beschwerden", es: "Reclamaciones" },
        paragraphs: {
          en: [`If something is not right during your journey, tell your driver or our Cotonou team straight away so we can put it right on the spot. If it is still unresolved, write to ${email} within 28 days of your return; we acknowledge within five working days and reply in full as quickly as we can.`],
          fr: [`Si quelque chose ne va pas pendant votre voyage, dites-le immédiatement à votre chauffeur ou à notre équipe de Cotonou afin que nous puissions y remédier sur place. Si le problème persiste, écrivez à ${email} dans les 28 jours suivant votre retour ; nous accusons réception sous cinq jours ouvrés et répondons au fond aussi vite que possible.`],
          de: [`Wenn während Ihrer Reise etwas nicht stimmt, sagen Sie es bitte sofort Ihrem Fahrer oder unserem Team in Cotonou, damit wir es vor Ort beheben können. Ist das Problem danach nicht gelöst, schreiben Sie innerhalb von 28 Tagen nach Ihrer Rückkehr an ${email}; wir bestätigen den Eingang innerhalb von fünf Werktagen und antworten so schnell wie möglich ausführlich.`],
          es: [`Si algo no va bien durante el viaje, dígaselo enseguida a su conductor o a nuestro equipo de Cotonú para que podamos solucionarlo en el momento. Si sigue sin resolverse, escriba a ${email} en los 28 días siguientes a su regreso; acusamos recibo en cinco días hábiles y respondemos con detalle lo antes posible.`],
        },
      },
      {
        heading: { en: "Governing law", fr: "Droit applicable", de: "Anwendbares Recht", es: "Legislación aplicable" },
        paragraphs: {
          en: ["These booking terms are governed by the law of the Republic of Benin. We will always seek an amicable settlement first; failing that, the competent courts have jurisdiction, without affecting any mandatory protection you have under the law of your country of residence."],
          fr: ["Les présentes conditions de réservation sont régies par le droit de la République du Bénin. Nous rechercherons toujours d'abord un règlement amiable ; à défaut, les tribunaux compétents sont saisis, sans préjudice de la protection impérative dont vous bénéficiez selon la loi de votre pays de résidence."],
          de: ["Für diese Buchungsbedingungen gilt das Recht der Republik Benin. Wir suchen stets zuerst eine gütliche Einigung; gelingt sie nicht, sind die zuständigen Gerichte zuständig, unbeschadet zwingender Schutzvorschriften des Rechts Ihres Wohnsitzlandes."],
          es: ["Estas condiciones de reserva se rigen por la legislación de la República de Benín. Siempre buscaremos primero un acuerdo amistoso; si no fuera posible, serán competentes los tribunales correspondientes, sin perjuicio de la protección obligatoria que le otorgue la ley de su país de residencia."],
        },
      },
    ],
  },
  {
    slug: "privacy",
    title: { en: "Privacy policy", fr: "Politique de confidentialité", de: "Datenschutzerklärung", es: "Política de privacidad" },
    updated: "2026-10-30",
    sections: [
      {
        heading: { en: "Who is responsible", fr: "Responsable du traitement", de: "Verantwortlicher", es: "Responsable del tratamiento" },
        paragraphs: {
          en: [`Escale Voyages, ${where}, is responsible for the personal data collected through this site. Write to ${email} with any question about your data.`],
          fr: [`Escale Voyages, ${whereFr}, est responsable des données personnelles collectées sur ce site. Écrivez à ${email} pour toute question sur vos données.`],
          de: [`Verantwortlich für die über diese Website erhobenen personenbezogenen Daten ist Escale Voyages, ${whereDe}. Fragen zu Ihren Daten richten Sie bitte an ${email}.`],
          es: [`Escale Voyages, ${whereEs}, es responsable de los datos personales recogidos a través de este sitio. Escriba a ${email} para cualquier pregunta sobre sus datos.`],
        },
      },
      {
        heading: { en: "What we collect", fr: "Ce que nous collectons", de: "Welche Daten wir erheben", es: "Qué datos recogemos" },
        paragraphs: {
          en: ["When you enquire or book we collect your name, email, an optional phone number, travel dates, the number of travellers and what you tell us about your trip. For a confirmed booking we also need passport details for permits and hotels, and any health information you choose to share for your safety. Card and mobile money payments are handled by the payment provider; we never see or store full card numbers."],
          fr: ["Lors d'une demande ou d'une réservation, nous collectons vos nom, e-mail, un numéro de téléphone facultatif, vos dates de voyage, le nombre de voyageurs et ce que vous nous dites de votre projet. Pour une réservation confirmée, nous avons aussi besoin des données de passeport pour les permis et les hôtels, et des informations de santé que vous choisissez de partager pour votre sécurité. Les paiements par carte et mobile money sont traités par le prestataire de paiement ; nous ne voyons ni ne conservons jamais les numéros de carte complets."],
          de: ["Bei einer Anfrage oder Buchung erheben wir Ihren Namen, Ihre E-Mail-Adresse, eine freiwillige Telefonnummer, Reisedaten, die Zahl der Reisenden und was Sie uns über Ihre Reise mitteilen. Für eine bestätigte Buchung benötigen wir außerdem Passdaten für Genehmigungen und Hotels sowie Gesundheitsangaben, die Sie uns zu Ihrer Sicherheit freiwillig mitteilen. Karten- und Mobile-Money-Zahlungen wickelt der Zahlungsdienstleister ab; vollständige Kartennummern sehen oder speichern wir nie."],
          es: ["Cuando hace una consulta o una reserva recogemos su nombre, correo electrónico, un teléfono opcional, las fechas de viaje, el número de viajeros y lo que nos cuente sobre su viaje. Para una reserva confirmada necesitamos además los datos del pasaporte para permisos y hoteles, y la información de salud que decida compartir por su seguridad. Los pagos con tarjeta y dinero móvil los gestiona el proveedor de pagos; nunca vemos ni guardamos números de tarjeta completos."],
        },
      },
      {
        heading: { en: "How we use it", fr: "Comment nous les utilisons", de: "Wofür wir sie verwenden", es: "Para qué los usamos" },
        paragraphs: {
          en: ["To answer you, plan and run your journey, take payment, and meet permit, insurance and accounting requirements. We share details only with the hotels, parks, drivers, hosts and payment providers needed for your trip. We do not sell data. Marketing emails are sent only if you opt in, and every one has an unsubscribe link."],
          fr: ["Pour vous répondre, préparer et réaliser votre voyage, encaisser les paiements et respecter les exigences de permis, d'assurance et de comptabilité. Nous ne partageons vos données qu'avec les hôtels, parcs, chauffeurs, hôtes et prestataires de paiement nécessaires au voyage. Nous ne vendons pas de données. Les e-mails marketing ne sont envoyés qu'avec votre accord, avec un lien de désinscription dans chacun."],
          de: ["Um Ihnen zu antworten, Ihre Reise zu planen und durchzuführen, Zahlungen abzuwickeln und Anforderungen an Genehmigungen, Versicherung und Buchhaltung zu erfüllen. Wir geben Daten nur an die Hotels, Parks, Fahrer, Gastgeber und Zahlungsdienstleister weiter, die für Ihre Reise nötig sind. Wir verkaufen keine Daten. Marketing-E-Mails erhalten Sie nur mit Ihrer Einwilligung, jeweils mit Abmeldelink."],
          es: ["Para responderle, preparar y realizar su viaje, cobrar los pagos y cumplir los requisitos de permisos, seguros y contabilidad. Solo compartimos sus datos con los hoteles, parques, conductores, anfitriones y proveedores de pago necesarios para su viaje. No vendemos datos. Los correos comerciales solo se envían si los acepta, y todos incluyen un enlace para darse de baja."],
        },
      },
      {
        heading: { en: "Where it lives and how long", fr: "Où et combien de temps", de: "Speicherort und Speicherdauer", es: "Dónde y durante cuánto tiempo" },
        paragraphs: {
          en: ["Enquiries and bookings are stored in our content system (Sanity), our email provider (Resend) and our hosting provider (Vercel), with servers in the EU and the US, and at our office in Cotonou. Enquiries that do not lead to a booking are deleted after two years; booking records are kept for the period required by Beninese tax and accounting law."],
          fr: ["Les demandes et réservations sont conservées dans notre système de contenu (Sanity), chez notre prestataire d'e-mail (Resend) et notre hébergeur (Vercel), sur des serveurs en UE et aux États-Unis, ainsi qu'à notre bureau de Cotonou. Les demandes sans suite sont supprimées après deux ans ; les dossiers de réservation sont conservés pendant la durée exigée par la législation fiscale et comptable béninoise."],
          de: ["Anfragen und Buchungen werden in unserem Content-System (Sanity), bei unserem E-Mail-Dienst (Resend) und unserem Hosting-Anbieter (Vercel) auf Servern in der EU und den USA sowie in unserem Büro in Cotonou gespeichert. Anfragen ohne Buchung löschen wir nach zwei Jahren; Buchungsunterlagen bewahren wir so lange auf, wie es das beninische Steuer- und Handelsrecht verlangt."],
          es: ["Las consultas y reservas se guardan en nuestro sistema de contenidos (Sanity), nuestro proveedor de correo (Resend) y nuestro proveedor de alojamiento web (Vercel), con servidores en la UE y en EE. UU., y en nuestra oficina de Cotonú. Las consultas que no terminan en reserva se eliminan a los dos años; los expedientes de reserva se conservan durante el plazo que exige la normativa fiscal y contable de Benín."],
        },
      },
      {
        heading: { en: "Your rights", fr: "Vos droits", de: "Ihre Rechte", es: "Sus derechos" },
        paragraphs: {
          en: [`You can ask to see, correct, export or delete your data, or object to its use, at any time by writing to ${email}. We reply within one month. If you are not satisfied, you can complain to Benin's data protection authority (APDP) or to the authority in your own country.`],
          fr: [`Vous pouvez demander à consulter, corriger, exporter ou supprimer vos données, ou vous opposer à leur utilisation, à tout moment en écrivant à ${email}. Nous répondons sous un mois. Si vous n'êtes pas satisfait, vous pouvez saisir l'Autorité de protection des données personnelles du Bénin (APDP) ou l'autorité de votre pays.`],
          de: [`Sie können jederzeit Auskunft, Berichtigung, Übertragung oder Löschung Ihrer Daten verlangen oder der Verwendung widersprechen, indem Sie an ${email} schreiben. Wir antworten innerhalb eines Monats. Sind Sie nicht zufrieden, können Sie sich bei der Datenschutzbehörde Benins (APDP) oder der Behörde Ihres Landes beschweren.`],
          es: [`Puede pedir acceder a sus datos, corregirlos, exportarlos o eliminarlos, u oponerse a su uso, en cualquier momento escribiendo a ${email}. Respondemos en el plazo de un mes. Si no queda satisfecho, puede reclamar ante la autoridad de protección de datos de Benín (APDP) o ante la de su país.`],
        },
      },
    ],
  },
  {
    slug: "cookies",
    title: { en: "Cookie policy", fr: "Politique relative aux cookies", de: "Cookie-Richtlinie", es: "Política de cookies" },
    updated: "2026-10-30",
    sections: [
      {
        heading: { en: "What this site stores", fr: "Ce que ce site enregistre", de: "Was diese Website speichert", es: "Qué guarda este sitio" },
        paragraphs: {
          en: ["This site sets no cookies of its own and runs no analytics, advertising or social media trackers.", "It stores one item in your browser's local storage, escale.currency, to remember the currency you chose for approximate prices. It is set only when you use the currency switcher, stays on your device and is never sent to us.", "If you pay a deposit online, the payment provider's own pages (FedaPay, KkiaPay or Stripe) may set the cookies they need to process the payment securely; their own policies apply."],
          fr: ["Ce site ne dépose aucun cookie propre et n'utilise aucun outil de statistiques, de publicité ou de réseaux sociaux.", "Il enregistre un seul élément dans le stockage local de votre navigateur, escale.currency, pour mémoriser la devise choisie pour les prix approximatifs. Il n'est créé que si vous utilisez le sélecteur de devise, reste sur votre appareil et ne nous est jamais transmis.", "Si vous réglez un acompte en ligne, les pages du prestataire de paiement (FedaPay, KkiaPay ou Stripe) peuvent déposer les cookies nécessaires au traitement sécurisé du paiement ; leurs propres politiques s'appliquent."],
          de: ["Diese Website setzt keine eigenen Cookies und verwendet keine Analyse-, Werbe- oder Social-Media-Tracker.", "Sie speichert einen einzigen Eintrag im lokalen Speicher Ihres Browsers, escale.currency, um die gewählte Währung für ungefähre Preise zu behalten. Er entsteht nur, wenn Sie den Währungswähler benutzen, bleibt auf Ihrem Gerät und wird nie an uns übertragen.", "Wenn Sie eine Anzahlung online leisten, können die Seiten des Zahlungsdienstleisters (FedaPay, KkiaPay oder Stripe) die für eine sichere Zahlung nötigen Cookies setzen; dafür gelten deren eigene Richtlinien."],
          es: ["Este sitio no instala cookies propias ni utiliza herramientas de analítica, publicidad o redes sociales.", "Guarda un único dato en el almacenamiento local de su navegador, escale.currency, para recordar la moneda elegida para los precios aproximados. Solo se crea si usa el selector de moneda, permanece en su dispositivo y nunca se nos envía.", "Si paga un depósito en línea, las páginas del proveedor de pago (FedaPay, KkiaPay o Stripe) pueden instalar las cookies necesarias para procesar el pago de forma segura; se aplican sus propias políticas."],
        },
      },
      {
        heading: { en: "Consent and how to withdraw it", fr: "Consentement et retrait", de: "Einwilligung und Widerruf", es: "Consentimiento y cómo retirarlo" },
        paragraphs: {
          en: ["Because the currency preference is stored only when you ask for it and is strictly needed for that feature, no consent banner is shown. You can remove it at any time by clearing this site's data in your browser settings, or simply by switching back to FCFA. If we ever add analytics or other non-essential storage, we will ask for your consent first and update this page."],
          fr: ["La préférence de devise n'étant enregistrée qu'à votre demande et strictement nécessaire à cette fonction, aucun bandeau de consentement n'est affiché. Vous pouvez la supprimer à tout moment en effaçant les données de ce site dans les réglages de votre navigateur, ou simplement en revenant au FCFA. Si nous ajoutons un jour des statistiques ou tout autre stockage non essentiel, nous vous demanderons d'abord votre consentement et mettrons cette page à jour."],
          de: ["Da die Währungseinstellung nur auf Ihren Wunsch gespeichert wird und für diese Funktion unbedingt erforderlich ist, zeigen wir kein Einwilligungsbanner. Sie können sie jederzeit entfernen, indem Sie die Daten dieser Website in Ihren Browsereinstellungen löschen oder einfach wieder FCFA wählen. Sollten wir je Analysen oder andere nicht notwendige Speicherungen einführen, holen wir vorher Ihre Einwilligung ein und aktualisieren diese Seite."],
          es: ["Como la preferencia de moneda solo se guarda cuando usted la elige y es estrictamente necesaria para esa función, no mostramos ningún aviso de consentimiento. Puede eliminarla en cualquier momento borrando los datos de este sitio en la configuración del navegador, o simplemente volviendo a FCFA. Si algún día añadimos analítica u otro almacenamiento no esencial, le pediremos antes su consentimiento y actualizaremos esta página."],
        },
      },
    ],
  },
  {
    slug: "credits",
    title: { en: "Photo credits", fr: "Crédits photo", de: "Bildnachweise", es: "Créditos fotográficos" },
    updated: "2026-10-30",
    sections: [
      {
        heading: { en: "Creative Commons photographs", fr: "Photographies sous licence Creative Commons", de: "Fotos unter Creative-Commons-Lizenz", es: "Fotografías con licencia Creative Commons" },
        paragraphs: {
          en: ["Some photographs on this site come from Wikimedia Commons and are used under the Creative Commons licences shown. All other photographs belong to Escale Voyages."],
          fr: ["Certaines photographies de ce site proviennent de Wikimedia Commons et sont utilisées sous les licences Creative Commons indiquées. Toutes les autres photographies appartiennent à Escale Voyages."],
          de: ["Einige Fotos auf dieser Website stammen von Wikimedia Commons und werden unter den angegebenen Creative-Commons-Lizenzen verwendet. Alle anderen Fotos gehören Escale Voyages."],
          es: ["Algunas fotografías de este sitio proceden de Wikimedia Commons y se usan con las licencias Creative Commons indicadas. Todas las demás fotografías pertenecen a Escale Voyages."],
        },
      },
    ],
  },
];
