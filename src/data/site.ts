import type { Lang } from '../i18n/routes';

// TODO before launch: replace the placeholder contact details, socials and media.
export const SITE = {
  person: 'Arsenii Eranosian',
  brand: 'Arsenii Eranosian · SEO',
  jobTitle: { cs: 'SEO specialista', en: 'SEO specialist', ru: 'SEO-специалист' } as Record<Lang, string>,
  email: 'hello@example.cz',
  phone: '+420 000 000 000',
  city: 'Praha',
  country: 'CZ',
  languages: ['cs', 'en', 'ru'],
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
    { name: 'Instagram', url: 'https://www.instagram.com/' },
  ],
  // Author media for hero / about / consulting blocks. Drop real files into /public/media/.
  photo: '/images/author.svg',
  // Vertical (9:16) video, e.g. '/media/intro.mp4'. null = photo only.
  video: null as string | null,
  videoPoster: '/images/author.svg',
};

// "Numbers as proof" block on the home page → links to case studies.
// TODO: replace with real, verifiable figures.
export const PROOF: { value: string; label: Record<Lang, string> }[] = [
  { value: 'XX+', label: { cs: 'projektů', en: 'projects', ru: 'проектов' } },
  { value: '+XXX %', label: { cs: 'růst organické návštěvnosti', en: 'organic traffic growth', ru: 'рост органического трафика' } },
  { value: 'XX', label: { cs: 'klíčových slov v TOP 3', en: 'keywords in the top 3', ru: 'запросов в ТОП-3' } },
  { value: 'X let', label: { cs: 'praxe v SEO', en: 'years in SEO', ru: 'лет в SEO' } },
];
