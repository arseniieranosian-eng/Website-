import { NICHE_ACCOUNTING_BRNO_PUBLISHED } from '../data/niche-accounting-brno-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the accounting-firms niche landing page: WebPage (about → Service) + Service (provider → Person, areaServed Brno, no Offer, no prices)
// + FAQPage. BreadcrumbList and the global graph come from the layout. No AggregateRating, no manual Review, no VideoObject, no HowTo, no Quotation.
export function nicheAccountingBrnoSchemas(site: URL, C: any, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('nicheAccountingBrno', lang));
  const m = META.nicheAccountingBrno[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.h1, description: m.description, inLanguage: lang, datePublished: C.published ?? NICHE_ACCOUNTING_BRNO_PUBLISHED, dateModified: opts.modified, author: { '@id': id.person }, breadcrumb: { '@id': `${url}#breadcrumb` }, about: { '@id': `${url}#service` } },
    { '@type': 'Service', '@id': `${url}#service`, name: C.schema.serviceName, serviceType: C.schema.serviceType, provider: { '@id': id.person }, areaServed: C.schema.areaServed, audience: { '@type': 'Audience', audienceType: C.schema.audience }, url },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f: any) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
