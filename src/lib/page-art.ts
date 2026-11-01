// "At least two illustrations on every page" (author's rule of 01.11.2026). Pages whose own content has fewer than two drawings / images get decorative ones from here:
// the base layout renders them in one row at the end of <main>. `kinds` = how many to add (1 or 2) and which; `langs` limits the entry to some languages.
// scripts/check-illustrations.mjs fails the build if any page ends up with fewer than two; when a new page has fewer, add it here.
import type { Lang, PageKey } from '../i18n/routes';

type Entry = { kinds: string[]; langs?: Lang[] };

const article = (n: string): Entry => ({ kinds: [n] });
export const PAGE_ART: Partial<Record<PageKey, Entry>> = {
  faq: { kinds: ['faq', 'audit'] },
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
