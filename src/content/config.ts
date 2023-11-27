import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.string().transform((str: string) => new Date(str)),
    published: z.boolean(),
    description: z.string(),
    author: z.string().default('Henry Percy'),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string())
  })
});

export const collections = {
  'post': postCollection,
};
