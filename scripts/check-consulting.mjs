// Post-build check of the Russian consulting page (the Czech one is checked by check-consulting-cs.mjs) against their briefs:
//  - title 50-60 chars, description 120-160, one H1, section order
//  - JSON-LD matches the visible text (title, description, lead, FAQ, steps, offers, date, video)
//  - prices in JSON-LD are CZK only, no AggregateRating / stars, correct canonical and hreflang
import { readFileSync } from 'node:fs';

const BASE = 'https://www.seo-eranosian.com';
const PAGES = {
  ru: {
    file: 'dist/ru/uslugi/konsultacii/index.html',
    url: '/ru/uslugi/konsultacii/',
    h1: 'SEO консультация',
    sections: ['SEO консультация', 'Сколько стоит SEO консультация?', 'Для кого подходит SEO консультация', 'Как проходит консультация', 'Под какую поисковую выдачу строится консультация', 'SEO консультация онлайн или лично в Праге', 'Консультация или долгая работа?', 'Что это дало клиентам', 'Что говорят клиенты', 'Частые вопросы о SEO консультации', 'Оставить заявку', 'Другие услуги'],
    crumbs: 'Главная > Услуги > Консультации',
    forbidden: ['in-house', '60-90', '60–90', 'Разово или регулярно', 'Маркетинговые команды'],
    links: ['/ru/besplatnyj-audit/', '/ru/uslugi/start-3-mesyaca/', '/ru/uslugi/full-seo/', '/ru/uslugi/karty/', '/ru/seo-i-geo/', '/ru/kejsy/kb-preklady/', '/ru/otzyvy/', '/ru/voprosy-i-otvety/', '/ru/uslugi/'],
    dateLabel: /Обновлено: <time datetime="([^"]+)">([^<]+)<\/time>/,
    euro: true,
  },
};

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
// Visible text only: <script> / <style> contents (incl. the JSON-LD itself) are removed first.
const txt = (s) => dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const errors = [];

for (const [lang, P] of Object.entries(PAGES)) {
  const e = (m) => errors.push(`[${lang}] ${m}`);
  const h = readFileSync(P.file, 'utf8');
  const body = txt(h);
  const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
  const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
  if (title.length < 50 || title.length > 60) e(`title length ${title.length}: ${title}`);
  if (desc.length < 120 || desc.length > 160) e(`description length ${desc.length}`);
  if (title.replace(/ \| Eranosian$/, '') === P.h1) e('title must differ from H1');
  if (!h.includes(`<link rel="canonical" href="${BASE}${P.url}">`)) e('canonical missing/wrong');
  for (const l of ['cs', 'en', 'ru', 'x-default']) if (!new RegExp(`hreflang="${l}" href="${BASE}[^"]+"`).test(h)) e(`hreflang ${l} missing`);
  if (!/hreflang="x-default" href="[^"]*\/sluzby\/konzultace\/"/.test(h)) e('x-default must point to cs');
  const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
  if (h1s.length !== 1 || h1s[0] !== P.h1) e(`H1: ${JSON.stringify(h1s)}`);
  const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => P.sections.includes(x));
  if (JSON.stringify(hs) !== JSON.stringify(P.sections)) e(`section order: ${JSON.stringify(hs)}`);
  for (const f of P.forbidden) if (body.includes(f)) e(`forbidden text present: ${f}`);
  for (const l of P.links) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
  if (!/<table/.test(h) || !/<ol class="steps/.test(h)) e('table / ordered list missing');
  if (!/<video[^>]*poster/.test(h)) e('video with poster missing');
  if (/★|AggregateRating|ratingValue/.test(h)) e('stars / AggregateRating found');

  const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  const by = (t) => ld.find((n) => n['@type'] === t);
  const wp = by('WebPage'), sv = by('Service'), ht = by('HowTo'), fq = by('FAQPage'), vd = by('VideoObject'), bc = by('BreadcrumbList');
  if (wp.name !== title) e('WebPage.name != <title>');
  if (wp.description !== desc) e('WebPage.description != meta description');
  if (wp.inLanguage !== lang) e('WebPage.inLanguage');
  const date = h.match(P.dateLabel);
  if (!date || date[1] !== wp.dateModified) e(`dateModified ${wp.dateModified} != visible ${date && date[1]}`);
  if (!body.includes(sv.description)) e('Service.description not visible');
  if (sv.offers.map((o) => o.price).join() !== '2000,3000' || sv.offers.some((o) => o.priceCurrency !== 'CZK')) e('offers must be 2000/3000 CZK');
  if (/€|EUR/.test(JSON.stringify(ld))) e('euro amounts must not appear in JSON-LD');
  if (P.euro && !(body.includes('≈ €80') && body.includes('≈ €120'))) e('visible euro estimates missing');
  if (!ht.step.every((s) => body.includes(s.text))) e('HowTo steps not visible verbatim');
  if (fq.mainEntity.length !== 5 || !fq.mainEntity.every((q) => body.includes(q.name) && body.includes(q.acceptedAnswer.text))) e('FAQ not visible verbatim');
  if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== P.crumbs || bc.itemListElement.at(-1).item) e('breadcrumb');
  if (!body.includes(vd.description)) e('video description not visible');
  if (vd.uploadDate !== '2026-10-19') e('uploadDate');
  if (sv.provider['@id'] !== by('Person')['@id']) e('provider must reference Person');
}

if (errors.length) {
  console.error(`\nConsulting page check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Consulting page check passed: ru.');
