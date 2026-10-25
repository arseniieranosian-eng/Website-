import { FULLSEO_MONTHLY, FULLSEO_MONTHS } from '../data/fullseo-shared';
import type { FULLSEO_RU } from '../data/fullseo-ru';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import type { Review } from '../data/reviews';
import { ids } from './schema';

// Page-specific JSON-LD for /ru/full-seo/. The global Person / ProfessionalService / WebSite graph and
// the BreadcrumbList come from the layout. HowTo describes the four stages of the year. No VideoObject
// (no video on the page), no AggregateRating.
export function fullSeoSchemas(site: URL, C: typeof FULLSEO_RU, opts: { modified: string; reviews: Review[] }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('fullSeo', lang));
  const m = META.fullSeo[lang];
  const id = ids(site);
  const sc = C.schema;
  const rel = (k: 'start' | 'consulting' | 'maps') => ({ '@id': abs(path(k, lang) + '#service') });

  const reviews = opts.reviews
    .filter((r) => r.author && !r.sample)
    .map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      ...(r.date ? { datePublished: r.date } : {}),
      reviewBody: r.text[lang],
    }));

  const catalog = C.groups.flatMap((g) => g.items).map((i) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: i.catalog ?? i.text.split('. ')[0].replace(/\.$/, '') },
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
      primaryImageOfPage: abs('/images/og-card.png'),
      mainEntity: { '@id': `${url}#service` },
    },
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: sc.serviceName,
      alternateName: C.packageName,
      serviceType: sc.serviceType,
      description: C.lead,
      url,
      provider: { '@id': id.person },
      availableLanguage: sc.availableLanguage,
      areaServed: sc.areaServed,
      audience: { '@type': 'BusinessAudience', name: sc.audience },
      isRelatedTo: [rel('start'), rel('consulting'), rel('maps')],
      offers: {
        '@type': 'Offer',
        name: sc.serviceName,
        description: C.priceTerms,
        priceCurrency: 'CZK', // CZK only; the euro estimate stays in the visible text
        eligibleDuration: { '@type': 'QuantitativeValue', value: FULLSEO_MONTHS, unitCode: 'MON' },
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: String(FULLSEO_MONTHLY),
          priceCurrency: 'CZK',
          referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
        },
      },
      hasOfferCatalog: { '@type': 'OfferCatalog', name: sc.catalogName, itemListElement: catalog },
      ...(reviews.length ? { review: reviews } : {}),
    },
    {
      '@type': 'HowTo',
      name: sc.howToName,
      totalTime: `P${FULLSEO_MONTHS}M`,
      step: C.stages.map((st) => ({ '@type': 'HowToStep', name: st.name, text: st.text })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
