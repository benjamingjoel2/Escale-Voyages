import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";

const builder = imageUrlBuilder({ projectId, dataset });

type ImageSource = Parameters<typeof builder.image>[0];

/** Build a Sanity CDN URL with hotspot cropping. */
export function urlFor(source: ImageSource) {
  return builder.image(source).auto("format").fit("max");
}
