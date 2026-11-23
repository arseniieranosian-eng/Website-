import { POST_WEBMAPS_PUBLISHED } from '../data/post-dental-web-maps-cs';
import type { POST_WEBMAPS_CS } from '../data/post-dental-web-maps-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the blog article "Vlastní web, mapy a katalogy: kdy se hodí co pro zubní ordinaci?": WebPage + BlogPosting + FAQPage (4 questions, 1:1 with the visible text);
// BreadcrumbList and the global graph (Person, WebSite) come from the layout. No HowTo (the steps are a plain list), no Review / Rating, no Quotation, no LocalBusiness / Dentist, no Product / Offer, no VideoObject.
export function postDentalWebMapsSchemas(site: URL, C: typeof POST_WEBMAPS_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postDentalWebMaps', lang));
  const m = META.postDentalWebMaps[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title.replace(/ \| Eranosian$/, ''), description: m.description, inLanguage: 'cs-CZ', isPartOf: { '@id': id.website }, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, description: m.description, inLanguage: 'cs-CZ', author: { '@id': id.person }, datePublished: POST_WEBMAPS_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src) },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
