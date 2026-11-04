import { POST_DUP_ESHOP_PUBLISHED } from '../data/post-dup-eshop-cs';
import type { POST_DUP_ESHOP_CS } from '../data/post-dup-eshop-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the blog article "Jak vznikají duplicitní stránky v e-shopu s tiskovými produkty?": WebPage + BlogPosting + FAQPage;
// BreadcrumbList and the global graph come from the layout. No HowTo, no Service / Offer, no ratings, no Quotation.
export function postDupEshopSchemas(site: URL, C: typeof POST_DUP_ESHOP_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postDupEshop', lang));
  const m = META.postDupEshop[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, inLanguage: lang, author: { '@id': id.person }, datePublished: POST_DUP_ESHOP_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src) },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
