// Czech content of the blog article /blog/ma-seo-smysl-pro-malou-realitni-kancelar/ (brief N3 of 23.10.2026), the middle of the real-estate funnel N1–N10. Decisions of the author
// (answers of 23.10.2026): slug and title fine, no checks of the search results (so the claim about big players is a general consideration, not a fact), the quote confirmed,
// publication date 24. 10. 2026. No figures, no portal names, no case results, no prices, no mention of the Russian mini-case. Links: N1 and N2 (published); N4–N10 get links when
// published (named without a hyperlink until then). No HowTo, no Service, no ratings.
import { walk } from '../lib/cs-typo';

// Publication date chosen by the author (24. 10. 2026); do NOT bump it when the page is edited. The visible "Aktualizováno" never precedes it (see the view).
export const POST_REALTY_SMALL_PUBLISHED = '2026-10-24';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/ma-seo-smysl-pro-malou-realitni-kancelar.webp', width: 1200, height: 630, alt: 'Ilustrace: tři kritéria pro malou realitní kancelář, cíl, kapacita a čas, u každého ano a ne' },

  lead: 'SEO může mít pro malou realitní kancelář smysl, pokud chce získávat klienty i z vyhledávání, má co nabídnout a dokáže pravidelně pracovat s obsahem. Nedává smysl, když klienty potřebuje okamžitě nebo na obsah nemá kapacitu. Níže jsou kritéria, reálné cíle a první kroky. Výsledky neslibuji.',
  forWhom: 'Text je pro majitele malé realitní kanceláře, který zvažuje, jestli se mu SEO vyplatí. Najdete tu tabulku, kdy SEO dává smysl a kdy ne, reálné cíle pro malou kancelář, kontrolní seznam a první krok.',

  tocTitle: 'Co v textu najdete',
  toc: [
    { id: 'komu', text: 'Pro koho SEO dává smysl a pro koho ne?' },
    { id: 'konkurence', text: 'S kým se malá kancelář v hledání potkává?' },
    { id: 'cile', text: 'Jaké cíle jsou pro malou kancelář reálné?' },
    { id: 'kontrola', text: 'Co malá kancelář zkontroluje jako první?' },
    { id: 'cas', text: 'Kolik času a práce SEO vyžaduje?' },
    { id: 'kanal', text: 'Kdy je lepší zvolit jiný kanál?' },
    { id: 'krok', text: 'Jak vypadá rozumný první krok?' },
  ],

  forTitle: 'Pro koho SEO dává smysl a pro koho ne?',
  forAnswer: 'SEO dává smysl, když kancelář chce klienty i z vyhledávání, má jasné služby a lokality a dokáže pravidelně pracovat s obsahem. Nedává smysl, když potřebuje klienty okamžitě, nemá kapacitu na obsah nebo klienty získává jen doporučením a vyhledávání nepotřebuje. Rozhodnutí je třeba založit na vlastní situaci.',
  forTable: {
    head: ['Oblast', 'Dává smysl', 'Nedává smysl'],
    rows: [
      ['Cíl', 'chcete získávat klienty i z vyhledávání', 'klienty získáváte jen doporučením a vyhledávání nepotřebujete'],
      ['Čas', 'můžete počkat na první změny', 'potřebujete klienty okamžitě'],
      ['Kapacita', 'umíte pravidelně pracovat s obsahem', 'na obsah nemáte kapacitu'],
      ['Nabídka', 'máte jasné služby a lokality, které lze popsat na webu', 'nemáte jasnou nabídku, kterou lze na webu popsat'],
      ['Očekávání', 'počítáte s postupným růstem a bez záruky', 'čekáte záruku pozic nebo rychlý výsledek'],
    ],
  },
  forNote: 'Tabulka je orientační, bez čísel a bez hodnocení účinnosti.',

  rivalsTitle: 'S kým se malá kancelář v hledání potkává?',
  rivalsAnswer: 'V hledání se malá kancelář může potkat s velkými kancelářemi, realitními portály i s dalšími malými firmami. U obecných dotazů mívají větší hráči výhodu v autoritě a v množství obsahu. Je to obecná úvaha, ne měření. Konkrétní konkurenci ukáže až kontrola výsledků hledání pro vaše dotazy.',

  goalsTitle: 'Jaké cíle jsou pro malou kancelář reálné?',
  goalsAnswer: 'Pro malou kancelář bývá reálnější cílit na užší a místní dotazy, vlastní specializaci a konkrétní služby než na obecné dotazy typu prodej bytu v Praze. Takový cíl vyžaduje čas a nezaručuje pozice. Zda je zvolený cíl reálný, ukáže konzultace nad konkrétním webem a trhem.',

  checkTitle: 'Co malá kancelář zkontroluje jako první?',
  checkAnswer: 'Nejdřív zkontrolujte, zda jsou důležité stránky ve vyhledávání, zda má každá služba vlastní stránku, zda je vidět kontakt, zda umíte poznat zdroj poptávky a zda máte kapacitu na obsah. Technické chyby ukáže bezplatný audit, ostatní body je lepší řešit konzultací. Podrobnosti jsou v článku o příčinách.',
  check: [
    'Jsou důležité stránky ve vyhledávání?',
    'Má každá služba vlastní stránku?',
    'Je vidět kontakt a formulář?',
    'Umíte poznat zdroj poptávky?',
    'Máte kapacitu na obsah?',
  ],
  checkLead: 'Podrobnější pořadí kontrol najdete v článku',
  checkLinkText: 'Proč web realitní kanceláře nepřináší poptávky?',
  checkAuditLead: 'Technické chyby ukáže',
  checkAuditLinkText: 'bezplatný audit',

  timeTitle: 'Kolik času a práce SEO vyžaduje?',
  timeAnswer: 'SEO vyžaduje pravidelnou práci a trpělivost, ne jednorázový zásah. Kancelář musí počítat s tím, že obsah vzniká postupně a změny se projeví až po čase. Konkrétní rozsah a ceny jsou na stránkách jednotlivých služeb. U mých vlastních projektů se první změny obvykle objevují za 2–3 měsíce, záruku nedávám.',
  timeLead: 'Rozsah najdete u služeb',
  timeStart: 'SEO start na 3 měsíce',
  timeFull: 'Full SEO na rok',

  channelTitle: 'Kdy je lepší zvolit jiný kanál?',
  channelAnswer: 'Jiný kanál bývá lepší, pokud kancelář potřebuje klienty rychle, nemá kapacitu na obsah nebo její klienti přicházejí hlavně z doporučení. Reklama, portály a mapy mají své výhody i omezení. Přehled kanálů porovnávám v samostatném článku. SEO tedy není jediná cesta, jen jedna z možných.',
  channelLead: 'Kanály porovnávám v článku',
  channelLinkText: 'Jak získat klienty pro realitní kancelář',

  stepTitle: 'Jak vypadá rozumný první krok?',
  stepAnswer: 'Rozumný první krok je zjistit, v jakém stavu web je a jaký cíl je reálný. Bezplatný audit zkontroluje technické chyby, ale nerozhodne, zda se SEO vyplatí. To řeší konzultace, která posoudí web, cíle a konkurenci. Teprve potom má smysl plánovat práci.',
  stepConsultingLead: 'Zda se SEO vyplatí, posoudí',
  stepConsultingLink: 'konzultace',
  stepLandingLead: 'Co v oboru dělám, popisuji na stránce',
  stepLandingLinkText: 'SEO pro realitní kanceláře v Praze',

  // Confirmed by the author (23.10.2026): published
  quote: 'Než začnete s SEO, zjistěte, jaký cíl je pro vaši kancelář reálný, a teprve pak plánujte práci.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Má SEO smysl pro malý byznys?', a: 'Může mít, pokud firma chce získávat klienty i z vyhledávání a umí pravidelně pracovat s obsahem. Nemusí mít, pokud klienty získává jen doporučením a vyhledávání nepotřebuje. Záleží na cíli, kapacitě a konkurenci. Zda se SEO vyplatí právě vám, rozhodne až konzultace nad konkrétním webem.' },
    { q: 'Může malá realitní kancelář uspět v SEO?', a: 'Může, pokud cílí na reálné cíle: užší, místní dotazy a konkrétní služby, ne obecné dotazy typu prodej bytu v Praze. Úspěch ale nezaručuji a pozice nelze slíbit. Je to otázka času, kapacity a konkurence na vašem trhu.' },
    { q: 'Kdy SEO nedává smysl?', a: 'SEO nedává smysl, pokud potřebujete klienty okamžitě, nemáte kapacitu na obsah, nebo klienty získáváte jen doporučením. Také nemá smysl bez jasné nabídky, kterou lze popsat na webu. V těchto případech bývá lepší jiný kanál, například reklama nebo mapy, o kterých píšu v přehledu kanálů.' },
    { q: 'Kolik času zabere SEO?', a: 'SEO vyžaduje pravidelnou práci a čas, žádný jednorázový zásah. U mých vlastních projektů se první změny obvykle objevují za 2–3 měsíce, ale záruku nedávám. Doba závisí na stavu webu, konkurenci a rozsahu úprav. Termín neslibuji.' },
    { q: 'Mám začít SEO, nebo reklamou?', a: 'Záleží na cíli a rozpočtu. Reklama obvykle přivede návštěvníky rychleji, ale jen po dobu placení. SEO pracuje déle a nemá záruku výsledku. Kombinace závisí na velikosti kanceláře a kapacitě. Podrobné srovnání kanálů najdete v samostatném článku. Reklamu nespravuji, takže doporučení nestavím na vlastním zájmu.' },
    { q: 'Co mám zkontrolovat jako první?', a: 'Zkontrolujte, zda jsou důležité stránky ve vyhledávání, zda má každá služba vlastní stránku, zda je vidět kontakt, zda poznáte zdroj poptávky a zda máte kapacitu na obsah. Technické chyby ukáže bezplatný audit, prezentaci dostanete do 24 hodin, bez hovoru a bez závazku.', links: [{ page: 'audit' as const, text: 'Bezplatný audit' }] },
  ],

  endTitle: 'Chcete vědět, jestli má váš web technické chyby, které brání indexaci?',
  endText: 'Požádejte o bezplatný audit. Zkontroluje technické chyby webu: indexaci, duplicity a další technické problémy. Prezentaci pošlu do 24 hodin, bez hovoru a bez závazků. V auditu nejsou klíčová slova, konkurence, mapy, viditelnost v AI, rychlost ani mobilní verze.',
  cta: 'Požádat o bezplatný audit',
  endConsulting: 'Zjistit, zda se SEO vyplatí:',
  endConsultingLink: 'konzultace',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  schema: {
    about: ['má SEO smysl pro malou realitní kancelář', 'SEO pro malou realitní kancelář', 'SEO pro malé realitní kanceláře', 'kdy SEO nedává smysl'],
  },
};

export const POST_REALTY_SMALL_CS = walk(raw);
