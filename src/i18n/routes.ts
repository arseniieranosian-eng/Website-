// Single source of truth for URLs. Every page exists in all three languages;
// slugs are translated. Blog posts are handled separately (see postPath).

export const LANGS = ['cs', 'en', 'ru'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'cs';

export const LANG_PREFIX: Record<Lang, string> = { cs: '/', en: '/en/', ru: '/ru/' };
export const HTML_LANG: Record<Lang, string> = { cs: 'cs-CZ', en: 'en', ru: 'ru' };
export const OG_LOCALE: Record<Lang, string> = { cs: 'cs_CZ', en: 'en_US', ru: 'ru_RU' };

export const ROUTES = {
  home: { cs: '/', en: '/en/', ru: '/ru/' },
  audit: { cs: '/audit-zdarma/', en: '/en/free-audit/', ru: '/ru/besplatnyj-audit/' },
  consulting: { cs: '/konzultace/', en: '/en/consulting/', ru: '/ru/konsultacii/' },
  start: { cs: '/start-3-mesice/', en: '/en/3-month-start/', ru: '/ru/start-3-mesyaca/' },
  fullSeo: { cs: '/full-seo/', en: '/en/full-seo/', ru: '/ru/full-seo/' },
  maps: { cs: '/mapy/', en: '/en/maps/', ru: '/ru/karty/' },
  geo: { cs: '/seo-a-geo/', en: '/en/seo-and-geo/', ru: '/ru/seo-i-geo/' },
  cases: { cs: '/pripadove-studie/', en: '/en/case-studies/', ru: '/ru/kejsy/' },
  caseKb: { cs: '/pripadove-studie/kb-preklady/', en: '/en/case-studies/kb-preklady/', ru: '/ru/kejsy/kb-preklady/' },
  reviews: { cs: '/recenze/', en: '/en/reviews/', ru: '/ru/otzyvy/' },
  blog: { cs: '/blog/', en: '/en/blog/', ru: '/ru/blog/' },
  faq: { cs: '/caste-dotazy/', en: '/en/faq/', ru: '/ru/voprosy-i-otvety/' },
  about: { cs: '/o-mne/', en: '/en/about/', ru: '/ru/obo-mne/' },
  contact: { cs: '/kontakt/', en: '/en/contact/', ru: '/ru/kontakty/' },
  privacy: { cs: '/ochrana-osobnich-udaju/', en: '/en/privacy-policy/', ru: '/ru/politika-konfidencialnosti/' },
  thanks: { cs: '/dekujeme/', en: '/en/thank-you/', ru: '/ru/spasibo/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type PageKey = keyof typeof ROUTES;
export const PAGE_KEYS = Object.keys(ROUTES) as PageKey[];

// Breadcrumb hierarchy (home is implicit root). Service pages hang directly off the home page: there is no
// /sluzby/ collection page; the services are reached from the "Services" dropdown in the header and from the home page.
export const PARENT: Partial<Record<PageKey, PageKey>> = {
  caseKb: 'cases',
};

// Pages kept out of the index and sitemap.
export const NOINDEX: PageKey[] = ['thanks'];

export const SERVICE_KEYS = ['consulting', 'start', 'fullSeo', 'maps'] as const;
export type ServiceKey = (typeof SERVICE_KEYS)[number];

export const path = (key: PageKey, lang: Lang): string => ROUTES[key][lang];


// Pages listed in the header's "Services" dropdown, in order. SEO + GEO/AEO is an explanatory page, not a service, so it is not here.
export const SERVICE_MENU = ['audit', 'consulting', 'start', 'fullSeo', 'maps'] as const satisfies readonly PageKey[];

export const postPath = (lang: Lang, slug: string): string => `${LANG_PREFIX[lang]}blog/${slug}/`;

export const alternatesFor = (key: PageKey): Record<Lang, string> => ({ ...ROUTES[key] });
