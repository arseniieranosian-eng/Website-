import { POST_PROFMGMT_PUBLISHED } from '../data/post-profile-mgmt-cs';
import type { POST_PROFMGMT_CS } from '../data/post-profile-mgmt-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the blog article "Jednorázové nastavení profilů, nebo průběžná správa v mapách?": WebPage + BlogPosting + FAQPage (4 questions, 1:1 with the visible text);
// BreadcrumbList and the global graph (Person, WebSite) come from the layout. No HowTo (the steps are a plain list), no Review / Rating, no Quotation, no LocalBusiness / Dentist, no Product / Offer, no VideoObject.
export function postProfileMgmtSchemas(site: URL, C: typeof POST_PROFMGMT_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postProfileMgmt', lang));
  const m = META.postProfileMgmt[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title.replace(/ \| Eranosian$/, ''), description: m.description, inLanguage: 'cs-CZ', isPartOf: { '@id': id.website }, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, description: m.description, inLanguage: 'cs-CZ', author: { '@id': id.person }, datePublished: POST_PROFMGMT_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src) },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
