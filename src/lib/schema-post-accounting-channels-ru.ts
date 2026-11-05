import { POST_ACCOUNTING_CHANNELS_RU_PUBLISHED } from '../data/post-accounting-channels-ru';
import type { POST_ACCOUNTING_CHANNELS_RU } from '../data/post-accounting-channels-ru';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the Russian article: WebPage + BlogPosting + FAQPage (1:1 with the visible FAQ); BreadcrumbList and the global graph (Person) come from the layout.
// No Quotation, HowTo, Review, VideoObject, Product/Offer, LocalBusiness or ProfessionalService.
export function postAccountingChannelsRuSchemas(site: URL, C: typeof POST_ACCOUNTING_CHANNELS_RU, opts: { modified: string }) {
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postAccountingChannels', 'ru'));
  const m = META.postAccountingChannels.ru;
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: 'ru', dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, inLanguage: 'ru', author: { '@id': id.person }, datePublished: POST_ACCOUNTING_CHANNELS_RU_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src), about: C.schema.about, relatedLink: [abs(path('nicheAccounting', 'ru'))] },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
