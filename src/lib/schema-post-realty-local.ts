import { POST_REALTY_LOCAL_PUBLISHED } from '../data/post-realty-local-cs';
import type { POST_REALTY_LOCAL_CS } from '../data/post-realty-local-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the blog article "Jak má realitní kancelář vypadat na mapách a v katalozích?": WebPage + BlogPosting (relatedLink → the landing page and the neighbouring articles) + FAQPage;
// BreadcrumbList and the global graph come from the layout. No HowTo, no Service / Offer, no ratings, no Quotation.
export function postRealtyLocalSchemas(site: URL, C: typeof POST_REALTY_LOCAL_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postRealtyLocal', lang));
  const m = META.postRealtyLocal[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, inLanguage: lang, author: { '@id': id.person }, datePublished: POST_REALTY_LOCAL_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src), about: C.schema.about, relatedLink: [abs(path('nicheRealty', lang)), abs(path('postRealtyListings', lang)), abs(path('postRealtyDistricts', lang))] },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
