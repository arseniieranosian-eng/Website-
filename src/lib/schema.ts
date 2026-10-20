import { SITE } from '../data/site';
import type { FaqItem } from '../data/faq';
import type { Review } from '../data/reviews';
import type { Lang } from '../i18n/routes';

const abs = (site: URL, p: string) => new URL(p, site).href;

export const ids = (site: URL) => ({
  person: abs(site, '/#arsenii'),
  business: abs(site, '/#business'),
  website: abs(site, '/#website'),
});

// Language-tagged value so one entity can carry cs/en/ru text.
type Tagged = { '@language': string; '@value': string };
const knowsAbout = (): (string | Tagged)[] =>
  SITE.knowsAbout.flatMap((k): (string | Tagged)[] => (typeof k === 'string' ? [k] : langValue(k)));
const langValue = (v: Record<Lang, string>) => (['cs', 'en', 'ru'] as Lang[]).map((l) => ({ '@language': l, '@value': v[l] }));

// Global entity graph, emitted on every page. It is deliberately identical on all
// pages and languages (stable @id, stable url) so the person, the business and
// the website resolve to ONE entity, tied to the social profiles through sameAs.
// Page-specific markup (FAQPage, Service, BlogPosting …) is added per page and
// references these @ids.
export function baseGraph(site: URL) {
  const id = ids(site);
  const home = abs(site, '/');
  const sameAs = SITE.socials.map((s) => s.url);
  const image = {
    '@type': 'ImageObject',
    '@id': abs(site, '/#photo'),
    url: abs(site, SITE.photo),
    contentUrl: abs(site, SITE.photo),
    width: 900,
    height: 1125,
    caption: SITE.person,
  };
  const logo = {
    '@type': 'ImageObject',
    '@id': abs(site, '/#logo'),
    url: abs(site, '/images/logo.png'),
    contentUrl: abs(site, '/images/logo.png'),
    width: 762,
    height: 487,
    caption: SITE.brand,
  };
  return [
    {
      '@type': 'Person',
      '@id': id.person,
      name: SITE.person,
      givenName: 'Arsenii',
      familyName: 'Eranosian',
      alternateName: SITE.alternateNames,
      jobTitle: langValue(SITE.jobTitle),
      description: langValue(SITE.description),
      url: home,
      mainEntityOfPage: { '@id': id.website },
      image: { '@id': image['@id'] },
      email: SITE.email,
      telephone: SITE.phone,
      homeLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressCountry: SITE.country } },
      knowsLanguage: SITE.languages,
      knowsAbout: knowsAbout(),
      worksFor: { '@id': id.business },
      sameAs,
    },
    {
      '@type': 'ProfessionalService',
      '@id': id.business,
      name: SITE.brand,
      description: langValue(SITE.description),
      url: home,
      image: { '@id': image['@id'] },
      logo: { '@id': logo['@id'] },
      email: SITE.email,
      telephone: SITE.phone,
      identifier: { '@type': 'PropertyValue', propertyID: 'IČO', value: SITE.ico },
      founder: { '@id': id.person },
      employee: { '@id': id.person },
      address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressCountry: SITE.country },
      areaServed: [{ '@type': 'Country', name: 'Czech Republic' }, { '@type': 'Continent', name: 'Europe' }],
      availableLanguage: SITE.languages,
      contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', email: SITE.email, telephone: SITE.phone, availableLanguage: SITE.languages },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Služby',
        itemListElement: ['/audit-zdarma/', '/konzultace/', '/start-3-mesice/', '/full-seo/', '/mapy/'].map((p) => ({ '@id': abs(site, p) + '#service' })),
      },
      knowsAbout: knowsAbout(),
      sameAs,
    },
    {
      '@type': 'WebSite',
      '@id': id.website,
      url: home,
      name: SITE.brand,
      description: langValue(SITE.description),
      inLanguage: ['cs', 'en', 'ru'],
      publisher: { '@id': id.business },
      copyrightHolder: { '@id': id.person },
    },
    image,
    logo,
  ];
}

// `self` is the page URL; the list gets the id `<self>#breadcrumb` so a WebPage can reference it.
// The last crumb is the current page and carries no `item` (as Google recommends).
export const breadcrumbSchema = (site: URL, items: { name: string; path: string }[], self?: string) => ({
  '@type': 'BreadcrumbList',
  ...(self ? { '@id': abs(site, self) + '#breadcrumb' } : {}),
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    ...(i < items.length - 1 ? { item: abs(site, it.path) } : {}),
  })),
});

export const faqSchema = (items: FaqItem[], lang: Lang) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q[lang],
    acceptedAnswer: { '@type': 'Answer', text: f.a[lang] },
  })),
});

export const serviceSchema = (site: URL, name: string, description: string, url: string) => ({
  '@type': 'Service',
  '@id': abs(site, url) + '#service',
  name,
  description,
  url: abs(site, url),
  provider: { '@id': ids(site).business },
  areaServed: { '@type': 'Country', name: 'Czech Republic' },
});

// Only reviews with a named author and a rating are marked up. Star snippets
// are not promised: Google generally does not show them for self-serving reviews.
export const reviewSchema = (site: URL, reviews: Review[], lang: Lang) => {
  const real = reviews.filter((r) => !r.sample && r.author && r.rating);
  if (!real.length) return null;
  return {
    '@type': 'ProfessionalService',
    '@id': ids(site).business,
    review: real.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      ...(r.date ? { datePublished: r.date } : {}),
      reviewBody: r.text[lang],
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
    })),
  };
};

export const articleSchema = (
  site: URL,
  a: { title: string; description: string; url: string; date: Date; updated?: Date; lang: Lang },
) => ({
  '@type': 'BlogPosting',
  headline: a.title,
  description: a.description,
  url: abs(site, a.url),
  mainEntityOfPage: abs(site, a.url),
  datePublished: a.date.toISOString(),
  dateModified: (a.updated ?? a.date).toISOString(),
  inLanguage: a.lang,
  image: abs(site, SITE.photo),
  author: { '@id': ids(site).person },
  publisher: { '@id': ids(site).business },
});

// The author's pull quote as a Quotation node: `@id` `<page url>#quote-1`, text word for word as on the page.
export const quotationSchema = (url: string, personId: string, text: string, lang: Lang) => ({
  '@type': 'Quotation',
  '@id': `${url}#quote-1`,
  text,
  creator: { '@id': personId },
  inLanguage: lang,
  isPartOf: { '@id': `${url}#webpage` },
});
