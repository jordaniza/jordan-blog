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

const cv = defineCollection({
  schema: z.object({
    data: z.string(),
  }),
});

export const collections = { blog, cv };
