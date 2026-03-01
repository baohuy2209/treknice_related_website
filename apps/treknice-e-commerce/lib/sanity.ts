import { SanityImageSource, createImageUrlBuilder } from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});
const builder = createImageUrlBuilder(client);
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
