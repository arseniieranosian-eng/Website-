import { POST_REDESIGN_PUBLISHED } from '../data/post-redesign-cs';
import type { POST_REDESIGN_CS } from '../data/post-redesign-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids, quotationSchema } from './schema';

// Page-specific JSON-LD of the blog article "Po redesignu klesla návštěvnost": WebPage + BlogPosting + Quotation + FAQPage
// (BreadcrumbList and the global graph come from the layout). HowTo from the visible numbered steps, no Service / Offer, no ratings.
export function postRedesignSchemas(site: URL, C: typeof POST_REDESIGN_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postRedesign', lang));
  const m = META.postRedesign[lang];
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
      mainEntity: { '@id': `${url}#article` },
    },
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: m.h1,
      inLanguage: lang,
      author: { '@id': id.person },
      datePublished: POST_REDESIGN_PUBLISHED,
      dateModified: opts.modified,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      image: abs(C.cover.src),
      about: C.schema.about,
      relatedLink: abs(path('audit', lang)),
    },
    {
      '@type': 'HowTo',
      '@id': `${url}#howto`,
      name: C.realHowToName,
      step: C.realSteps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: C.realStepNames[i], text: s })),
    },
    {
      '@type': 'HowTo',
      '@id': `${url}#howto-before`,
      name: C.beforeHowToName,
      step: C.before.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: C.beforeStepNames[i], text: s })),
    },
    quotationSchema(url, id.person, C.quote, lang),
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
