// Czech content of the niche landing page /seo-pro-zubni-ordinace-praha/ (brief of 01.11.2026). Published by the author's decision of 01.11.2026 WITHOUT D2 and before S2; S3 confirmed, S4 declined. Original stop list:
// the brief's stop list is open: S1 (block D2 has no data → the page is built without it), S2 (regulatory check of zákon č. 372/2011 Sb. and the ČSK rules not done:
// the page contains no legal or medical statements), S3 (the Google-documentation wording in the weak-competition sentence is not verified), S4 (capacity date and status
// for the dental niche missing → FAQ f5 is not written).
// Decisions from the author's standing rules, which override the brief: no guarantee phrases anywhere (so FAQ f1 "Zaručíte pozici…?" is not written and "Výsledek ani pozici
// nezaručuji" is cut from the summary, H2-3, H2-7, the weak-competition sentence and f6); no "no results in the niche" statements (line under the H1 and H2-3 keep only the
// translation case). Own structure: not a copy of the other niche pages. hreflang: self only (cs). No quote, no video, no articles block, no Review/Offer markup.
import SUMMARIES from './niche-summaries.json';
import { walk } from '../lib/cs-typo';
import { priceAnswerCs, priceFaqCs } from './niche-prices';

export const NICHE_DENTAL_PUBLISHED = '2026-11-01';

// D2 (one-off check of the Google results with query, date and result types) is missing: the block is not rendered.
export const NICHE_DENTAL_D2: null | { title: string; answer: string } = null;

// Link tokens in the answers: {key|text} is rendered as a link to the page `key` (see the view).
const raw = {
  lang: 'cs' as const,
  published: NICHE_DENTAL_PUBLISHED,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',

  // line under the H1 (rule B): the translation-agency case only
  proof: 'U překladatelské agentury: poptávky z webu +65–70 % měsíc po měsíci tři měsíce po sobě (březen–září 2026).',
  lead: SUMMARIES['/seo-pro-zubni-ordinace-praha/'],
  heroAudit: 'Požádat o bezplatný audit',

  coopTitle: 'Jak probíhá spolupráce?',
  coopAnswer: 'Spolupráce začíná {audit|bezplatným auditem} technických chyb webu: indexace, duplicity a další technické věci. Prezentaci pošlu do 24 hodin, bez hovoru a bez závazku. Potom si můžete vybrat placenou {consulting|konzultaci}, balíček {start|Start} na tři měsíce, nebo {fullSeo|Full SEO} na rok. Mapy a místní profily řeším {maps|samostatnou službou}.',

  priceTitle: 'Kolik to stojí?',
  priceAnswer: priceAnswerCs('dental'),

  expTitle: 'Jaké mám zkušenosti v oboru zubní péče?',
  expAnswer: 'Pracoval jsem v jiných oborech, například pro překladatelskou agenturu, jejíž výsledky uvádím výše. Ze zubních ordinací mám vlastní pozorování jejich webů, uvádím je níže. Nevydávám je za výsledek své práce.',

  obsTitle: 'Co jsem zjistil na webech zubních ordinací v Praze?',
  obsAnswer: 'K 31. 10. 2026 jsem si prohlédl 14 webů zubních ordinací, které se zobrazují na dotaz „stomatologie v Praze“. Všechny zobrazují recenze na stránkách, což je dobré využití signálů důvěry. U 11 z 14 chybí blog, u všech 14 jsou FAQ nedostatečné, u tří jsou služby jen na jedné stránce a žádný nemá strukturovaná data.',
  obsNote: 'FAQ je nedostatečné různě: někde chybí na stránkách služeb, jinde není samostatná stránka. Je to můj pozorovací vzorek, ne průzkum trhu. Názvy webů neuvádím.',
  // sentence about weak competition: after the observation (S3: "Google podle své dokumentace" is NOT verified against the documentation)
  weakText: 'Proč jsou tyto weby vpředu, nevím: Google podle své dokumentace používá mnoho signálů. Domněnkou je, že mezi zubními ordinacemi zatím není silný konkurent, který by byl dobře čitelný pro vyhledávače i AI. Mým cílem je, aby jím byl váš web.',

  doTitle: 'Co pro zubní ordinaci konkrétně dělám?',
  doAnswer: 'Řeším, aby web zubní ordinace byl srozumitelný pro vyhledávače i AI: samostatné stránky služeb, stránky lékařů s ověřenými údaji, přehledný ceník ordinace, způsob objednání a správně vedený místní profil. Texty o léčbě musí schválit lékař ordinace, já připravuji strukturu a formulace. Mapy řeším samostatnou službou.',

  fitTitle: 'Pro koho SEO dává smysl a pro koho ne?',
  fitAnswer: 'SEO dává smysl zubní ordinaci, která chce poptávky z vyhledávání, má jasně popsané služby a je ochotná web průběžně doplňovat. Nehodí se ordinaci, která nechce o svém webu nic měnit.',

  faqTitle: 'Časté otázky',
  faq: [
    priceFaqCs('dental', 'zubní ordinace'),
    { q: 'Musí mít ordinace vlastní web, nebo stačí profil na mapách?', a: 'Profil na mapách pomáhá, když lidé hledají ordinaci spolu s názvem města, ale obvykle nenahradí web, na kterém jsou služby, lékaři a způsob objednání. Je to moje doporučení, ne pravidlo trhu. Údaje v profilu mají odpovídat webu. Mapy řeším jako samostatnou službu.' },
    { q: 'Kdo schvaluje texty o léčbě?', a: 'Texty o léčbě má schvalovat lékař ordinace, protože za obsah odpovídá ordinace. Já připravuji strukturu stránek a formulace a upozorním na místa, kde je potřeba odborný souhlas. Medicínská tvrzení nepíšu a jejich správnost neposuzuji. Jde o moji doporučenou praxi, ne o právní pokyn.' },
    { q: 'Co zahrnuje bezplatný audit?', a: 'Bezplatný audit se týká jen technických chyb webu: indexace, duplicit a dalších technických věcí. Prezentaci pošlu do 24 hodin, bez hovoru a bez závazku. Klíčová slova, konkurenci, mapy, viditelnost v AI, rychlost ani mobilní verzi audit neobsahuje. Ty jsou součástí placené spolupráce, na kterou po auditu nemusíte přistoupit.' },
    { q: 'Kdy se projeví první změny?', a: 'V mých projektech se první změny obvykle projevují po dvou až třech měsících. Je to zkušenost z mých projektů: termín před prohlídkou webu neurčuji, protože závisí na jeho stavu a na konkurenci. Nejprve se podívám na web a teprve potom řeknu, co lze udělat.' },
  ],

  endTitle: 'Chcete vědět, jaké technické chyby má váš web?',
  endText: 'Bezplatný audit se týká jen technických chyb. Prezentaci pošlu do 24 hodin, bez hovoru a bez závazku.',
  endCta: 'Požádat o bezplatný audit',

  schema: {
    serviceName: 'SEO a GEO/AEO pro zubní ordinace v Praze',
    serviceType: 'SEO a GEO/AEO pro zubní ordinace',
    areaServed: 'Praha',
    audience: 'zubní ordinace',
  },
};

export const NICHE_DENTAL_CS = walk(raw);
