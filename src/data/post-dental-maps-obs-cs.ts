// Czech content of the blog article /blog/stomatologie-v-mapach-co-jsem-zjistil/ (brief of 21.11.2026, series "maps", pilot dentistry): the author's dated observation of the first 15 organic CARDS of Google Maps and of
// Mapy.com for "stomatologie v Praze" (21.11.2026, laptop, no login, Google interface EN, Mapy.com interface CS without filters; ads not counted; centre of the search not recorded exactly: the map showed the whole of Prague on both platforms, probably Praha 6 (patch of 21.11.2026)). NEUTRAL: no ordination,
// clinic, catalogue or portal is named; nothing is evaluated; no result or position is promised; the platforms are NOT compared as "better / worse" (the displayed functions differ). NOT used: type of profile,
// reservations, reviews / ratings / counts, the "Ověřená firma" badge, names, addresses. The numbers are the author's (table of the author, spot-checked by the author on 21.11.2026) and must not be changed:
// main category Google: Dental clinic 10, Dentist 4, Oral surgeon 1; Mapy.com: "Stomatologická ordinace" 12, 3 other; web and phone 15/15 on both; hours 14 yes + 1 undetermined on both; photos Google 15, Mapy.com 12 yes / 3 no;
// owner's reply (at least one among the first five visible reviews) Google 10 / 5 / 0, Mapy.com 6 / 8 / 1; list of services Google 9 / 5 / 1, Mapy.com 3 / 9 / 3.
// If a number changes, change the summary, H2-3, the table, the chart, the quote and the FAQ together. The Google pages show no date of change -> "zkontrolováno 21. 11. 2026". One link to the article about the profile
// (published 21.11.2026) inside H2-6; ONE button + ONE text link in the closing block; "Další články": two links.
import { walk } from '../lib/cs-typo';

