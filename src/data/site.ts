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
// Figures are the author's own (About page / LinkedIn); KB Překlady details live in data/cases.ts.
export const PROOF: { value: string; label: Record<Lang, string> }[] = [
  { value: '+777 %', label: { cs: 'organická návštěvnost e-shopu meziročně', en: 'organic traffic growth for an online store, YoY', ru: 'рост органического трафика интернет-магазина за год' } },
  { value: '55–60 %', label: { cs: 'průměrný růst návštěvnosti na projekt', en: 'average traffic growth per project', ru: 'средний рост трафика на проект' } },
  { value: '×8', label: { cs: 'poptávek za 4 měsíce (KB Překlady)', en: 'leads in 4 months (KB Překlady)', ru: 'заявок за 4 месяца (KB Překlady)' } },
  { value: '2,5', label: { cs: 'roku praxe v SEO', en: 'years in SEO', ru: 'года опыта в SEO' } },
];
