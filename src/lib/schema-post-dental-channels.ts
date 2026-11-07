import { POST_DENTAL_CHANNELS_PUBLISHED } from '../data/post-dental-channels-cs';
import type { POST_DENTAL_CHANNELS_CS } from '../data/post-dental-channels-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the blog article "Jak získat pacienty pro zubní ordinaci: přehled kanálů": WebPage + BlogPosting + FAQPage (1:1 with the visible FAQ);
// BreadcrumbList and the global graph (Person) come from the layout. No HowTo, no Service / Offer, no ratings, no Quotation, no VideoObject, no LocalBusiness / ProfessionalService / MedicalBusiness / Dentist.
export function postDentalChannelsSchemas(site: URL, C: typeof POST_DENTAL_CHANNELS_CS, opts: { modified: string }) {
  const lang = C.lang;
  const abs = (p: string) => new URL(p, site).href;
  const url = abs(path('postDentalChannels', lang));
  const m = META.postDentalChannels[lang];
  const id = ids(site);
  return [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: m.title, description: m.description, inLanguage: lang, dateModified: opts.modified, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#article` } },
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: m.h1, inLanguage: lang, author: { '@id': id.person }, datePublished: POST_DENTAL_CHANNELS_PUBLISHED, dateModified: opts.modified, mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(C.cover.src), about: C.schema.about, relatedLink: [abs(path('postFaqDental', lang))] },
    { '@type': 'FAQPage', mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
