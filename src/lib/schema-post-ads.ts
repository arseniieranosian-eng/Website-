import { POST_ADS_PUBLISHED } from '../data/post-ads-cs';
import type { POST_ADS_CS } from '../data/post-ads-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids, quotationSchema } from './schema';

// Page-specific JSON-LD of the blog article "SEO a reklama": WebPage + BlogPosting (relatedLink → Start) + two Quotations (the author's and
// the PPC specialist's, whose Person node carries his Instagram) + FAQPage; BreadcrumbList and the global graph come from the layout.
// No HowTo, no Service / Offer, no ratings, no prices.
export function postAdsSchemas(site: URL, C: typeof POST_ADS_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postAds', lang));
  const m = META.postAds[lang];
  const id = ids(site);
  const q2 = C.quote2Person;
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
      datePublished: POST_ADS_PUBLISHED,
      dateModified: opts.modified,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      image: abs(C.cover.src),
      about: C.schema.about,
      relatedLink: abs(path('start', lang)),
    },
    quotationSchema(url, id.person, C.quote1, lang),
    { '@type': 'Quotation', '@id': `${url}#quote-2`, text: C.quote2, creator: { '@id': `${url}#ppc` }, inLanguage: lang, isPartOf: { '@id': `${url}#webpage` } },
    { '@type': 'Person', '@id': `${url}#ppc`, name: q2.name, jobTitle: q2.role, sameAs: [q2.instagram] },
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
