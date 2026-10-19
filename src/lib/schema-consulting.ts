import { SITE } from '../data/site';
import { CONSULTING, OFFERS } from '../data/consulting';
import { META } from '../i18n/meta';
import { ids } from './schema';
import type { Review } from '../data/reviews';

// Page-specific JSON-LD for /sluzby/konzultace/ (cs). The global Person / ProfessionalService /
// WebSite graph comes from lib/schema.ts; everything here references it by @id.
export function consultingSchemas(site: URL, opts: { modified: string; reviews: Review[] }) {
  const abs = (p: string) => new URL(p, site).href;
  const url = abs('/sluzby/konzultace/');
  const m = META.consulting.cs;
  const id = ids(site);

  // Only reviews with a named author can be marked up (schema.org requires `author`).
  const reviews = opts.reviews
    .filter((r) => r.author && !r.sample)
    .map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      ...(r.date ? { datePublished: r.date } : {}),
      reviewBody: r.text.cs,
    }));

  return [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: m.title,
      description: m.description,
      inLanguage: 'cs',
      dateModified: opts.modified,
      breadcrumb: { '@id': `${url}#breadcrumb` },
      primaryImageOfPage: abs('/images/og.png'),
      mainEntity: { '@id': `${url}#service` },
    },
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: 'SEO konzultace',
      serviceType: 'SEO konzultace',
      description: CONSULTING.lead,
      url,
      provider: { '@id': id.person },
      areaServed: { '@type': 'City', name: 'Praha' },
      audience: { '@type': 'BusinessAudience', name: 'Majitelé firem, kteří už mají web' },
      availableChannel: [
        { '@type': 'ServiceChannel', name: 'Online (video hovor)' },
        {
          '@type': 'ServiceChannel',
          name: 'Osobně v Praze',
          serviceLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Praha', addressCountry: 'CZ' } },
        },
      ],
      isRelatedTo: [{ '@id': abs('/sluzby/start-3-mesice/#service') }, { '@id': abs('/sluzby/full-seo/#service') }],
      offers: OFFERS.map((o) => ({
        '@type': 'Offer',
        name: o.hours ? `${o.name} (${o.duration})` : o.name,
        description: o.jsonDescription,
        price: String(o.price),
        priceCurrency: 'CZK',
        ...(o.hours ? { eligibleDuration: { '@type': 'QuantitativeValue', value: o.hours, unitCode: 'HUR' } } : {}),
      })),
      ...(reviews.length ? { review: reviews } : {}),
    },
    {
      '@type': 'HowTo',
      name: 'Jak probíhá SEO konzultace',
      step: CONSULTING.steps.map((text) => ({ '@type': 'HowToStep', text })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: CONSULTING.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'VideoObject',
      name: CONSULTING.video.name,
      description: CONSULTING.video.caption,
      inLanguage: 'ru',
      thumbnailUrl: abs(SITE.videoPoster),
      uploadDate: SITE.videoUploadDate,
      contentUrl: abs(SITE.video!),
    },
  ];
}
