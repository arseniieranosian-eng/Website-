import { CASE_TYPO_PUBLISHED } from '../data/case-typo-ru';
import type { CASE_TYPO } from '../data/case-typo-ru';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD for the anonymised print-shop case (ru). Article + BreadcrumbList + FAQPage. No Service / Offer,
// no Review with a client, no ratings, no client name or domain. Figures only as they appear in the visible text.
export function caseTypoSchemas(site: URL, C: typeof CASE_TYPO, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('caseTypo', lang));
  const m = META.caseTypo[lang];
  const id = ids(site);
  const svc = (k: 'start' | 'fullSeo') => ({ '@id': abs(path(k, lang) + '#service') });

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
      datePublished: CASE_TYPO_PUBLISHED,
      dateModified: opts.modified,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      about: C.schema.about,
      mentions: [svc('start'), svc('fullSeo')],
    },
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
