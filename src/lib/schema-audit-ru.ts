import type { AUDIT_RU, AUDIT_VIDEO } from '../data/audit-ru';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import type { Review } from '../data/reviews';
import { ids } from './schema';

// Page-specific JSON-LD for /ru/besplatnyj-audit/. The global Person / ProfessionalService / WebSite graph and the
// BreadcrumbList come from the layout. The VideoObject is emitted only once the sample video exists
// (AUDIT_VIDEO is not null). No AggregateRating. Nothing about keywords, competitors, maps, AI visibility or speed.
export function auditSchemas(site: URL, C: typeof AUDIT_RU, video: typeof AUDIT_VIDEO, opts: { modified: string; reviews: Review[] }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('audit', lang));
  const m = META.audit[lang];
  const id = ids(site);
  const sc = C.schema;
  const own = (k: 'consulting' | 'start') => ({ '@id': abs(path(k, lang) + '#service') });

  const reviews = opts.reviews
    .filter((r) => r.author && !r.sample)
    .map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      ...(r.date ? { datePublished: r.date } : {}),
      reviewBody: r.text[lang],
    }));

  const catalog = [
    ...C.checks.filter((c) => c.inCatalog !== false).map((c) => c.text.replace(/\.$/, '')),
    C.deliverable,
  ];

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
      ...(video ? { video: { '@id': `${url}#video` } } : {}),
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
      isRelatedTo: [own('consulting'), own('start')],
      offers: {
        '@type': 'Offer',
        name: sc.serviceName,
        description: C.offerTerms,
        priceCurrency: 'CZK',
        price: '0',
        deliveryLeadTime: { '@type': 'QuantitativeValue', value: 24, unitCode: 'HUR' },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: sc.catalogName,
        itemListElement: catalog.map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      },
      ...(reviews.length ? { review: reviews } : {}),
    },
    ...(video
      ? [{
          '@type': 'VideoObject',
          '@id': `${url}#video`,
          name: C.videoName,
          description: C.videoDescription,
          thumbnailUrl: abs(video.poster),
          uploadDate: video.uploadDate,
          duration: video.duration,
          contentUrl: abs(video.src),
          inLanguage: lang,
          transcript: C.videoText,
          author: { '@id': id.person },
          about: { '@id': `${url}#service` },
          isPartOf: { '@id': `${url}#webpage` },
        }]
      : []),
    {
      '@type': 'HowTo',
      name: sc.howToName,
      totalTime: 'PT24H',
      step: C.stages.map((text, i) => ({ '@type': 'HowToStep', name: `Шаг ${i + 1}`, text })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
