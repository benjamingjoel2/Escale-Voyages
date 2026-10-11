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
    name: { en: "Private vehicle and guide", fr: "Véhicule et guide privés" },
    description: { en: "Your own 4×4 and guide for the whole journey, whatever the group size.", fr: "Votre propre 4×4 et votre guide pour tout le voyage, quelle que soit la taille du groupe." },
    priceXof: 350_000,
    perTraveller: false,
  },
  {
    id: "extra-night-coast",
    name: { en: "Extra night on the coast", fr: "Nuit supplémentaire sur la côte" },
    description: { en: "One more night at Grand-Popo or Ouidah at the end, with transfers.", fr: "Une nuit de plus à Grand-Popo ou Ouidah à la fin, transferts compris." },
    priceXof: 95_000,
    perTraveller: true,
  },
  {
    id: "photographer",
    name: { en: "Photographer for a day", fr: "Photographe pour une journée" },
    description: { en: "A Cotonou photographer joins you for one day and delivers an edited set.", fr: "Un photographe de Cotonou vous accompagne une journée et livre une série retouchée." },
    priceXof: 180_000,
    perTraveller: false,
  },
  {
    id: "sim-wallet",
    name: { en: "Local SIM and mobile money wallet", fr: "SIM locale et portefeuille mobile money" },
    description: { en: "Set up on arrival with 10 GB of data and 20 000 F loaded.", fr: "Installés à l'arrivée avec 10 Go de données et 20 000 F chargés." },
    priceXof: 30_000,
    perTraveller: true,
  },
];
