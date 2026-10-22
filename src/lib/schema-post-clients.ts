import { POST_CLIENTS_PUBLISHED } from '../data/post-clients-cs';
import type { POST_CLIENTS_CS } from '../data/post-clients-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids, quotationSchema } from './schema';

// Page-specific JSON-LD of the blog article "Jak získat klienty pro překladatelskou agenturu": WebPage + BlogPosting (relatedLink → the free audit) + Quotation + FAQPage; BreadcrumbList and the global graph come from the layout. No HowTo, no
// Service / Offer on the article itself, no ratings, no prices.
export function postClientsSchemas(site: URL, C: typeof POST_CLIENTS_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postClients', lang));
  const m = META.postClients[lang];
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
      datePublished: POST_CLIENTS_PUBLISHED,
      dateModified: opts.modified,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      image: abs(C.cover.src),
      about: C.schema.about,
      relatedLink: abs(path('audit', lang)),
    },
    quotationSchema(url, id.person, C.quote, lang),
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
