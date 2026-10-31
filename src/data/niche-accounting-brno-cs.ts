// Czech content of the niche landing page /seo-pro-ucetni-kancelare-brno/ (brief of 31.10.2026). Built ONLY when NICHE_READY.nicheAccountingBrno is true (routes.ts).
// Publication condition (doorway rule): B1, B2 and B3 are all filled in (B2 added 31.10.2026), so the page is published (NICHE_READY.nicheAccountingBrno = true).
// "účetní kancelář Brno", WAITING for the author's data). Until B2 is filled in `NICHE_ACCOUNTING_BRNO_B2` the flag stays false and the page is not built, not in the menu and not in the sitemap.
// Own structure from the brief; text of the Prague page is not reused. Decisions applied from the author's standing rules: no "no results in the niche" statements (29.10.2026),
// no guarantees, no client / competitor names, no address in Brno, "agentura" never about the author, GEO/AEO always together. hreflang: self only (cs).
import { walk } from '../lib/cs-typo';
import { START_PRICE } from './start-shared';
import { FULLSEO_MONTHLY } from './fullseo-shared';
import { PRICES, fmtKc } from './consulting-shared';

export const NICHE_ACCOUNTING_BRNO_PUBLISHED = '2026-10-31';
// Capacity status of the niche (the same status as on the Prague page; update on both pages together, and the date on the day of publication [?]6).
export const NICHE_ACCOUNTING_BRNO_STATUS_DATE = '23. 10. 2026';

// B2 (filled in 31.10.2026 from the author's answers: check of 25. 10. 2026, google.cz, first page: map block, firm sites, AI answer; no names). The one-off check of the first page for "účetní kancelář Brno". The author fills it in (10 minutes): date of the check (google.cz), the types of results seen
// (map block / directories / firm sites / online services / AI answer), no names. Text template (40–60 words):
//   „K [datum] jsem na dotaz „účetní kancelář Brno“ viděl: [typy výsledků]. Je to jednorázová kontrola, ne měření trhu.“ No conclusions about the market.
export const NICHE_ACCOUNTING_BRNO_B2: null | { title: string; answer: string } = {
  title: 'Co ukazuje vyhledávání pro účetní kanceláře v Brně?',
  answer: 'K 25. 10. 2026 jsem na google.cz zadal dotaz „účetní kancelář Brno“ a na první stránce viděl blok map, weby samotných účetních kanceláří a odpověď AI. Je to jednorázová kontrola z jednoho dne, ne měření trhu. Žádné závěry o tom, kdo v Brně vyhledávání ovládá, z ní nevyvozuji a názvy firem neuvádím.',
};

