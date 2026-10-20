// Czech content of /pripadove-studie/seo-vzdelavaci-platforma/ (brief of 20.10.2026): a short anonymised case. The client
// (name, domain) appears nowhere. The author took part together with a colleague, so "my / jsme" is allowed in THIS case
// only (the rest of the site stays in the first person singular); never "já jsem vybudoval / zvýšil". The ONLY figure: +55 %
// organic traffic, March → September 2025 (7 months), relative data from the low base of a new site. No absolute numbers,
// sign-ups, rankings, Instagram or community management anywhere. Not stated, so not invented: the platform's market /
// site language and the exact data source.
import { CASE_EDU_PUBLISHED } from './case-edu-ru';
import { EDU_FORMULA_CS } from './case-summary';
import { walk } from '../lib/cs-typo';

export { CASE_EDU_PUBLISHED };

const raw = {
  lang: 'cs' as const,
  label: 'Případová studie · Vzdělávací platforma',
  h1: 'SEO pro novou vzdělávací platformu: +55 % organické návštěvnosti za 7 měsíců',
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  project: 'Projekt: vzdělávací platforma, březen – září 2025',
  answer: 'Za 7 měsíců (březen → září 2025) vzrostla organická návštěvnost nové vzdělávací platformy o 55 %. Jde o relativní růst od nízké základny nového webu, absolutní čísla nezveřejňuji. Společně s kolegou jsme se vsadili na málo hledané dotazy, zkoumali klíčová slova a navrhli strukturu stránek a blogu.',
  cards: [
    { value: '+55 %', label: 'organické návštěvnosti' },
    { value: '7 měsíců', label: 'doba' },
    { value: 'březen → září 2025', label: 'období' },
  ],
  dataNote: 'Název klienta nezveřejňuji. Data jsou relativní: růst se počítá od nízké základny nového webu. Na projektu jsem pracoval společně s kolegou. Zdroj: data analytiky webu (Google Search Console nebo měřicí nástroj webu).',
  heroCta: 'Chci audit zdarma',

  startTitle: 'Jaká byla výchozí situace?',
  startAnswer: 'Platforma, která propojuje studenty s univerzitami, byla nový web bez historie a nasbírané autority ve vyhledávání. Soutěžit se zavedenými weby o nejhledanější dotazy bylo na takovém startu nereálné.',
  startText: 'Nový web nemá data o tom, které stránky fungují, proto bylo důležité nejdřív vybrat dotazy, u kterých můžeme vůbec proniknout do výsledků.',

  lowTitle: 'Proč jsme na začátku zvolili málo hledané dotazy?',
  lowAnswer: 'Nový web nemá autoritu, takže se u nejhledanějších dotazů zpravidla nezobrazuje. Málo hledané dotazy jsou konkrétnější a méně konkurenční, a proto u nich lze snáz získat první pozice a první návštěvnost, a poté se rozšiřovat.',
  lowText: 'Společně s kolegou jsme se nesnažili bojovat o nejpopulárnější formulace, ale hledali jsme dotazy, u kterých může nová platforma reálně proniknout do výsledků. Tato sázka na startu určila, které stránky a sekce blogu jsme dál navrhovali.',

  doTitle: 'Co jsme dělali?',
  doAnswer: 'Společně s kolegou jsme zkoumali klíčová slova pro stránky webu a navrhovali strukturu stránek a blogu. Výzkum klíčových slov předcházel návrhu: struktura se stavěla podle nalezených dotazů.',
  doList: [
    'výzkum klíčových slov pro stránky webu s důrazem na málo hledané dotazy;',
    'návrh struktury stránek webu;',
    'návrh stránek blogu.',
  ],

  resultsTitle: 'Jaké byly výsledky za 7 měsíců?',
  resultsAnswer: 'Organická návštěvnost vzrostla o 55 % za 7 měsíců (březen → září 2025). Data jsou relativní: růst se počítá od nízké základny nového webu.',
  resultsTable: {
    head: ['Ukazatel', 'Období', 'Změna'],
    rows: [['Organická návštěvnost', 'březen → září 2025 (7 měsíců)', '+55 %']],
  },
  resultsSource: 'Zdroj: data analytiky webu (Google Search Console nebo měřicí nástroj webu), březen a září 2025.',
  resultsLimits: 'Absolutní hodnoty nezveřejňuji. Do případové studie nepatří registrace, poptávky ani pozice u jednotlivých dotazů. Růst od nízké základny nelze přímo srovnávat s růstem webů s historií.',

  lessonTitle: 'Čemu se z případu naučit?',
  lesson: [
    { title: 'Nový web začíná u dotazů, kde má šanci.', text: 'Bez autority je rozumnější obsadit konkrétní málo hledané dotazy než soutěžit o ty nejpopulárnější.' },
    { title: 'Klíčová slova přicházejí před strukturou.', text: 'Stránky a blog se navrhují podle nalezených dotazů, ne obráceně.' },
    { title: 'Růst od nízké základny čtěte poctivě.', text: 'Procento bez základny a období nic nedokazuje, proto vždy uvádím období a zdůrazňuji, že jde o relativní data.' },
  ],

  faqTitle: 'Časté otázky k případové studii',
  faq: [
    { q: 'Jak propagovat nový web bez autority?', a: 'Začněte výzkumem klíčových slov a vyberte málo hledané dotazy, u kterých se může nový web reálně zobrazit. Podle nich navrhněte stránky a blog. Výsledek záleží na oboru a konkurenci a zaručit ho nelze.' },
    { q: 'Proč začínat málo hledanými dotazy?', a: 'Nový web nemá autoritu, a proto se u nejhledanějších dotazů zpravidla nezobrazuje. Málo hledané dotazy jsou méně konkurenční, a proto u nich lze snáz získat první návštěvnost.' },
    { q: 'Za jak dlouho přijdou první výsledky SEO?', a: 'Záleží na webu, oboru a konkurenci, a zaručit to nelze. V tomto projektu byl růst o 55 % změřen za 7 měsíců (březen → září 2025).' },
  ],

  relatedTitle: 'Související služby',
  related: ['start', 'fullSeo', 'consulting'] as const,
  more: 'Více',
  ctaTitle: 'Spouštíte nový web a nevíte, kde začít?',
  ctaText: 'Bezplatný audit ukáže technické chyby vašeho webu.',
  ctaAudit: 'Chci audit zdarma',
  ctaContact: 'Napište mi',
  nextCases: [
    { key: 'caseTypo' as const, text: 'Sousední případová studie: SEO pro tiskárnu' },
    { key: 'caseKb' as const, text: 'Sousední případová studie: SEO pro překladatelskou agenturu' },
  ],

  schema: {
    about: ['SEO pro vzdělávací platformu', 'propagace nového webu', 'málo hledané dotazy', 'výzkum klíčových slov'],
    formula: EDU_FORMULA_CS,
  },
};

export const CASE_EDU_CS = walk(raw);
