import { POST_REDESIGN_PLAN_PUBLISHED } from '../data/post-redesign-plan-cs';
import type { POST_REDESIGN_PLAN_CS } from '../data/post-redesign-plan-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the blog article "Jak zkontrolovat SEO před redesignem nebo migrací webu?": WebPage + BlogPosting (relatedLink → the landing page) + FAQPage;
// BreadcrumbList and the global graph come from the layout. No HowTo, no Service / Offer, no ratings, no Quotation.
export function postRedesignPlanSchemas(site: URL, C: typeof POST_REDESIGN_PLAN_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postRedesignPlan', lang));
  const m = META.postRedesignPlan[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, inLanguage: lang, author: { '@id': id.person }, datePublished: POST_REDESIGN_PLAN_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src), about: C.schema.about, relatedLink: [abs(path('consulting', lang)), abs(path('postAccountingChannels', lang)), abs(path('postRedirects', lang)), abs(path('postRedesign', lang)), abs(path('postNewSite', lang))] },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
