// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const advice = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/advice" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = { advice };
