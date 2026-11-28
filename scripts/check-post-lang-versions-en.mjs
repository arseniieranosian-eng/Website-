// Check of the English article /en/blog/czech-and-english-website-versions-translation-agency/ (brief of 28.11.2026, content funnel, article A): meta (Title 43, Description 129, H1 84), the lead (56 words) and the direct answers,
// the H2 list (8 questions + Sources + FAQ + Related articles), 5 steps without HowTo, 4 FAQ (= JSON-LD), one quote (114), the Google sources with the check date, the own-site observation (K2) recomputed from dist/sitemap.xml,
// one card (article B), ONE button to the translation-agency page, K5 / K7, no hreflang, no Czech page linked.
import * as realFs from 'node:fs';
import { checkEnArticle, finish } from './lib-en-funnel-check.mjs';
const SRC = realFs.readFileSync('src/data/post-lang-versions-en.ts', 'utf8');
const q = (s) => JSON.parse(SRC.match(new RegExp(`"${s}": (".*?"),?\\n`))[1]);
const lead = q('lead');
const cfg = {
  slug: 'czech-and-english-website-versions-translation-agency',
  title: 'Czech and English Site Versions | Eranosian', titleLen: 43,
  h1: 'How should a translation agency in Prague set up Czech and English website versions?', h1Len: 84,
  desc: 'Czech and English versions of a translation agency website: hreflang, duplicates and which version Google shows. A neutral guide.', descLen: 129,
  lead, quote: 'A second language version is not a copy of the first. It is a page for another visitor, and it needs its own text.',
  answerCounts: [52, 51, 50, 55, 54, 56, 56], // urls, hreflang, guarantee, duplicates, x-default, the own-site observation, Prague
  answerTexts: [],
  h2: ['Should the Czech and English versions have separate addresses?', 'What does hreflang tell Google?', 'Does hreflang guarantee which version appears?', 'Are the Czech and English versions duplicates?', 'What does x-default do?', 'How can I check my own site?', 'What did I see on my own site?', 'What is different for an agency in Prague?', 'Sources', 'Frequently asked questions', 'Related articles'],
  h2Plain: ['Sources', 'Frequently asked questions', 'Related articles'],
  faq: [['Do I need an English version if most of my clients are Czech?', 54], ['Is a partly translated page a problem?', 58], ['Does Seznam read hreflang?', 47], ['Will the free audit check my language versions?', 49]],
  relatedHref: '/en/blog/translation-agency-website-no-enquiries/',
  moreLead: 'Another article on why an agency website gets no enquiries.',
  sources: ['https://developers.google.com/search/docs/specialty/international/localized-versions', 'https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites', 'https://support.google.com/webmasters/answer/9012289'],
};
const OBS_RX = /^On 28 November 2026 I checked the language versions of this site in the built pages and in the sitemap: (\d+) addresses in (\d+) languages\. Every address has a built page, and every version lists itself and the other versions\. This is a check of one site on one day, not a rule for other sites\.$/;
const res = checkEnArticle(cfg);
const { errs, answers, main } = res;
// the observation (K2): the figures are recomputed from the built site
const obs = answers[5] || '';
const m = obs.match(OBS_RX);
const sm = realFs.readFileSync('dist/sitemap.xml', 'utf8');
const ents = new Map();
for (const u of sm.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
  const loc = u[1].match(/<loc>(.*?)<\/loc>/)[1];
  const alts = new Map([...u[1].matchAll(/<xhtml:link[^>]*?hreflang="([^"]+)"[^>]*?href="([^"]+)"/g)].map((x) => [x[1], x[2]]));
  ents.set(loc, alts);
}
const lang = (a) => [...a.keys()].filter((k) => k !== 'x-default');
const groups = [...ents.entries()].filter(([, a]) => lang(a).length >= 2);
const langs = new Set(groups.flatMap(([, a]) => lang(a)));
let bad = 0;
for (const [loc, a] of groups) {
  const vers = lang(a).map((l) => a.get(l));
  if (!vers.includes(loc)) bad++;
  for (const v of vers) {
    const b = ents.get(v);
    if (!b || JSON.stringify([...vers].sort()) !== JSON.stringify(lang(b).map((l) => b.get(l)).sort())) bad++;
    if (!realFs.existsSync('dist' + v.replace('https://seo-eranosian.com', '') + 'index.html')) bad++;
  }
  const head = [...realFs.readFileSync('dist' + loc.replace('https://seo-eranosian.com', '') + 'index.html', 'utf8').matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((x) => x[1] + '=' + x[2]).sort().join();
  if (head !== [...a.entries()].map((x) => x[0] + '=' + x[1]).sort().join()) bad++;
}
if (!m || +m[1] !== groups.length || +m[2] !== langs.size) errs.push(`observation: the page says ${m ? m[1] + ' addresses in ' + m[2] + ' languages' : 'something else'}, the build has ${groups.length} addresses in ${langs.size} languages (update POST_LANGVERSIONS_EN_OBS and the date)`);
if (bad) errs.push(`observation: ${bad} language-group problem(s) in the built site (missing page, no return link, head differs from the sitemap): the sentence "every version lists itself and the other versions" would be false`);
if (ents.get('https://seo-eranosian.com/en/blog/czech-and-english-website-versions-translation-agency/')?.size) errs.push('the article must have no hreflang pair');
// steps (L): 5 list items without HowTo, each <= 20 words
const steps = [...main.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)];
const items = steps.length === 1 ? [...steps[0][1].matchAll(/<li><span>([\s\S]*?)<\/span><\/li>/g)].map((x) => x[1].replace(/<[^>]+>/g, '').trim()) : [];
if (steps.length !== 1 || items.length !== 5 || items.some((x) => x.split(' ').length > 20) || !main.includes('Check a few important pages first, not the whole site at once. You need a browser and access to the Search Console of your site.')) errs.push('one numbered list of 5 steps (<= 20 words) with the intro line');
// sources with the check date
if (!main.includes('Google documentation, checked on 28 November 2026.')) errs.push('sources: the check date');
// statements removed after the check against the Google documentation
if (/signal, not an instruction|It is optional|optional\b/i.test(main)) errs.push('statements that the Google pages do not make (signal not an instruction / x-default optional)');
// the Seznam answer
if (!main.includes('I could not find a statement from Seznam about hreflang, so I do not state how it treats language versions.')) errs.push('Seznam: neutral answer');
finish('check-post-lang-versions-en', errs, `answers ${answers.map((a) => a.split(' ').length)}; ${groups.length} addresses in ${langs.size} languages`);
