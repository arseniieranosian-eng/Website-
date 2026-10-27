// Czech content of the blog article /blog/redesign-webu-seo-pred-spustenim/ (brief K1 of 28.10.2026), the "before the redesign / migration" article of the funnel to /konzultace/. Informational, no promises that traffic
// is kept. Defaults taken: no quote, no observations, no cases, no prices, no CTA to the audit, no CMS / brand names (only Google Search Console and Googlebot), one link to the 301/404 article (H2-4), two related
// articles, one link to /konzultace/ in the closing block. Title: "Redesign webu a SEO: checklist před startem | Eranosian" (55 characters; the brief's 57 would break the site-wide limit of 55); description 139 (brief: 152, limit 150).
// The Google statements (change of address, redirects, canonical / hreflang, test copy with noindex, redirects kept at least a year, fluctuations after a move) follow the brief; they were NOT compared with the two Google
// pages from here (developers.google.com is not reachable from the build environment), so that comparison is still open before the live release. Length: about 1 100 words, below the 1 400–2 000 target; nothing outside
// the brief was added. No HowTo, no Service, no ratings, no Quotation.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_REDESIGN_PLAN_PUBLISHED = '2026-10-28';
// Review every 90 days against both Google pages: next 2027-01-26.

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/redesign-webu-seo-pred-spustenim.webp', width: 1200, height: 630, alt: 'Ilustrace: starý a nový web propojené mapou adres a přesměrováním' },

  lead: 'Redesign mění vzhled a strukturu webu, migrace mění adresy, doménu nebo systém. Z hlediska SEO je důležité, aby se při změně neztratily adresy, obsah a kontakt s Googlem; dočasné kolísání viditelnosti je podle dokumentace Google možné.',

  diffTitle: 'Čím se redesign liší od migrace z hlediska SEO?',
  diffAnswer: 'Redesign změní vzhled webu a adresy mohou zůstat stejné; migrace mění adresy, doménu nebo systém. Rozdíl určuje, co je nutné zajistit: u změny adres mapu URL a přesměrování, u změny domény navíc Change of Address v Google Search Console. Pokud se adresy nemění, jde hlavně o obsah a dostupnost.',
  diffNote: 'Google Search Console je bezplatný nástroj Googlu pro sledování webu.',

  recordTitle: 'Co zaznamenat na starém webu před spuštěním?',
  recordAnswer: 'Před spuštěním si uložte stav starého webu: seznam všech adres, title, description a H1 klíčových stránek, údaje o návštěvnosti a dotazech z Google Search Console, vnitřní odkazy, soubor robots.txt a sitemap. Tento seznam je záloha pro porovnání po spuštění. Jde o doporučení autora, ne požadavek Google.',
  recordLead: 'Co uložit:',
  record: [
    'seznam všech adres;',
    'title, description, H1 klíčových stránek;',
    'návštěvnost a dotazy ze Search Console;',
    'vnitřní odkazy;',
    'robots.txt a sitemap.',
  ],

  mapTitle: 'Jak připravit mapu starých a nových adres?',
  mapAnswer: 'Mapa URL přiřazuje každé staré adrese novou odpovídající adresu. Podle dokumentace Google se nemají mnohé staré adresy přesměrovávat na jednu nerelevantní stránku, například na novou úvodní. U obsahu, který se nepřenáší, se vrací chyba 404 nebo 410. Mapu připravte před spuštěním.',
  mapTable: {
    head: ['Starý URL', 'Nový URL', 'Akce'],
    rows: [
      ['/stara-sluzba/', '/nova-sluzba/', '301'],
      ['/stary-clanek/', '/blog/stary-clanek/', '301'],
      ['/nepouzity-obsah/', '—', '404 nebo 410'],
      ['/kontakt/', '/kontakt/', 'beze změny'],
    ],
  },
  mapNote: 'Ukázka, ne reálný web.',

  redirTitle: 'Jaká přesměrování jsou potřeba a jak je otestovat?',
  redirAnswerBefore: 'Přesměrování 301 má vést staré adresy rovnou na jejich konečné nové adresy, bez řetězení. Dokumentace Google doporučuje serverové trvalé přesměrování, pokud je technicky možné. Funkčnost otestujte před spuštěním, například nástrojem pro kontrolu adres v Google Search Console. Podrobnosti o 301 a 404 najdete v',
  redirLinkText: 'samostatném článku',

  keepTitle: 'Co zachovat na novém webu: nadpisy, texty, strukturu, canonical a hreflang?',
  keepAnswer: 'Zachovejte to, co stránce pomáhá: srozumitelné nadpisy, texty odpovídající na otázky zájemců, strukturu a vnitřní odkazy. Podle dokumentace Google je při změně adres třeba aktualizovat také canonical, hreflang a vnitřní odkazy na nové adresy. Ostatní položky checklistu jsou doporučení autora.',
  keepLead: 'Co zachovat nebo aktualizovat:',
  keep: [
    'nadpisy a texty zachovány;',
    'struktura a vnitřní odkazy zachovány;',
    'canonical ukazuje na nové adresy;',
    'hreflang aktualizován (jen u vícejazyčných webů);',
    'sitemap obsahuje nové adresy.',
  ],

  testTitle: 'Jak ověřit nový web před spuštěním, aby nebyl zavřený před Googlem?',
  testAnswer: 'Testovací verzi webu omezte heslem nebo noindex a před spuštěním tuto blokaci z nové kopie odstraňte. Tak postupuje dokumentace Google o změně hostingu bez změny adres; pro redesign je to analogie. Ověřte také, že Googlebot na nový web smí, například nástrojem pro kontrolu adres.',

  dayTitle: 'Co udělat v den spuštění?',
  dayAnswer: 'V den spuštění odstraňte blokace z testovací verze, odešlete v Google Search Console novou sitemapu, zkontrolujte přesměrování a otevřete klíčové adresy. Poté sledujte indexaci a chyby. Dokumentace Google uvádí, že po přesunu může dočasně kolísat viditelnost i rychlost procházení, což je očekávané.',
  dayLead: 'Kontrolní seznam dne spuštění:',
  day: [
    'blokace odstraněny;',
    'nová sitemap odeslána;',
    'přesměrování zkontrolována;',
    'klíčové adresy se otevírají;',
    'indexace a chyby se sledují.',
  ],

  afterTitle: 'Jak dlouho držet přesměrování a co sledovat po spuštění?',
  afterAnswer: 'Přesměrování ponechte co nejdéle; podle dokumentace Google obecně alespoň rok. Po spuštění sledujte, jak se návštěvnost starých adres snižuje a nových zvyšuje, a zkontrolujte chyby procházení. Kolísání viditelnosti může trvat týdny i déle. Žádný konkrétní průběh ani návrat k původním číslům nezaručuji.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Potřebuje změna domény jiný postup než redesign?', a: 'Ano. Při změně domény je kromě mapy URL a přesměrování potřeba v Google Search Console podat Change of Address pro starý web. Při redesignu bez změny adres se jen kontroluje obsah a dostupnost. Postup se liší podle toho, zda se mění adresy, doména, nebo jen vzhled.' },
    { q: 'Co dělat, když se adresy nemění?', a: 'Zkontrolujte, že nový web není zavřený před Googlem a že obsah, nadpisy a odkazy zůstaly zachované. Dokumentace Google o změně hostingu bez změny adres je jen analogie, ne návod k redesignu. Pokud se adresy nemění, mapa URL ani přesměrování obvykle nejsou nutné.' },
    { q: 'Musí se podávat Change of Address?', a: 'Change of Address se podává při změně domény nebo subdomény. Při změně adres uvnitř stejné domény stačí mapa URL a přesměrování. Podle dokumentace Google ověřte ve Search Console starý i nový web ve všech variantách, například s www a bez www. Detaily vždy zkontrolujte v aktuální nápovědě.' },
    { q: 'Co s hreflang při redesignu vícejazyčného webu?', a: 'Při změně adres aktualizujte hreflang na nové adresy a zkontrolujte, že každá jazyková verze odkazuje na nové adresy ostatních verzí. Dokumentace Google tuto aktualizaci zmiňuje jako součást změny adres. U redesignu bez změny adres zkontrolujte, zda hreflang zůstal zachován v šabloně.' },
    { q: 'Mohu spustit nový web na testovací adrese, aniž bych ho zavřel?', a: 'Nedoporučuje se. Testovací verze má být omezena heslem nebo noindex, aby se nedostala do indexu; dokumentace Google o změně hostingu to uvádí. Před spuštěním pak blokaci z nové kopie odstraňte, jinak se nový web nemusí zobrazit. Tuto kontrolu zařaďte do checklistu spuštění.' },
    { q: 'Jak dlouho držet 301?', a: 'Co nejdéle; dokumentace Google uvádí, že obecně alespoň rok. Čím déle přesměrování zůstanou, tím déle starý odkaz vede na správné místo. Aktualizujte také vnitřní odkazy a nejdůležitější externí odkazy na nové adresy, aby uživatelé nebyli odkázáni jen na přesměrování. Tím snížíte závislost na přesměrování.' },
  ],

  relatedTitle: 'Související články',
  endBefore: 'Pokud chcete nezávislý pohled na plán spuštění a seznam kontrol pro svůj web, je k dispozici',
  endLinkText: 'SEO konzultace',

  schema: {
    about: ['redesign webu SEO', 'migrace webu SEO', 'SEO checklist před spuštěním nového webu', 'mapa URL a přesměrování 301'],
  },
};

export const POST_REDESIGN_PLAN_CS = walk(raw);
