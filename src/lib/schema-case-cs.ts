import { CASE_PUBLISHED } from '../data/case-cs';
import { CASE_SEASON_CS } from '../data/case-season-cs';
import type { CASE_CS } from '../data/case-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD for the anonymised case study (cs): Article + ImageObject (the one real screenshot) + HowTo (the six
// steps) + Quotation + FAQPage. The two charts are HTML/SVG with real text on the page, so they are not ImageObjects. No Service / Offer,
// no Review with a client name, no ratings, no video. The client's name appears nowhere.
export function caseCsSchemas(site: URL, C: typeof CASE_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('caseKb', lang));
  const m = META.caseKb[lang];
  const id = ids(site);
  const svc = (k: 'start' | 'fullSeo' | 'maps') => ({ '@id': abs(path(k, lang) + '#service') });

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
      relatedLink: abs(path('caseSeason', lang)),
    },
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: C.h1,
      inLanguage: lang,
      author: { '@id': id.person },
      datePublished: CASE_PUBLISHED,
      dateModified: opts.modified,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      isPartOf: { '@id': CASE_SEASON_CS.series.id },
      image: [{ '@id': `${url}#img-faq` }],
      about: C.schema.about,
      mentions: [svc('start'), svc('fullSeo'), svc('maps')],
    },
    { '@type': 'CreativeWorkSeries', '@id': CASE_SEASON_CS.series.id, name: CASE_SEASON_CS.series.name },
    {
      '@type': 'ImageObject',
      '@id': `${url}#img-faq`,
      contentUrl: abs(C.faqImage.src),
      caption: C.faqImage.caption,
      width: C.faqImage.width,
      height: C.faqImage.height,
    },
    {
      '@type': 'HowTo',
      name: C.stepsTitle,
      step: C.steps.map((s) => ({ '@type': 'HowToStep', name: s.title, text: s.text })),
    },
    {
      '@type': 'Quotation',
      text: C.quote.text,
      creator: { '@id': id.person },
      inLanguage: lang,
      isPartOf: { '@id': `${url}#article` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
