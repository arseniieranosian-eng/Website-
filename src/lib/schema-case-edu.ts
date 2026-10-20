import { CASE_EDU_PUBLISHED } from '../data/case-edu-ru';
import type { Lang } from '../i18n/routes';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD for the anonymised education-platform case (ru). Article + BreadcrumbList + FAQPage. No Service /
// Offer, no Review, no ratings, no client name. The author's "together with a colleague" role stays in the visible text;
// Article.author is the Person.
export function caseEduSchemas(site: URL, C: { lang: Lang; h1: string; faq: readonly { q: string; a: string }[]; schema: { about: readonly string[] } }, opts: { modified: string; image: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('caseEdu', lang));
  const m = META.caseEdu[lang];
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
    },
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: C.h1,
      inLanguage: lang,
      author: { '@id': id.person },
      datePublished: CASE_EDU_PUBLISHED,
      dateModified: opts.modified,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      about: C.schema.about,
      mentions: [{ '@id': abs(path('start', lang) + '#service') }],
    },
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
