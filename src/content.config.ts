// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const insights = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/insights" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    draft: z.boolean().optional(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = { insights };