// Set by hand (the author's day of publication; the day of the brief is the default). Do NOT bump it when the page is edited.
export const POST_MAPS_OBS_PUBLISHED = '2026-11-21';
export const POST_MAPS_OBS_MODIFIED = '2026-11-21';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/stomatologie-v-mapach-co-jsem-zjistil.webp', width: 1200, height: 630, alt: 'Ilustrace: dvakrát 15 karet v mapách pro „stomatologie v Praze“, Google Maps a Mapy.com' },

  summary: 'K 21. 11. 2026 jsem v Google Maps a na Mapy.com prošel po 15 kartách pro dotaz „stomatologie v Praze“. Web a telefon měly všechny karty. Odpověď majitele bylo vidět u 10 z 15 karet na Googlu a u 6 z 15 na Mapy.com. Je to můj pozorovací vzorek, ne průzkum trhu, a nevysvětluje pozice.',

  methodTitle: 'Jak jsem dotaz „stomatologie v Praze“ v mapách zkoumal?',
  methodAnswer: 'Zadal jsem dotaz „stomatologie v Praze“ na notebooku dne 21. 11. 2026, bez přihlášení. Google Maps měly rozhraní v angličtině, Mapy.com v češtině a bez filtrů. Prošel jsem prvních 15 organických karet na každé službě, reklamy jsem nepočítal. Mapa ukazovala celou Prahu, střed jsem přesně nezaznamenal, pravděpodobně to byla Praha 6. Je to můj pozorovací vzorek, ne průzkum trhu.',

  originTitle: 'Z jakých karet se seznam skládal?',
  originAnswer: 'Na Googlu měla jako hlavní kategorii 10 karet „Dental clinic“, 4 „Dentist“ a 1 „Oral surgeon“. Na Mapy.com mělo 12 karet kategorii „Stomatologická ordinace“ a 3 jinou (poliklinika, zdravotnictví, lékař). Názvy ordinací neuvádím. Pořadí se může lišit podle osoby, místa a času.',

  findTitle: 'Co bylo vidět na kartách ordinací?',
  findAnswer: 'Web a telefon měly všech 15 karet na obou službách, hodiny bylo vidět u 14 z 15. Fotky měly všechny karty na Googlu a 12 z 15 na Mapy.com. Odpověď majitele bylo vidět u 10 z 15 karet na Googlu a u 6 z 15 na Mapy.com, seznam služeb u 9 a u 3.',
  tableHead: ['Ukazatel', 'Google Maps (15 karet): ano / ne / nelze určit', 'Mapy.com (15 karet): ano / ne / nelze určit'],
  tableRows: [
    ['Web', '15 / 0 / 0', '15 / 0 / 0'],
    ['Telefon', '15 / 0 / 0', '15 / 0 / 0'],
    ['Hodiny', '14 / 0 / 1', '14 / 0 / 1'],
    ['Fotky', '15 / 0 / 0', '12 / 3 / 0'],
    ['Odpověď majitele', '10 / 5 / 0', '6 / 8 / 1'],
    ['Seznam služeb', '9 / 5 / 1', '3 / 9 / 3'],
  ],
  tableNote: 'Karta je záznam firmy v seznamu výsledků v mapách. Odpověď majitele počítám, pokud je mezi prvními pěti zobrazenými recenzemi aspoň jedna. „Nelze určit“ znamená, že jsem údaj na kartě neviděl. Recenze a hodnocení nepočítám a názvy neuvádím.',
  methodLine: 'Metodika a limity: jeden dotaz, jeden den, jedno zařízení (notebook); mapa ukazovala celou Prahu, střed hledání přesně nezaznamenán (pravděpodobně Praha 6); výsledky se mění podle osoby, místa a času.',
  // Stacked bars: 4 indicators x 2 services, segments ano / ne / nelze určit (the numbers of the table; zeros are not drawn, but are in the aria-label).
  chartCaption: 'Co bylo vidět na kartách pro „stomatologie v Praze“, 21. 11. 2026: ano, ne, nelze určit (Google Maps a Mapy.com).',
  chartLegend: ['ano', 'ne', 'nelze určit'],
  chartRows: [
    { label: 'Fotky · Google', values: [15, 0, 0] },
    { label: 'Fotky · Mapy.com', values: [12, 3, 0] },
    { label: 'Odpověď majitele · Google', values: [10, 5, 0] },
    { label: 'Odpověď majitele · Mapy.com', values: [6, 8, 1] },
    { label: 'Seznam služeb · Google', values: [9, 5, 1] },
    { label: 'Seznam služeb · Mapy.com', values: [3, 9, 3] },
    { label: 'Hodiny · Google', values: [14, 0, 1] },
    { label: 'Hodiny · Mapy.com', values: [14, 0, 1] },
  ],
  quote: 'Web a telefon byly vidět na všech kartách. Odpověď majitele a seznam služeb už vidět nebyly všude. Je to pozorování z jednoho dotazu, ne vysvětlení pozic.',

  rankTitle: 'Čím se liší řazení v Google Maps a na Mapy.com?',
  rankAnswer: 'Google uvádí, že místní výsledky závisí hlavně na relevanci, vzdálenosti a známosti a že za lepší místní pozici nelze požádat ani zaplatit. Podle nápovědy Firmy.cz řazení na Mapy.com ovlivňuje relevance, lokalita a cena v aukci. Pořadí v seznamu proto nehodnotím jako lepší nebo horší.',
  sourcesLabel: 'Zdroje (zkontrolováno 21. 11. 2026):',
  rankSources: [
    { text: 'Google Business Profile: Jak se určuje místní řazení', href: 'https://support.google.com/business/answer/7091' },
    { text: 'Firmy.cz nápověda: Kde se firemní profil zobrazuje', href: 'https://napoveda.firmy.cz/zaciname/kde-se-profil-zobrazuje/' },
  ],

  notTitle: 'Co z tohoto pozorování nevyplývá?',
  notAnswer: 'Nevyplývá z něj, proč jsou tyto karty vpředu. Recenze ani hodnocení jsem nepočítal, i když je Google uvádí jako součást známosti. Zapisuji jen to, co je na kartách vidět, a nehodnotím práci jednotlivých ordinací. Výsledek ani pozici z toho nevyvozuji ani nezaručuji.',

  checkTitle: 'Jak si zkontrolovat profil ordinace v mapách?',
  checkAnswer: {
    before: 'Projděte profil podle pěti kroků níže a porovnejte ho s webem. Nic z toho není záruka lepší pozice, jde o kontrolu, zda údaje sedí a zda je ordinace sama spravuje. Pokud chcete rozepsat vyplnění krok za krokem, najdete ho ',
    link: 'v samostatném článku',
    after: '.',
  },
  checkSteps: [
    'Zkontrolujte, zda název profilu odpovídá skutečnému názvu ordinace, jak je uveden na vývěsce a na webu. Google zakazuje zbytečné doplňky v názvu.',
    'Zvolte co nejméně kategorií, jen ty, které popisují hlavní činnost. Google uvádí, že kategorie nemají sloužit jen jako klíčová slova.',
    'Ověřte adresu, telefon a hodiny a nastavte stejné údaje na Googlu, na Mapy.com i na Firmy.cz.',
    'Odpovídejte na recenze. O hodnocení můžete klienty požádat, ale ne za ně nabízet odměnu ani vybírat jen pozitivní.',
    'Doplňte seznam služeb, pokud ho profil nabízí, a fotografie ordinace. Texty o léčbě musí schválit lékař ordinace.',
  ],
  checkSources: [
    { text: 'Google Business Profile: Pokyny pro profily', href: 'https://support.google.com/business/answer/3038177' },
    { text: 'Google: Zásady pro hodnocení a recenze', href: 'https://support.google.com/contributionpolicy/answer/7400114' },
  ],

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Dá se zaplatit za pozici v Google Maps?', a: 'Ne. Google v nápovědě uvádí, že za lepší místní pozici nelze požádat ani zaplatit. Místní výsledky podle něj závisí hlavně na relevanci, vzdálenosti a známosti. Na pořadí v mém vzorku z toho nic nevyvozuji, protože nevím, proč jsou jednotlivé karty vpředu.' },
    { q: 'Ovlivňuje platba pořadí na Mapy.com?', a: 'Podle nápovědy Firmy.cz ovlivňuje řazení profilů relevance k hledanému dotazu, lokalita a cena v aukci. Platba tedy může pořadí ovlivnit. Z mého pozorování se nedá poznat, které karty jsou placené, a proto pořadí v seznamu nehodnotím jako lepší nebo horší.' },
    { q: 'Kolik recenzí musí mít ordinace?', a: 'Žádné číslo nemám. Google uvádí, že více recenzí a pozitivní hodnocení mohou místnímu pořadí pomoci, ale já recenze v tomto vzorku nepočítal, takže z něj žádný počet vyvodit nelze. Doporučit konkrétní počet proto nemohu ani nechci. Recenze nekupujte a neodměňujte za ně.' },
    { q: 'Smí ordinace odměňovat pacienty za recenzi?', a: 'Ne. Google v zásadách pro recenze zakazuje nabízet platbu, slevy nebo zboží výměnou za recenzi a také vybírat jen pozitivní hodnocení. Požádat o upřímné hodnocení lze, třeba odkazem nebo QR kódem, bez odměny a bez ovlivňování textu recenze. V praxi odměnu za recenzi nenabízejte.' },
  ],

  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  mistake: { before: 'Našli jste chybu?', link: 'Napište mi.' },
  endTitle: 'Chcete mít profil své ordinace v mapách v pořádku?',
  endCta: 'Lokální SEO pro Google Maps a Mapy.com',
  endLink: { before: 'Podívejte se také na', text: 'SEO pro zubní ordinace v Praze', after: '.' },
  moreTitle: 'Další články',
  moreMore: 'Číst článek',
};

export const POST_MAPS_OBS_CS = walk(raw);
