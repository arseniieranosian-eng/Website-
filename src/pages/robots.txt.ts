import type { APIRoute } from 'astro';

// Thank-you pages are excluded via <meta name="robots" content="noindex">, not Disallow,
// so crawlers can actually read that directive.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
