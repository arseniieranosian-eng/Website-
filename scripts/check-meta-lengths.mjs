// Site-wide meta limits (14.11.2026, the author's decision): <title> at most 50 characters, meta description at most 130 characters, on every built page.
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
const un = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const pages = [];
(function walk(d) { for (const n of readdirSync(d)) { const p = join(d, n); if (statSync(p).isDirectory()) walk(p); else if (n === 'index.html') pages.push(p); } })('dist');
const errs = [];
for (const p of pages) {
  const h = readFileSync(p, 'utf8');
  const t = h.match(/<title>([\s\S]*?)<\/title>/); const d = h.match(/<meta name="description" content="([^"]*)"/);
  if (!t || !d) continue;
  const T = un(t[1]), D = un(d[1]);
  if (T.length > 50) errs.push(`${p}: title ${T.length} > 50`);
  if (D.length > 130) errs.push(`${p}: description ${D.length} > 130`);
}
if (errs.length) { console.error('check-meta-lengths: ' + errs.length + ' problems\n' + errs.slice(0, 30).join('\n')); process.exit(1); }
console.log(`check-meta-lengths OK (${pages.length} pages)`);
