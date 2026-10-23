import { CASE_RAZBOR_PUBLISHED } from '../data/case-razbor-ru';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids, quotationSchema } from './schema';

// Page-specific JSON-LD of the review ("Разбор") of a real-estate agency website: WebPage + Article + Quotation + FAQPage; BreadcrumbList and the global
// graph come from the layout. No Service / Offer, no AggregateRating, no Review, no HowTo, no VideoObject, no prices.
export function caseRazborSchemas(site: URL, C: any, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('caseRazbor', lang));
  const m = META.caseRazbor[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'Article', '@id': `${url}#article`, headline: C.h1, inLanguage: lang, author: { '@id': id.person }, datePublished: C.published ?? CASE_RAZBOR_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, about: C.schema.about },
    quotationSchema(url, id.person, C.quote, lang),
    { '@type': 'FAQPage', mainEntity: C.faq.map((f: any) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
