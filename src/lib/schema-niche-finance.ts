import { NICHE_FINANCE_PUBLISHED } from '../data/niche-finance-ru';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the financial-consultants niche landing (ru): WebPage (about → Service) + Service (provider → Person, areaServed Česko, no Offer, no prices)
// + Quotation (the quote is confirmed by the author) + FAQPage. BreadcrumbList and the global graph come from the layout. No AggregateRating, no manual Review, no VideoObject, no HowTo.
export function nicheFinanceSchemas(site: URL, C: any, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('nicheFinance', lang));
  const m = META.nicheFinance[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title.replace(/ \| Eranosian$/, ''), description: m.description, inLanguage: lang, datePublished: C.published ?? NICHE_FINANCE_PUBLISHED, dateModified: opts.modified, author: { '@id': id.person }, breadcrumb: { '@id': `${url}#breadcrumb` }, about: { '@id': `${url}#service` } },
    { '@type': 'Service', '@id': `${url}#service`, name: C.schema.serviceName, serviceType: C.schema.serviceType, provider: { '@id': id.person }, areaServed: C.schema.areaServed, audience: { '@type': 'Audience', audienceType: C.schema.audience }, url },
    { '@type': 'Quotation', '@id': `${url}#quote-1`, text: C.quote, creator: { '@id': id.person }, inLanguage: lang, isPartOf: { '@id': `${url}#webpage` } },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f: any) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
