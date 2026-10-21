import type { APIRoute } from 'astro';
import { DEFAULT_LANG, LANGS, NOINDEX, PAGE_KEYS, ROUTES, alternatesFor, langsFor, type Lang } from '../i18n/routes';
import { dedicatedPosts } from '../data/blog-posts';
import { allPosts, postAlternates, postsByLang, postUrl } from '../lib/blog';

// sitemap.xml with every language version and xhtml:link hreflang alternates.
export const GET: APIRoute = async ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const entries: { loc: string; alternates: Partial<Record<Lang, string>>; lastmod?: string }[] = [];

  for (const key of PAGE_KEYS) {
    if (NOINDEX.includes(key)) continue;
    if (key === 'blog') {
      // Blog index: only the languages that already have posts (an empty index is noindex).
      const withPosts: Lang[] = [];
      for (const lang of LANGS) if ((await postsByLang(lang)).length + dedicatedPosts(lang).length) withPosts.push(lang);
      const alternates = Object.fromEntries(withPosts.map((l) => [l, ROUTES.blog[l]]));
      for (const lang of withPosts) entries.push({ loc: ROUTES.blog[lang], alternates });
      continue;
    }
    for (const lang of langsFor(key)) entries.push({ loc: ROUTES[key][lang], alternates: alternatesFor(key) });
  }
  for (const post of await allPosts()) {
    entries.push({
      loc: postUrl(post),
      alternates: await postAlternates(post),
      lastmod: (post.data.updated ?? post.data.date).toISOString().slice(0, 10),
    });
  }

  const links = (alt: Partial<Record<Lang, string>>) => {
    const langs = LANGS.filter((l) => alt[l]);
    if (langs.length < 2) return '';
    const out = langs.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${abs(alt[l]!)}"/>`);
    if (alt[DEFAULT_LANG]) out.push(`<xhtml:link rel="alternate" hreflang="x-default" href="${abs(alt[DEFAULT_LANG]!)}"/>`);
    return out.join('');
  };

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map((e) => `<url><loc>${abs(e.loc)}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}${links(e.alternates)}</url>`)
  .join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
