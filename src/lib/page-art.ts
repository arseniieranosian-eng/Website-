// "At least two illustrations on every page" (author's rule of 01.11.2026). Pages whose own content has fewer than two drawings / images get decorative ones from here:
// the base layout inserts them under the headings (H2) of the page body: the first directly under the 1st H2, the second directly under the 3rd (or the last one if there are fewer). `kinds` = how many to add (1 or 2) and which; `langs` limits the entry to some languages.
// scripts/check-illustrations.mjs fails the build if any page ends up with fewer than two; when a new page has fewer, add it here.
import type { Lang, PageKey } from '../i18n/routes';

type Entry = { kinds: string[]; langs?: Lang[] };

const article = (n: string): Entry => ({ kinds: [n] });
export const PAGE_ART: Partial<Record<PageKey, Entry>> = {
  // faq: no illustrations (the author's exception to the two-illustration rule, 02.11.2026)
  contact: { kinds: ['contact', 'audit'] },
  thanks: { kinds: ['thanks', 'audit'] },
  privacy: { kinds: ['privacy', 'audit'] },
  geo: { kinds: ['geo', 'audit'] },
  blog: { kinds: ['blog', 'audit'], langs: ['en'] },
  cases: { kinds: ['growth'], langs: ['en'] },
  caseEdu: { kinds: ['case:edu', 'audit'] },
  caseSeason: { kinds: ['case:season', 'audit'] },
  caseTypo: { kinds: ['case:typo', 'audit'] },
  nicheFitness: { kinds: ['niche:fitness', 'audit'] },
  nicheElectronics: { kinds: ['niche:electronics', 'audit'] },
  nicheGaming: { kinds: ['niche:gaming', 'audit'] },
  nicheTypography: { kinds: ['niche:printing', 'audit'] },
  nicheMachinery: { kinds: ['niche:machinery', 'audit'] },
  nicheDental: { kinds: ['niche:dental', 'audit'] },
  postRealtyBrnoDistricts: article('article'),
  postRealtyPragueDistricts: article('article'),
  postAccountingPages: article('article'),
  postAccountingSmall: article('article'),
  postRealtyDistricts: article('article'),
  postRedesignPlan: article('article'),
  postAccountingTime: article('article'),
  postWeakSeoAcc: article('article'),
  postAccountingChannels: { kinds: ['article'], langs: ['ru'] },
  postWebPages: article('article'),
  postDupEshop: article('article'),
  postWeakSeoDental: article('article'),
  postFaqDental: article('article'),
  postRealtyLocal: article('article'),
  postAccountingLocal: article('article'),
  postSeoPlan: article('article'),
  postSelectSpecialist: article('article'),
  postAccountingNoLeads: article('article'),
};

export const artFor = (key: PageKey | undefined, lang: Lang): string[] => {
  const e = key ? PAGE_ART[key] : undefined;
  return e && (!e.langs || e.langs.includes(lang)) ? e.kinds : [];
};

// Inserts the drawings (already rendered HTML) right after the closing </h2> of the chosen headings (content checks ignore them, see scripts/fs-clean.mjs); without H2 they go after the first paragraph.
export function injectArt(html: string, drawn: string[]): string {
  const ends: number[] = [];
  // Only plain headings: not in dark CTA bands / flex heading rows (section-head, cta-inner), where a drawing would break the layout.
  for (const m of html.matchAll(/<h2\b[^>]*>[\s\S]*?<\/h2>/g)) {
    const before = html.slice(Math.max(0, m.index! - 400), m.index!);
    const sec = before.lastIndexOf('<section');
    const secTag = sec >= 0 ? before.slice(sec, before.indexOf('>', sec) + 1) : '';
    const tail = before.slice(-120);
    if (/section--dark|cta-band/.test(secTag) || /section-head|cta-inner/.test(tail)) continue;
    ends.push(m.index! + m[0].length);
  }
  const pos: number[] = [];
  if (ends.length === 0) {
    const m = html.match(/<\/p>/);
    const at = m ? m.index! + m[0].length : html.length;
    drawn.forEach(() => pos.push(at));
  } else {
    const want = [0, 2, 1];
    drawn.forEach((_, i) => pos.push(ends[Math.min(want[i] ?? i, ends.length - 1)]));
  }
  // insert from the end so earlier offsets stay valid; equal positions keep the order of `drawn`
  const order = drawn.map((d, i) => ({ d, at: pos[i], i })).sort((a, b) => b.at - a.at || b.i - a.i);
  let out = html;
  for (const o of order) out = out.slice(0, o.at) + o.d + out.slice(o.at);
  return out;
}
