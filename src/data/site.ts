import type { Lang } from '../i18n/routes';

export const SITE = {
  person: 'Arsenii Eranosian',
  brand: 'Arsenii Eranosian · SEO',
  jobTitle: { cs: 'SEO specialista', en: 'SEO specialist', ru: 'SEO-специалист' } as Record<Lang, string>,
  email: 'arseniieranosian@gmail.com',
  phone: '+420 735 080 267',
  city: 'Praha',
  country: 'CZ',
  languages: ['cs', 'en', 'ru'],
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/arsenii-eranosian-seo/' },
    { name: 'Instagram', url: 'https://www.instagram.com/mr.eranosian/' },
  ],
  // Author media. Photo is used across the site; the vertical video (with sound,
  // click-to-play) is shown on the consulting page. Set video to null to hide it.
  photo: '/images/author.jpg',
  photoSmall: '/images/author-720.jpg',
  video: '/media/intro.mp4' as string | null,
  videoPoster: '/media/intro-poster.jpg',
};

// "Numbers as proof" block on the home page → links to case studies.
// Figures come from the KB Překlady case (see data/cases.ts and the Make Up Digital Agency review).
export const PROOF: { value: string; label: Record<Lang, string> }[] = [
  { value: '×6', label: { cs: 'zobrazení ve vyhledávání', en: 'search impressions', ru: 'показов в поиске' } },
  { value: '×300+', label: { cs: 'kliknutí z vyhledávání', en: 'clicks from search', ru: 'кликов из поиска' } },
  { value: '+65–70 %', label: { cs: 'poptávek měsíčně po prvním nárůstu ×5', en: 'enquiries per month after the first ×5 jump', ru: 'заявок в месяц после первого роста в 5 раз' } },
  { value: '×3', label: { cs: 'B2B poptávek', en: 'B2B enquiries', ru: 'B2B-заявок' } },
];
