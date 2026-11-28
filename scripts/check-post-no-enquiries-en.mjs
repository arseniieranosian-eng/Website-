// Check of the English article /en/blog/translation-agency-website-no-enquiries/ (brief of 28.11.2026, content funnel, article B): meta (Title 50, Description 120, H1 65), the lead (59 words), the order table (header + 9 rows x 3 columns),
// 9 direct answers (53/56/52/51/50/52/54/52/52) + the audit paragraph (53), 5 FAQ (= JSON-LD), one quote (112), one card (article A), ONE button to the translation-agency page, K5 / K7, no dated observation (K2), no hreflang, no Czech page linked.
import * as realFs from 'node:fs';
import { checkEnArticle, finish } from './lib-en-funnel-check.mjs';
const SECTIONS = ['Does the contact form work and does it reach you?', 'Can a visitor from abroad reach you?', 'Does Google see all pages and all language versions?', 'Do the language versions repeat each other?', 'Do the Prague office details match on Google Maps and Mapy.com?', 'Does the site have pages for what people search for?', 'Does the site speak to companies as well as individuals?', 'Did something disappear after a redesign or a change of addresses?', 'Is it the season or a mistake on the site?'];
const cfg = {
  slug: 'translation-agency-website-no-enquiries',
  title: 'Translation Agency Site, No Enquiries? | Eranosian', titleLen: 50,
  h1: 'Why does a translation agency website in Prague get no enquiries?', h1Len: 65,
  desc: 'Nine checks for a translation agency website with no enquiries: forms, language versions, maps, pages, B2B. No promises.', descLen: 120,
  lead: 'Usually there is no single cause, but a few small ones. Check in this order: whether the form works, whether an international visitor can reach you, whether Google sees every language version, whether the versions repeat each other, whether Google Maps and Mapy.com match the site, and what the pages cover. I cannot promise a result or a date.',
  quote: 'When an agency gets no enquiries, one mistake is rarely the cause. Usually it is a few small things that add up.',
  answerCounts: [53, 56, 52, 51, 50, 52, 54, 52, 52, 53],
  answerTexts: [],
  h2: ['What should I check first, and in what order?', ...SECTIONS, 'What does the free audit include?', 'Frequently asked questions', 'Related articles'],
  h2Plain: ['Frequently asked questions', 'Related articles'],
  faq: [['How long should I wait for the first enquiries after changes?', 51], ['Why did the number of visits to my agency\'s website fall?', 53], ['Is the problem the website or the advertising?', 47], ['Do I have to rebuild the website?', 52], ['Can I run these checks myself before ordering an audit?', 57]],
  relatedHref: '/en/blog/czech-and-english-website-versions-translation-agency/',
  moreLead: 'Another article on setting up Czech and English versions of an agency website.',
  sources: [],
};
const { errs, main, answers } = checkEnArticle(cfg);
// the order table: header + 9 rows x 3 columns, the order of the H2 below
const tables = [...main.matchAll(/<table[\s\S]*?<\/table>/g)].map((m) => m[0]);
if (tables.length !== 1 || (tables[0].match(/<tr>/g) || []).length !== 10 || (tables[0].match(/<th scope="col">/g) || []).length !== 3) errs.push('one table: header + 9 rows x 3 columns');
else {
  const head = [...tables[0].matchAll(/<th scope="col">([\s\S]*?)<\/th>/g)].map((m) => m[1].trim());
  if (head.join('|') !== 'Check|What to look at|Where') errs.push('table header: Check / What to look at / Where');
}
if (!main.includes('From the quickest check to the slowest.')) errs.push('the line above the table');
if (/\bI (checked|counted|looked at|saw)\b.*\b(on|in) \d/.test(main)) errs.push('no observation wording');
// the audit paragraph has no link (the audit is offered by the page, not by a button here)
if (/href="\/en\/free-audit\/"/.test(main)) errs.push('no link to the audit (rule H: one CTA to the translation-agency page)');
finish('check-post-no-enquiries-en', errs, `answers ${answers.map((a) => a.split(' ').length)}`);
