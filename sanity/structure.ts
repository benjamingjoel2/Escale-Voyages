import type { StructureResolver } from "sanity/structure";

/** Studio sidebar: content first, inbox second, settings as a singleton. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Escale Voyages")
    .items([
      S.documentTypeListItem("journey").title("Journeys"),
      S.documentTypeListItem("destination").title("Destinations"),
      S.documentTypeListItem("stay").title("Stays"),
      S.documentTypeListItem("festival").title("Festivals & events"),
      S.documentTypeListItem("story").title("Stories"),
      S.divider(),
      S.documentTypeListItem("enquiry").title("Enquiries"),
      S.documentTypeListItem("bookingRequest").title("Booking requests"),
      S.divider(),
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
    ]);
