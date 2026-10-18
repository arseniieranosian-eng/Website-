import { META } from '../i18n/meta';
import { NOINDEX, PARENT, alternatesFor, path, type Lang, type PageKey } from '../i18n/routes';

export interface Crumb {
  name: string;
  path: string;
}

export function crumbsFor(key: PageKey, lang: Lang): Crumb[] {
  const chain: PageKey[] = [];
  for (let k: PageKey | undefined = key; k && k !== 'home'; k = PARENT[k]) chain.unshift(k);
  return [{ name: META.home[lang].name, path: path('home', lang) }, ...chain.map((k) => ({ name: META[k][lang].name, path: path(k, lang) }))];
}

// Everything the base layout needs for a regular (non-blog-post) page.
export function pageProps(key: PageKey, lang: Lang) {
  const m = META[key][lang];
  return {
    lang,
    pageKey: key,
    title: m.title,
    description: m.description,
    path: path(key, lang),
    alternates: alternatesFor(key),
    breadcrumbs: key === 'home' ? null : crumbsFor(key, lang),
    noindex: NOINDEX.includes(key),
  };
}
