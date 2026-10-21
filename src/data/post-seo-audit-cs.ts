// Czech content of the blog article /blog/co-je-seo-audit/ (brief of 21.10.2026), level 3 of the free-audit funnel ("ready to
// choose"). The commercial keywords "SEO audit zdarma" / "audit webu zdarma" belong to /audit-zdarma/; the price of the paid audit is
// not named here (link to the consultation only); the crawler name is never used. The list "co bezplatný audit nenajde" repeats the
// "not included" table of /audit-zdarma/ (data/audit-cs.ts); update both together. No sample-presentation frames (no anonymised
// variant), so one drawn illustration. Links to the funnel articles 5 and 10 are added when they exist.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_SEO_AUDIT_PUBLISHED = '2026-10-21';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/co-je-seo-audit.webp', width: 1200, height: 630, alt: 'Ilustrace: lupa nad dokumentem se seznamem kontrol SEO auditu' },

  lead: 'SEO audit je kontrola webu, která ukáže, co brání jeho viditelnosti ve vyhledávání. Může být technický, obsahový nebo širší. Bezplatný audit, který nabízím, kontroluje jen technické chyby: indexaci, duplicity a další technické problémy, nikoli klíčová slova ani konkurenci, mapy nebo AI.',
  forWhom: 'Text je pro majitele webu, který u někoho viděl „audit zdarma“ a nechápe, co je uvnitř. Najdete v něm, z čeho se audit skládá, jaké typy existují, co bezplatný audit zahrnuje i co ne a podle čeho poznat dobrý audit.',

  whatTitle: 'Co je SEO audit?',
  whatAnswer: 'SEO audit je systematická kontrola webu, která ukáže, co brání jeho viditelnosti ve vyhledávání a v jakém pořadí to opravit.',
  whatText: 'Od jednorázového checklistu se liší tím, že čte konkrétní stránky webu a řadí nálezy podle priority. Checklist jen vypisuje body, které je dobré zkontrolovat, a o vašem webu neříká nic.',
  whatLinkLead: 'Jak vyhledávání a viditelnost v AI souvisí, vysvětluji na stránce',
  whatLinkText: 'Jak SEO a GEO/AEO funguje',

  partsTitle: 'Z čeho se SEO audit skládá?',
  partsAnswer: 'Nejčastěji z pěti částí: technická kontrola, obsah a struktura, vnější odkazy, konkurence a místní vyhledávání. Každá odpovídá na jinou otázku.',
  parts: [
    'Technická kontrola: vidí Google web, nejsou tam chyby a duplicity?',
    'Obsah a struktura: odpovídají stránky na to, co lidé hledají?',
    'Vnější odkazy: kdo na web odkazuje a jak důvěryhodně?',
    'Konkurence: kdo je ve výsledcích před vámi a proč?',
    'Místní vyhledávání: je firma vidět v mapách a místních výsledcích?',
  ],
  partsLinkLead: 'Jednu ze základních technických otázek, zda je web v Googlu, vysvětluji v článku',
  partsLinkText: 'Jak zjistit, jestli je web indexovaný v Googlu',

  partsDupLead: 'Duplicitní stránky, jednu z nejčastějších technických chyb, vysvětluji v článku',
  partsDupLinkText: 'Duplicitní obsah',

  typesTitle: 'Jaké typy SEO auditu existují?',
  typesAnswer: 'Liší se hloubkou: bezplatný technický audit ukáže technické chyby, širší audit v konzultaci přidá strukturu a plán a při průběžné práci je audit součástí realizace.',
  types: {
    head: ['Typ', 'Co kontroluje', 'Pro koho', 'Co získáte'],
    rows: [
      { type: 'Bezplatný technický audit', checks: 'indexace, duplicity a další technické problémy', who: 'pro ty, kdo chtějí vědět, zda web nemá technické chyby', get: 'krátká prezentace do 24 hodin', links: [{ text: 'Audit zdarma', page: 'audit' as const }] },
      { type: 'Širší audit v rámci konzultace', checks: 'technika, struktura a návrh dalšího postupu: audit webu s akčním plánem na 12 měsíců', who: 'pro ty, kdo chtějí plán a doporučení', get: 'audit a plán', links: [{ text: 'SEO konzultace', page: 'consulting' as const }] },
      { type: 'Průběžná práce', checks: 'realizace oprav a dalšího růstu', who: 'pro ty, kdo chtějí, aby se to udělalo', get: '', links: [{ text: 'SEO start na 3 měsíce', page: 'start' as const }, { text: 'Full SEO na rok', page: 'fullSeo' as const }] },
    ],
  },

  freeTitle: 'Co zahrnuje bezplatný audit technických chyb?',
  freeAnswer: 'Bezplatný audit zkontroluje technické chyby webu: indexaci, duplicity a další technické problémy. Krátkou prezentaci pošlu do 24 hodin, bez hovoru a bez závazků.',
  freeList: ['indexace', 'duplicity', 'další technické problémy'],
  freeText: 'Výsledkem je krátká prezentace, ne dlouhý report z nástroje. Audit vyhodnocuji sám.',
  cta: 'Chci audit zdarma',

  notTitle: 'Co bezplatný audit nenajde?',
  notAnswer: 'Bezplatný audit nenajde klíčová slova, konkurenci, problémy s mapami, viditelnost v AI vyhledávání, rychlost webu ani mobilní verzi. Je to záměrně úzký audit technických chyb.',
  notList: [
    'klíčová slova a témata, která byste měli pokrýt',
    'konkurence',
    'mapy (Google Maps, Mapy.com)',
    'viditelnost v AI vyhledávání',
    'rychlost načítání a Core Web Vitals',
    'mobilní verze webu',
  ],
  notText: 'Když potřebujete něco z tohoto seznamu, přečtěte si, kdy je potřeba víc, o kus níže.',

  resultTitle: 'Jak vypadá výsledek bezplatného auditu?',
  resultAnswer: 'Výsledkem je krátká prezentace s konkrétními technickými chybami webu a doporučením, co s nimi dál.',
  resultText: 'Prezentace ukazuje chyby tak, abyste je mohli předat tomu, kdo web spravuje. Výsledek nelze předem slíbit: audit ukáže technické chyby, které mohou bránit indexaci, ale neřekne, jak se web bude umisťovat.',

  moreTitle: 'Kdy stačí bezplatný audit a kdy je potřeba víc?',
  moreAnswer: 'Bezplatný audit stačí, když chcete vědět, zda web nemá technické chyby. Když potřebujete strategii, klíčová slova nebo mapy, je potřeba širší práce.',
  more: [
    { text: 'Podezření, že web Google nevidí → bezplatný audit.', link: { text: 'Audit zdarma', page: 'audit' as const } },
    { text: 'Web po redesignu ztratil návštěvnost → bezplatný audit (technické chyby), pak případně konzultace.', link: { text: 'SEO konzultace', page: 'consulting' as const } },
    { text: 'Chcete plán a klíčová slova → konzultace.', link: { text: 'SEO konzultace', page: 'consulting' as const } },
    { text: 'Chcete, aby se to udělalo → Start nebo Full SEO.', link: { text: 'SEO start na 3 měsíce', page: 'start' as const }, link2: { text: 'Full SEO na rok', page: 'fullSeo' as const } },
  ],

  moreChooseLead: 'Jak vybrat první krok, vysvětluji v článku',
  moreChooseLinkText: 'Audit zdarma, konzultace, nebo Start',
  moreRedesignLead: 'Co zkontrolovat po změně webu, najdete v článku',
  moreRedesignLinkText: 'Po redesignu klesla návštěvnost',

  goodTitle: 'Jak poznat dobrý SEO audit?',
  goodAnswer: 'Dobrý audit je konkrétní: ukáže adresy stránek, seřadí priority a srozumitelně vysvětlí, co dělat. Nic neslibuje a řekne, co nezkoumá.',
  goodHead: 'Dobrý audit',
  good: ['konkrétní adresy a příklady', 'priority (co opravit první)', 'srozumitelný jazyk', 'jasný rozsah (co zkoumá a co ne)', 'žádné sliby prvních míst'],
  badHead: 'Varovné signály',
  bad: ['obecný report z nástroje bez vysvětlení', 'stovky bodů bez priorit', 'slib prvních pozic', 'skrytý rozsah'],
  quote: 'Dobrý audit je konkrétní: ukáže adresy stránek, seřadí priority a nic neslibuje. Délka reportu o jeho kvalitě nerozhoduje.',

  faqTitle: 'Časté otázky o SEO auditu',
  faq: [
    { q: 'Je bezplatný audit opravdu zdarma?', a: 'Ano. Bezplatný audit technických chyb je zdarma, bez závazků a bez hovoru.' },
    { q: 'Musím po auditu něco kupovat?', a: 'Ne. Audit je bez závazků a nic kupovat nemusíte.' },
    { q: 'Jak dlouho audit trvá?', a: 'Krátkou prezentaci pošlu do 24 hodin.' },
    { q: 'Potřebuji přístup do Search Console nebo administrace webu?', a: 'Stačí adresa webu. Do formuláře ještě doplníte jméno a kontakt.' },
  ],

  endTitle: 'Stačí vám vědět, kde jsou technické chyby?',
  endText: 'Pokud vám stačí vědět, kde jsou technické chyby, nechte web zkontrolovat zdarma. Krátkou prezentaci pošlu do 24 hodin, bez hovoru a bez závazků.',
  nextLead: 'Další krok:',
  chooseLead: 'Nevíte, čím začít?',
  chooseLinkText: 'Audit zdarma, konzultace, nebo Start',
  nextLinkText: 'Proč se můj web nezobrazuje v Googlu',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  figure: { kind: 'parts' as const, aria: 'Ilustrace: schéma pěti částí SEO auditu, z nichž bezplatný audit pokrývá jen technickou část', caption: 'Ilustrace: pět částí SEO auditu; bezplatný audit technických chyb pokrývá jen první z nich.' },

  schema: {
    about: ['co je SEO audit', 'SEO audit webu', 'co obsahuje SEO audit', 'technický SEO audit', 'jak poznat dobrý SEO audit'],
  },
};

export const POST_SEO_AUDIT_CS = walk(raw);
