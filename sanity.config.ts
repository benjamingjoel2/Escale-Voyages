"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId, studioBasePath } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

const singletons = new Set(["siteSettings"]);

export default defineConfig({
  name: "escale-voyages",
  title: "Escale Voyages",
  basePath: studioBasePath,
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    // Singletons are created from the sidebar, never from "new document".
    templates: (templates) => templates.filter((t) => !singletons.has(t.schemaType)),
  },
  document: {
    actions: (actions, { schemaType }) =>
      singletons.has(schemaType)
        ? actions.filter((a) => !["unpublish", "delete", "duplicate"].includes(a.action ?? ""))
        : actions,
  },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
