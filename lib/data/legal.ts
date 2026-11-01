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
  sections: { heading: L; paragraphs: L<string[]>; table?: L<{ head: string[]; rows: string[][] }>; after?: L<string[]> }[];
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
    updated: "2026-11-01",
    sections: [
      {
        heading: { en: "Who we are", fr: "Qui sommes-nous", de: "Wer wir sind", es: "Quiénes somos" },
        paragraphs: {
          en: ["These terms apply to every journey arranged by Escale Voyages, Areolis Business Center, Rue 611B, Cotonou, Republic of Benin (email escalevoyages@tourground.com). By confirming a booking, the lead traveller accepts them on behalf of everyone named on it."],
          fr: ["Les présentes conditions s’appliquent à tout voyage organisé par Escale Voyages, Areolis Business Center, Rue 611B, Cotonou, République du Bénin (e-mail escalevoyages@tourground.com). En confirmant une réservation, le voyageur principal les accepte au nom de toutes les personnes inscrites."],
          de: ["Diese Bedingungen gelten für jede von Escale Voyages, Areolis Business Center, Rue 611B, Cotonou, Republik Benin (E-Mail escalevoyages@tourground.com) organisierte Reise. Mit der Buchungsbestätigung erkennt der Hauptreisende sie für alle angemeldeten Personen an."],
          es: ["Estas condiciones se aplican a cada viaje organizados por Escale Voyages, Areolis Business Center, Rue 611B, Cotonou, República de Benín (correo escalevoyages@tourground.com). Al confirmar una reserva, el viajero principal las acepta en nombre de todas las personas incluidas."],
        },
      },
      {
        heading: { en: "Enquiries and quotes", fr: "Demandes et devis", de: "Anfragen und Angebote", es: "Consultas y presupuestos" },
        paragraphs: {
          en: ["Every journey starts with an enquiry. We reply with a written proposal and quote based on your dates, the number of travellers and what you have asked for. A quote is not a booking: it holds no rooms or places until you confirm and pay the deposit, and its prices can change until then.", "Prices on this website are shown “From”: a per-person guide to the starting cost of a journey of that kind. They are not an offer. The final price is the one confirmed to you in writing in your quote, which is valid for the period stated on it and subject to availability until your booking is confirmed.", "Each quote states what is included and what is not. Anything not listed as included (international flights, visas, insurance, personal spending, tips) is not part of the price."],
          fr: ["Chaque voyage commence par une demande. Nous répondons par une proposition écrite et un devis fondés sur vos dates, le nombre de voyageurs et vos souhaits. Un devis n'est pas une réservation : il ne bloque ni chambre ni place tant que vous n'avez pas confirmé et versé l'acompte, et ses prix peuvent évoluer d'ici là.", "Les prix affichés sur ce site sont indiqués « à partir de » : un repère par personne du coût de départ d’un voyage de ce type. Ils ne constituent pas une offre. Le prix définitif est celui qui vous est confirmé par écrit dans votre devis, valable pendant la durée indiquée et sous réserve de disponibilité jusqu’à la confirmation de votre réservation.", "Chaque devis précise ce qui est inclus et ce qui ne l'est pas. Tout ce qui n'est pas indiqué comme inclus (vols internationaux, visas, assurance, dépenses personnelles, pourboires) ne fait pas partie du prix."],
          de: ["Jede Reise beginnt mit einer Anfrage. Wir antworten mit einem schriftlichen Vorschlag und einem Angebot, das auf Ihren Daten, der Zahl der Reisenden und Ihren Wünschen beruht. Ein Angebot ist keine Buchung: Es reserviert weder Zimmer noch Plätze, bis Sie bestätigen und die Anzahlung leisten, und seine Preise können sich bis dahin ändern.", "Die Preise auf dieser Website sind „ab“-Preise: ein Richtwert pro Person für den Einstiegspreis einer solchen Reise. Sie sind kein Angebot. Maßgeblich ist der Endpreis, den wir Ihnen schriftlich in Ihrem Angebot bestätigen; es gilt für den darin genannten Zeitraum und vorbehaltlich der Verfügbarkeit bis zur Buchungsbestätigung.", "Jedes Angebot nennt, was enthalten ist und was nicht. Was nicht als inklusive aufgeführt ist (internationale Flüge, Visa, Versicherung, persönliche Ausgaben, Trinkgelder), ist nicht im Preis enthalten."],
          es: ["Cada viaje empieza con una consulta. Respondemos con una propuesta escrita y un presupuesto según sus fechas, el número de viajeros y lo que nos haya pedido. Un presupuesto no es una reserva: no bloquea habitaciones ni plazas hasta que confirme y pague el depósito, y sus precios pueden variar hasta entonces.", "Los precios de este sitio se muestran «desde»: una referencia por persona del coste inicial de un viaje de ese tipo. No constituyen una oferta. El precio final es el que le confirmamos por escrito en su presupuesto, válido durante el plazo indicado y sujeto a disponibilidad hasta que se confirme la reserva.", "Cada presupuesto indica qué está incluido y qué no. Todo lo que no figure como incluido (vuelos internacionales, visados, seguro, gastos personales, propinas) no forma parte del precio."],
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
        heading: { en: "Behaviour", fr: "Comportement", de: "Verhalten", es: "Comportamiento" },
        paragraphs: {
          en: ["Please follow the reasonable instructions of drivers, hosts and suppliers, particularly on safety, and respect local laws, customs and the places you visit. If your behaviour puts others at risk or causes serious disruption or damage, we or a supplier may end your arrangements without refund."],
          fr: ["Merci de suivre les consignes raisonnables des chauffeurs, hôtes et prestataires, notamment en matière de sécurité, et de respecter les lois, coutumes et lieux visités. Si votre comportement met autrui en danger ou cause des troubles ou dommages graves, nous ou un prestataire pouvons mettre fin à vos prestations sans remboursement."],
          de: ["Bitte folgen Sie den angemessenen Anweisungen von Fahrern, Gastgebern und Leistungsträgern, besonders zur Sicherheit, und respektieren Sie Gesetze, Bräuche und die besuchten Orte. Gefährdet Ihr Verhalten andere oder verursacht es erhebliche Störungen oder Schäden, können wir oder ein Leistungsträger Ihre Leistungen ohne Erstattung beenden."],
          es: ["Siga las instrucciones razonables de conductores, anfitriones y proveedores, especialmente en materia de seguridad, y respete las leyes, costumbres y lugares que visite. Si su conducta pone en riesgo a otros o causa trastornos o daños graves, nosotros o un proveedor podremos poner fin a sus servicios sin reembolso."],
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
        heading: { en: "Force majeure", fr: "Force majeure", de: "Höhere Gewalt", es: "Fuerza mayor" },
        paragraphs: {
          en: ["We are not liable, and pay no compensation, where we cannot perform or must change our obligations because of unavoidable and extraordinary circumstances beyond our control, such as war, civil unrest, terrorism, natural disasters, extreme weather, epidemics, government action or official travel advice against travel, or the closure of airports or borders. If such circumstances lead us to cancel, we will refund what you have paid us as set out above."],
          fr: ["Nous ne sommes pas responsables, et ne versons aucune indemnité, lorsque nous ne pouvons pas exécuter nos obligations ou devons les modifier en raison de circonstances exceptionnelles et inévitables indépendantes de notre volonté : guerre, troubles civils, terrorisme, catastrophes naturelles, conditions météorologiques extrêmes, épidémies, décisions des autorités ou avis officiels déconseillant le voyage, fermeture d’aéroports ou de frontières. Si ces circonstances nous conduisent à annuler, nous vous remboursons les sommes versées comme indiqué ci-dessus."],
          de: ["Wir haften nicht und leisten keine Entschädigung, wenn wir unsere Pflichten wegen unvermeidbarer, außergewöhnlicher Umstände außerhalb unseres Einflusses nicht erfüllen können oder ändern müssen, etwa Krieg, Unruhen, Terrorismus, Naturkatastrophen, extreme Wetterlagen, Epidemien, behördliche Maßnahmen oder amtliche Reisewarnungen oder die Schließung von Flughäfen oder Grenzen. Sagen wir deshalb ab, erstatten wir Ihre Zahlungen wie oben beschrieben."],
          es: ["No respondemos ni pagamos compensación cuando no podemos cumplir nuestras obligaciones, o debemos modificarlas, por circunstancias inevitables y extraordinarias ajenas a nuestro control, como guerra, disturbios, terrorismo, catástrofes naturales, fenómenos meteorológicos extremos, epidemias, actuaciones de las autoridades o recomendaciones oficiales de no viajar, o el cierre de aeropuertos o fronteras. Si por ello cancelamos, le reembolsaremos lo pagado según lo indicado arriba."],
        },
      },
      {
        heading: { en: "Data protection", fr: "Protection des données", de: "Datenschutz", es: "Protección de datos" },
        paragraphs: {
          en: ["We use your personal data to arrange your journey as described in our [Privacy Policy](legal:privacy)."],
          fr: ["Nous utilisons vos données personnelles pour organiser votre voyage comme décrit dans notre [politique de confidentialité](legal:privacy)."],
          de: ["Wir verwenden Ihre personenbezogenen Daten zur Organisation Ihrer Reise wie in unserer [Datenschutzerklärung](legal:privacy) beschrieben."],
          es: ["Usamos sus datos personales para organizar su viaje tal como se describe en nuestra [política de privacidad](legal:privacy)."],
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
      {
        heading: { en: "Contact", fr: "Contact", de: "Kontakt", es: "Contacto" },
        paragraphs: {
          en: ["Escale Voyages, Areolis Business Center, Rue 611B, Cotonou, Republic of Benin. Email: escalevoyages@tourground.com."],
          fr: ["Escale Voyages, Areolis Business Center, Rue 611B, Cotonou, République du Bénin. E-mail : escalevoyages@tourground.com."],
          de: ["Escale Voyages, Areolis Business Center, Rue 611B, Cotonou, Republik Benin. E-Mail: escalevoyages@tourground.com."],
          es: ["Escale Voyages, Areolis Business Center, Rue 611B, Cotonou, República de Benín. Correo electrónico: escalevoyages@tourground.com."],
        },
      },
    ],
  },
  {
    slug: "privacy",
    title: { en: "Privacy policy", fr: "Politique de confidentialité", de: "Datenschutzerklärung", es: "Política de privacidad" },
    updated: "2026-11-01",
    sections: [
      {
        heading: { en: "Who we are", fr: "Qui sommes-nous", de: "Wer wir sind", es: "Quiénes somos" },
        paragraphs: {
          en: ["Escale Voyages (“we”, “us”) plans and arranges tailor-made journeys in Benin. Escale Voyages is the controller of the personal data described in this policy.", "Business address: Areolis Business Center, Rue 611B, Cotonou, Republic of Benin. Email: escalevoyages@tourground.com."],
          fr: ["Escale Voyages (« nous ») conçoit et organise des voyages sur mesure au Bénin. Escale Voyages est responsable du traitement des données personnelles décrites dans la présente politique.", "Adresse : Areolis Business Center, Rue 611B, Cotonou, République du Bénin. E-mail : escalevoyages@tourground.com."],
          de: ["Escale Voyages („wir“, „uns“) plant und organisiert maßgeschneiderte Reisen in Benin. Escale Voyages ist Verantwortlicher für die in dieser Erklärung beschriebenen personenbezogenen Daten.", "Geschäftsadresse: Areolis Business Center, Rue 611B, Cotonou, Republik Benin. E-Mail: escalevoyages@tourground.com."],
          es: ["Escale Voyages («nosotros») diseña y organiza viajes a medida en Benín. Escale Voyages es el responsable del tratamiento de los datos personales descritos en esta política.", "Dirección: Areolis Business Center, Rue 611B, Cotonou, República de Benín. Correo electrónico: escalevoyages@tourground.com."],
        },
      },
      {
        heading: { en: "What we collect", fr: "Les données que nous collectons", de: "Welche Daten wir erheben", es: "Qué datos recogemos" },
        paragraphs: {
          en: ["When you send an enquiry or use our planning form: your name, email address, country of residence, preferred travel dates, number of travellers (and the ages of any children), interests, budget range and anything else you write in your message.", "When you send a booking request: the journey and dates you chose, the travellers’ names, any extras and your payment choice. Card and mobile-money payments are handled by the payment provider.", "When you book: the names of all travellers as shown on their passports, dates of birth, nationality and passport details where a supplier or authority requires them, flight details, dietary requirements, an emergency contact, and records of your payments. If you tell us about a medical condition or mobility needs, we use that information only to arrange your journey safely, with your explicit consent.", "Emails and other messages you exchange with us.", "Technical data when you visit this website: your IP address, browser and device type, the pages requested and the date and time, recorded in our hosting provider’s server logs to deliver the site and keep it secure. We do not use analytics, advertising or tracking tools on this website."],
          fr: ["Lorsque vous envoyez une demande ou utilisez notre formulaire de préparation : vos nom et adresse e-mail, votre pays de résidence, vos dates de voyage souhaitées, le nombre de voyageurs (et l’âge des enfants), vos centres d’intérêt, votre budget et tout ce que vous écrivez dans votre message.", "Lorsque vous envoyez une demande de réservation : le voyage et les dates choisis, les noms des voyageurs, les options et votre mode de paiement. Les paiements par carte et mobile money sont traités par le prestataire de paiement.", "Lors d’une réservation : les noms de tous les voyageurs tels qu’ils figurent sur leur passeport, leurs dates de naissance, leur nationalité et les données de passeport lorsqu’un prestataire ou une autorité les exige, les informations de vol, les régimes alimentaires, une personne à contacter en cas d’urgence et l’historique de vos paiements. Si vous nous signalez un problème de santé ou des besoins de mobilité, nous n’utilisons ces informations que pour organiser votre voyage en toute sécurité, avec votre consentement explicite.", "Les e-mails et autres messages que vous échangez avec nous.", "Des données techniques lors de votre visite : adresse IP, type de navigateur et d’appareil, pages demandées, date et heure, enregistrées dans les journaux serveur de notre hébergeur pour afficher le site et le sécuriser. Nous n’utilisons sur ce site aucun outil d’analyse d’audience, de publicité ou de suivi."],
          de: ["Wenn Sie eine Anfrage senden oder unser Planungsformular nutzen: Ihren Namen, Ihre E-Mail-Adresse, Ihr Wohnsitzland, gewünschte Reisedaten, die Zahl der Reisenden (und das Alter von Kindern), Ihre Interessen, Ihr Budget und alles, was Sie in Ihre Nachricht schreiben.", "Wenn Sie eine Buchungsanfrage senden: die gewählte Reise und die Daten, die Namen der Reisenden, Zusatzleistungen und Ihre Zahlungsart. Karten- und Mobile-Money-Zahlungen wickelt der Zahlungsdienstleister ab.", "Bei einer Buchung: die Namen aller Reisenden wie im Reisepass, Geburtsdaten, Staatsangehörigkeit und Passdaten, soweit ein Leistungsträger oder eine Behörde sie verlangt, Flugdaten, Ernährungswünsche, einen Notfallkontakt und Nachweise Ihrer Zahlungen. Wenn Sie uns gesundheitliche Einschränkungen oder Mobilitätsbedürfnisse mitteilen, nutzen wir diese Angaben mit Ihrer ausdrücklichen Einwilligung ausschließlich, um Ihre Reise sicher zu organisieren.", "E-Mails und andere Nachrichten, die Sie mit uns austauschen.", "Technische Daten beim Besuch dieser Website: IP-Adresse, Browser- und Gerätetyp, aufgerufene Seiten sowie Datum und Uhrzeit, die in den Server-Logs unseres Hosting-Anbieters gespeichert werden, um die Website auszuliefern und zu schützen. Wir setzen auf dieser Website keine Analyse-, Werbe- oder Tracking-Werkzeuge ein."],
          es: ["Cuando nos envía una solicitud o utiliza nuestro formulario de planificación: su nombre, correo electrónico, país de residencia, fechas de viaje deseadas, número de viajeros (y edad de los niños), intereses, presupuesto y cualquier otra cosa que escriba en su mensaje.", "Cuando envía una solicitud de reserva: el viaje y las fechas elegidos, los nombres de los viajeros, los extras y su forma de pago. Los pagos con tarjeta y dinero móvil los gestiona el proveedor de pagos.", "Al reservar: los nombres de cada viajero tal como figuran en el pasaporte, fechas de nacimiento, nacionalidad y datos del pasaporte cuando un proveedor o una autoridad los exija, datos de vuelos, necesidades alimentarias, un contacto de emergencia y el registro de sus pagos. Si nos informa de una condición médica o de necesidades de movilidad, usamos esa información únicamente para organizar su viaje con seguridad y con su consentimiento explícito.", "Los correos electrónicos y demás mensajes que intercambia con nosotros.", "Datos técnicos cuando visita este sitio: su dirección IP, tipo de navegador y dispositivo, páginas solicitadas, fecha y hora, registrados en los registros del servidor de nuestro proveedor de alojamiento para servir el sitio y mantenerlo seguro. No utilizamos en este sitio herramientas de analítica, publicidad ni seguimiento."],
        },
      },
      {
        heading: { en: "Why we use it and our legal bases", fr: "Pourquoi nous les utilisons et sur quelle base légale", de: "Wofür wir die Daten nutzen und Rechtsgrundlagen", es: "Para qué los usamos y bases jurídicas" },
        paragraphs: {
          en: ["To answer your enquiry and prepare proposals: steps taken at your request before entering into a contract (Article 6(1)(b) GDPR).", "To book, arrange and look after your journey, including passing details to the suppliers who provide it: performance of our contract with you (Article 6(1)(b) GDPR).", "To use health or mobility information you choose to give us: your explicit consent (Article 9(2)(a) GDPR), which you can withdraw at any time.", "To keep accounting and tax records: compliance with our legal obligations (Article 6(1)(c) GDPR).", "To keep this website secure, prevent misuse of our forms, improve our service and establish or defend legal claims: our legitimate interests (Article 6(1)(f) GDPR), balanced against your rights.", "To send you occasional news about our journeys, only if you have asked for it: your consent (Article 6(1)(a) GDPR). Every message has an unsubscribe link, or you can simply email us.", "We do not sell your personal data, and we do not make decisions about you by automated means."],
          fr: ["Répondre à votre demande et préparer nos propositions : mesures précontractuelles prises à votre demande (article 6, paragraphe 1, point b du RGPD).", "Réserver, organiser et suivre votre voyage, y compris transmettre les informations nécessaires aux prestataires : exécution de notre contrat avec vous (article 6, paragraphe 1, point b du RGPD).", "Utiliser les informations de santé ou de mobilité que vous choisissez de nous donner : votre consentement explicite (article 9, paragraphe 2, point a du RGPD), que vous pouvez retirer à tout moment.", "Tenir notre comptabilité et nos registres fiscaux : respect de nos obligations légales (article 6, paragraphe 1, point c du RGPD).", "Sécuriser ce site, empêcher l’utilisation abusive de nos formulaires, améliorer notre service et constater ou défendre des droits en justice : nos intérêts légitimes (article 6, paragraphe 1, point f du RGPD), mis en balance avec vos droits.", "Vous envoyer occasionnellement des nouvelles de nos voyages, uniquement si vous l’avez demandé : votre consentement (article 6, paragraphe 1, point a du RGPD). Chaque message contient un lien de désinscription, ou écrivez-nous simplement.", "Nous ne vendons pas vos données personnelles et ne prenons aucune décision vous concernant de manière automatisée."],
          de: ["Beantwortung Ihrer Anfrage und Ausarbeitung von Angeboten: vorvertragliche Maßnahmen auf Ihre Anfrage (Art. 6 Abs. 1 lit. b DSGVO).", "Buchung, Organisation und Betreuung Ihrer Reise einschließlich der Weitergabe an die ausführenden Leistungsträger: Erfüllung unseres Vertrags mit Ihnen (Art. 6 Abs. 1 lit. b DSGVO).", "Nutzung von Gesundheits- oder Mobilitätsangaben, die Sie uns freiwillig geben: Ihre ausdrückliche Einwilligung (Art. 9 Abs. 2 lit. a DSGVO), die Sie jederzeit widerrufen können.", "Buchhaltung und steuerliche Aufbewahrung: Erfüllung rechtlicher Pflichten (Art. 6 Abs. 1 lit. c DSGVO).", "Sicherheit dieser Website, Schutz unserer Formulare vor Missbrauch, Verbesserung unseres Service sowie Geltendmachung oder Abwehr von Rechtsansprüchen: unsere berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), abgewogen gegen Ihre Rechte.", "Gelegentliche Neuigkeiten zu unseren Reisen, nur wenn Sie diese angefordert haben: Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Jede Nachricht enthält einen Abmeldelink, oder schreiben Sie uns einfach.", "Wir verkaufen Ihre Daten nicht und treffen keine automatisierten Entscheidungen über Sie."],
          es: ["Responder a su solicitud y preparar propuestas: medidas precontractuales adoptadas a petición suya (artículo 6.1.b del RGPD).", "Reservar, organizar y atender su viaje, incluida la comunicación de datos a los proveedores que lo prestan: ejecución de nuestro contrato con usted (artículo 6.1.b del RGPD).", "Usar la información de salud o movilidad que decida facilitarnos: su consentimiento explícito (artículo 9.2.a del RGPD), que puede retirar en cualquier momento.", "Llevar la contabilidad y los registros fiscales: cumplimiento de nuestras obligaciones legales (artículo 6.1.c del RGPD).", "Mantener la seguridad de este sitio, evitar el uso indebido de nuestros formularios, mejorar nuestro servicio y formular o defender reclamaciones: nuestros intereses legítimos (artículo 6.1.f del RGPD), ponderados con sus derechos.", "Enviarle noticias ocasionales sobre nuestros viajes, solo si nos lo ha pedido: su consentimiento (artículo 6.1.a del RGPD). Cada mensaje incluye un enlace para darse de baja, o puede escribirnos.", "No vendemos sus datos personales ni tomamos decisiones sobre usted por medios automatizados."],
        },
      },
      {
        heading: { en: "Who we share it with", fr: "Avec qui nous les partageons", de: "An wen wir Daten weitergeben", es: "Con quién los compartimos" },
        paragraphs: {
          en: ["Travel suppliers in Benin and elsewhere who provide the services in your journey, such as accommodation, transport and activity providers, and only the details each of them needs.", "Service providers who process data on our behalf under a written contract and only on our instructions:", "Vercel Inc. (United States), which hosts this website and keeps short-lived server logs;", "Sanity AS (Norway), which stores the content of this website and the enquiries and booking requests you send us;", "Resend (United States), which delivers the emails sent from our enquiry and booking forms;", "the payment provider you choose when you pay a deposit or balance, which processes your payment details directly; we never see or store your full card number.", "Public authorities, insurers or professional advisers, where the law requires it, to protect someone’s vital interests, or to establish or defend legal claims."],
          fr: ["Les prestataires de voyage qui fournissent les services de votre voyage (hébergements, transports, activités), et uniquement les informations dont chacun a besoin.", "Des sous-traitants qui traitent des données pour notre compte, en vertu d’un contrat écrit et uniquement sur nos instructions :", "Vercel Inc. (États-Unis), qui héberge ce site et conserve des journaux serveur de courte durée ;", "Sanity AS (Norvège), qui stocke le contenu de ce site ainsi que les demandes et demandes de réservation que vous nous envoyez ;", "Resend (États-Unis), qui achemine les e-mails envoyés depuis nos formulaires de demande et de réservation ;", "le prestataire de paiement que vous choisissez pour régler un acompte ou le solde, qui traite directement vos données de paiement ; nous ne voyons ni ne conservons jamais votre numéro de carte complet.", "Les autorités publiques, assureurs ou conseillers professionnels, lorsque la loi l’exige, pour protéger les intérêts vitaux d’une personne, ou pour constater ou défendre des droits en justice."],
          de: ["Leistungsträger, die die Leistungen Ihrer Reise erbringen, etwa Unterkünfte, Transport- und Aktivitätsanbieter, jeweils nur mit den Angaben, die sie benötigen.", "Dienstleister, die Daten in unserem Auftrag auf Grundlage eines schriftlichen Vertrags und nur nach unseren Weisungen verarbeiten:", "Vercel Inc. (USA), die diese Website hostet und kurzlebige Server-Logs führt;", "Sanity AS (Norwegen), die die Inhalte dieser Website sowie Ihre Anfragen und Buchungsanfragen speichert;", "Resend (USA), die die E-Mails aus unseren Anfrage- und Buchungsformularen zustellt;", "der Zahlungsdienstleister, den Sie für Anzahlung oder Restzahlung wählen und der Ihre Zahlungsdaten direkt verarbeitet; Ihre vollständige Kartennummer sehen oder speichern wir nie.", "Behörden, Versicherer oder Berater, soweit das Gesetz es verlangt, zum Schutz lebenswichtiger Interessen oder zur Geltendmachung oder Abwehr von Rechtsansprüchen."],
          es: ["Los proveedores de viaje que prestan los servicios de su viaje, como alojamientos, transportes y actividades, y solo con los datos que cada uno necesita.", "Proveedores de servicios que tratan datos por cuenta nuestra en virtud de un contrato escrito y solo siguiendo nuestras instrucciones:", "Vercel Inc. (Estados Unidos), que aloja este sitio web y conserva registros de servidor de corta duración;", "Sanity AS (Noruega), que almacena el contenido de este sitio y las solicitudes y peticiones de reserva que nos envía;", "Resend (Estados Unidos), que entrega los correos enviados desde nuestros formularios de solicitud y de reserva;", "el proveedor de pagos que elija para abonar el depósito o el saldo, que trata directamente sus datos de pago; nunca vemos ni guardamos el número completo de su tarjeta.", "Autoridades públicas, aseguradoras o asesores profesionales, cuando la ley lo exija, para proteger intereses vitales de una persona o para formular o defender reclamaciones."],
        },
      },
      {
        heading: { en: "International transfers", fr: "Transferts internationaux", de: "Übermittlungen in Drittländer", es: "Transferencias internacionales" },
        paragraphs: {
          en: ["Some of the providers above are based in the United States, and arranging your journey means sharing details with suppliers in Benin. When personal data leaves the European Economic Area, the United Kingdom or Switzerland, we rely on an adequacy decision (for example the EU–US Data Privacy Framework, where the provider is certified) or on the European Commission’s Standard Contractual Clauses. Transfers to suppliers delivering your journey are also necessary to perform our contract with you. You can ask us for a copy of the safeguards we use."],
          fr: ["Certains des prestataires ci-dessus sont établis aux États-Unis, et l’organisation de votre voyage implique de transmettre des informations à des prestataires sur place. Lorsque des données quittent l’Espace économique européen, le Royaume-Uni ou la Suisse, nous nous appuyons sur une décision d’adéquation (par exemple le cadre de protection des données UE–États-Unis, lorsque le prestataire est certifié) ou sur les clauses contractuelles types de la Commission européenne. Les transferts vers les prestataires qui réalisent votre voyage sont en outre nécessaires à l’exécution de notre contrat. Vous pouvez nous demander une copie des garanties utilisées."],
          de: ["Einige der genannten Dienstleister haben ihren Sitz in den USA, und die Organisation Ihrer Reise erfordert die Weitergabe an Leistungsträger vor Ort. Verlassen personenbezogene Daten den Europäischen Wirtschaftsraum, das Vereinigte Königreich oder die Schweiz, stützen wir uns auf einen Angemessenheitsbeschluss (etwa das EU-US Data Privacy Framework, sofern der Anbieter zertifiziert ist) oder auf die Standardvertragsklauseln der Europäischen Kommission. Übermittlungen an Leistungsträger, die Ihre Reise durchführen, sind zudem zur Erfüllung unseres Vertrags erforderlich. Eine Kopie der Garantien erhalten Sie auf Anfrage."],
          es: ["Algunos de los proveedores anteriores están en Estados Unidos, y organizar su viaje implica compartir datos con proveedores en destino. Cuando los datos salen del Espacio Económico Europeo, el Reino Unido o Suiza, nos basamos en una decisión de adecuación (por ejemplo, el Marco de Privacidad de Datos UE-EE. UU., si el proveedor está certificado) o en las cláusulas contractuales tipo de la Comisión Europea. Las transferencias a los proveedores que realizan su viaje son además necesarias para ejecutar nuestro contrato. Puede pedirnos una copia de las garantías utilizadas."],
        },
      },
      {
        heading: { en: "How long we keep it", fr: "Durée de conservation", de: "Wie lange wir Daten speichern", es: "Cuánto tiempo los conservamos" },
        paragraphs: {
          en: ["Enquiries that do not lead to a booking: up to two years after our last contact, then deleted.", "Booking and payment records: seven years after the end of your journey, for accounting, tax and legal claims.", "Health and mobility information: deleted within three months of your return, unless it is needed for a claim.", "Newsletter details: until you unsubscribe. Server logs: a short period set by our hosting provider, then deleted automatically."],
          fr: ["Demandes sans réservation : jusqu’à deux ans après notre dernier échange, puis suppression.", "Dossiers de réservation et de paiement : sept ans après la fin de votre voyage, pour des raisons comptables, fiscales et contentieuses.", "Informations de santé et de mobilité : supprimées dans les trois mois suivant votre retour, sauf si elles sont nécessaires à une réclamation.", "Abonnement aux nouvelles : jusqu’à votre désinscription. Journaux serveur : une courte durée fixée par notre hébergeur, puis suppression automatique."],
          de: ["Anfragen ohne Buchung: bis zu zwei Jahre nach dem letzten Kontakt, danach Löschung.", "Buchungs- und Zahlungsunterlagen: sieben Jahre nach Reiseende, für Buchhaltung, Steuern und Rechtsansprüche.", "Gesundheits- und Mobilitätsangaben: Löschung innerhalb von drei Monaten nach Ihrer Rückkehr, sofern sie nicht für einen Anspruch benötigt werden.", "Newsletter-Daten: bis zur Abmeldung. Server-Logs: eine kurze, vom Hosting-Anbieter festgelegte Frist, danach automatische Löschung."],
          es: ["Solicitudes que no terminan en reserva: hasta dos años después de nuestro último contacto; después se eliminan.", "Registros de reservas y pagos: siete años después del final de su viaje, por motivos contables, fiscales y de reclamaciones.", "Información de salud y movilidad: se elimina en los tres meses siguientes a su regreso, salvo que sea necesaria para una reclamación.", "Datos del boletín: hasta que se dé de baja. Registros del servidor: un breve periodo fijado por nuestro proveedor de alojamiento; después se eliminan automáticamente."],
        },
      },
      {
        heading: { en: "How we protect it", fr: "Comment nous les protégeons", de: "Wie wir Daten schützen", es: "Cómo los protegemos" },
        paragraphs: {
          en: ["This website is served only over an encrypted (HTTPS) connection. Access to your data is limited to the people who need it to plan and look after your journey, and we choose providers for their security standards."],
          fr: ["Ce site n’est accessible que par une connexion chiffrée (HTTPS). L’accès à vos données est limité aux personnes qui en ont besoin pour préparer et suivre votre voyage, et nous choisissons nos prestataires pour leur niveau de sécurité."],
          de: ["Diese Website wird ausschließlich über eine verschlüsselte Verbindung (HTTPS) ausgeliefert. Zugriff auf Ihre Daten haben nur die Personen, die sie für Planung und Betreuung Ihrer Reise benötigen, und wir wählen Dienstleister nach ihren Sicherheitsstandards aus."],
          es: ["Este sitio solo se sirve mediante una conexión cifrada (HTTPS). El acceso a sus datos se limita a las personas que lo necesitan para planificar y atender su viaje, y elegimos a nuestros proveedores por sus estándares de seguridad."],
        },
      },
      {
        heading: { en: "Your rights", fr: "Vos droits", de: "Ihre Rechte", es: "Sus derechos" },
        paragraphs: {
          en: ["You have the right to access the personal data we hold about you; to have it rectified; to have it erased; to restrict how we use it; to receive it in a portable format; to object to processing based on our legitimate interests, and at any time to direct marketing; and to withdraw any consent you have given, without affecting what we did before.", "To exercise any of these rights, email escalevoyages@tourground.com. It is free, and we will reply within one month. We may ask you to confirm your identity first.", "You also have the right to lodge a complaint with a data protection supervisory authority, in particular in the country where you live or work, or where you believe your rights were infringed. We would appreciate the chance to deal with your concern first.", "Because we are based in Benin, we also handle your personal data in line with Benin’s Digital Code (Law No. 2017-20), and you may complain to Benin’s data protection authority (APDP)."],
          fr: ["Vous avez le droit d’accéder aux données personnelles que nous détenons sur vous, de les faire rectifier, de les faire effacer, d’en limiter l’utilisation, de les recevoir dans un format portable, de vous opposer aux traitements fondés sur nos intérêts légitimes et, à tout moment, à la prospection, et de retirer votre consentement, sans effet sur les traitements antérieurs.", "Pour exercer ces droits, écrivez à escalevoyages@tourground.com. C’est gratuit et nous répondons dans un délai d’un mois. Nous pouvons vous demander de confirmer votre identité.", "Vous pouvez également introduire une réclamation auprès d’une autorité de contrôle de la protection des données, notamment dans le pays où vous résidez ou travaillez, ou dans lequel vous estimez que vos droits ont été enfreints (en France, la CNIL). Nous apprécierions de pouvoir d’abord répondre à votre préoccupation.", "Étant établis au Bénin, nous traitons aussi vos données conformément au Code du numérique (loi n° 2017-20), et vous pouvez saisir l’Autorité de protection des données à caractère personnel (APDP)."],
          de: ["Sie haben das Recht auf Auskunft über die bei uns gespeicherten Daten, auf Berichtigung, auf Löschung, auf Einschränkung der Verarbeitung, auf Datenübertragbarkeit, auf Widerspruch gegen Verarbeitungen aufgrund berechtigter Interessen und jederzeit gegen Direktwerbung sowie auf Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft.", "Zur Ausübung dieser Rechte schreiben Sie an escalevoyages@tourground.com. Das ist kostenlos, und wir antworten innerhalb eines Monats. Gegebenenfalls bitten wir Sie, Ihre Identität zu bestätigen.", "Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, insbesondere in dem Land, in dem Sie wohnen oder arbeiten oder in dem Sie eine Verletzung Ihrer Rechte vermuten. Wir freuen uns, wenn Sie uns zuerst die Gelegenheit geben, Ihr Anliegen zu klären.", "Da wir in Benin ansässig sind, verarbeiten wir Ihre Daten auch nach dem beninischen Digitalgesetzbuch (Gesetz Nr. 2017-20); Sie können sich bei der beninischen Datenschutzbehörde (APDP) beschweren."],
          es: ["Tiene derecho a acceder a los datos personales que tenemos sobre usted, a rectificarlos, a suprimirlos, a limitar su uso, a recibirlos en un formato portable, a oponerse a los tratamientos basados en nuestros intereses legítimos y, en cualquier momento, a la mercadotecnia directa, y a retirar cualquier consentimiento, sin que ello afecte a lo realizado antes.", "Para ejercer estos derechos, escriba a escalevoyages@tourground.com. Es gratuito y responderemos en el plazo de un mes. Podemos pedirle que confirme su identidad.", "También tiene derecho a presentar una reclamación ante una autoridad de control de protección de datos, en particular en el país donde vive o trabaja o donde considere que se han vulnerado sus derechos (en España, la AEPD). Le agradeceríamos que nos diera antes la oportunidad de resolver su inquietud.", "Como estamos establecidos en Benín, también tratamos sus datos conforme al Código Digital de Benín (Ley n.º 2017-20), y puede presentar una reclamación ante la autoridad beninesa de protección de datos (APDP)."],
        },
      },
      {
        heading: { en: "Cookies", fr: "Cookies", de: "Cookies", es: "Cookies" },
        paragraphs: {
          en: ["This website stores only what is needed for features you use, and no tracking cookies. Our [Cookie Policy](legal:cookies) lists every item."],
          fr: ["Ce site n’enregistre que ce qui est nécessaire aux fonctions que vous utilisez, sans aucun cookie de suivi. Notre [politique relative aux cookies](legal:cookies) en donne la liste complète."],
          de: ["Diese Website speichert nur, was für von Ihnen genutzte Funktionen nötig ist, und keine Tracking-Cookies. Unsere [Cookie-Richtlinie](legal:cookies) führt jeden Eintrag auf."],
          es: ["Este sitio solo guarda lo necesario para las funciones que utiliza y ninguna cookie de seguimiento. Nuestra [política de cookies](legal:cookies) enumera cada elemento."],
        },
      },
      {
        heading: { en: "Children", fr: "Enfants", de: "Kinder", es: "Menores" },
        paragraphs: {
          en: ["This website is not intended for children under 16, and we do not knowingly collect their data directly. Details of children who travel with their families are provided by, and used on behalf of, a parent or guardian."],
          fr: ["Ce site ne s’adresse pas aux enfants de moins de 16 ans et nous ne collectons pas sciemment leurs données directement. Les informations concernant les enfants qui voyagent en famille sont fournies par un parent ou tuteur, et utilisées pour son compte."],
          de: ["Diese Website richtet sich nicht an Kinder unter 16 Jahren, und wir erheben ihre Daten nicht wissentlich direkt. Angaben zu Kindern, die mit ihrer Familie reisen, stammen von einem Elternteil oder Vormund und werden in dessen Auftrag genutzt."],
          es: ["Este sitio no está dirigido a menores de 16 años y no recogemos conscientemente sus datos de forma directa. Los datos de los niños que viajan en familia los facilita un progenitor o tutor y se usan en su nombre."],
        },
      },
      {
        heading: { en: "Changes to this policy", fr: "Modifications de cette politique", de: "Änderungen dieser Erklärung", es: "Cambios en esta política" },
        paragraphs: {
          en: ["We may update this policy. The date at the top shows when it last changed; if a change matters to you, we will tell you before it applies."],
          fr: ["Nous pouvons mettre à jour cette politique. La date en haut de page indique la dernière modification ; si un changement vous concerne de près, nous vous en informerons avant qu’il ne s’applique."],
          de: ["Wir können diese Erklärung aktualisieren. Das Datum oben zeigt die letzte Änderung; wesentliche Änderungen teilen wir Ihnen vorab mit."],
          es: ["Podemos actualizar esta política. La fecha de arriba indica el último cambio; si un cambio le afecta de forma relevante, se lo comunicaremos antes de que se aplique."],
        },
      },
      {
        heading: { en: "Contact", fr: "Contact", de: "Kontakt", es: "Contacto" },
        paragraphs: {
          en: ["Escale Voyages, Areolis Business Center, Rue 611B, Cotonou, Republic of Benin. Email: escalevoyages@tourground.com."],
          fr: ["Escale Voyages, Areolis Business Center, Rue 611B, Cotonou, République du Bénin. E-mail : escalevoyages@tourground.com."],
          de: ["Escale Voyages, Areolis Business Center, Rue 611B, Cotonou, Republik Benin. E-Mail: escalevoyages@tourground.com."],
          es: ["Escale Voyages, Areolis Business Center, Rue 611B, Cotonou, República de Benín. Correo electrónico: escalevoyages@tourground.com."],
        },
      },
    ],
  },
  {
    slug: "cookies",
    title: { en: "Cookie policy", fr: "Politique relative aux cookies", de: "Cookie-Richtlinie", es: "Política de cookies" },
    updated: "2026-11-01",
    sections: [
      {
        heading: { en: "What cookies are", fr: "Qu’est-ce qu’un cookie", de: "Was Cookies sind", es: "Qué son las cookies" },
        paragraphs: {
          en: ["Cookies are small text files a website places in your browser. Websites can also keep information on your device with similar technologies such as local storage and session storage. This policy covers all of them and applies to escalevoyages.tourground.com."],
          fr: ["Les cookies sont de petits fichiers texte qu’un site dépose dans votre navigateur. Un site peut aussi conserver des informations sur votre appareil grâce à des technologies similaires, comme le stockage local ou le stockage de session. Cette politique les couvre tous et s’applique à escalevoyages.tourground.com."],
          de: ["Cookies sind kleine Textdateien, die eine Website in Ihrem Browser ablegt. Websites können Informationen auch mit ähnlichen Techniken wie dem lokalen Speicher (Local Storage) oder Sitzungsspeicher auf Ihrem Gerät ablegen. Diese Richtlinie gilt für all diese Techniken auf escalevoyages.tourground.com."],
          es: ["Las cookies son pequeños archivos de texto que un sitio web guarda en su navegador. Los sitios también pueden guardar información en su dispositivo con tecnologías similares, como el almacenamiento local o de sesión. Esta política las cubre todas y se aplica a escalevoyages.tourground.com."],
        },
      },
      {
        heading: { en: "What this website stores", fr: "Ce que ce site enregistre", de: "Was diese Website speichert", es: "Qué guarda este sitio" },
        paragraphs: {
          en: ["We do not use analytics, advertising or social-media cookies, and nothing below is used to track you or is shared with anyone. This is the complete list:"],
          fr: ["Nous n’utilisons aucun cookie d’analyse, de publicité ou de réseaux sociaux, et rien de ce qui suit ne sert à vous suivre ni n’est partagé. Voici la liste complète :"],
          de: ["Wir verwenden keine Analyse-, Werbe- oder Social-Media-Cookies; nichts davon dient dazu, Sie zu verfolgen, oder wird weitergegeben. Dies ist die vollständige Liste:"],
          es: ["No utilizamos cookies de analítica, publicidad ni redes sociales, y nada de lo siguiente sirve para seguirle ni se comparte con nadie. Esta es la lista completa:"],
        },
        table: {
          en: {"head": ["Name", "Purpose", "Duration", "Type"], "rows": [["escale.currency", "Remembers the currency you chose for approximate prices. Set only when you use the currency switcher; never sent to us.", "Until you clear it", "Local storage, strictly necessary (preference)"]]},
          fr: {"head": ["Nom", "Finalité", "Durée", "Type"], "rows": [["escale.currency", "Mémorise la devise choisie pour les prix approximatifs. Enregistré uniquement si vous utilisez le sélecteur de devise ; jamais transmis.", "Jusqu’à ce que vous l’effaciez", "Stockage local, strictement nécessaire (préférence)"]]},
          de: {"head": ["Name", "Zweck", "Dauer", "Art"], "rows": [["escale.currency", "Merkt sich die Währung für ungefähre Preise. Wird nur gesetzt, wenn Sie den Währungsumschalter nutzen; nie an uns übertragen.", "Bis Sie ihn löschen", "Lokaler Speicher, unbedingt erforderlich (Einstellung)"]]},
          es: {"head": ["Nombre", "Finalidad", "Duración", "Tipo"], "rows": [["escale.currency", "Recuerda la moneda elegida para los precios aproximados. Solo se guarda si usa el selector de moneda; nunca se nos envía.", "Hasta que lo borre", "Almacenamiento local, estrictamente necesario (preferencia)"]]},
        },
      },
      {
        heading: { en: "Consent", fr: "Consentement", de: "Einwilligung", es: "Consentimiento" },
        paragraphs: {
          en: ["Everything listed is strictly necessary for a feature you choose to use, or keeps your own preference on your own device, so the law does not require consent and we show no cookie banner. If we ever add analytics or other optional cookies, we will ask for your consent first and update this page."],
          fr: ["Tous les éléments listés sont strictement nécessaires à une fonction que vous choisissez d’utiliser, ou conservent votre propre préférence sur votre appareil : la loi n’exige donc pas de consentement et nous n’affichons pas de bandeau cookies. Si nous ajoutons un jour des cookies d’analyse ou facultatifs, nous vous demanderons d’abord votre accord et mettrons cette page à jour."],
          de: ["Alle aufgeführten Einträge sind für eine von Ihnen gewählte Funktion unbedingt erforderlich oder speichern nur Ihre eigene Einstellung auf Ihrem Gerät; eine Einwilligung ist daher gesetzlich nicht nötig, und wir zeigen kein Cookie-Banner. Sollten wir je Analyse- oder andere optionale Cookies einsetzen, bitten wir vorher um Ihre Einwilligung und aktualisieren diese Seite."],
          es: ["Cada elemento enumerado es estrictamente necesario para una función que decide usar, o guarda su propia preferencia en su dispositivo, por lo que la ley no exige consentimiento y no mostramos un aviso de cookies. Si alguna vez añadimos cookies de analítica u otras opcionales, le pediremos antes su consentimiento y actualizaremos esta página."],
        },
      },
      {
        heading: { en: "Hosting and third-party content", fr: "Hébergement et contenus tiers", de: "Hosting und Inhalte Dritter", es: "Alojamiento y contenido de terceros" },
        paragraphs: {
          en: ["Pages are delivered by our hosting provider, Vercel, which processes your IP address and request details in its server logs to serve the site and protect it from attacks. It sets no tracking cookies on this site.", "If you pay a deposit online, the payment provider’s own pages (for example FedaPay, KkiaPay or Stripe) may set their own cookies under their own policies; they are not set by this site.", "Fonts are served from our own domain, so no font service receives your data."],
          fr: ["Les pages sont servies par notre hébergeur, Vercel, qui traite votre adresse IP et les détails de la requête dans ses journaux serveur afin d’afficher le site et de le protéger contre les attaques. Il ne dépose aucun cookie de suivi sur ce site.", "Si vous réglez un acompte en ligne, les pages du prestataire de paiement (par exemple FedaPay, KkiaPay ou Stripe) peuvent déposer leurs propres cookies selon leurs propres politiques ; ils ne sont pas déposés par ce site.", "Les polices sont servies depuis notre propre domaine : aucun service de polices ne reçoit vos données."],
          de: ["Die Seiten werden von unserem Hosting-Anbieter Vercel ausgeliefert, der Ihre IP-Adresse und Anfragedaten in Server-Logs verarbeitet, um die Website bereitzustellen und vor Angriffen zu schützen. Er setzt auf dieser Website keine Tracking-Cookies.", "Wenn Sie eine Anzahlung online leisten, können die Seiten des Zahlungsdienstleisters (etwa FedaPay, KkiaPay oder Stripe) eigene Cookies nach eigenen Richtlinien setzen; diese setzt nicht diese Website.", "Schriften werden von unserer eigenen Domain geladen; kein Schriftendienst erhält Ihre Daten."],
          es: ["Las páginas las sirve nuestro proveedor de alojamiento, Vercel, que trata su dirección IP y los datos de la solicitud en sus registros para servir el sitio y protegerlo de ataques. No instala cookies de seguimiento en este sitio.", "Si paga un depósito en línea, las páginas del proveedor de pagos (por ejemplo FedaPay, KkiaPay o Stripe) pueden instalar sus propias cookies según sus propias políticas; no las instala este sitio.", "Las fuentes se sirven desde nuestro propio dominio, por lo que ningún servicio de fuentes recibe sus datos."],
        },
      },
      {
        heading: { en: "How to manage or delete them", fr: "Comment les gérer ou les supprimer", de: "Wie Sie sie verwalten oder löschen", es: "Cómo gestionarlas o eliminarlas" },
        paragraphs: {
          en: ["You can delete everything this website stores at any time by clearing your browser’s cookies and site data for it, and you can block cookies and site storage in your browser settings. The site will still work; you will simply lose the saved preference."],
          fr: ["Vous pouvez supprimer à tout moment tout ce que ce site enregistre en effaçant les cookies et données de site de votre navigateur pour ce site, et bloquer cookies et stockage dans les réglages de votre navigateur. Le site fonctionnera toujours ; vous perdrez simplement la préférence enregistrée."],
          de: ["Sie können alles, was diese Website speichert, jederzeit löschen, indem Sie Cookies und Websitedaten für sie in Ihrem Browser entfernen, und Cookies sowie Website-Speicher in den Browser-Einstellungen blockieren. Die Website funktioniert weiterhin; nur die gespeicherte Einstellung geht verloren."],
          es: ["Puede eliminar en cualquier momento cuanto guarda este sitio borrando las cookies y los datos del sitio en su navegador, y bloquear las cookies y el almacenamiento en la configuración del navegador. El sitio seguirá funcionando; solo perderá la preferencia guardada."],
        },
      },
      {
        heading: { en: "Changes", fr: "Modifications", de: "Änderungen", es: "Cambios" },
        paragraphs: {
          en: ["We will update this page whenever the way this website stores information changes. The date at the top shows when it last changed."],
          fr: ["Nous mettrons cette page à jour à chaque changement dans la façon dont ce site enregistre des informations. La date en haut de page indique la dernière modification."],
          de: ["Wir aktualisieren diese Seite, sobald sich ändert, wie diese Website Informationen speichert. Das Datum oben zeigt die letzte Änderung."],
          es: ["Actualizaremos esta página siempre que cambie la forma en que este sitio guarda información. La fecha de arriba indica el último cambio."],
        },
      },
      {
        heading: { en: "Contact", fr: "Contact", de: "Kontakt", es: "Contacto" },
        paragraphs: {
          en: ["Questions about this policy: escalevoyages@tourground.com. Escale Voyages, Areolis Business Center, Rue 611B, Cotonou, Republic of Benin. See also our [Privacy Policy](legal:privacy)."],
          fr: ["Pour toute question sur cette politique : escalevoyages@tourground.com. Escale Voyages, Areolis Business Center, Rue 611B, Cotonou, République du Bénin. Voir aussi notre [politique de confidentialité](legal:privacy)."],
          de: ["Fragen zu dieser Richtlinie: escalevoyages@tourground.com. Escale Voyages, Areolis Business Center, Rue 611B, Cotonou, Republik Benin. Siehe auch unsere [Datenschutzerklärung](legal:privacy)."],
          es: ["Preguntas sobre esta política: escalevoyages@tourground.com. Escale Voyages, Areolis Business Center, Rue 611B, Cotonou, República de Benín. Consulte también nuestra [política de privacidad](legal:privacy)."],
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
