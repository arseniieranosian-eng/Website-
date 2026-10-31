// Czech niche landing page /seo-pro-tiskarny-a-polygrafii/ "SEO a GEO/AEO pro tiskárny a polygrafii" (brief of 24.10.2026; cs only, hreflang self-reference only). Own structure: how the niche differs, what I do (3 steps),
// for whom, the case (only with metric and window, no absolute numbers), audit scope, cooperation, FAQ. Defaults taken (no answers to the brief's questions): publication 25. 10. 2026, the client's consent for the case
// is taken to cover this block as on the case page, "/seo-a-geo/" for the GEO/AEO link, no observations of the 9 viewed websites (no date and no findings: the block is absent), no quote, no prices, no funnel articles
// yet. The capacity line is dated 24. 10. 2026 as in the brief. No guarantees (positions, traffic, enquiries, AI citation), "agentura" never about the author, only "SEO a GEO/AEO", "2–3 měsíce" only about the author's
// own projects, no city, no "ofset", no client name, no absolute figures of the case. Review every 90 days (23. 1. 2027).
import SUMMARIES from './niche-summaries.json';
import { walk } from '../lib/cs-typo';

// Publication date of this address (the brief: 25. 10. 2026); do NOT bump it when the page is edited.
export const NICHE_TYPOGRAPHY_PUBLISHED = '2026-10-25';
export const TYPOGRAPHY_CAPACITY_DATE = '24. 10. 2026';

