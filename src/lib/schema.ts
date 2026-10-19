import { SITE } from '../data/site';
import type { FaqItem } from '../data/faq';
import type { Review } from '../data/reviews';
import { path, type Lang } from '../i18n/routes';

const abs = (site: URL, p: string) => new URL(p, site).href;

export const ids = (site: URL) => ({
  person: abs(site, '/#person'),
  business: abs(site, '/#business'),
  website: abs(site, '/#website'),
});

// Present on every page so entity references resolve.
export function baseGraph(site: URL, lang: Lang) {
  const id = ids(site);
  return [
    {
      '@type': 'Person',
      '@id': id.person,
      name: SITE.person,
      jobTitle: SITE.jobTitle[lang],
      url: abs(site, path('about', lang)),
      image: abs(site, SITE.photo),
      knowsLanguage: SITE.languages,
      worksFor: { '@id': id.business },
      sameAs: SITE.socials.map((s) => s.url),
    },
    {
      '@type': 'ProfessionalService',
      '@id': id.business,
      name: SITE.brand,
      url: abs(site, path('home', lang)),
      image: abs(site, SITE.photo),
      email: SITE.email,
      telephone: SITE.phone,
      founder: { '@id': id.person },
      address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressCountry: SITE.country },
      areaServed: { '@type': 'Country', name: 'Czech Republic' },
      availableLanguage: SITE.languages,
    },
    {
      '@type': 'WebSite',
      '@id': id.website,
      url: abs(site, '/'),
      name: SITE.brand,
      inLanguage: ['cs', 'en', 'ru'],
      publisher: { '@id': id.business },
    },
  ];
}

export const breadcrumbSchema = (site: URL, items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: abs(site, it.path),
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
