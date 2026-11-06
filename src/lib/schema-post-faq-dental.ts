import { POST_FAQ_DENTAL_PUBLISHED } from '../data/post-faq-dental-cs';
import type { POST_FAQ_DENTAL_CS } from '../data/post-faq-dental-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the blog article "Jak má vypadat FAQ na webu zubní ordinace?": WebPage + BlogPosting + FAQPage (1:1 with the visible FAQ);
// BreadcrumbList and the global graph come from the layout. No HowTo, no Service / Offer, no ratings, no Quotation, no VideoObject, no MedicalBusiness / Dentist.
export function postFaqDentalSchemas(site: URL, C: typeof POST_FAQ_DENTAL_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postFaqDental', lang));
  const m = META.postFaqDental[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, inLanguage: lang, author: { '@id': id.person }, datePublished: POST_FAQ_DENTAL_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src), about: C.schema.about, relatedLink: [abs(path('nicheDental', lang))] },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
