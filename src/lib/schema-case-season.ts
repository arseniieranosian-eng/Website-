import { CASE_SEASON_PUBLISHED } from '../data/case-season-ru';
import type { Lang } from '../i18n/routes';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD for Part 2 of the translation-agency case (ru and cs). WebPage (relatedLink to Part 1) + Article (part of the
// case series) + the series node + BreadcrumbList (from the layout) + FAQPage. No Service / Offer (the page is not a service),
// no Review, no ratings, no client name, no VideoObject.
export function caseSeasonSchemas(site: URL, C: { lang: Lang; h1: string; faq: readonly { q: string; a: string }[]; series: { id: string; name: string }; schema: { about: readonly string[] } }, opts: { modified: string; image: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('caseSeason', lang));
  const m = META.caseSeason[lang];
  const id = ids(site);

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
      primaryImageOfPage: abs(opts.image),
      mainEntity: { '@id': `${url}#article` },
      relatedLink: abs(path('caseKb', lang)),
    },
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: C.h1,
      inLanguage: lang,
      author: { '@id': id.person },
      datePublished: CASE_SEASON_PUBLISHED,
      dateModified: opts.modified,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      isPartOf: { '@id': C.series.id },
      about: C.schema.about,
      mentions: [{ '@id': abs(path('start', lang) + '#service') }, { '@id': abs(path('fullSeo', lang) + '#service') }],
    },
    { '@type': 'CreativeWorkSeries', '@id': C.series.id, name: C.series.name },
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
