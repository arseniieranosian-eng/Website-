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
  maps: { cs: '/lokalni-seo-mapy/', en: '/en/maps/', ru: '/ru/karty/' },
  geo: { cs: '/seo-a-geo/', en: '/en/seo-and-geo/', ru: '/ru/seo-i-geo/' },
  cases: { cs: '/pripadove-studie/', en: '/en/case-studies/', ru: '/ru/kejsy/' },
  caseTypo: { cs: '/pripadove-studie/seo-tiskarna/', en: '/en/case-studies/seo-print-shop/', ru: '/ru/kejsy/seo-tipografiya/' },
  caseEdu: { cs: '/pripadove-studie/seo-vzdelavaci-platforma/', en: '/en/case-studies/seo-education-platform/', ru: '/ru/kejsy/seo-obrazovatelnaya-platforma/' },
  caseSeason: { cs: '/pripadove-studie/seo-v-nizke-sezone/', en: '/en/case-studies/seo-in-low-season/', ru: '/ru/kejsy/seo-v-nizkij-sezon/' },
  caseHalf: { cs: '/pripadove-studie/seo-prekladatelska-agentura/', en: '/en/case-studies/seo-translation-agency-half-year/', ru: '/ru/kejsy/seo-perevodcheskoe-agentstvo-polgoda/' },
  caseKb: { cs: '/pripadove-studie/seo-prekladatelska-agentura-4-mesice/', en: '/en/case-studies/seo-translation-agency-4-months/', ru: '/ru/kejsy/seo-perevodcheskoe-agentstvo-4-mesyaca/' },
  reviews: { cs: '/recenze/', en: '/en/reviews/', ru: '/ru/otzyvy/' },
  blog: { cs: '/blog/', en: '/en/blog/', ru: '/ru/blog/' },
  postDuplicates: { cs: '/blog/duplicitni-obsah/', en: '/en/blog/duplicate-content/', ru: '/ru/blog/dublikaty-kontenta/' },
  postSeoAudit: { cs: '/blog/co-je-seo-audit/', en: '/en/blog/what-is-an-seo-audit/', ru: '/ru/blog/chto-takoe-seo-audit/' },
  postNotShown: { cs: '/blog/proc-se-web-nezobrazuje-v-googlu/', en: '/en/blog/why-is-my-site-not-in-google/', ru: '/ru/blog/pochemu-sajt-ne-v-google/' },
  postIndexing: { cs: '/blog/jak-zjistit-jestli-je-web-indexovany/', en: '/en/blog/how-to-check-if-a-site-is-indexed/', ru: '/ru/blog/kak-proverit-indeksaciyu-sajta/' },
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
  caseTypo: 'cases',
  caseEdu: 'cases',
  caseSeason: 'cases',
  caseHalf: 'cases',
  postIndexing: 'blog',
  postNotShown: 'blog',
  postSeoAudit: 'blog',
  postDuplicates: 'blog',
};

// Pages that exist in some languages only (no hreflang alternates for the missing ones; the language switcher falls
// back to the home page). The cs/en addresses of these pages are placeholders and are never built.
export const ONLY_LANGS: Partial<Record<PageKey, readonly Lang[]>> = { caseTypo: ['cs', 'ru'], caseEdu: ['cs', 'ru'], caseSeason: ['cs', 'ru'], caseHalf: ['cs'], postIndexing: ['cs'], postNotShown: ['cs'], postSeoAudit: ['cs'], postDuplicates: ['cs'] };
export const langsFor = (key: PageKey): readonly Lang[] => ONLY_LANGS[key] ?? LANGS;

// Pages kept out of the index and sitemap.
export const NOINDEX: PageKey[] = ['thanks'];

export const SERVICE_KEYS = ['consulting', 'start', 'fullSeo', 'maps'] as const;
export type ServiceKey = (typeof SERVICE_KEYS)[number];

export const path = (key: PageKey, lang: Lang): string => ROUTES[key][lang];


// Pages listed in the header's "Services" dropdown, in order. SEO + GEO/AEO is an explanatory page, not a service, so it is not here.
export const SERVICE_MENU = ['audit', 'consulting', 'start', 'fullSeo', 'maps'] as const satisfies readonly PageKey[];

export const postPath = (lang: Lang, slug: string): string => `${LANG_PREFIX[lang]}blog/${slug}/`;

export const alternatesFor = (key: PageKey): Partial<Record<Lang, string>> =>
  Object.fromEntries(langsFor(key).map((l) => [l, ROUTES[key][l]]));
