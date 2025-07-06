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

const book = defineCollection({
  type: 'content',
  schema: z.object({
    authors: z.array(z.string()),
    title: z.string(),
    headline: z.string(),
    image_url: z.string(),
    date_published: z.date(),
    date_started: z.date(),
    date_finished: z.date().nullable(),
    rating: z.number().nullable(),
    genres: z.array(z.string()),
    format: z.string(),
    language: z.string(),
    original_language: z.string(),
    translators: z.array(z.string()).nullable(),
    word_count: z.number(),
  })
});

const artist = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    tags: z.array(z.string()),
    type: z.string(),
    disambiguation: z.string(),
    gender: z.string().optional(),
    country: z.string(),
    rating: z.number(),
    music_rating: z.string(),
    atmosphere_rating: z.string(),
    start_datetime: z.string().datetime(),
    end_datetime: z.string().datetime(),
  })
});

export const collections = { post, job, spanish, book, artist };
