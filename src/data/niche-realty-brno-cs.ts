// Czech content of the niche landing page /seo-pro-realitni-kancelare-brno/ (brief of 31.10.2026). Built ONLY when NICHE_READY.nicheRealtyBrno is true (routes.ts).
// Publication condition (doorway rule): the block "Co jsem viděl v Brně" (R1+R2) and R3 must hold verified data. R3 needs the list of the official names of the Brno city districts
// (městské části) from an official source (brno.cz, Statut města Brna) with the number and a link: `NICHE_REALTY_BRNO_R3` is null until it is filled in, and the build check fails
// if the flag is true without it. Own structure from the brief; the text of the Prague page is not reused. Decisions applied from the author's standing rules: no "no results in the niche"
// statements (29.10.2026), no guarantees, no portal / competitor / client names, no address in Brno, "agentura" never about the author, GEO/AEO always together. hreflang: self only (cs).
import { walk } from '../lib/cs-typo';
import SUMMARIES from './niche-summaries.json';
import { START_PRICE } from './start-shared';
import { FULLSEO_MONTHLY } from './fullseo-shared';
import { PRICES, fmtKc } from './consulting-shared';

export const NICHE_REALTY_BRNO_PUBLISHED = '2026-10-31';
// Capacity status of the niche (the same status as on the Prague page; update on both pages together, the date on the day of publication [?]6).
export const NICHE_REALTY_BRNO_STATUS_DATE = '22. 10. 2026';

// R3: the list of the Brno city districts (29). Source given by the author on 31.10.2026: the Czech Wikipedia list (names 1–15) completed with the other 14 names read from the map of the city districts the author sent (names match the map); replace the source by brno.cz / Statut města Brna when it is reachable. Shape: { count, source: { label, url }, names: [...] }.
export const NICHE_REALTY_BRNO_R3: null | { count: number; lead: string; source: { label: string; url: string }; names: { name: string; url: string }[] } = {
  count: 29,
  lead: 'Městské části Brna, celkem 29, podle seznamu:',
  source: { label: 'Seznam městských částí Brna (Wikipedie)', url: 'https://cs.wikipedia.org/wiki/Seznam_m%C4%9Bstsk%C3%BDch_%C4%8D%C3%A1st%C3%AD_Brna' },
  names: [
    { name: 'Brno-Bohunice', url: 'https://cs.wikipedia.org/wiki/Brno-Bohunice' },
    { name: 'Brno-Bosonohy', url: 'https://cs.wikipedia.org/wiki/Brno-Bosonohy' },
    { name: 'Brno-Bystrc', url: 'https://cs.wikipedia.org/wiki/Brno-Bystrc' },
    { name: 'Brno-Černovice', url: 'https://cs.wikipedia.org/wiki/Brno-%C4%8Cernovice' },
    { name: 'Brno-Chrlice', url: 'https://cs.wikipedia.org/wiki/Brno-Chrlice' },
    { name: 'Brno-Ivanovice', url: 'https://cs.wikipedia.org/wiki/Brno-Ivanovice' },
    { name: 'Brno-Jehnice', url: 'https://cs.wikipedia.org/wiki/Brno-Jehnice' },
    { name: 'Brno-jih', url: 'https://cs.wikipedia.org/wiki/Brno-jih' },
    { name: 'Brno-Jundrov', url: 'https://cs.wikipedia.org/wiki/Brno-Jundrov' },
    { name: 'Brno-Kníničky', url: 'https://cs.wikipedia.org/wiki/Brno-Kn%C3%ADni%C4%8Dky' },
    { name: 'Brno-Kohoutovice', url: 'https://cs.wikipedia.org/wiki/Brno-Kohoutovice' },
    { name: 'Brno-Komín', url: 'https://cs.wikipedia.org/wiki/Brno-Kom%C3%ADn' },
    { name: 'Brno-Královo Pole', url: 'https://cs.wikipedia.org/wiki/Brno-Kr%C3%A1lovo_Pole' },
    { name: 'Brno-Líšeň', url: 'https://cs.wikipedia.org/wiki/Brno-L%C3%AD%C5%A1e%C5%88' },
    { name: 'Brno-Maloměřice a Obřany', url: 'https://cs.wikipedia.org/wiki/Brno-Malom%C4%9B%C5%99ice_a_Ob%C5%99any' },
    { name: 'Brno-Medlánky', url: 'https://cs.wikipedia.org/wiki/Brno-Medl%C3%A1nky' },
    { name: 'Brno-Nový Lískovec', url: 'https://cs.wikipedia.org/wiki/Brno-Nov%C3%BD_L%C3%ADskovec' },
    { name: 'Brno-Ořešín', url: 'https://cs.wikipedia.org/wiki/Brno-O%C5%99e%C5%A1%C3%ADn' },
    { name: 'Brno-Řečkovice a Mokrá Hora', url: 'https://cs.wikipedia.org/wiki/Brno-%C5%98e%C4%8Dkovice_a_Mokr%C3%A1_Hora' },
    { name: 'Brno-sever', url: 'https://cs.wikipedia.org/wiki/Brno-sever' },
    { name: 'Brno-Slatina', url: 'https://cs.wikipedia.org/wiki/Brno-Slatina' },
    { name: 'Brno-Starý Lískovec', url: 'https://cs.wikipedia.org/wiki/Brno-Star%C3%BD_L%C3%ADskovec' },
    { name: 'Brno-střed', url: 'https://cs.wikipedia.org/wiki/Brno-st%C5%99ed' },
    { name: 'Brno-Tuřany', url: 'https://cs.wikipedia.org/wiki/Brno-Tu%C5%99any' },
    { name: 'Brno-Útěchov', url: 'https://cs.wikipedia.org/wiki/Brno-%C3%9At%C4%9Bchov' },
    { name: 'Brno-Vinohrady', url: 'https://cs.wikipedia.org/wiki/Brno-Vinohrady' },
    { name: 'Brno-Žabovřesky', url: 'https://cs.wikipedia.org/wiki/Brno-%C5%BDabov%C5%99esky' },
    { name: 'Brno-Žebětín', url: 'https://cs.wikipedia.org/wiki/Brno-%C5%BDeb%C4%9Bt%C3%ADn' },
    { name: 'Brno-Židenice', url: 'https://cs.wikipedia.org/wiki/Brno-%C5%BDidenice' },
  ],
};

