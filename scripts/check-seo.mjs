// Post-build SEO checks on dist/. Fails (exit 1) on any problem.
//  - unique <title>, meta description and H1 across all indexable pages; exactly one H1 per page
//  - canonical on every indexable page
//  - hreflang alternates are reciprocal, point to existing pages and include x-default when cs exists
//  - breadcrumbs on every inner page
//  - every internal link resolves to a built page
//  - sitemap.xml lists exactly the indexable pages
//  - global JSON-LD: Person / ProfessionalService / WebSite identical on every page, tied to the
//    social profiles via sameAs, every {"@id"} reference resolves, social links are present in the HTML
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const errors = [];
const err = (m) => errors.push(m);

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
  });

const urlOf = (file) => {
  const rel = relative(DIST, file).split(sep).join('/');
  if (rel === '404.html') return '/404/';
  return '/' + rel.replace(/index\.html$/, '');
};

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const attr = (tag, name) => (tag.match(new RegExp(`\\s${name}="([^"]*)"`)) || [])[1];
const strip = (s) => decode(s.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();

const pages = new Map();
for (const file of walk(DIST)) {
  const html = readFileSync(file, 'utf8');
  const url = urlOf(file);
  const title = strip((html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '');
  const metaTags = html.match(/<meta [^>]*>/g) || [];
  const linkTags = html.match(/<link [^>]*>/g) || [];
  const description = decode(attr(metaTags.find((m) => attr(m, 'name') === 'description') || '', 'content') || '');
  const noindex = metaTags.some((m) => attr(m, 'name') === 'robots' && /noindex/.test(attr(m, 'content')));
  const canonical = attr(linkTags.find((l) => attr(l, 'rel') === 'canonical') || '', 'href');
  const alternates = Object.fromEntries(
    linkTags.filter((l) => attr(l, 'rel') === 'alternate' && attr(l, 'hreflang')).map((l) => [attr(l, 'hreflang'), attr(l, 'href')]),
  );
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => strip(m[1]));
  const hrefs = [...html.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => decode(m[1]));
  const hasCrumbs = /class="crumbs/.test(html) && /"BreadcrumbList"/.test(html);
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => {
    try { return JSON.parse(m[1]); } catch { err(`${url}: invalid JSON-LD`); return null; }
  }).filter(Boolean);
  const socialLinks = [...html.matchAll(/<a [^>]*href="(https:\/\/www\.(?:linkedin|instagram)\.com[^"]*)"[^>]*rel="me/g)].map((m) => m[1]);
  pages.set(url, { ld, socialLinks, url, title, description, noindex, canonical, alternates, h1s, hrefs, hasCrumbs });
}

const pathOf = (href) => {
  try { return new URL(href).pathname; } catch { return href; }
};

const indexable = [...pages.values()].filter((p) => !p.noindex && p.url !== '/404/');
for (const field of ['title', 'description']) {
  const seen = new Map();
  for (const p of indexable) {
    if (!p[field]) err(`${p.url}: missing ${field}`);
    else if (seen.has(p[field])) err(`duplicate ${field} on ${p.url} and ${seen.get(p[field])}: "${p[field]}"`);
    else seen.set(p[field], p.url);
  }
}
const h1seen = new Map();
for (const p of pages.values()) {
  if (p.h1s.length !== 1) err(`${p.url}: expected 1 H1, found ${p.h1s.length}`);
  if (p.noindex || p.url === '/404/') continue;
  const h = p.h1s[0];
  if (h1seen.has(h)) err(`duplicate H1 on ${p.url} and ${h1seen.get(h)}: "${h}"`);
  else h1seen.set(h, p.url);
}

for (const p of indexable) {
  if (!p.canonical) err(`${p.url}: missing canonical`);
  else if (pathOf(p.canonical) !== p.url) err(`${p.url}: canonical points to ${p.canonical}`);
  const isHome = ['/', '/en/', '/ru/'].includes(p.url);
  if (!isHome && !p.hasCrumbs) err(`${p.url}: missing breadcrumbs (HTML + BreadcrumbList)`);

  const alts = Object.entries(p.alternates).filter(([l]) => l !== 'x-default');
  if (alts.length) {
    if (!alts.some(([, h]) => pathOf(h) === p.url)) err(`${p.url}: hreflang set lacks a self-reference`);
    if (p.alternates.cs && !p.alternates['x-default']) err(`${p.url}: hreflang missing x-default`);
    if (p.alternates['x-default'] && p.alternates['x-default'] !== p.alternates.cs) err(`${p.url}: x-default must equal the cs version`);
    for (const [lang, href] of alts) {
      const target = pages.get(pathOf(href));
      if (!target) { err(`${p.url}: hreflang ${lang} → missing page ${href}`); continue; }
      const back = Object.values(target.alternates).map(pathOf);
      if (!back.includes(p.url)) err(`${p.url}: hreflang ${lang} → ${target.url} is not reciprocal`);
    }
  }
}

