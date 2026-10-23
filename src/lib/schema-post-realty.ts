import { POST_REALTY_PUBLISHED, QUOTE_CONFIRMED } from '../data/post-realty-cs';
import type { POST_REALTY_CS } from '../data/post-realty-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids, quotationSchema } from './schema';

// Page-specific JSON-LD of the blog article "Jak získat klienty pro realitní kancelář": WebPage + BlogPosting (relatedLink → the landing page) + FAQPage (+ Quotation only when
// the author's quote is confirmed); BreadcrumbList and the global graph come from the layout. No HowTo, no Service / Offer, no ratings, no prices.
export function postRealtySchemas(site: URL, C: typeof POST_REALTY_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postRealty', lang));
  const m = META.postRealty[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, inLanguage: lang, author: { '@id': id.person }, datePublished: POST_REALTY_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src), about: C.schema.about, relatedLink: [abs(path('nicheRealty', lang)), abs(path('audit', lang))] },
    ...(QUOTE_CONFIRMED ? [quotationSchema(url, id.person, C.quote, lang)] : []),
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
