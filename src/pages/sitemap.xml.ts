import type { APIRoute } from 'astro';
import { DEFAULT_LANG, LANGS, NOINDEX, PAGE_KEYS, ROUTES, type Lang } from '../i18n/routes';
import { allPosts, postAlternates, postUrl } from '../lib/blog';

// sitemap.xml with every language version and xhtml:link hreflang alternates.
export const GET: APIRoute = async ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const entries: { loc: string; alternates: Partial<Record<Lang, string>>; lastmod?: string }[] = [];

  for (const key of PAGE_KEYS) {
    if (NOINDEX.includes(key)) continue;
    for (const lang of LANGS) entries.push({ loc: ROUTES[key][lang], alternates: ROUTES[key] });
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
