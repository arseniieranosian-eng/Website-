import { START_MONTHS, START_PRICE } from '../data/start-shared';
import type { START_RU } from '../data/start-ru';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import type { Review } from '../data/reviews';
import { ids } from './schema';

// Page-specific JSON-LD for /ru/uslugi/start-3-mesyaca/. The global Person / ProfessionalService / WebSite
// graph and the BreadcrumbList come from the layout. HowTo describes the three monthly stages (the weekly
// report is a continuous process, not a step, so it is not in it). No VideoObject (no video), no AggregateRating.
export function startSchemas(site: URL, C: typeof START_RU, opts: { modified: string; reviews: Review[] }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('start', lang));
  const m = META.start[lang];
  const id = ids(site);
  const sc = C.schema;
  const own = (k: 'consulting' | 'fullSeo' | 'maps') => ({ '@id': abs(path(k, lang) + '#service') });

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
      alternateName: C.slogan,
      serviceType: sc.serviceType,
      description: C.lead,
      url,
      provider: { '@id': id.person },
      availableLanguage: sc.availableLanguage,
      areaServed: sc.areaServed,
      audience: { '@type': 'BusinessAudience', name: sc.audience },
      isRelatedTo: [own('consulting'), own('fullSeo'), own('maps')],
      offers: {
        '@type': 'Offer',
        name: sc.serviceName,
        description: C.payTerms,
        price: String(START_PRICE), // CZK only; the euro estimate stays in the visible text
        priceCurrency: 'CZK',
        eligibleDuration: { '@type': 'QuantitativeValue', value: START_MONTHS, unitCode: 'MON' },
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
      totalTime: `P${START_MONTHS}M`,
      step: C.stages.map((st) => ({ '@type': 'HowToStep', name: st.name, text: st.text })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
