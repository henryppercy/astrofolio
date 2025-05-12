import { z, defineCollection } from 'astro:content';

const post = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.string().transform((str: string) => new Date(str)),
    published: z.boolean(),
    description: z.string(),
    readTime: z.number(),
    author: z.string().default('Henry Percy'),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string())
  })
});

const job = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    companyShort: z.string(),
    jobTitles: z.array(z.string()),
    finishDate: z.string().transform((str: string) => str ? new Date(str) : ""),
    startDate: z.string().transform((str: string) => str ? new Date(str) : ""),
    summary: z.string(),
  })
});

const spanish = defineCollection({
  type: 'content',
  schema: z.object({
    hours: z.number(),
    level: z.number(),
    title: z.string().nullable(),
    date_achieved: z.date().nullable(),
    description: z.string().nullable(),
    read_time: z.number().nullable(),
  })
});

export const collections = { post, job, spanish, };
