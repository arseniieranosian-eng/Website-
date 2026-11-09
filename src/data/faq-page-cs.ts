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
  { id: 'ceny', title: 'Ceny a balíčky', items: [
    { q: 'Kolik stojí SEO?', a: 'Full SEO na rok stojí od 15 000 Kč měsíčně, spolupráce trvá 12 měsíců. Balíček {start|Start} na 3 měsíce stojí 50 000 Kč. Konzultace stojí 2 000 Kč za hodinu. Přesná cena {fullSeo|Full SEO} závisí na oboru a na rozsahu práce, který upřesníme po vaší poptávce.' },
    { q: 'Jak se skládá cena a proč se liší podle oboru?', a: 'Cena Full SEO začíná na 15 000 Kč měsíčně a liší se podle oboru. Záleží na konkurenci v oboru a na tom, v jakém stavu web je: jak je dnes vidět ve vyhledávání a v odpovědích AI a jak je optimalizovaný. Rozsah práce, hlavně objem obsahu, volím individuálně a upřesníme ho po vaší poptávce.' },
    { q: 'Co je v ceně Full SEO?', a: 'V ceně Full SEO je práce na webu (audit, klíčová slova, úpravy textů a nadpisů, obsah každý měsíc, technický dohled), práce mimo web (linkbuilding a profily na mapách Google, Mapy.com a Firmy.cz) a optimalizace pro AI. Každý týden dostanete report. Podrobný přehled je na {fullSeo|stránce Full SEO}.' },
    { q: 'Čím se liší Start na 3 měsíce od Full SEO?', a: '{start|Start} je tříměsíční balíček za 50 000 Kč. {fullSeo|Full SEO} je roční spolupráce od 15 000 Kč měsíčně. Rozdíl v rozsahu práce je popsaný na stránkách obou služeb. Co se hodí, záleží na stavu webu, oboru a rozpočtu. Doporučení dám po vaší poptávce.' },
    { q: 'Kolik stojí konzultace?', a: 'Konzultace stojí 2 000 Kč za hodinu, nebo 3 000 Kč s auditem webu a konzultací bez časového omezení. Která varianta se hodí, záleží na tom, co od konzultace čekáte. Podrobnosti najdete na {consulting|stránce konzultace}. Před konzultací pošlete adresu webu a seznam otázek.' },
    { q: 'Je k cenám nutné připočítat DPH?', a: 'Nejsem plátce DPH, proto se k cenám DPH nepřičítá. Částky uvedené na webu jsou to, co platíte. Konzultace stojí 2 000 Kč za hodinu, balíček Start na 3 měsíce 50 000 Kč a Full SEO na rok začíná na 15 000 Kč měsíčně.' },
  ] },
  { id: 'spoluprace', title: 'Spolupráce', items: [ref('process'), ref('consulting-format'), { q: 'Jak často dostanu report?', a: 'U Full SEO dostáváte týdenní report: co je hotovo, proč se to dělalo a jaké jsou výsledky. Call je podle vašeho zájmu. Reporting je součástí ceny Full SEO. Jak je to u balíčku Start, najdete na {start|stránce této služby}, protože tam je popsáno, co balíček zahrnuje.' }] },
  { id: 'audit', title: 'Bezplatný audit', items: [ref('audit'), { q: 'Co bezplatný audit nezahrnuje?', a: 'Bezplatný audit je jen technický: chyby indexace, duplicitní stránky a obsah a další technické chyby webu. Nezahrnuje klíčová slova, konkurenty, mapy, viditelnost v AI, rychlost ani mobilní verzi, takže nenahrazuje širší analýzu. Dostanete prezentaci do 24 hodin, bez hovoru a bez závazků.' }, { q: 'Musím po bezplatném auditu něco objednat?', a: 'Ne. Audit je bez závazků: prezentaci hlavních chyb a doporučení dostanete do 24 hodin, bez hovoru. Co dál, rozhodnete sami. Pokud budete chtít pokračovat, vyberete si formu spolupráce: konzultaci, Start na 3 měsíce, nebo Full SEO. Ceny najdete výše na této stránce.' }] },
  { id: 'terminy', title: 'Termíny a výsledky', items: [ref('time'), { q: 'Garantujete první místo v Google?', a: 'Garanci pozice v Google nedávám. Algoritmy vyhledávačů ovlivnit nemohu, proto výsledek ani termín nezaručuji a slibovat první místo by nebylo poctivé. Záleží na stavu webu, na konkurenci a na rozsahu úprav. U Full SEO dostáváte týdenní report, takže víte, co je hotovo a proč.' }] },
  { id: 'seo-geo', title: 'SEO, GEO/AEO a vyhledávače', items: [ref('geo'), ref('seznam'), { q: 'Jsou v ceně Full SEO mapy Google, Mapy.com a Firmy.cz?', a: 'Ano. U {fullSeo|Full SEO} je součástí práce na profilech v Google Maps, Mapy.com a Firmy.cz bez omezení počtu profilů. Samostatně lze Mapy objednat i jako {maps|zvláštní službu}. Podrobnosti jsou na stránce příslušné služby, kde je popsáno, co všechno práce zahrnuje.' }] },
  { id: 'pro-koho', title: 'Pro koho a kde pracuji', items: [ref('location'), ref('languages')] },
];
