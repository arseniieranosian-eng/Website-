import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { SERVICE_KEYS } from './i18n/routes';

// Posts live in src/content/blog/{lang}/{slug}.md — the file name is the URL slug.
// Posts that are translations of each other share `translationKey`; hreflang is
// emitted only between posts that actually exist.
const blog = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    translationKey: z.string(),
    services: z.array(z.enum(SERVICE_KEYS)).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
