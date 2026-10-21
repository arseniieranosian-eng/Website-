import { GEO_PUBLISHED } from '../data/geo-cs';
import type { GEO_CS } from '../data/geo-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD for /seo-a-geo/ (cs). An informational hub: Article + DefinedTermSet + HowTo + FAQPage.
// There is deliberately NO Service / Offer (GEO/AEO is not a separate service and has no price), no ratings, no video.
export function geoCsSchemas(site: URL, C: typeof GEO_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('geo', lang));
  const m = META.geo[lang];
  const id = ids(site);
  const sc = C.schema;
  const svc = (k: 'consulting' | 'start' | 'fullSeo' | 'maps') => ({ '@id': abs(path(k, lang) + '#service') });
  const [geo, aeo] = C.what;

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
      mainEntity: { '@id': `${url}#article` },
    },
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: C.h1,
      inLanguage: lang,
      author: { '@id': id.person },
      datePublished: GEO_PUBLISHED,
      dateModified: opts.modified,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      image: C.examples.flatMap((ex) => ex.images.map((_, i) => ({ '@id': `${url}#img-${ex.id}-${i + 1}` }))),
      about: [{ '@id': `${url}#term-geo` }, { '@id': `${url}#term-aeo` }],
      mentions: [svc('consulting'), svc('start'), svc('fullSeo'), svc('maps')],
    },
    // The screenshots of Google answers (client covered): one ImageObject per file, caption = the visible caption.
    ...C.examples.flatMap((ex) => ex.images.map((im, i) => ({ '@type': 'ImageObject', '@id': `${url}#img-${ex.id}-${i + 1}`, contentUrl: abs(im.src), caption: ex.caption, width: im.width, height: im.height }))),
    {
      '@type': 'DefinedTermSet',
      '@id': `${url}#terms`,
      name: sc.termSetName,
      hasDefinedTerm: [
        { '@type': 'DefinedTerm', '@id': `${url}#term-geo`, name: geo.term, alternateName: sc.geoAlt, description: capitalize(geo.def), inDefinedTermSet: { '@id': `${url}#terms` } },
        { '@type': 'DefinedTerm', '@id': `${url}#term-aeo`, name: aeo.term, alternateName: sc.aeoAlt, description: capitalize(aeo.def), inDefinedTermSet: { '@id': `${url}#terms` } },
      ],
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

// The visible bullet reads "GEO: optimalizace …"; the term description is the same sentence starting with a capital.
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
