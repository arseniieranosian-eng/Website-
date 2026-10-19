import { START_MONTHS, START_PRICE } from '../data/start-shared';
import type { START_CS } from '../data/start-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import type { Review } from '../data/reviews';
import { ids } from './schema';

// Page-specific JSON-LD for /sluzby/start-3-mesice/ (cs). The global Person / ProfessionalService / WebSite graph
// and the BreadcrumbList come from the layout. No VideoObject, no AggregateRating. Prices in CZK only.
export function startCsSchemas(site: URL, C: typeof START_CS, opts: { modified: string; reviews: Review[] }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('start', lang));
  const m = META.start[lang];
  const id = ids(site);
  const sc = C.schema;
  const own = (k: 'fullSeo' | 'consulting' | 'maps') => ({ '@id': abs(path(k, lang) + '#service') });

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
      isRelatedTo: [own('fullSeo'), own('consulting'), own('maps')],
      offers: {
        '@type': 'Offer',
        name: sc.serviceName,
        description: C.offerTerms,
        priceCurrency: 'CZK',
        price: String(START_PRICE),
        eligibleDuration: { '@type': 'QuantitativeValue', value: START_MONTHS, unitCode: 'MON' },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: sc.catalogName,
        itemListElement: C.groups
          .flatMap((g) => g.items)
          .filter((i: { inCatalog?: false }) => i.inCatalog !== false) // the three map bullets are one catalog item
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
      totalTime: `P${START_MONTHS}M`,
      step: C.stages.map((st) => ({ '@type': 'HowToStep', name: st.name, text: st.text })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
