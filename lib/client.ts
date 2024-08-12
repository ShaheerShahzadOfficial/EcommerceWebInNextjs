import { createClient } from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: "dvslar9c",
  dataset: "production",
  apiVersion: "2023-03-10",
  useCdn: true,
  token:
    "skLpSkEqqH0GH8YIlbGfQ8RBtukRpSs4EDk2Knq9pyt4X2EKCectiHTR5YieQKG08ZGf9OfTzoyAILQL6BVALGlbGolLr8a17XDUPELaa7fpVqvovoxvsI2ebh7YcTXpaF3ja3ebzrtkwqCAim3lZWOml4D6w14RefD9G4P1p1s6VrEKO2al",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
