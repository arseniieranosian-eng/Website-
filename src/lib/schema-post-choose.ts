import { POST_CHOOSE_PUBLISHED } from '../data/post-choose-cs';
import type { POST_CHOOSE_CS } from '../data/post-choose-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids, quotationSchema } from './schema';

// Page-specific JSON-LD of the blog article "Audit zdarma, konzultace, nebo Start": WebPage + BlogPosting (mentions the four service pages by
// their @id, relatedLink → the free audit) + Quotation + FAQPage; BreadcrumbList and the global graph come from the layout. No HowTo, no
// Service / Offer on the article itself, no ratings, no prices.
export function postChooseSchemas(site: URL, C: typeof POST_CHOOSE_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postChoose', lang));
  const m = META.postChoose[lang];
  const id = ids(site);
  const svc = (k: 'consulting' | 'start' | 'fullSeo' | 'maps') => ({ '@id': abs(path(k, lang) + '#service') });
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
      datePublished: POST_CHOOSE_PUBLISHED,
      dateModified: opts.modified,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      image: abs(C.cover.src),
      about: C.schema.about,
      mentions: [svc('consulting'), svc('start'), svc('fullSeo'), svc('maps')],
      relatedLink: abs(path('audit', lang)),
    },
    quotationSchema(url, id.person, C.quote, lang),
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
