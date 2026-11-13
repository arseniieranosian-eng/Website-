import { POST_ELECTRONICS_OBS_PUBLISHED } from '../data/post-electronics-obs-cs';
import type { POST_ELECTRONICS_OBS_CS } from '../data/post-electronics-obs-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the blog article "Co jsem zjistil na webech obchodů s elektronikou v Praze" (brief of 13.11.2026): WebPage + BlogPosting + FAQPage (4 questions, the text = the visible text);
// BreadcrumbList and Person (the author) come from the layout. No Review, AggregateRating, HowTo, VideoObject, Product / Offer, Quotation, LocalBusiness, ProfessionalService. The quote, the sources and the tables are not marked up.
export function postElectronicsObsSchemas(site: URL, C: typeof POST_ELECTRONICS_OBS_CS, opts: { modified: string }) {
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postElectronicsObs', C.lang));
  const m = META.postElectronicsObs[C.lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, inLanguage: 'cs-CZ', isPartOf: { '@id': id.website }, breadcrumb: { '@id': `${url}#breadcrumb` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, mainEntityOfPage: { '@id': `${url}#webpage` }, headline: m.h1, datePublished: POST_ELECTRONICS_OBS_PUBLISHED, dateModified: opts.modified, inLanguage: 'cs-CZ', author: { '@id': id.person } },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
