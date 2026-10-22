import { META } from '../i18n/meta';
import { path, type PageKey } from '../i18n/routes';
import { ids, quotationSchema } from './schema';

// Page-specific JSON-LD of the niche landing page: WebPage (name = title without the brand, about → Service) + Service (provider → Person,
// areaServed Praha, audience, no offers, no prices) + HowTo (the three visible steps) + Quotation + FAQPage (+ VideoObject only when the
// video, its chapters and the transcript exist). BreadcrumbList and the global graph come from the layout. No ratings, no manual Review.
export function nicheTranslationSchemas(site: URL, C: any, opts: { modified: string; key: PageKey; video: any }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path(opts.key, lang));
  const m = META[opts.key][lang];
  const id = ids(site);
  const V = opts.video;
  const v = V && V.transcript && V.recorded ? V : null;
  const node = (n: object) => n;
  return [
    node({
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: m.title.replace(/ \| Eranosian$/, ''),
      description: m.description,
      inLanguage: lang,
      datePublished: C.published,
      dateModified: opts.modified,
      author: { '@id': id.person },
      breadcrumb: { '@id': `${url}#breadcrumb` },
      about: { '@id': `${url}#service` },
      ...(v ? { video: { '@id': `${url}#video` } } : {}),
    }),
    node({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: C.schema.serviceName,
      provider: { '@id': id.person },
      areaServed: C.schema.areaServed,
      audience: { '@type': 'Audience', audienceType: C.schema.audience },
      url,
    }),
    node({
      '@type': 'HowTo',
      '@id': `${url}#howto`,
      name: C.coopHowToName,
      step: C.coopSteps.map((s: string, i: number) => ({ '@type': 'HowToStep', position: i + 1, name: C.coopStepNames[i], text: s })),
    }),
    quotationSchema(url, id.person, C.quote, lang),
    ...(v
      ? [node({
          '@type': 'VideoObject',
          '@id': `${url}#video`,
          name: v.intro,
          description: v.intro,
          thumbnailUrl: abs(v.poster),
          uploadDate: v.recorded.split('. ').reverse().map((x: string) => x.padStart(2, '0')).join('-'),
          duration: v.duration,
          embedUrl: `https://drive.google.com/file/d/${v.drive}/preview`,
          inLanguage: lang,
          transcript: v.transcript,
          author: { '@id': id.person },
          hasPart: (v.chapters ?? []).map((c: any) => ({ '@type': 'Clip', name: c.title, startOffset: c.start, endOffset: c.end, url: `${url}#video&t=${c.start}` })),
        })]
      : []),
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f: any) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
