// Loaded with `node --import` by `npm run cf-build`. Cloudflare only; `next build` and
// Vercel never load it.
//
// OpenNext re-bundles the Next.js server with esbuild. esbuild renames functions whose
// names collide in the bundle (Next's minified AppRouter `io` becomes `io2`, for example).
// With Cache Components, the postponed state written at build time records component
// names, and React refuses to resume when a name differs: "Expected the resume to
// render <io> in this slot but instead it rendered <io2>". Every partially prerendered
// page then falls back to client rendering on Workers.
//
// esbuild's `keepNames` keeps the original `.name`, but OpenNext has no option for it.
// This hook swaps the `esbuild` module that OpenNext imports for a wrapper that adds
// `keepNames: true` when bundling the server (`handler.mjs`). Nothing in node_modules
// is modified.
import { registerHooks } from "node:module";

const WRAPPER = "cf-keep-names:esbuild";

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === "esbuild" && context.parentURL?.includes("/@opennextjs/cloudflare/")) {
      return { url: `${WRAPPER}?${encodeURIComponent(nextResolve(specifier, context).url)}`, shortCircuit: true };
    }
    return nextResolve(specifier, context);
  },
  load(url, context, nextLoad) {
    if (!url.startsWith(`${WRAPPER}?`)) return nextLoad(url, context);
    const real = decodeURIComponent(url.slice(WRAPPER.length + 1));
    return {
      format: "module",
      shortCircuit: true,
      source: `
        import * as esbuild from ${JSON.stringify(real)};
        export * from ${JSON.stringify(real)};
        export default esbuild.default ?? esbuild;
        export function build(options) {
          const server = typeof options?.outfile === "string" && options.outfile.endsWith("handler.mjs");
          return esbuild.build(server ? { ...options, keepNames: true } : options);
        }
      `,
    };
  },
});
