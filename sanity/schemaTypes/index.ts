import { imageWithAlt, localeBlock, localeString, localeStringList, localeText } from "./locale";
import { destination } from "./destination";
import { journey } from "./journey";
import { story } from "./story";
import { festival } from "./festival";
import { siteSettings } from "./siteSettings";
import { bookingRequest, enquiry } from "./enquiry";

export const schemaTypes = [
  localeString,
  localeText,
  localeStringList,
  localeBlock,
  imageWithAlt,
  destination,
  journey,
  story,
  festival,
  siteSettings,
  enquiry,
  bookingRequest,
];
