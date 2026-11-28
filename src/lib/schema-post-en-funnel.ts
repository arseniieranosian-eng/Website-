import { META } from '../i18n/meta';
import { path, type PageKey } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the English funnel articles (brief of 28.11.2026): WebPage + BlogPosting + FAQPage (1:1 with the visible questions). The breadcrumbs and the global graph (Person, WebSite) come from the layout.
// No HowTo (the steps are a plain list), no Review / Rating, no Quotation, no LocalBusiness / ProfessionalService, no Product / Offer, no VideoObject, no third-party Person.
export function postEnFunnelSchemas(site: URL, key: PageKey, C: { cover: { src: string }; faq: readonly { q: string; a: string }[] }, opts: { published: string; modified: string }) {
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path(key, 'en'));
  const m = META[key].en;
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title.replace(/ \| Eranosian$/, ''), description: m.description, inLanguage: 'en', isPartOf: { '@id': id.website }, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, description: m.description, inLanguage: 'en', author: { '@id': id.person }, datePublished: opts.published, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src) },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
