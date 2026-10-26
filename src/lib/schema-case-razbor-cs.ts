import { CASE_RAZBOR_CS_PUBLISHED } from '../data/case-razbor-cs';
import type { CASE_RAZBOR_CS } from '../data/case-razbor-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the Czech review of a real estate agency website: WebPage + BlogPosting + FAQPage; BreadcrumbList and the global graph come from the layout.
// No Quotation, no Review, no AggregateRating, no Service / Offer, no HowTo, no VideoObject, no prices.
export function caseRazborCsSchemas(site: URL, C: typeof CASE_RAZBOR_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('caseRazbor', lang));
  const m = META.caseRazbor[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, description: m.description, inLanguage: lang, author: { '@id': id.person }, datePublished: CASE_RAZBOR_CS_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, about: C.schema.about },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