const raw = {
  lang: 'cs' as const,
  published: NICHE_ACCOUNTING_BRNO_PUBLISHED,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',

  // line under the H1 (rule B): the translation-agency case only; Brno is not mentioned here
  proof: 'U překladatelské agentury: poptávky z formulářů +65–70 % měsíc po měsíci tři měsíce po sobě (březen–září 2026).',
  proofLink: 'případová studie',
  lead: 'Dělám SEO a GEO/AEO pro účetní kanceláře v Brně. Cílem jsou poptávky z Googlu a AI, výsledek ani pozici ale nezaručuji.',
  heroAudit: 'Požádat o bezplatný audit',
  heroConsulting: 'Konzultace',

  coopTitle: 'Jak spolupráce vypadá?',
  coopAnswer: 'Spolupráce začíná bezplatným auditem technických chyb webu: indexace, duplicity a další technické věci. Pošlu vám jeho prezentaci do 24 hodin, bez hovoru a bez závazku. Potom se můžete rozhodnout pro placenou konzultaci, balíček Start, nebo Full SEO. Po auditu se nemusíte rozhodnout pro nic.',

  priceTitle: 'Kolik to stojí a jak začít?',
  priceAnswer: `Balíček Start stojí ${fmtKc(START_PRICE)} za tři měsíce, Full SEO začíná na ${fmtKc(FULLSEO_MONTHLY)} měsíčně. Konzultace stojí ${fmtKc(PRICES.questions)} za hodinu, nebo ${fmtKc(PRICES.audit)} s auditem webu a plánem na 12 měsíců. Začít můžete bezplatným auditem technických chyb, který nic nestojí a k ničemu nezavazuje.`,

  expTitle: 'Jaké mám zkušenosti s tímto oborem?',
  expAnswer: 'Pracoval jsem v jiných oborech, například pro překladatelskou agenturu, jejíž výsledky uvádím výše. Z účetních kanceláří mám vlastní pozorování jejich webů, jedno z nich uvádím níže. Nevydávám je za výsledek práce, nic z nich nezaručuji a výsledky z jiného oboru nepřenáším na váš web.',
  expLink: 'Přečíst případovou studii překladatelské agentury',

  obsTitle: 'Co jsem zjistil na webech brněnských účetních kanceláří?',
  obsAnswer: 'K 25. 10. 2026 jsem si prohlédl 10 webů účetních kanceláří v Brně. U všech deseti byly často kladené otázky nedostatečné, devět z deseti nemělo blog a u všech deseti nebyla struktura nadpisů vhodná pro AI vyhledávání. Je to můj pozorovací vzorek, ne průzkum trhu. Názvy webů neuvádím.',
  obsText: 'Taková slabá místa jsou prostor ke zlepšení. Práci směřuji na poptávky, ne jen na pozice. Pozici ani počet poptávek zaručit nelze.',

  localTitle: 'Na co si dát pozor, když má účetní kancelář sídlo nebo pobočku v Brně?',
  localAnswer: 'Nejdůležitější je, aby profil, stránka a služby popisovaly jen místo, které kancelář v Brně skutečně má: jeho adresu, telefon a služby, které se tam opravdu nabízejí. Má-li kancelář pobočku, patří k ní vlastní stránka a profil. Jeden společný popis pro všechna místa je zbytečně opakovaný a pro zájemce nejasný.',
  localMaps: 'Mapy a místní profily řeším samostatnou službou:',
  localMapsLink: 'SEO pro Mapy',

  fitTitle: 'Pro koho SEO dává smysl a pro koho ne?',
  fitAnswer: 'SEO dává smysl účetní kanceláři, která chce poptávky z webu, má jasně popsané služby a je ochotná web a obsah průběžně doplňovat. Nehodí se kanceláři, která potřebuje výsledek v pevném termínu nebo záruku pozice, protože ty zaručit nelze, a také té, která nechce o svém webu nic měnit.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Zaručíte pozici nebo poptávky?', a: 'Ne. Výsledek, pozici ani počet poptávek nezaručuji, nikdo to u Googlu poctivě zaručit nemůže. Ukázat mohu postup práce, který se dá zkontrolovat: co jsem na webu změnil, proč a co z toho plyne. Cílem jsou poptávky z Googlu a AI, ale ani ty nejsou slíbené.' },
    { q: 'Musíte mít kancelář v Brně?', a: 'Ne. V Brně adresu nemám, pracuji z Prahy. Spolupráce probíhá na dálku a konzultaci lze vést videohovorem z kterékoli země, nebo osobně v Praze. Adresu v Brně na webu neuvádím a nic o místní přítomnosti v Brně netvrdím. Pro SEO účetní kanceláře v Brně to není překážka.' },
    { q: 'Co zahrnuje bezplatný audit?', a: 'Bezplatný audit se týká pouze technických chyb webu: indexace, duplicit a dalších technických věcí. Prezentaci pošlu do 24 hodin, bez hovoru a bez závazku. Audit neobsahuje klíčová slova, konkurenci, mapy, viditelnost v AI, rychlost ani mobilní verzi. Ty patří do placené spolupráce.' },
    { q: 'S kolika kancelářemi pracujete současně?', a: `Pracuji současně nejvýše se třemi firmami z jednoho oboru, aby na každou zbýval čas. Stav pro obor účetnictví uvádím vždy s datem. K ${NICHE_ACCOUNTING_BRNO_STATUS_DATE} bylo volno. Až se stav změní, upravím ho na stránce pro Prahu i pro Brno zároveň.` },
    { q: 'Co znamená GEO/AEO pro účetní kancelář?', a: 'GEO a AEO znamenají, aby web dobře odpovídal nejen vyhledávači, ale i AI odpovědím: jasné nadpisy jako otázky, krátká přímá odpověď pod každým z nich a samostatné stránky služeb. Zda vás AI doporučí, zaručit nelze, ale web, který je pro ni srozumitelný, má lepší výchozí pozici.' },
  ],

  articlesTitle: 'Další články',
  articlesMore: 'Číst článek',

  endTitle: 'Chcete vědět, jaké technické chyby má váš web?',
  endText: 'Bezplatný audit se týká jen technických chyb. Prezentaci pošlu do 24 hodin, bez hovoru a bez závazku. Výsledek ani pozici nezaručuji.',
  endCta: 'Požádat o bezplatný audit',
  endConsulting: 'Konzultace',

  schema: {
    serviceName: 'SEO a GEO/AEO pro účetní kanceláře v Brně',
    serviceType: 'SEO a GEO/AEO pro účetní kanceláře',
    areaServed: 'Brno',
    audience: 'účetní kanceláře',
  },
};

export const NICHE_ACCOUNTING_BRNO_CS = walk(raw);
