import { POST_REALTY_PRAGUE_DISTRICTS_PUBLISHED } from '../data/post-realty-prague-districts-cs';
import type { POST_REALTY_PRAGUE_DISTRICTS_CS } from '../data/post-realty-prague-districts-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the blog article "Jak uvést pražské městské části a čtvrti na webu realitní kanceláře?": WebPage + BlogPosting (relatedLink → the Prague landing page) + FAQPage;
// BreadcrumbList and the global graph come from the layout. No HowTo, no Service / Offer, no ratings, no Quotation.
export function postRealtyPragueDistrictsSchemas(site: URL, C: typeof POST_REALTY_PRAGUE_DISTRICTS_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postRealtyPragueDistricts', lang));
  const m = META.postRealtyPragueDistricts[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, inLanguage: lang, author: { '@id': id.person }, datePublished: POST_REALTY_PRAGUE_DISTRICTS_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src), relatedLink: [abs(path('nicheRealty', lang)), abs(path('postRealtyDistricts', lang))] },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
