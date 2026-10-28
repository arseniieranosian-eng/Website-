import { POST_SEO_PLAN_PUBLISHED } from '../data/post-seo-plan-cs';
import type { POST_SEO_PLAN_CS } from '../data/post-seo-plan-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the blog article "Jak vypadá SEO plán na 12 měsíců a co má obsahovat?": WebPage + BlogPosting (relatedLink → the landing page) + FAQPage;
// BreadcrumbList and the global graph come from the layout. No HowTo, no Service / Offer, no ratings, no Quotation.
export function postSeoPlanSchemas(site: URL, C: typeof POST_SEO_PLAN_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postSeoPlan', lang));
  const m = META.postSeoPlan[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, inLanguage: lang, author: { '@id': id.person }, datePublished: POST_SEO_PLAN_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src), about: C.schema.about, relatedLink: [abs(path('consulting', lang)), abs(path('postAccountingChannels', lang)), abs(path('postSeoAudit', lang)), abs(path('postSelectSpecialist', lang)), abs(path('postChoose', lang))] },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
