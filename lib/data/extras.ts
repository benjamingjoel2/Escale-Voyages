import type { L } from "./journeys";

/** Optional extras offered in the booking flow. Prices per booking in FCFA unless noted. */
export type Extra = {
  id: string;
  name: L;
  description: L;
  priceXof: number;
  perTraveller: boolean;
};

export const extras: Extra[] = [
  {
    id: "private-vehicle",
    name: { en: "Private vehicle and driver", fr: "Véhicule et chauffeur privés", de: "Eigenes Fahrzeug mit Fahrer", es: "Vehículo y conductor privados" },
    description: { en: "Your own 4×4 and driver for the whole journey, whatever the group size.", fr: "Votre propre 4×4 et votre chauffeur pour tout le voyage, quelle que soit la taille du groupe.", de: "Ihr eigener 4×4 mit Fahrer für die ganze Reise, unabhängig von der Gruppengröße.", es: "Su propio 4×4 con conductor durante todo el viaje, sea cual sea el tamaño del grupo." },
    priceXof: 350_000,
    perTraveller: false,
  },
  {
    id: "extra-night-coast",
    name: { en: "Extra night on the coast", fr: "Nuit supplémentaire sur la côte", de: "Zusätzliche Nacht an der Küste", es: "Noche extra en la costa" },
    description: { en: "One more night at Grand-Popo or Ouidah at the end, with transfers.", fr: "Une nuit de plus à Grand-Popo ou Ouidah à la fin, transferts compris.", de: "Eine weitere Nacht in Grand-Popo oder Ouidah zum Abschluss, mit Transfers.", es: "Una noche más en Grand-Popo o Uidá al final, con traslados." },
    priceXof: 95_000,
    perTraveller: true,
  },
  {
    id: "photographer",
    name: { en: "Photographer for a day", fr: "Photographe pour une journée", de: "Fotograf für einen Tag", es: "Fotógrafo por un día" },
    description: { en: "A Cotonou photographer joins you for one day and delivers an edited set.", fr: "Un photographe de Cotonou vous accompagne une journée et livre une série retouchée.", de: "Ein Fotograf aus Cotonou begleitet Sie einen Tag lang und liefert eine bearbeitete Auswahl.", es: "Un fotógrafo de Cotonú le acompaña un día y le entrega una selección editada." },
    priceXof: 180_000,
    perTraveller: false,
  },
  {
    id: "sim-wallet",
    name: { en: "Local SIM and mobile money wallet", fr: "SIM locale et portefeuille mobile money", de: "Lokale SIM-Karte und Mobile-Money-Konto", es: "SIM local y monedero de dinero móvil" },
    description: { en: "Set up on arrival with 10 GB of data and 20 000 F loaded.", fr: "Installés à l'arrivée avec 10 Go de données et 20 000 F chargés.", de: "Bei Ankunft eingerichtet, mit 10 GB Daten und 20 000 F Guthaben.", es: "Configurados a su llegada con 10 GB de datos y 20 000 F de saldo." },
    priceXof: 30_000,
    perTraveller: true,
  },
];
