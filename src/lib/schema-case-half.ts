import { CASE_HALF_PUBLISHED, CASE_HALF_SERIES } from '../data/case-half-cs';
import type { CASE_HALF_CS } from '../data/case-half-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the half-year case study (cs): WebPage (relatedLink → Part 2) + Article (part of the case series) + the series
// node + two Quotations (the author's and the agency owner's) + the owner (Person with Instagram and photo) + two ImageObjects
// (owner photo, language-share screenshot) + FAQPage; BreadcrumbList comes from the layout. No Service / Offer, no Review,
// no ratings, no client name, no absolute numbers. Everything repeats the visible text.
export function caseHalfSchemas(site: URL, C: typeof CASE_HALF_CS, opts: { modified: string; authorQuote: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('caseHalf', lang));
  const m = META.caseHalf[lang];
  const id = ids(site);
  const svc = (k: 'start' | 'fullSeo' | 'maps') => ({ '@id': abs(path(k, lang) + '#service') });
  const oq = C.ownerQuote;

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
      primaryImageOfPage: abs('/images/pripadove-studie/og-seo-prekladatelska-agentura.png'),
      mainEntity: { '@id': `${url}#article` },
      relatedLink: abs(path('caseSeason', lang)),
    },
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: C.h1,
      inLanguage: lang,
      author: { '@id': id.person },
      datePublished: CASE_HALF_PUBLISHED,
      dateModified: opts.modified,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      isPartOf: { '@id': CASE_HALF_SERIES.id },
      image: [{ '@id': `${url}#img-languages` }],
      about: C.schema.about,
      mentions: [svc('start'), svc('fullSeo'), svc('maps')],
    },
    { '@type': 'CreativeWorkSeries', '@id': CASE_HALF_SERIES.id, name: CASE_HALF_SERIES.name },
    { '@type': 'Quotation', '@id': `${url}#quote-1`, text: opts.authorQuote, creator: { '@id': id.person }, inLanguage: lang, isPartOf: { '@id': `${url}#webpage` } },
    { '@type': 'Quotation', '@id': `${url}#quote-2`, text: oq.text, creator: { '@id': `${url}#owner` }, inLanguage: lang, isPartOf: { '@id': `${url}#webpage` } },
    {
      '@type': 'Person',
      '@id': `${url}#owner`,
      name: oq.name,
      jobTitle: oq.role,
      image: { '@id': `${url}#img-owner` },
      sameAs: [oq.instagram],
    },
    { '@type': 'ImageObject', '@id': `${url}#img-owner`, contentUrl: abs(oq.photo.src), caption: oq.photo.alt, width: oq.photo.width, height: oq.photo.height },
    { '@type': 'ImageObject', '@id': `${url}#img-languages`, contentUrl: abs(C.langImage.src), caption: C.langImage.caption, width: C.langImage.width, height: C.langImage.height },
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
