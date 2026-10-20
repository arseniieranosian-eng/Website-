import { MAPS_MIN_MONTHS } from '../data/maps-shared';
import type { MAPS_RU } from '../data/maps-ru';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import type { Review } from '../data/reviews';
import { ids } from './schema';

// Page-specific JSON-LD for /ru/karty/. The global Person / ProfessionalService / WebSite graph and the
// BreadcrumbList come from the layout. No price (pay-per-result terms are not confirmed yet), no LocalBusiness
// (it would describe the client), no VideoObject, no AggregateRating.
export function mapsSchemas(site: URL, C: typeof MAPS_RU, opts: { modified: string; reviews: Review[] }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('maps', lang));
  const m = META.maps[lang];
  const id = ids(site);
  const sc = C.schema;
  const own = (k: 'start' | 'fullSeo') => ({ '@id': abs(path(k, lang) + '#service') });

  const reviews = opts.reviews
    .filter((r) => r.author && !r.sample)
    .map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      ...(r.date ? { datePublished: r.date } : {}),
      reviewBody: r.text[lang],
    }));

  return [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: m.title,
      description: m.description,
      inLanguage: lang,
      dateModified: opts.modified,
      breadcrumb: { '@id': `${url}#breadcrumb` },
      primaryImageOfPage: abs('/images/og.png'),
      mainEntity: { '@id': `${url}#service` },
    },
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: sc.serviceName,
      serviceType: sc.serviceType,
      description: C.lead,
      url,
      provider: { '@id': id.person },
      availableLanguage: sc.availableLanguage,
      areaServed: sc.areaServed,
      audience: { '@type': 'BusinessAudience', name: sc.audience },
      availableChannel: { '@type': 'ServiceChannel', name: sc.channel },
      isRelatedTo: [own('start'), own('fullSeo')],
      offers: {
        '@type': 'Offer',
        name: sc.offerName,
        description: C.offerTerms,
        priceCurrency: 'CZK',
        priceSpecification: C.rates.map((r) => ({ '@type': 'UnitPriceSpecification', name: r.spec, price: String(r.price), priceCurrency: 'CZK' })),
        eligibleDuration: { '@type': 'QuantitativeValue', minValue: MAPS_MIN_MONTHS, unitCode: 'MON' },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: sc.catalogName,
        itemListElement: C.includes.map((i) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: i.catalog ?? i.text.split('. ')[0].replace(/\.$/, '') },
        })),
      },
      ...(reviews.length ? { review: reviews } : {}),
    },
    {
      '@type': 'HowTo',
      name: sc.howToName,
      step: C.stages.map((text, i) => ({ '@type': 'HowToStep', name: `Шаг ${i + 1}`, text })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
