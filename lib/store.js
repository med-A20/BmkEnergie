import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.sanity_project_id,
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
  token: process.env.sanity_token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
