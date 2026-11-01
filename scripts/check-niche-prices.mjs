// Price consistency of the niche landing pages (brief of 01.11.2026): ONE Full SEO price per niche (the same in every city and language), shown in the summary block under the H1
// and in the price block / price FAQ; the consultation and Start prices unchanged; no offers / price in the JSON-LD of the page.
import { readFileSync, existsSync } from './fs-clean.mjs';

const T = { // page → [Full SEO price per month, scope wording]
  'seo-pro-prekladatelske-agentury-praha': 15000, 'seo-pro-prekladatelske-agentury-brno': 15000, 'seo-pro-prekladatelske-agentury-pardubice': 15000,
  'seo-pro-ucetni-kancelare-praha': 15000, 'seo-pro-ucetni-kancelare-brno': 15000, 'seo-pro-pocitacove-herny-praha': 15000,
  'seo-pro-tiskarny-a-polygrafii': 18000, 'seo-pro-strojirenske-firmy': 20000,
  'seo-pro-realitni-kancelare-praha': 24000, 'seo-pro-realitni-kancelare-brno': 24000, 'seo-pro-zubni-ordinace-praha': 24000, 'seo-pro-obchody-s-elektronikou': 30000,
  'ru/seo-dlya-perevodcheskih-agentstv-praga': 15000, 'ru/seo-dlya-perevodcheskih-agentstv-brno': 15000, 'ru/seo-dlya-perevodcheskih-agentstv-pardubice': 15000,
  'ru/seo-dlya-buhgalterskih-kompanij-praga': 15000, 'ru/seo-dlya-kompyuternyh-klubov-praga': 15000, 'ru/seo-dlya-onlajn-fitnesa-i-wellness-praga': 15000, 'ru/seo-dlya-finansovyh-konsultantov-chehiya': 15000,
  'ru/seo-dlya-agentstv-nedvizhimosti-praga': 24000, 'ru/seo-dlya-magazinov-elektroniki-praga': 30000,
};
const SCOPE = new Set(['seo-pro-strojirenske-firmy', 'seo-pro-obchody-s-elektronikou', 'ru/seo-dlya-magazinov-elektroniki-praga']);
const fmt = (n) => `${Math.floor(n / 1000)} ${String(n % 1000).padStart(3, '0')} Kč`;
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const txt = (s) => dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/[\s ]+/g, ' ').trim();
const errors = [];
for (const [page, price] of Object.entries(T)) {
  const f = `dist/${page}/index.html`;
  if (!existsSync(f)) continue; // a page that is switched off
  const h = readFileSync(f, 'utf8');
  const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
  const sum = txt((main.match(/<div class="summary-box"><p class="lead">([\s\S]*?)<\/p><\/div>/) || [, ''])[1]);
  const t = txt(main);
  const want = fmt(price);
  const ru = page.startsWith('ru/');
  if (!sum.includes(`${ru ? 'от' : 'od'} ${want}`) || !sum.includes(`${ru ? 'Консультация от' : 'Konzultace od'} 2 000 Kč`)) errors.push(`${page}: summary block must state the consultation and the niche price ${want}`);
  if (SCOPE.has(page) && !/podle rozsahu webu|в зависимости от объёма сайта/.test(sum)) errors.push(`${page}: scope wording missing in the summary block`);
  // every "N Kč měsíčně / в месяц" on the page is this niche's price (map-package prices are a different service)
  for (const m of t.matchAll(/(\d[\d ]*\d) Kč (?:měsíčně|в месяц)/g)) if (m[1] + ' Kč' !== want && m[1] !== '1 800') errors.push(`${page}: monthly price ${m[1]} Kč differs from ${want}`);
  if (!t.includes(`${ru ? 'начинается от' : 'začíná na'} ${want}`)) errors.push(`${page}: price block must state ${want}`);
  if (/"(offers|price|priceRange)"/.test(h)) errors.push(`${page}: offers / price / priceRange in JSON-LD`);
}
if (errors.length) { console.error('✗ check-niche-prices:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log('✓ check-niche-prices: one Full SEO price per niche in the summary, the price block and the page');
