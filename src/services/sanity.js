import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanity = sanityClient({
  projectId: "4z3u30c2",
  dataset: "production",
  useCdn: true,
  apiVersion: "v1",
});

const builder = imageUrlBuilder(sanity);
export const urlFor = (source) => builder.image(source);
export default sanity;
