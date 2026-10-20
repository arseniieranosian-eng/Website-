import type { AUDIT_CS, AUDIT_VIDEO } from '../data/audit-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD for /audit-zdarma/ (brief of 20.10.2026). Service describes exactly what the audit contains
// (technical errors): nothing about keywords, competitors, maps, AI or speed. Offer price 0 CZK; consultation prices
// never enter this markup. No AggregateRating, no Review. VideoObject only while the sample video is on the page.
export function auditCsSchemas(site: URL, C: typeof AUDIT_CS, video: typeof AUDIT_VIDEO, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('audit', lang));
  const m = META.audit[lang];
  const id = ids(site);
  const sc = C.schema;

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
      mainEntity: { '@id': `${url}#service` },
      ...(video ? { video: { '@id': `${url}#video` } } : {}),
    },
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: sc.serviceName,
      serviceType: sc.serviceType,
      description: C.summary,
      provider: { '@id': id.person },
      areaServed: sc.areaServed,
      availableLanguage: sc.availableLanguage,
      url,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'CZK', url, deliveryLeadTime: { '@type': 'QuantitativeValue', value: 24, unitCode: 'HUR' } },
    },
    {
      '@type': 'Quotation',
      '@id': `${url}#quote-1`,
      text: C.quote.text,
      creator: { '@id': id.person },
      inLanguage: lang,
      isPartOf: { '@id': `${url}#webpage` },
    },
    {
      '@type': 'HowTo',
      '@id': `${url}#howto`,
      name: sc.howToName,
      totalTime: 'PT24H',
      step: C.stages.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
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
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
