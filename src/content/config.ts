import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

const linkCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      icon: z.object({
        normal: image(),
        inverted: image(),
      }),
      id: z.string(),
      link: z.string(),
      color: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
  link: linkCollection,
};
