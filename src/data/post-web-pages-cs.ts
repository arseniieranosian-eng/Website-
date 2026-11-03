// Czech content of the blog article /blog/jake-stranky-ma-mit-web-firmy/ (brief of 03.11.2026): which pages a company website needs and what each does.
// Informational, three roles of pages as the author's own simplification (not Google's). Decisions from the author's standing rules, which override the brief: no guarantee phrases
// (the sentences "výsledek ani pozici nezaručuji" / "Záruku to ale není" / "výsledek to nezaručuje" are not written), the closing block has ONE button and no guarantee line.
// S2: the site calls the pages "Případové studie" (cases), "Recenze" (reviews) and "O mně" (about), so "kejsy" of the brief is written as "případové studie". S3: the Google spam-policies wording
// (doorway abuse) is NOT verified against the documentation (the Google page was not reachable from the build environment). The author's quote has NO Quotation markup (brief rule J).
// Publication date = the day of the brief (open question Q2 default). No links in the body: the only link is the button of the closing block.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_WEB_PAGES_PUBLISHED = '2026-11-03';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/jake-stranky-ma-mit-web-firmy.webp', width: 1200, height: 630, alt: 'Ilustrace: tři typy stránek webu firmy: stránka služby s tlačítkem, informační článek a stránka důvěry' },

  lead: 'Článek vysvětluje tři úlohy stránek na webu firmy podle mého pohledu. Není to oficiální dělení Google.',

  rolesTitle: 'Jaké tři úlohy mají stránky na webu firmy?',
  rolesAnswer: 'Z pohledu vyhledávání rozlišuji tři hlavní úlohy stránek. Stránky služeb vedou k poptávce. Informační články oslovují lidi, kteří ještě nevědí, že danou službu potřebují. Stránky důvěry, například případové studie nebo informace o firmě, pomáhají rozhodnout se. Jsou to moje zjednodušené kategorie, ne oficiální dělení Google.',
  quote: 'Každá stránka na webu má jednu práci. Když se pokouší dělat dvě, nedělá dobře ani jednu.',

  serviceTitle: 'Co dělá stránka služby?',
  serviceAnswer: 'Stránka služby odpovídá na otázky, co firma nabízí, co je v ceně, kolik to stojí a jak začít. Je určena člověku, který už ví, co hledá. Má jeden záměr, jednu službu a jasný další krok. Informace, které ji rozmělňují, patří do článků.',

  blogTitle: 'K čemu je firmě blog?',
  blogAnswer: 'Blog je pro lidi, kteří problém znají, ale ještě nehledají konkrétní službu. Odpoví na jejich otázku a vysvětlí souvislosti. Článek nemá prodávat, ale být užitečný, a teprve na konci může nabídnout další krok. Takto doplňuje stránky služeb, nenahrazuje je a nekonkuruje jim.',

  trustTitle: 'Jaké stránky budují důvěru?',
  trustAnswer: 'Důvěru buduje to, co si čtenář může ověřit: kdo za firmou stojí, jak pracuje, kontakt a případně i případové studie s doloženými fakty. Nic nevymýšlejte a nepřehánějte. Stránka důvěry nemá nic prodávat, má jen odstranit pochybnosti před rozhodnutím. Jaké důkazy použít, záleží na oboru.',

  cityTitle: 'Jsou stránky pro města a obory zvláštní typ?',
  cityAnswer: 'Je to stránka služby pro konkrétní město nebo obor. Smysl má jen tehdy, když obsahuje vlastní informace pro dané město nebo obor. Pokud se liší jen názvem, jde o riziko: Google v zásadách proti spamu označuje za zneužití (doorway abuse) vytváření stránek, které mají obsadit konkrétní, podobné dotazy.',

  linkTitle: 'Jak spolu tyto stránky souvisejí?',
  linkAnswer: 'Stránka služby je středem. Články na ni odkazují jednou, z konce textu, a stránka služby na ně odkazuje v jednom bloku na konci. Stránky důvěry podporují obě. Důležité je, aby jedna stránka měla jeden záměr a neslibovala to, co řeší jiná.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Má každá služba mít vlastní stránku?', a: 'Ano, pokud je služba pro zákazníka jiné rozhodnutí. Jedna stránka s několika službami se hůře čte a hůře se vysvětluje, čemu je věnována. Samostatnou stránku má smysl dělat tam, kde máte co o službě říct, ne jen kvůli dalšímu klíčovému slovu.' },
    { q: 'Kolik článků má firma na blogu mít?', a: 'Nelze říct, kolik článků je správně: záleží na oboru, na tom, co lidé hledají, a na tom, co zvládnete udržovat. Důležitější než počet je, aby každý článek odpovídal na jednu konkrétní otázku a vedl na správnou stránku služby, ne na ten první, který se namane.' },
    { q: 'Stačí na webu jen stránky služeb?', a: 'Jen stránky služeb často nestačí, protože oslovují jen ty, kdo už službu hledají. Informační články a stránky důvěry pomáhají lidem, kteří teprve zjišťují, co potřebují, a rozhodnout se. Proto je dobré zvážit všechny tři úlohy, ne jen jednu.' },
    { q: 'Potřebuje malá firma stránku důvěry?', a: 'Malá firma nepotřebuje rozsáhlou sekci. Stačí stránka o tom, kdo firmu vede, jak pracujete a jak vás kontaktovat. Případové studie a recenze přidejte jen tehdy, když je máte doložené a smíte je zveřejnit. Nic z toho nevymýšlejte. Rozsah odpovídá velikosti firmy.' },
  ],

  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  endTitle: 'Chcete vědět, jestli váš web nemá technické chyby?',
  endText: 'Bezplatný technický audit pošlu do 24 hodin, bez hovoru a bez závazku.',
  endCta: 'Požádat o bezplatný technický audit',
};

export const POST_WEB_PAGES_CS = walk(raw);
