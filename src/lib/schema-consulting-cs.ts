import { PRICES, QUESTIONS_HOURS } from '../data/consulting-shared';
import type { CONSULTING_CS } from '../data/consulting-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import type { Review } from '../data/reviews';
import { ids } from './schema';

// Page-specific JSON-LD for /konzultace/ (cs). The global Person / ProfessionalService / WebSite graph and
// the BreadcrumbList come from the layout. No VideoObject (no video on this page), no AggregateRating. Prices in CZK only.
export function consultingCsSchemas(site: URL, C: typeof CONSULTING_CS, opts: { modified: string; reviews: Review[] }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('consulting', lang));
  const m = META.consulting[lang];
  const id = ids(site);
  const sc = C.schema;

  const reviews = opts.reviews
    .filter((r) => r.author && !r.sample)
    .map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      ...(r.date ? { datePublished: r.date } : {}),
      reviewBody: r.text[lang],
    }));

  const [q, a] = C.offers;
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
      availableChannel: [
        { '@type': 'ServiceChannel', name: sc.onlineChannel },
        { '@type': 'ServiceChannel', name: sc.cityChannel, serviceLocation: { '@type': 'Place', name: 'Praha' } },
      ],
      isRelatedTo: [{ '@id': abs(path('start', lang) + '#service') }, { '@id': abs(path('fullSeo', lang) + '#service') }],
      offers: [
        {
          '@type': 'Offer',
          name: q.name,
          description: q.gets,
          priceCurrency: 'CZK',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: String(PRICES.questions),
            priceCurrency: 'CZK',
            referenceQuantity: { '@type': 'QuantitativeValue', value: QUESTIONS_HOURS, unitCode: 'HUR' },
          },
        },
        { '@type': 'Offer', name: a.name, description: a.gets, priceCurrency: 'CZK', price: String(PRICES.audit) },
      ],
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
      step: C.steps.map((text, i) => ({ '@type': 'HowToStep', name: `Krok ${i + 1}`, text })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
