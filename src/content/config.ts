import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    index: z.number(),
    next: z.string().optional(),
    prev: z.string().optional(),
    appendix: z.boolean().optional(),
  }),
});

export const collections = { blog };
