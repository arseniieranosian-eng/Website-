import { SITE } from '../data/site';
import { PRICES, QUESTIONS_HOURS, type ConsultingContent } from '../data/consulting-shared';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';
import type { Review } from '../data/reviews';

// Page-specific JSON-LD for the consulting page (cs / ru). The global Person / ProfessionalService /
// WebSite graph comes from lib/schema.ts; everything here references it by @id.
export function consultingSchemas(site: URL, C: ConsultingContent, opts: { modified: string; reviews: Review[] }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('consulting', lang));
  const m = META.consulting[lang];
  const id = ids(site);
  const sc = C.schema;

  // Only reviews with a named author can be marked up (schema.org requires `author`).
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
      primaryImageOfPage: abs('/images/og-card.png'),
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
      ...(sc.availableLanguage ? { availableLanguage: sc.availableLanguage } : {}),
      areaServed: sc.areaServed.length === 1 ? sc.areaServed[0] : sc.areaServed,
      audience: { '@type': 'BusinessAudience', name: sc.audience },
      availableChannel: [
        { '@type': 'ServiceChannel', name: sc.onlineChannel },
        {
          '@type': 'ServiceChannel',
          name: sc.cityChannel,
          serviceLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Praha', addressCountry: 'CZ' } },
        },
      ],
      isRelatedTo: [
        { '@id': abs(path('start', lang) + '#service') },
        { '@id': abs(path('fullSeo', lang) + '#service') },
      ],
      offers: C.offers.map((o) => ({
        '@type': 'Offer',
        name: o.jsonName,
        description: o.jsonDescription,
        price: String(PRICES[o.id]), // CZK only; any euro estimate stays in the visible text
        priceCurrency: 'CZK',
        ...(o.id === 'questions' ? { eligibleDuration: { '@type': 'QuantitativeValue', value: QUESTIONS_HOURS, unitCode: 'HUR' } } : {}),
      })),
      ...(reviews.length ? { review: reviews } : {}),
    },
    ...(sc.howToName ? [{
      '@type': 'HowTo',
      name: sc.howToName,
      step: C.steps.map((text) => ({ '@type': 'HowToStep', text })),
    }] : []),
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    ...(C.video ? [{
      '@type': 'VideoObject',
      name: C.video.name,
      description: C.video.caption,
      inLanguage: sc.videoLanguage,
      thumbnailUrl: abs(SITE.videoPoster),
      uploadDate: SITE.videoUploadDate,
      contentUrl: abs(SITE.video!),
    }] : []),
  ];
}
