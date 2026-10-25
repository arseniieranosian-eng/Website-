import { NICHE_ELECTRONICS_PUBLISHED } from '../data/niche-electronics-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the electronics stores niche landing (cs): WebPage (mainEntity → Service) + Service (provider → Person, areaServed Česko, no Offer, no prices) + FAQPage.
// BreadcrumbList and the global graph come from the layout. No AggregateRating, no manual Review, no VideoObject, no HowTo, no Quotation.
export function nicheElectronicsSchemas(site: URL, C: any, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('nicheElectronics', lang));
  const m = META.nicheElectronics[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.h1, description: m.description, inLanguage: lang, datePublished: C.published ?? NICHE_ELECTRONICS_PUBLISHED, dateModified: opts.modified, isPartOf: { '@id': id.website }, author: { '@id': id.person }, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#service` } },
    { '@type': 'Service', '@id': `${url}#service`, name: C.schema.serviceName, serviceType: C.schema.serviceType, provider: { '@id': id.person }, areaServed: { '@type': 'Country', name: C.schema.areaServed }, description: C.schema.description, url },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f: any) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
