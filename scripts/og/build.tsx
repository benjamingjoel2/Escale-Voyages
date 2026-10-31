// Renders public/og/{locale}.png (git-ignored) from scripts/og/opengraph-image.tsx and the
// Hero copy in messages/*.json. Runs before `next dev` and `next build` (package.json).
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { routing } from "../../i18n/routing";
import { renderOgImage } from "./opengraph-image";

const root = process.cwd();
const outDir = path.join(root, "public", "og");

async function main() {
  await mkdir(outDir, { recursive: true });
  const photo = await readFile(path.join(root, "public", "media", "hero-poster.jpg"));
  for (const locale of routing.locales) {
    const messages = JSON.parse(await readFile(path.join(root, "messages", `${locale}.json`), "utf8"));
    const image = renderOgImage({ photo, eyebrow: messages.Hero.eyebrow, tagline: messages.Hero.tagline });
    await writeFile(path.join(outDir, `${locale}.png`), Buffer.from(await image.arrayBuffer()));
  }
  console.log(`og: ${routing.locales.length} share images in public/og`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
