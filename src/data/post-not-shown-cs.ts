// Czech content of the blog article /blog/proc-se-web-nezobrazuje-v-googlu/ (brief of 21.10.2026), level 1 of the free-audit funnel
// (symptom). Seven reasons (sections 2–8) after a first section that tells "not in Google at all" from "in Google but low".
// Names of Search Console / WordPress items are working names from the brief and must be checked on live accounts before publishing.
// Links to the funnel articles 2, 3 and 5 are added when they exist. No author story is invented (the optional anonymous
// experience is not used). No guarantees about indexing time or audit results. The pictures are drawn illustrations ("ilustrace").
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_NOT_SHOWN_PUBLISHED = '2026-10-21';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/proc-se-web-nezobrazuje.webp', width: 1200, height: 630, alt: 'Ilustrace: lupa s otazníkem nad vyhledáváním, které nenašlo web' },

  lead: 'Web se v Googlu nejčastěji nezobrazuje proto, že je nový, blokuje ho noindex nebo robots.txt, Google k němu nenašel cestu, nebo se po redesignu změnily adresy. Nejdřív ověřte, zda je web v Googlu vůbec, a teprve potom hledejte příčinu a opravu.',
  forWhom: 'Text je pro majitele webu, který zjistil, že se web v Googlu neukazuje, a neví proč. Většinu bodů můžete zkontrolovat sami a zdarma. Audit se vyplatí, když si nejste jistí, co při kontrole vidíte.',
  tableTitle: 'Sedm důvodů, proč se web nezobrazuje',
  table: {
    head: ['Důvod', 'Jak ověřit', 'Co dělat'],
    rows: [
      ['1. Nový web', 'zkontrolujte stáří webu a stav v Search Console', 'počkat, odeslat mapu webu'],
      ['2. Noindex', 'zdroj stránky nebo Kontrola adresy URL; WordPress: nastavení viditelnosti pro vyhledávače', 'odstranit noindex'],
      ['3. robots.txt', 'otevřít vasedomena.cz/robots.txt', 'upravit zákaz'],
      ['4. Google stránku nenašel', 'chybí vnitřní odkazy a mapa webu', 'doplnit odkazy, odeslat mapu webu'],
      ['5. Duplicity a canonical', 'report Stránky', 'sjednotit adresy'],
      ['6. Změněné adresy po redesignu', 'stará adresa vs. nová', 'nastavit přesměrování 301'],
      ['7. Ruční opatření nebo bezpečnost', 'sekce Ruční akce a Problémy se zabezpečením v Search Console', 'řídit se hlášením'],
    ],
  },

  sepTitle: 'Je web v Googlu vůbec, nebo je jen nízko?',
  sepAnswer: '„Nezobrazuje se“ může znamenat dvě různé věci: web není v Googlu vůbec, nebo v něm je, ale na slabých pozicích. Liší se příčiny i řešení.',
  sepText: 'Když web v Googlu vůbec není, hledáte technickou příčinu, a tou se zabývá zbytek článku. Zda je web v Googlu, zjistíte za pár minut:',
  sepLinkText: 'Jak zjistit, jestli je web indexovaný v Googlu',
  sepBorder: 'Pokud je web v Googlu, ale nezobrazuje se na prvních místech, nejde o technickou chybu. Takovou věc bezplatný audit neřeší a pomůže spíš konzultace.',
  sepBorderLink: 'Konzultace',

  newTitle: 'Je web nový a Google ho zatím nenašel?',
  newAnswer: 'U nového webu to bývá normální: Google potřebuje dny až týdny, než ho najde. Pomoci mohou mapa webu a Google Search Console.',
  newText: 'Nový web Google nezná, dokud ho nenajde přes odkaz nebo mapu webu. Odeslání mapy webu v Google Search Console může nalezení urychlit, ale čas ani výsledek zaručit nelze. Pokud je web starší a stále nic, hledejte příčinu v dalších bodech.',

  noindexTitle: 'Blokuje web značka noindex?',
  noindexAnswer: 'Značka noindex říká Googlu, aby stránku nezařazoval. Často se na webu zapomene po vývoji nebo po testování.',
  noindexText: 'Značku najdete ve zdroji stránky nebo v Kontrole adresy URL v Search Console, kde Google uvede, že indexaci zakazuje. U WordPressu zkontrolujte v nastavení Čtení volbu „Odrazovat vyhledávače od indexování webu“. Pokud zůstane zapnutá po spuštění, může web z výsledků zmizet.',
  quote: 'Když se web nezobrazuje, bývá příčina často jednoduchá: zapomenutý zákaz indexace. Zkontrolujte nejdřív tohle, než začnete psát nový obsah.',

  robotsTitle: 'Blokuje web soubor robots.txt?',
  robotsAnswer: 'Soubor robots.txt může Googlu zakázat číst celý web nebo jeho část. Otevřete vasedomena.cz/robots.txt a podívejte se, zda tam není zákaz celého webu.',
  robotsText: 'Zákaz celého webu vypadá takto:',
  robotsCode: 'User-agent: *\nDisallow: /',
  robotsText2: 'Dva takové řádky říkají všem robotům, že web nemají číst. Pokud nerozumíte tomu, co v souboru vidíte, pomůže bezplatný audit.',

  findTitle: 'Najde Google vaše stránky?',
  findAnswer: 'Google stránky objevuje podle odkazů a mapy webu. Stránka, na kterou nevede žádný vnitřní odkaz a není v mapě webu, se může skrývat.',
  findText: 'Takové stránce se říká osiřelá. Pomáhá, když jsou důležité stránky propojené z menu nebo z jiných stránek webu a když je odeslaná mapa webu.',

  dupTitle: 'Jsou na webu duplicity nebo canonical na jinou stránku?',
  dupAnswer: 'Pokud je podobných stránek víc, Google si vybere jednu a ostatní nezařadí. Canonical na jinou adresu může stránku stejně vyřadit.',
  dupText: 'Duplicitám se podrobně věnuji v samostatném článku, který připravuji.',

  redTitle: 'Změnily se po redesignu adresy bez přesměrování?',
  redAnswer: 'Když se po redesignu změní adresy a staré se nepřesměrují, Google je může ztratit. To je častá příčina propadu po změně webu.',
  redText: 'Správným řešením je přesměrování 301 ze staré adresy na novou. Redesignu se věnuji v samostatném článku, který připravuji.',

  manTitle: 'Existuje ruční opatření nebo bezpečnostní problém?',
  manAnswer: 'Je to vzácné, ale stojí za to to zkontrolovat v Search Console v sekcích Ruční akce a Problémy se zabezpečením.',
  manText: 'Pokud tam hlášení je, řiďte se jím. Pokud tam žádné není, můžete tento bod odškrtnout.',

  todayTitle: 'Co zkontrolovat dnes?',
  todaySteps: [
    'Ověřte, zda je web v Googlu.',
    'Zkontrolujte noindex a robots.txt.',
    'Podívejte se do Search Console na hlášení o indexaci a ručních akcích.',
  ],
  todayLinkText: 'Jak zjistit, jestli je web indexovaný v Googlu',
  bridge: 'Pokud si nejste jistí, který z důvodů se týká vašeho webu, bezplatný audit ukáže technické chyby: indexaci, duplicity a další technické problémy. Krátkou prezentaci pošlu do 24 hodin, bez hovoru a bez závazků.',
  auditArticleLead: 'Co bezplatný audit zahrnuje a čím se liší od širšího, vysvětluji v článku',
  auditArticleLink: 'Co je SEO audit',
  cta: 'Chci audit zdarma',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Jak dlouho trvá, než se nový web objeví v Googlu?', a: 'Od několika dnů po několik týdnů; záleží na webu a na tom, jak snadno ho Google najde. Mapa webu a Google Search Console proces mohou urychlit, ale nic nezaručují.' },
    { q: 'Proč je web v Googlu, ale nezobrazuje se na prvních místech?', a: 'Zařazení do Googlu neznamená dobrou pozici. Pozice záleží na obsahu, konkurenci a dalších faktorech; to je otázka SEO, ne technické chyby, kterou by bezplatný audit řešil.' },
    { q: 'Pomůže zaplatit Google za zobrazení?', a: 'Reklama (Google Ads) zobrazí inzerát, ale nezařadí web do běžných výsledků. Zařazení do běžných výsledků je zdarma.' },
    { q: 'Musím web do Googlu přihlásit?', a: 'Nemusíte, Google web najde sám. Google Search Console a mapa webu ale hledání usnadní.' },
  ],

  endTitle: 'Nevíte, kde je příčina?',
  endText: 'Když poznáte příznaky, ale nevíte, kde je příčina, podívám se na technické chyby webu.',
  nextLead: 'Další krok:',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  figures: [
    { kind: 'wp' as const, aria: 'Ilustrace: nastavení Čtení ve WordPressu se zapnutou volbou „Odrazovat vyhledávače od indexování webu“', caption: 'Ilustrace: WordPress, nastavení Čtení se zapnutou volbou, která web skrývá před vyhledávači (zjednodušené, ne skutečný snímek obrazovky).' },
    { kind: 'manual' as const, aria: 'Ilustrace: sekce Ruční akce v Google Search Console bez zjištěných problémů', caption: 'Ilustrace: Ruční akce v Search Console, ukázkový stav bez problémů (zjednodušené, ne skutečný snímek obrazovky).' },
  ],

  schema: {
    about: ['proč se web nezobrazuje v Googlu', 'web není na Googlu', 'noindex', 'robots.txt', 'indexace webu'],
  },
};

export const POST_NOT_SHOWN_CS = walk(raw);
