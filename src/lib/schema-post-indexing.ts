import { POST_INDEXING_PUBLISHED } from '../data/post-indexing-cs';
import type { POST_INDEXING_CS } from '../data/post-indexing-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids, quotationSchema } from './schema';

// Page-specific JSON-LD of the blog article: WebPage + BlogPosting + HowTo (step texts are the visible numbered steps, word for word)
// + Quotation + FAQPage; BreadcrumbList and the global graph (Person etc.) come from the layout. No Service / Offer, no ratings.
export function postIndexingSchemas(site: URL, C: typeof POST_INDEXING_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postIndexing', lang));
  const m = META.postIndexing[lang];
  const id = ids(site);
  const howSteps = [
    { name: C.schema.siteHowTo, text: C.siteSteps.join(' ') },
    ...C.gscBlocks.map((b) => ({ name: b.howTo, text: b.steps.join(' ') })),
  ];

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
      datePublished: POST_INDEXING_PUBLISHED,
      dateModified: opts.modified,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      image: abs(C.cover.src),
      about: C.schema.about,
      mentions: C.schema.mentions,
      relatedLink: abs(path('audit', lang)),
    },
    {
      '@type': 'HowTo',
      '@id': `${url}#howto`,
      name: C.schema.howToName,
      step: howSteps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
    },
    quotationSchema(url, id.person, C.quote, lang),
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
