import type { Lang, ServiceKey } from '../i18n/routes';

// Single source of reviews. Home, service pages, case studies and /recenze/
// all pull from here — never copy review text into a page.
//
// TODO before launch: replace the sample entries with real client reviews
// (with the client's consent) and set `sample: false`. Sample reviews are
// labelled on the page and never emitted as schema.org Review markup.

export interface Review {
  id: string;
  author: string;
  role: Record<Lang, string>;
  company?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string; // ISO
  text: Record<Lang, string>;
  services: ServiceKey[];
  caseKey?: 'caseKb';
  featured?: number; // lower = shown first on the home page
  sample: boolean;
}

export const REVIEWS: Review[] = [
  {
    id: 'kb-preklady',
    author: 'Jméno Příjmení',
    role: { cs: 'jednatel', en: 'Managing Director', ru: 'директор' },
    company: 'KB Překlady',
    rating: 5,
    date: '2026-06-01',
    text: {
      cs: 'Ukázková recenze. Sem vložte skutečné hodnocení klienta KB Překlady – co se změnilo, jak probíhala spolupráce a jaký byl výsledek.',
      en: 'Sample review. Insert the real feedback from KB Překlady here – what changed, how the work went and what the outcome was.',
      ru: 'Пример отзыва. Вставьте сюда реальный отзыв KB Překlady – что изменилось, как шла работа и какой получился результат.',
    },
    services: ['start', 'fullSeo'],
    caseKey: 'caseKb',
    featured: 1,
    sample: true,
  },
  {
    id: 'client-2',
    author: 'Jméno Příjmení',
    role: { cs: 'majitelka salonu', en: 'Salon owner', ru: 'владелица салона' },
    rating: 5,
    date: '2026-04-15',
    text: {
      cs: 'Ukázková recenze ke službě Mapy. Nahraďte skutečnou zkušeností klienta s lokálním SEO.',
      en: 'Sample review for the Maps service. Replace with a real client’s local SEO experience.',
      ru: 'Пример отзыва об услуге «Карты». Замените реальным опытом клиента с локальным SEO.',
    },
    services: ['maps'],
    featured: 2,
    sample: true,
  },
  {
    id: 'client-3',
    author: 'Jméno Příjmení',
    role: { cs: 'marketingová manažerka', en: 'Marketing Manager', ru: 'маркетолог' },
    rating: 5,
    date: '2026-03-10',
    text: {
      cs: 'Ukázková recenze ke konzultaci. Nahraďte skutečnou zpětnou vazbou.',
      en: 'Sample review for consulting. Replace with real feedback.',
      ru: 'Пример отзыва о консультации. Замените реальным отзывом.',
    },
    services: ['consulting'],
    featured: 3,
    sample: true,
  },
  {
    id: 'client-4',
    author: 'Jméno Příjmení',
    role: { cs: 'zakladatel e-shopu', en: 'E-commerce founder', ru: 'основатель интернет-магазина' },
    rating: 5,
    date: '2026-02-20',
    text: {
      cs: 'Ukázková recenze k celoročnímu SEO. Nahraďte skutečnou zpětnou vazbou.',
      en: 'Sample review for full-year SEO. Replace with real feedback.',
      ru: 'Пример отзыва о SEO на год. Замените реальным отзывом.',
    },
    services: ['fullSeo', 'consulting'],
    sample: true,
  },
];

const byDate = (a: Review, b: Review) => b.date.localeCompare(a.date);

export const featuredReviews = (limit = 3) =>
  REVIEWS.filter((r) => r.featured !== undefined)
    .sort((a, b) => a.featured! - b.featured!)
    .slice(0, limit);

export const reviewsForService = (key: ServiceKey, limit = 2) =>
  REVIEWS.filter((r) => r.services.includes(key)).sort(byDate).slice(0, limit);

export const reviewsForCase = (key: 'caseKb') => REVIEWS.filter((r) => r.caseKey === key);

export const allReviews = () => [...REVIEWS].sort(byDate);
