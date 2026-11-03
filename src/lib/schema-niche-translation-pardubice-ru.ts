import { NICHE_TRANSLATION_PARDUBICE_RU_PUBLISHED } from '../data/niche-translation-pardubice-ru';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the Russian translation-agencies landing: WebPage (mainEntity → Service) + Service (provider → Person, areaServed Brno, no Offer, no prices) + FAQPage.
// BreadcrumbList and the global graph come from the layout. No AggregateRating, no manual Review, no VideoObject, no HowTo, no Quotation.
export function nicheTranslationPardubiceRuSchemas(site: URL, C: any, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('nichePardubice', lang));
  const m = META.nichePardubice[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.h1, description: m.description, inLanguage: lang, datePublished: C.published ?? NICHE_TRANSLATION_PARDUBICE_RU_PUBLISHED, dateModified: opts.modified, author: { '@id': ids(site).person }, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#service` } },
    { '@type': 'Service', '@id': `${url}#service`, name: C.schema.serviceName, serviceType: C.schema.serviceType, provider: { '@id': id.person }, areaServed: { '@type': 'City', name: C.schema.areaServed }, url },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f: any) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
