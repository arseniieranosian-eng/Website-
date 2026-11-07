import { POST_WEAK_SEO_REALTY_PUBLISHED } from '../data/post-weak-seo-realty-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the blog article "Proč jsou ve vyhledávání vpředu i realitní kanceláře se slabým SEO?": WebPage + BlogPosting + FAQPage (1:1 with the visible FAQ);
// The Russian mirror has no related link (no Russian article about missing enquiries); same dates (07.11.2026). BreadcrumbList and the global graph (Person) come from the layout. No HowTo, no Service / Offer, no ratings, no Quotation, no VideoObject, no LocalBusiness / ProfessionalService.
type Content = { lang: 'cs' | 'ru'; cover: { src: string }; faq: { q: string; a: string }[]; schema: { about: string[] } };
export function postWeakSeoRealtySchemas(site: URL, C: Content, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postWeakSeoRealty', lang));
  const m = META.postWeakSeoRealty[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, inLanguage: lang, author: { '@id': id.person }, datePublished: POST_WEAK_SEO_REALTY_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src), about: C.schema.about, ...(lang === 'cs' ? { relatedLink: [abs(path('postRealtyNoLeads', lang))] } : {}) },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
