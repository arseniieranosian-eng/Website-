// Czech page /caste-dotazy/ (brief of 09.11.2026): 6 groups (H2) with H3 questions. The 8 older answers are taken verbatim from data/faq.ts (`ref`), the new ones are written here.
// "{key|text}" inside an answer becomes a link to the page `key` (the JSON-LD gets the plain text). The page is rebuilt for Czech only; the other languages keep the old list.
import { FAQ } from './faq';

export const FAQ_PAGE_UPDATED = '2026-11-09'; // manual date, not from git
export type FaqPageItem = { q: string; a: string };
export type FaqPageGroup = { id: string; title: string; items: FaqPageItem[] };

const ref = (id: string): FaqPageItem => {
  const f = FAQ.find((x) => x.id === id);
  if (!f) throw new Error(`faq-page-cs: unknown FAQ id "${id}"`);
  return { q: f.q.cs, a: f.a.cs };
};

export const FAQ_PAGE_GROUPS: FaqPageGroup[] = [
  { id: 'ceny', title: 'Ceny a balíčky', items: [] },
  { id: 'spoluprace', title: 'Spolupráce', items: [ref('process'), ref('consulting-format')] },
  { id: 'audit', title: 'Bezplatný audit', items: [ref('audit')] },
  { id: 'terminy', title: 'Termíny a výsledky', items: [ref('time')] },
  { id: 'seo-geo', title: 'SEO, GEO/AEO a vyhledávače', items: [ref('geo'), ref('seznam')] },
  { id: 'pro-koho', title: 'Pro koho a kde pracuji', items: [ref('location'), ref('languages')] },
];
