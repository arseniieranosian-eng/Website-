import { POST_ACCOUNTING_TIME_PUBLISHED } from '../data/post-accounting-time-cs';
import type { POST_ACCOUNTING_TIME_CS } from '../data/post-accounting-time-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the blog article "Jak dlouho trvá SEO pro účetní kancelář?": WebPage + BlogPosting (relatedLink → the landing page) + FAQPage;
// BreadcrumbList and the global graph come from the layout. No HowTo, no Service / Offer, no ratings, no Quotation.
export function postAccountingTimeSchemas(site: URL, C: typeof POST_ACCOUNTING_TIME_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postAccountingTime', lang));
  const m = META.postAccountingTime[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, inLanguage: lang, author: { '@id': id.person }, datePublished: POST_ACCOUNTING_TIME_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src), about: C.schema.about, relatedLink: [abs(path('nicheAccounting', lang)), abs(path('postAccountingChannels', lang)), abs(path('postAccountingSmall', lang)), abs(path('postAccountingNoLeads', lang)), abs(path('postNewSite', lang))] },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