const raw = {
  lang: 'cs' as const,
  published: NICHE_TYPOGRAPHY_PUBLISHED,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',

  lead: SUMMARIES['/seo-pro-tiskarny-a-polygrafii/'], // summary block (brief of 31.10.2026): data/niche-summaries.json
  heroAudit: 'Objednat bezplatný technický audit',

  diffTitle: 'Čím se SEO tiskárny liší od jiných oborů?',
  diffAnswer: 'Web tiskárny může obsahovat široký katalog služeb a produktů s variantami, formáty a tiražemi, k tomu kalkulačku nebo konfigurátor. Taková struktura může vytvářet duplicity a stránky, které vyhledávač nevidí. Poptávají také firmy i jednotlivci, takže se u webu mísí dotazy B2B a B2C.',
  diffLead: 'Na co se u webu tiskárny dívám:',
  diff: [
    'varianty produktů, formáty a tiráže',
    'filtry a parametry v adresách URL',
    'kalkulačky a konfigurátory',
    'dotazy firem (B2B) a jednotlivců (B2C)',
  ],

  doTitle: 'Co pro tiskárny a polygrafické firmy dělám?',
  doAnswer: 'Postupuji ve třech krocích: technický základ webu, mapa dotazů podle nákupního trychtýře a až poté vstupní stránky pro služby a produkty. K tomu přidávám FAQ a přípravu na GEO/AEO. U mých projektů se první změny obvykle objevují za 2–3 měsíce, záruka neexistuje.',
  do: [
    'Technický základ webu: indexace, duplicity a další technické problémy.',
    'Mapa dotazů podle nákupního trychtýře.',
    'Vstupní stránky pro služby a produkty.',
  ],
  doGeoLead: 'GEO/AEO je součástí každé služby, popisuji ho na stránce',
  doGeoLink: 'SEO a GEO/AEO',

  forTitle: 'Pro koho je to a pro koho ne?',
  forAnswer: 'Hodí se pro tiskárny a polygrafické firmy s webem nebo e-shopem, které chtějí být vidět ve vyhledávání a v odpovědích AI. Nehodí se pro firmy, které čekají zaručené pořadí nebo rychlé výsledky, ani pro ty, které hledají jen nový design webu.',
  forYes: { title: 'Hodí se', items: ['e-shop tiskárny', 'lokální polygrafie s webem', 'velkoformátový tisk s webem nebo katalogem'] },
  forNo: { title: 'Nehodí se', items: ['firmy, které čekají zaručené pořadí', 'firmy, které čekají rychlé výsledky', 'firmy, které hledají jen nový design webu'] },

  caseTitle: 'Jaký výsledek měla případová studie tiskárny?',
  caseAnswer: 'Organická návštěvnost webu tiskárny vzrostla 8,75× za 12 měsíců (červenec 2024 → červenec 2025). Měřena byla pouze návštěvnost z vyhledávání, poptávky a tržby do studie nepatří. Projekt běžel na ruskojazyčném webu pro ruskojazyčný trh, v Česku výsledek zaručit nelze. Studie popisuje postup práce, ne slib výsledku.',
  caseTransfer: 'Co se přenáší a co ne: přenáší se pořadí práce (technický základ, mapa dotazů, vstupní stránky), nepřenášejí se čísla ani poptávky.',
  caseLead: 'Postup popisuje',
  caseLink: 'celá případová studie',

  auditTitle: 'Co obsahuje bezplatný audit a co ne?',
  auditAnswer: 'Bezplatný audit odhalí technické chyby webu: indexaci, duplicity a další technické problémy. Prezentaci dostanete do 24 hodin, bez hovoru a bez závazku. Audit neřeší klíčová slova, konkurenci, mapy, viditelnost v AI, rychlost ani mobilní verzi. Strukturu, obsah a konverzi řeší konzultace nebo balíček Start.',
  audit: {
    head: ['Co obsahuje', 'Co neobsahuje'],
    rows: [
      ['indexace webu', 'klíčová slova'],
      ['duplicity', 'konkurence'],
      ['další technické problémy', 'mapy a viditelnost v AI'],
      ['prezentace do 24 hodin, bez hovoru a bez závazku', 'rychlost a mobilní verze'],
    ],
  },
  auditChecksLead: 'Co se u webu tiskárny kontroluje:',
  auditChecks: [
    'indexace stránek služeb a kategorií',
    'duplicity a parametrické adresy URL u filtrů a variant produktů',
    'stránky kalkulaček a konfigurátorů (zda se jejich obsah dostane k vyhledávači)',
    'indexace jazykových verzí, pokud existují',
  ],
  auditLead: 'Podrobnosti k auditu najdete na stránce',
  auditLink: 'Bezplatný audit',

  coopTitle: 'Jak spolupráce probíhá?',
  coopAnswer: `Začíná se bezplatným technickým auditem, po něm následuje konzultace, balíček Start na 3 měsíce nebo Full SEO na rok. Pracuji současně nejvýše se třemi firmami z jednoho oboru; k ${TYPOGRAPHY_CAPACITY_DATE} je obor tiskáren volný. Rozsah a podmínky jsou na stránkách jednotlivých balíčků.`,
  coopLinks: [
    { page: 'consulting' as const, text: 'SEO konzultace' },
    { page: 'start' as const, text: 'SEO start na 3 měsíce' },
    { page: 'fullSeo' as const, text: 'Full SEO na rok' },
  ],

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Funguje to i v Česku?', a: 'Postup se přenést dá: nejdřív technický základ, potom mapa dotazů podle trychtýře a až poté vstupní stránky. Konkrétní čísla ani poptávka se nepřenesou, záleží na oboru, konkurenci a stavu webu. Případová studie běžela na ruskojazyčném trhu, proto je pro Česko nezaručuji.' },
    { q: 'Za jak dlouho se SEO projeví?', a: 'U mých projektů se první změny obvykle objevují za 2–3 měsíce. Záruka neexistuje, doba závisí na stavu webu, konkurenci a rozsahu úprav. Tuto dobu nelze brát jako slib. Případová studie sledovala růst za 12 měsíců.' },
    { q: 'Je to pro e-shop i pro místní polygrafii?', a: 'Ano, postup je podobný, liší se důraz. E-shop řeší hlavně katalog, varianty produktů, filtry a kalkulačky. Místní polygrafie s menším webem řeší hlavně stránky služeb a jejich srozumitelnost pro vyhledávač i pro AI. Pokud si nejste jistí, začněte bezplatným technickým auditem.' },
    { q: 'Pracujete s více tiskárnami současně?', a: `Pracuji současně nejvýše se třemi firmami z jednoho oboru. K ${TYPOGRAPHY_CAPACITY_DATE} je obor tiskáren a polygrafie volný. Jde o omezení kapacity, ne o exkluzivitu: neslibuji, že pro vás budu jediný, jen že počet souběžných firem z jednoho oboru je omezený.` },
    { q: 'Zaručíte, že mě bude citovat AI?', a: 'Ne. Citování umělou inteligencí zaručit nelze, ovlivňují ho systémy, které nekontroluji. Web připravuji tak, aby byl pro AI srozumitelný: přímé odpovědi, FAQ, přehledné tabulky a technický základ. Citování se pak dá ověřovat ručním testem vybraných otázek v ChatGPT, Perplexity a Google AI Overview.' },
    { q: 'Kolik to stojí?', a: 'Cena závisí na zvoleném balíčku: konzultace, Start na 3 měsíce nebo Full SEO na rok. Rozsah a podmínky najdete na stránkách jednotlivých balíčků, na této stránce ceny neuvádím. Bezplatný technický audit je zdarma, k ničemu vás nezavazuje a prezentaci dostanete do 24 hodin.' },
  ],

  endTitle: 'Další krok',
  endText: 'Chcete vědět, jestli má váš web technické chyby, které brání indexaci? Začněte bezplatným technickým auditem.',
  endCta: 'Objednat bezplatný technický audit',

  schema: {
    serviceName: 'SEO a GEO/AEO pro tiskárny a polygrafii',
    serviceType: 'SEO a GEO/AEO pro tiskárny a polygrafické firmy',
    areaServed: 'Česko',
  },
};

export const NICHE_TYPOGRAPHY_CS = walk(raw);
