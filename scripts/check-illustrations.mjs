// Rule of the author (01.11.2026): at least two illustrations (inline SVG drawings or images, the logo not counted) in <main> of every page.
// When a page fails, add it to src/lib/page-art.ts (the base layout then adds decorative drawings).
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const walk = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : n === 'index.html' ? [p] : []; });
// Exception of the author (02.11.2026): the FAQ page in every language has no illustrations.
const EXEMPT = new Set(['dist/caste-dotazy/index.html', 'dist/en/faq/index.html', 'dist/ru/voprosy-i-otvety/index.html', 'dist/uk/pytannia-ta-vidpovidi/index.html']);
const bad = [];
for (const f of walk('dist')) {
  if (EXEMPT.has(f)) continue;
  const h = readFileSync(f, 'utf8');
  const m = h.match(/<main[\s\S]*?<\/main>/);
  if (!m) continue;
  if (/<meta name="robots" content="[^"]*noindex/.test(h) && /<meta http-equiv="refresh"/.test(h)) continue; // pure redirects
  const n = (m[0].match(/<svg\b/g) || []).length + (m[0].match(/<img\b/g) || []).length;
  if (n < 2) bad.push(`${f.replace(/^dist/, '').replace(/index\.html$/, '')} (${n})`);
}
if (bad.length) { console.error(`✗ check-illustrations: fewer than two illustrations on ${bad.length} page(s):\n  - ` + bad.join('\n  - ')); process.exit(1); }
console.log('✓ check-illustrations: every page has at least two illustrations');
