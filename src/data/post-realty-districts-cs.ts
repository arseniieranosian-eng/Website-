// Czech content of the blog article /blog/stranky-ctvrti-a-lokalit-realitni-kancelare/ (brief N7 of 25.10.2026), the middle of the real-estate funnel N1–N10. It replaces the cancelled earlier
// brief N6 (".../stranky-ctvrti-realitni-kancelar-seo/"): two articles on one topic must not exist. Defaults taken: title shortened to 52 characters and the description to 131 so that the site-wide
// limits (title ≤ 55, description ≤ 150) hold; no quote and no observation block (no consent and no data), no audit CTA (the closing block is one link to the landing page), no TOC (not in the brief).
// Only the single Google policy page on doorway abuse is cited (paraphrase; the term "location pages" is not used about Google). No district data, no real district names ("čtvrť A / čtvrť B"
// only), no portal names, no prices, no guarantees. No HowTo, no Service, no ratings, no Quotation.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_REALTY_DISTRICTS_PUBLISHED = '2026-10-25';
// Review every 90 days: next 2027-01-23.
export const GOOGLE_POLICY_URL = 'https://developers.google.com/search/docs/essentials/spam-policies#doorway-abuse';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/stranky-ctvrti-a-lokalit-realitni-kancelare.webp', width: 1200, height: 630, alt: 'Ilustrace: dvě stránky čtvrtí, čtvrť A a čtvrť B, propojené s domem realitní kanceláře' },

  lead: 'Stránka čtvrti na webu realitní kanceláře odpovídá na otázky zájemce o lokalitu: jak se tam žije, co je poblíž a jak se tam dostane. Aby byla užitečná, potřebuje vlastní informace a vazbu na nabídky kanceláře, ne jen vyměněný název čtvrti v šabloně. Tento přehled ukazuje obsah, počet stránek a rizika.',

  whatTitle: 'Co je stránka čtvrti a k čemu slouží realitní kanceláři?',
  whatAnswer: 'Stránka čtvrti je samostatná stránka webu, která popisuje jednu lokalitu a odkazuje na nabídky kanceláře v ní. Slouží zájemcům, kteří se před prohlídkou ptají na místo, a dává kanceláři na webu prostor odpovědět na jejich otázky. Není to filtr nabídek ani kopie popisu z inzerátu.',

  askTitle: 'Na co se zájemci o čtvrť ptají?',
  askAnswer: 'Zájemce o bydlení obvykle zajímá, jak se v lokalitě žije, co je poblíž, jak se tam dostane a jaké nabídky tam kancelář má. Stránka čtvrti má odpovídat konkrétně a věcně, bez čísel, která kancelář nemůže doložit, a u každého uvedeného údaje má být jasné, odkud pochází.',
  ask: {
    head: ['Otázka zájemce', 'Co má stránka obsahovat'],
    rows: [
      ['Jak se tam žije?', 'popis charakteru lokality vlastními slovy kanceláře, jen pokud ho kancelář zná z praxe'],
      ['Co je poblíž?', 'typy míst (obchody, školky, zdravotnická zařízení, zeleň) bez hodnocení a bez čísel'],
      ['Jak se tam dostanu?', 'typy dopravy; časy jen pokud jsou ověřené a datované'],
      ['Jaké nabídky tam máte?', 'odkaz na aktuální nabídky kanceláře v lokalitě'],
      ['Kdo za informacemi stojí?', 'kancelář nebo autor a datum aktualizace'],
    ],
  },

  goodTitle: 'Co patří na dobrou stránku čtvrti?',
  goodAnswer: 'Dobrá stránka čtvrti má vlastní text napsaný pro konkrétní lokalitu, odpovědi na typické otázky zájemců, odkazy na aktuální nabídky kanceláře a viditelné datum aktualizace. Údaje, které kancelář nemůže doložit, na stránku nepatří. Stránka má dávat smysl čtenáři, který o SEO vůbec nepřemýšlí.',
  goodLead: 'Co má stránka čtvrti splňovat:',
  good: [
    'vlastní text pro tu lokalitu;',
    'odpovědi na otázky zájemců;',
    'konkrétní a ověřitelné informace;',
    'odkazy na aktuální nabídky;',
    'viditelné datum aktualizace;',
    'žádné převzaté cizí texty;',
    'žádné nepodložené superlativy („nejlepší čtvrť“).',
  ],

  doorTitle: 'Kdy se stránky čtvrtí stávají šablonovými stránkami?',
  doorAnswer: 'Google v zásadách proti spamu označuje za zneužití typu doorway stránky vytvořené kvůli pořadí pro konkrétní podobné dotazy, včetně podstatně podobných stránek, které jsou blíž výsledkům vyhledávání než přehledné hierarchii webu. Šablonová stránka čtvrti, kde se mění jen název, tomuto popisu hrozí přiblížit.',
  doorSource: 'Zásady Google proti spamu, část o doorway stránkách',
  doorChecked: 'Odkaz ověřen 25. 10. 2026.',
  doorLead: 'Známky šablonových stránek:',
  door: [
    'stránky se liší jen názvem;',
    'stránka nemá žádné nabídky ani vlastní informace;',
    'stránky vznikly pro lokality, které kancelář nezná;',
    'několik stránek vede na jednu a tu samou stránku.',
  ],
  doorFix: 'Takové stránky sloučte, doplňte vlastním obsahem, nebo odstraňte.',

  countTitle: 'Kolik stránek čtvrtí vytvořit a v jakém pořadí?',
  countAnswer: 'Počet stránek se řídí tím, kolik lokalit kancelář opravdu zná a nabízí. Začněte lokalitami, kde máte nabídky a vlastní informace, a postupujte po hierarchii od města k části a lokalitě. Pevný počet stránek, který zaručí výsledek, neexistuje; každá další stránka musí mít čtenáři co říct.',

  linkTitle: 'Jak stránky čtvrtí propojit s nabídkami?',
  linkAnswer: 'Stránka čtvrti má odkazovat na aktuální nabídky v lokalitě a nabídky mají odkazovat zpět na stránku čtvrti. Díky tomu se čtenář i vyhledávač snadno orientují v hierarchii webu. Prodané nabídky řešte tak, aby neodkazovaly na neexistující stránky; indexaci nabídek popisuje samostatný článek.',
  linkLead: 'Indexaci nabídek popisuje článek',
  linkLinkText: 'Nabídky nemovitostí a SEO: indexace, duplicity filtrů, prodané nabídky',

  freshTitle: 'Jak udržet stránky čtvrtí aktuální?',
  freshAnswer: 'Stránky čtvrtí je třeba v pravidelných intervalech kontrolovat, například jednou za čtvrtletí, a opravit údaje, které se změnily. Na stránce má být viditelné datum poslední aktualizace. Zastaralé informace, které kancelář neumí ověřit, je lepší odstranit, než je ponechat. Aktualizace neslibuje lepší pozici, jen udržuje stránku věrohodnou.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Má smysl stránka pro každou čtvrť?', a: 'Ne nutně. Stránka čtvrti má smysl tam, kde má kancelář nabídky nebo vlastní informace o lokalitě. Stránka vytvořená jen proto, aby pokryla další název čtvrti, čtenáři nic nedá a může být šablonová. Lepší je méně stránek s vlastním obsahem než mnoho podobných stránek.' },
    { q: 'Mohu použít stejný text pro více čtvrtí?', a: 'Stejný text s vyměněným názvem čtvrti nedoporučuji. Takové stránky jsou si podobné a čtenáři nedávají nic navíc. Každá stránka by měla mít vlastní odpovědi na otázky zájemců o danou lokalitu. Informace společné pro celou kancelář patří na samostatnou stránku, na kterou ostatní odkazují.' },
    { q: 'Kolik textu má stránka čtvrti mít?', a: 'Pevný počet slov, který zaručí pozici, neexistuje. Stránka má být dost dlouhá, aby odpověděla na otázky zájemce o lokalitu, a dost stručná, aby se v ní dalo orientovat. Měřítkem je užitečnost pro čtenáře, ne délka. Dlouhý text s opakujícími se větami čitelnosti škodí.' },
    { q: 'Je stránka čtvrti totéž co filtr nabídek?', a: 'Ne. Filtr nabídek zobrazuje seznam nabídek podle parametrů, kdežto stránka čtvrti popisuje lokalitu a může na filtrované nabídky odkazovat. Filtr bez vlastního obsahu je obvykle jen seznam, stránka čtvrti dává zájemci kontext. Duplicity z filtrů řeší samostatný článek o indexaci nabídek.' },
    { q: 'Čím se stránka čtvrti liší od profilu na portálu?', a: 'Stránka čtvrti na vlastním webu patří kanceláři: ona určuje obsah, strukturu a aktualizace. Profil na portálu se řídí pravidly portálu. Stránka čtvrti slouží jako vlastní odpověď na otázky zájemců o lokalitu. Obě možnosti mají své místo a navzájem se nevylučují. Vztah vlastního webu a portálů popisuje samostatný článek.' },
    { q: 'Musí být na stránce čtvrti mapa?', a: 'Ne, mapa není povinná. Má smysl, pokud zájemci pomáhá s orientací, například při popisu dostupnosti místa. Mapa sama o sobě stránku neužitečnou nezachrání, pokud chybí text, který odpovídá na otázky zájemců. Rozhodující je obsah, mapa je jen doplněk. Pokud ji použijete, doplňte ji textem o dostupnosti.' },
  ],

  relatedTitle: 'Související články',

  endText: 'Systematickou práci s SEO webu realitní kanceláře popisuje stránka',
  endLinkText: 'SEO pro realitní kanceláře v Praze',
  endText2: 'Tento článek je jen přehled toho, jak psát a udržovat stránky čtvrtí.',

  schema: {
    about: ['stránky čtvrtí realitní kancelář', 'stránky lokalit web realitky', 'stránka čtvrti pro web realitní kanceláře', 'doorway stránky'],
  },
};

export const POST_REALTY_DISTRICTS_CS = walk(raw);
