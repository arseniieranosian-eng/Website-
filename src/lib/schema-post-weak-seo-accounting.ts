import { POST_WEAK_SEO_ACC_PUBLISHED } from '../data/post-weak-seo-accounting-cs';
import type { POST_WEAK_SEO_ACC_CS } from '../data/post-weak-seo-accounting-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids, quotationSchema } from './schema';

// Page-specific JSON-LD of the blog article "Proč jsou ve vyhledávání vpředu i účetní kanceláře se slabým SEO?": WebPage + BlogPosting (relatedLink → the two accounting niche pages) + FAQPage;
// BreadcrumbList and the global graph come from the layout. No HowTo, no Service / Offer, no ratings, no Quotation.
export function postWeakSeoAccSchemas(site: URL, C: typeof POST_WEAK_SEO_ACC_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postWeakSeoAcc', lang));
  const m = META.postWeakSeoAcc[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, inLanguage: lang, author: { '@id': id.person }, datePublished: POST_WEAK_SEO_ACC_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src), relatedLink: [abs(path('nicheAccounting', lang)), abs(path('nicheAccountingBrno', lang))] },
    quotationSchema(url, id.person, C.quote, lang),
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
