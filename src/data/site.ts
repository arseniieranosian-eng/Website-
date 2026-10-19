import type { Lang } from '../i18n/routes';

export const SITE = {
  person: 'Arsenii Eranosian',
  brand: 'Arsenii Eranosian · SEO',
  jobTitle: { cs: 'SEO specialista', en: 'SEO specialist', ru: 'SEO-специалист' } as Record<Lang, string>,
  email: 'arseniieranosian@gmail.com',
  phone: '+420 735 080 267',
  ico: '21462259', // IČO (company ID)
  // Registered address: shown in the privacy policy only (not in footer / structured data).
  address: { street: 'Příčná 1892/4', postalCode: '110 00', city: 'Praha 1', district: 'Nové Město' },
  city: 'Praha',
  country: 'CZ',
  alternateNames: ['Арсений Ераносьян'],
  description: {
    cs: 'SEO a GEO specialista z Prahy. SEO jako systém, který mění vyhledávání v tržby.',
    en: 'SEO and GEO specialist based in Prague. SEO as a system that turns search into revenue.',
    ru: 'SEO и GEO-специалист из Праги. SEO как система, которая превращает поиск в выручку.',
  } as Record<Lang, string>,
  knowsAbout: ['SEO', 'GEO (Generative Engine Optimization)', 'Local SEO', 'Technical SEO', 'Structured data', 'Multilingual SEO'],
  // Spoken/working languages (ISO 639-1).
  languages: ['cs', 'en', 'ru', 'uk'],
  // Every profile here is emitted as sameAs on the Person, the business and (via footer/contacts) linked on the site.
  // To tie a new profile to the site, just add it to this list.
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
