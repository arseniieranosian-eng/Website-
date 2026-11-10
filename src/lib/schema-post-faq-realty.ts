import { POST_FAQ_REALTY_PUBLISHED } from '../data/post-faq-realty-cs';
import type { POST_FAQ_REALTY_CS } from '../data/post-faq-realty-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the blog article "Jak má vypadat FAQ na webu realitní kanceláře?": WebPage + BlogPosting + FAQPage (4 questions, the text = the visible text without HTML);
// BreadcrumbList and the global graph (Person) come from the layout. No HowTo, no Service / Offer, no ratings, no Quotation, no VideoObject, no LocalBusiness / ProfessionalService.
// The expert and the quote are not in the markup. FAQPage gives no rich result in Google any more; it stays only so that the markup equals the visible text.
export const faqRealtyPlain = (f: { a: string; links?: Record<string, { text: string }> }) => f.a.replace(/\{(\w+)\}/g, (_, k: string) => f.links?.[k]?.text ?? k);
export function postFaqRealtySchemas(site: URL, C: typeof POST_FAQ_REALTY_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postFaqRealty', lang));
  const m = META.postFaqRealty[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, inLanguage: lang, author: { '@id': id.person }, datePublished: POST_FAQ_REALTY_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src), about: C.schema.about },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: faqRealtyPlain(f) } })) },
  ];
}
