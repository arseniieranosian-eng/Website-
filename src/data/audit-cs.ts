// Czech content of /audit-zdarma/ (brief of 20.10.2026): the free audit is technical errors only (indexation, duplicates,
// other technical problems from a site crawl and Google Search Console data). Result: a short presentation within 24 hours,
// free, no call, no obligations. Prices of the consultation come from consulting-shared.ts (one source).
// Out of scope and never promised here: keywords and rankings as a deliverable, competitors, maps, AI visibility, speed,
// Core Web Vitals (named only in the "not included" table), mobile version, call, "5–10 steps".
import { fmtKc, PRICES } from './consulting-shared';
import { CASE_LINE } from './case-summary';
import { AUDIT_VIDEO } from './audit-ru';

export { AUDIT_VIDEO };

export const AUDIT_CS = {
  lang: 'cs' as const,
  h1: 'Bezplatný SEO audit technických chyb vašeho webu',
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  lead: 'Pošlete adresu webu a do 24 hodin dostanete krátkou prezentaci s hlavními technickými chybami: chybami indexace, duplicitami a dalšími technickými problémy. Audit je zdarma, bez callu a bez závazků.',
  trust: 'Pracuji z Prahy, audit dělám pro weby českých i zahraničních firem. Audit vyhodnocuji sám jako specialista, nejde o automatický report z nástroje.',
  badge: 'Zdarma · do 24 hodin · bez callu',
  heroPrimary: 'Chci bezplatný audit',

  checksTitle: 'Co v bezplatném auditu zkontroluji?',
  checksAnswer: 'Kontroluji technické chyby webu: chyby indexace, duplicitní stránky a další technické problémy, které vidím z crawlu webu a z dat Google Search Console.',
  checks: [
    'chyby indexace (stránky, které Google nemůže nebo nechce indexovat);',
    'duplicitní stránky a obsah;',
    'další technické chyby z crawlu webu a Search Console.',
  ],
  // JSON-LD Service.description: shown word for word as the summary line under the list.
  summary: 'Bezplatná kontrola technických chyb webu: chyby indexace, duplicity a další technické problémy. Výstupem je krátká prezentace do 24 hodin, bez callu a bez závazků.',

  notTitle: 'Co v auditu nenajdete?',
  notAnswer: 'V bezplatném auditu neřeším klíčová slova, konkurenci, mapy a lokální SEO ani viditelnost v AI. Řeší se v placených službách, kam vás odkážu.',
  notTable: {
    head: ['Téma', 'Kde se řeší'],
    rows: [
      { topic: 'Klíčová slova', where: [{ text: 'SEO konzultace', page: 'consulting' as const }] },
      { topic: 'Konkurence', where: [{ text: 'SEO konzultace', page: 'consulting' as const }, { text: 'SEO start na 3 měsíce', page: 'start' as const }] },
      { topic: 'Mapy a lokální SEO', where: [{ text: 'Mapy (Google Maps + Mapy.com)', page: 'maps' as const }] },
      { topic: 'Viditelnost v AI', where: [{ text: 'SEO a GEO/AEO', page: 'geo' as const }] },
      { topic: 'Rychlost, Core Web Vitals, mobilní verze', where: [] },
    ],
    noneText: 'v bezplatném auditu je nekontroluji',
  },

  stagesTitle: 'Jak audit probíhá?',
  stagesAnswer: 'Vyplníte formulář s adresou webu, já web zkontroluji a do 24 hodin vám pošlu krátkou prezentaci. Call není potřeba. Pak se sami rozhodnete, zda pokračovat.',
  // The same strings are shown in the numbered list and emitted as HowToStep text (word for word).
  stages: [
    { name: 'Vyplníte formulář', text: 'Vyplníte formulář s adresou webu.' },
    { name: 'Zkontroluji web', text: 'Zkontroluji web (crawl webu a data z Google Search Console).' },
    { name: 'Dostanete prezentaci', text: 'Do 24 hodin dostanete krátkou prezentaci s hlavními technickými chybami.' },
    { name: 'Rozhodnete se', text: 'Sami se rozhodnete, zda budete pokračovat.' },
  ],

  getTitle: 'Jak vypadá výstup auditu?',
  getAnswer: 'Výstupem je krátká prezentace s hlavními nalezenými technickými chybami webu. Ukázku jsem anonymizoval.',
  videoTitle: 'Ukázka výstupu (anonymizováno)',
  videoCaption: 'Ukázka výstupu bezplatného SEO auditu (anonymizováno, 32 sekund, bez zvuku).',
  videoName: 'Ukázka výstupu bezplatného SEO auditu (anonymizováno)',
  videoDescription: 'Ukázka krátké prezentace s hlavními technickými chybami webu, anonymizováno.',
  videoText: 'Snímky ukázky: souhrn webu (kolik stránek prošlo crawlem, kolik je chyb a varování, co je v pořádku a co brzdí růst); část produktových stránek Google nenašel; příliš dlouhé titulky; šablonové nadpisy H1, H2 a meta popisy; signály pro Google podle priorit (adresy zablokované pro robota, stránky bez canonical, adresy s parametry); drobnosti, které se kupí; co dá placený rozbor: chyby s příklady stránek, řešení a plán na 12 měsíců.',

  compareTitle: 'Čím se bezplatný audit liší od placené konzultace?',
  compareAnswer: 'Bezplatný audit hledá jen technické chyby webu a je zdarma. Konzultace jde dál: počítá s klíčovými slovy a plánem na 12 měsíců.',
  compareTable: {
    head: ['Parametr', 'Bezplatný audit', 'SEO konzultace'],
    rows: [
      ['Cena', 'zdarma', `${fmtKc(PRICES.questions)} za 1 hodinu nebo ${fmtKc(PRICES.audit)} za audit bez časového limitu`],
      ['Co řeší', 'technické chyby, indexace, duplicity', 'audit, plán na 12 měsíců'],
      ['Výstup', 'krátká prezentace do 24 hodin', 'u varianty s auditem prezentace do 2 pracovních dnů, u hodinové konzultace krátké písemné shrnutí'],
    ],
  },
  compareLink: 'SEO konzultace',

  afterTitle: 'Co po auditu?',
  afterAnswer: 'Rozhodnete se sami. Můžete pokračovat konzultací, SEO startem na 3 měsíce, nebo Full SEO na rok.',
  after: ['consulting', 'start', 'fullSeo'] as const,
  more: 'Více',

  proofTitle: 'Co říkají výsledky a klienti?',
  proofText: CASE_LINE.cs,
  proofLink: 'Celý příběh',
  reviewsLink: 'Všechny recenze',

  faqTitle: 'Časté otázky k bezplatnému auditu',
  faq: [
    { q: 'Kolik stojí bezplatný SEO audit?', a: 'Zdarma. Audit je bez závazků a nemusíte nic platit.' },
    { q: 'Co přesně v auditu dostanu?', a: 'Krátkou prezentaci s hlavními technickými chybami webu: chybami indexace, duplicitami a dalšími technickými problémy.' },
    { q: 'Je potřeba call?', a: 'Ne. Výsledek dostanete jako prezentaci, bez callu.' },
    { q: 'Jak dlouho audit trvá?', a: 'Do 24 hodin od odeslání formuláře.' },
    { q: 'Co potřebuji dodat?', a: 'Adresu webu. Ostatní údaje stačí vyplnit ve formuláři (jméno a kontakt).' },
    { q: 'Co dělat po auditu?', a: 'Rozhodnete se sami, zda pokračovat: konzultací, SEO startem na 3 měsíce, nebo Full SEO na rok.' },
  ],

  formTitle: 'Požádejte o bezplatný audit',

  schema: {
    serviceName: 'Bezplatný SEO audit technických chyb webu',
    serviceType: 'Audit technických chyb webu',
    howToName: 'Jak probíhá bezplatný SEO audit',
    areaServed: ['Česko', 'Spojené státy', 'Evropská unie'],
    availableLanguage: ['cs', 'en', 'ru'],
  },
};