const raw = {
  lang: 'cs' as const,
  published: NICHE_REALTY_BRNO_PUBLISHED,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',

  proof: 'U překladatelské agentury: poptávky z formulářů +65–70 % měsíc po měsíci tři měsíce po sobě (březen–září 2026).',
  proofLink: 'případová studie',
  lead: SUMMARIES['/seo-pro-realitni-kancelare-brno/'],
  heroAudit: 'Požádat o bezplatný audit',
  heroConsulting: 'Konzultace',

  seenTitle: 'Co jsem viděl v Brně?',
  seenAnswer: 'K 29. 10. 2026 jsem si na dotaz „realitní kancelář Brno“ prohlédl výsledky vyhledávání a 11 webů realitních kanceláří v Brně. Google ukazoval blok s mapou. U všech jedenácti webů byly často kladené otázky nedostatečné. Je to můj pozorovací vzorek, ne průzkum trhu. Názvy webů neuvádím.',

  doTitle: 'Co pro realitní kancelář v Brně konkrétně dělám?',
  doAnswer: 'Řeším, aby byl web realitní kanceláře srozumitelný pro vyhledávače i AI: samostatné stránky nabídek a lokalit, správnou indexaci a odstranění duplicit, například u filtrů a prodaných nabídek, jasně popsané služby a odpovědi na časté otázky. Mapy a místní profily řeším samostatnou službou. Každý krok vysvětlím, výsledek nezaručuji.',
  doMaps: 'Mapy a místní profily:',
  doMapsLink: 'SEO pro Mapy',

  districtsTitle: 'Jak má realitní kancelář v Brně pracovat s městskými částmi?',
  districtsAnswer: 'Brno se dělí na městské části. Stránka lokality by měla používat oficiální název městské části a uvádět jen to, co kancelář o lokalitě skutečně ví a může doložit: nabídky, které tam má, a vlastní zkušenost. Stránky lokalit nemají být psané šablonou se zaměněným názvem, taková stránka je pro čtenáře zbytečná.',

  expTitle: 'Jaké mám zkušenosti s weby nemovitostí?',
  expAnswer: 'V říjnu 2026 jsem zpracoval SEO audit a strategii na 12 měsíců pro web z oboru nemovitostí. Z Prahy mohu ukázat rozbor webu malé realitní kanceláře jako příklad postupu, ne jako výsledek pro Brno. Případová studie z Prahy je uvedena s touto poznámkou.',
  expLink: 'Rozbor webu malé realitní kanceláře (příklad z Prahy)',

  coopTitle: 'Jak spolupracuji s realitními kancelářemi a kolik to stojí?',
  coopAnswer: `Začíná se bezplatným auditem technických chyb webu. Poté si můžete vybrat placenou konzultaci za ${fmtKc(PRICES.questions)} za hodinu, nebo za ${fmtKc(PRICES.audit)} s auditem webu a plánem na 12 měsíců, balíček Start za ${fmtKc(START_PRICE)} na tři měsíce, nebo Full SEO od ${fmtKc(FULLSEO_MONTHLY)} měsíčně. Žádný krok nezavazuje k dalšímu.`,

  auditTitle: 'Co zahrnuje bezplatný audit?',
  auditAnswer: 'Audit se týká pouze technických chyb webu: indexace, duplicit a dalších technických věcí. Prezentaci vám pošlu do 24 hodin, bez hovoru a bez závazku. V auditu nejsou klíčová slova, konkurence, mapy, viditelnost v AI, rychlost ani mobilní verze. Ty patří do placené spolupráce, o které rozhodujete až po auditu.',

  fitTitle: 'Pro koho SEO dává smysl a pro koho ne?',
  fitAnswer: 'SEO dává smysl realitní kanceláři, která má jasně popsané služby, chce poptávky z vlastního webu a je ochotná web průběžně doplňovat. Nehodí se kanceláři, která potřebuje záruku pozice nebo výsledek v pevném termínu, protože ty zaručit nelze, ani té, která nechce o svém webu nic měnit.',
  reviewsLead: 'Recenze klientů:',
  reviewsLink: 'Recenze',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Zaručíte pozici nebo poptávky?', a: 'Ne. Výsledek, pozici ani počet poptávek nezaručuji, nikdo to u Googlu poctivě zaručit nemůže. Ukázat mohu, co jsem na webu změnil a proč, a vy si to můžete zkontrolovat. Cílem jsou poptávky z Googlu a AI, ale ani ty nejsou slíbené.' },
    { q: 'Musíte mít kancelář v Brně?', a: 'Ne. V Brně adresu nemám, pracuji z Prahy. Spolupráce probíhá na dálku a konzultaci lze vést videohovorem, nebo osobně v Praze. Nic o místní přítomnosti v Brně na svém webu netvrdím. Pro SEO webu realitní kanceláře v Brně to není překážka, protože web se upravuje na dálku.' },
    { q: 'Co zahrnuje bezplatný audit?', a: 'Bezplatný audit se týká jen technických chyb webu: indexace, duplicit a dalších technických věcí. Prezentaci pošlu do 24 hodin, bez hovoru a bez závazku. Klíčová slova, konkurenci, mapy, viditelnost v AI, rychlost ani mobilní verzi audit neobsahuje. Ty jsou součástí placené spolupráce, na kterou po auditu nemusíte přistoupit.' },
    { q: 'S kolika firmami pracujete současně?', a: `Pracuji současně nejvýše se třemi firmami z jednoho oboru, aby na každou zbýval čas. Stav pro obor realitní služby uvádím vždy s datem, k ${NICHE_REALTY_BRNO_STATUS_DATE}: volno. Až se stav změní, upravím ho na stránce pro Prahu i pro Brno zároveň, aby oba údaje odpovídaly.` },
  ],

  articlesTitle: 'Další články',
  articlesMore: 'Číst článek',

  endTitle: 'Chcete vědět, jaké technické chyby má váš web?',
  endText: 'Bezplatný audit se týká jen technických chyb. Prezentaci pošlu do 24 hodin, bez hovoru a bez závazku. Výsledek ani pozici nezaručuji.',
  endCta: 'Požádat o bezplatný audit',
  endConsulting: 'Konzultace',

  schema: {
    serviceName: 'SEO a GEO/AEO pro realitní kanceláře v Brně',
    serviceType: 'SEO a GEO/AEO pro realitní kanceláře',
    areaServed: 'Brno',
    audience: 'realitní kanceláře',
  },
};

export const NICHE_REALTY_BRNO_CS = walk(raw);
