import { FULLSEO_MONTHLY, FULLSEO_MONTHS } from '../data/fullseo-shared';
import type { FULLSEO_CS } from '../data/fullseo-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import type { Review } from '../data/reviews';
import { ids, quotationSchema } from './schema';

// Page-specific JSON-LD for /full-seo/ (cs). The global Person / ProfessionalService / WebSite graph and the
// BreadcrumbList come from the layout. No VideoObject, no AggregateRating. Prices in CZK only: the monthly
// "from" price is a UnitPriceSpecification (per 1 month); the 12-month term is eligibleDuration.
export function fullSeoCsSchemas(site: URL, C: typeof FULLSEO_CS, opts: { modified: string; reviews: Review[] }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('fullSeo', lang));
  const m = META.fullSeo[lang];
  const id = ids(site);
  const sc = C.schema;
  const own = (k: 'start' | 'consulting' | 'maps') => ({ '@id': abs(path(k, lang) + '#service') });

  const reviews = opts.reviews
    .filter((r) => r.author && !r.sample)
    .map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      ...(r.date ? { datePublished: r.date } : {}),
      reviewBody: r.text[lang],
    }));

  return [
    quotationSchema(url, id.person, C.quote, lang),
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
      alternateName: sc.alternateName,
      serviceType: sc.serviceType,
      description: C.lead,
      url,
      provider: { '@id': id.person },
      availableLanguage: sc.availableLanguage,
      areaServed: sc.areaServed,
      audience: { '@type': 'BusinessAudience', name: sc.audience },
      isRelatedTo: [own('start'), own('consulting'), own('maps')],
      offers: {
        '@type': 'Offer',
        name: sc.serviceName,
        description: C.offerTerms,
        priceCurrency: 'CZK',
        eligibleDuration: { '@type': 'QuantitativeValue', value: FULLSEO_MONTHS, unitCode: 'MON' },
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: String(FULLSEO_MONTHLY),
          priceCurrency: 'CZK',
          referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
        },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: sc.catalogName,
        itemListElement: C.groups
          .flatMap((g) => g.items)
          .map((i: { text: string; catalog?: string }) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: i.catalog ?? i.text.split('. ')[0].replace(/\.$/, '') },
          })),
      },
      ...(reviews.length ? { review: reviews } : {}),
    },
    {
      '@type': 'HowTo',
      name: sc.howToName,
      totalTime: `P${FULLSEO_MONTHS}M`,
      step: C.stages.map((text, i) => ({ '@type': 'HowToStep', name: `Krok ${i + 1}`, text })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
