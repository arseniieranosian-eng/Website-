import { POST_REDIRECTS_PUBLISHED } from '../data/post-redirects-cs';
import type { POST_REDIRECTS_CS } from '../data/post-redirects-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids, quotationSchema } from './schema';

// Page-specific JSON-LD of the blog article "Přesměrování 301 a chyby 404": WebPage + BlogPosting + HowTo (the four visible steps of
// "Postup v kostce", word for word) + Quotation + FAQPage; BreadcrumbList and the global graph come from the layout. No Service / Offer,
// no ratings, no prices.
export function postRedirectsSchemas(site: URL, C: typeof POST_REDIRECTS_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postRedirects', lang));
  const m = META.postRedirects[lang];
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
      datePublished: POST_REDIRECTS_PUBLISHED,
      dateModified: opts.modified,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      image: abs(C.cover.src),
      about: C.schema.about,
      relatedLink: abs(path('audit', lang)),
    },
    {
      '@type': 'HowTo',
      '@id': `${url}#howto`,
      name: C.howToName,
      step: C.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: C.stepNames[i], text: s })),
    },
    quotationSchema(url, id.person, C.quote, lang),
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