for (const p of pages.values()) {
  for (const href of p.hrefs) {
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const path = href.split('#')[0].split('?')[0];
    if (!path) continue;
    if (pages.has(path)) continue;
    if (existsSync(join(DIST, path))) continue;
    err(`${p.url}: broken internal link ${href}`);
  }
}

// Global structured data
const BASE = ['Person', 'ProfessionalService', 'WebSite', 'ImageObject'];
let reference = null;
for (const p of pages.values()) {
  if (p.url === '/404/') continue;
  const nodes = p.ld.flatMap((d) => d['@graph'] ?? [d]);
  const base = BASE.map((t) => nodes.find((n) => n['@type'] === t));
  const missing = BASE.filter((_, i) => !base[i]);
  if (missing.length) { err(`${p.url}: JSON-LD lacks ${missing.join(', ')}`); continue; }
  const sig = JSON.stringify(base);
  if (reference === null) reference = { sig, url: p.url, person: base[0], business: base[1] };
  else if (sig !== reference.sig) err(`${p.url}: global JSON-LD differs from ${reference.url} (must be identical on every page)`);
  const idSet = new Set(nodes.map((n) => n['@id']).filter(Boolean));
  const walk = (v) => {
    if (Array.isArray(v)) return v.forEach(walk);
    if (v && typeof v === 'object') {
      const keys = Object.keys(v);
      if (keys.length === 1 && keys[0] === '@id' && !idSet.has(v['@id'])) {
        // A reference to an entity declared on another built page (e.g. /full-seo/#service) is fine.
        let other = false;
        try { const u = new URL(v['@id']); other = u.pathname !== p.url && pages.has(u.pathname); } catch {}
        if (!other) err(`${p.url}: unresolved JSON-LD reference ${v['@id']}`);
      }
      keys.forEach((k) => walk(v[k]));
    }
  };
  walk(nodes);
  if (p.noindex) continue;
  const same = new Set(base[0].sameAs ?? []);
  if (!same.size) err(`${p.url}: Person.sameAs is empty`);
  for (const u of same) {
    if (!(base[1].sameAs ?? []).includes(u)) err(`${p.url}: ${u} is in Person.sameAs but not in ProfessionalService.sameAs`);
    if (!p.socialLinks.some((l) => l === u)) err(`${p.url}: sameAs profile ${u} is not linked (rel="me") in the page HTML`);
  }
}

// Forms: the anti-spam field must be invisible to people and assistive technology (aria-hidden, inert, no label)
for (const file of walk(DIST)) {
  const html = readFileSync(file, 'utf8');
  for (const m of html.matchAll(/<div class="hp"[^>]*>([\s\S]*?)<\/div>/g)) {
    if (!/aria-hidden="true"/.test(m[0]) || !/\binert\b/.test(m[0]) || /<label/.test(m[1])) err(`${urlOf(file)}: honeypot field must be aria-hidden, inert and unlabeled`);
  }
}

const sitemapFile = join(DIST, 'sitemap.xml');
if (!existsSync(sitemapFile)) err('sitemap.xml missing');
else {
  const locs = new Set([...readFileSync(sitemapFile, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => pathOf(m[1])));
  for (const p of indexable) if (!locs.has(p.url)) err(`sitemap.xml is missing ${p.url}`);
  for (const l of locs) if (!indexable.some((p) => p.url === l)) err(`sitemap.xml lists non-indexable or missing ${l}`);
}
if (!existsSync(join(DIST, 'robots.txt'))) err('robots.txt missing');

if (errors.length) {
  console.error(`\nSEO check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`SEO check passed: ${pages.size} pages, ${indexable.length} indexable.`);
