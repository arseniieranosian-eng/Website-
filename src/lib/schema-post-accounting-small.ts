import { POST_ACCOUNTING_SMALL_PUBLISHED } from '../data/post-accounting-small-cs';
import type { POST_ACCOUNTING_SMALL_CS } from '../data/post-accounting-small-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the blog article "Má SEO smysl pro malou účetní kancelář?": WebPage + BlogPosting (relatedLink → the landing page) + FAQPage;
// BreadcrumbList and the global graph come from the layout. No HowTo, no Service / Offer, no ratings, no Quotation.
export function postAccountingSmallSchemas(site: URL, C: typeof POST_ACCOUNTING_SMALL_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postAccountingSmall', lang));
  const m = META.postAccountingSmall[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, inLanguage: lang, author: { '@id': id.person }, datePublished: POST_ACCOUNTING_SMALL_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src), about: C.schema.about, relatedLink: [abs(path('nicheAccounting', lang)), abs(path('postAccountingChannels', lang)), abs(path('postAccountingNoLeads', lang)), abs(path('postAds', lang))] },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
