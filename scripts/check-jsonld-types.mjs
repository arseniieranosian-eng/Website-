// No Quotation, HowTo, ProfessionalService or LocalBusiness (and its subtypes) in the JSON-LD of any built page (brief of 03.11.2026, P1.1).
// The author's quote is shown as visible text only; the business entity is the Person.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const walk = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : n.endsWith('.html') ? [p] : []; });
const BAD = new Set(['Quotation', 'HowTo', 'HowToStep', 'ProfessionalService', 'LocalBusiness', 'MedicalBusiness', 'Dentist', 'Product']);
const errors = [];
for (const f of walk('dist')) {
  const h = readFileSync(f, 'utf8');
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    const bad = new Set();
    const visit = (v) => { if (Array.isArray(v)) v.forEach(visit); else if (v && typeof v === 'object') { const t = v['@type']; for (const x of Array.isArray(t) ? t : [t]) if (BAD.has(x)) bad.add(x); Object.values(v).forEach(visit); } };
    visit(JSON.parse(m[1]));
    if (bad.size) errors.push(`${f.replace(/^dist/, '').replace(/index\.html$/, '')}: ${[...bad].join(', ')}`);
  }
}
if (errors.length) { console.error('✗ check-jsonld-types:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log('✓ check-jsonld-types: no Quotation / HowTo / ProfessionalService / LocalBusiness anywhere');
