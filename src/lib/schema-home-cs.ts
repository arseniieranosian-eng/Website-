import type { HOME_CS } from '../data/home-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of the Czech home page: WebPage (about the business) + FAQPage. Person, ProfessionalService (with the
// service catalogue, in menu order) and WebSite come from the global graph. No prices, no ratings, no reviews, no
// BreadcrumbList (home), no SearchAction (there is no internal search).
export function homeCsSchemas(site: URL, C: typeof HOME_CS, opts: { modified: string }) {
  const lang = C.lang;
  const url = new URL(path('home', lang), site).href;
  const m = META.home[lang];
  const id = ids(site);
  return [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: m.title,
      description: m.description,
      inLanguage: lang,
      isPartOf: { '@id': id.website },
      about: { '@id': id.business },
      dateModified: opts.modified,
    },
    // The two pull quotes shown on the page (word for word), authored by the Person.
    ...Object.values(C.quotes).map((text) => ({ '@type': 'Quotation', text, creator: { '@id': id.person }, inLanguage: lang, isPartOf: { '@id': `${url}#webpage` } })),
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
