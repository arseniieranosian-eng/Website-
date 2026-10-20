import type { ABOUT_CS } from '../data/about-cs';
import { META } from '../i18n/meta';
import { path } from '../i18n/routes';
import { ids } from './schema';

// Page-specific JSON-LD of /o-mne/: ProfilePage (mainEntity = the global Person) + FAQPage; BreadcrumbList comes from the
// layout. Person / ProfessionalService / WebSite are in the global graph (one graph per site). Nothing about clients,
// experience or employers (the page describes them anonymously, the markup must not reveal them), no ratings, no reviews.
export function aboutCsSchemas(site: URL, C: typeof ABOUT_CS, opts: { modified: string }) {
  const lang = C.lang;
  const url = new URL(path('about', lang), site).href;
  const m = META.about[lang];
  const id = ids(site);
  return [
    {
      '@type': 'ProfilePage',
      '@id': `${url}#webpage`,
      url,
      name: m.title,
      description: m.description,
      inLanguage: lang,
      dateModified: opts.modified,
      isPartOf: { '@id': id.website },
      breadcrumb: { '@id': `${url}#breadcrumb` },
      mainEntity: { '@id': id.person },
    },
    {
      '@type': 'FAQPage',
      mainEntity: C.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}
