import { POST_SELECT_SPECIALIST_PUBLISHED } from '../data/post-select-specialist-cs';
import type { POST_SELECT_SPECIALIST_CS } from '../data/post-select-specialist-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the blog article "Jak vybrat SEO specialistu a na co se ho zeptat?": WebPage + BlogPosting (relatedLink → the landing page) + FAQPage;
// BreadcrumbList and the global graph come from the layout. No HowTo, no Service / Offer, no ratings, no Quotation.
export function postSelectSpecialistSchemas(site: URL, C: typeof POST_SELECT_SPECIALIST_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postSelectSpecialist', lang));
  const m = META.postSelectSpecialist[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, inLanguage: lang, author: { '@id': id.person }, datePublished: POST_SELECT_SPECIALIST_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src), about: C.schema.about, relatedLink: [abs(path('consulting', lang)), abs(path('postAccountingChannels', lang)), abs(path('postSeoAudit', lang)), abs(path('postChoose', lang))] },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
