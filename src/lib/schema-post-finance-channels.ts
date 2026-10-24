import { POST_FINANCE_CHANNELS_PUBLISHED } from '../data/post-finance-channels-ru';
import type { POST_FINANCE_CHANNELS_RU } from '../data/post-finance-channels-ru';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids, quotationSchema } from './schema';

// Page-specific JSON-LD of the blog article "Как получить клиентов финансовому консультанту": WebPage + BlogPosting (relatedLink → the landing and the audit) + Quotation (confirmed)
// + FAQPage; BreadcrumbList and the global graph come from the layout. No HowTo, no Service / Offer, no ratings, no VideoObject.
export function postFinanceChannelsSchemas(site: URL, C: typeof POST_FINANCE_CHANNELS_RU, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postFinanceChannels', lang));
  const m = META.postFinanceChannels[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, inLanguage: lang, author: { '@id': id.person }, datePublished: POST_FINANCE_CHANNELS_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src), about: C.schema.about, relatedLink: [abs(path('nicheFinance', lang)), abs(path('audit', lang))] },
    quotationSchema(url, id.person, C.quote, lang),
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
