// Czech content of the blog article /blog/jak-ziskat-klienty-pro-prekladatelskou-agenturu/ (brief A of 22.10.2026), level 1 of the audit funnel (wide
// query), framed by the niche, with a closing block towards the Prague landing. Six channels compared in a table without numbers and without
// "best / cheapest / most effective" claims (no source); advertising only as a category of comparison, the author does not run it; the "2–3 měsíce" is
// stated only as the experience with the author's own services. Direct e-mail approach carries a short note about consent (not legal advice).
// The author's observations block ("Co vidím u agentur") is NOT written (none supplied; nothing is invented). Links to the future articles C, F, H are
// added when they exist. No HowTo, no prices. The quote is a draft for the author's approval.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_CLIENTS_PUBLISHED = '2026-10-22';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/jak-ziskat-klienty-pro-prekladatelskou-agenturu.webp', width: 1200, height: 630, alt: 'Ilustrace: šest kanálů, ze kterých mohou překladatelské agentury získávat klienty' },

  lead: 'Klienty pro překladatelskou agenturu získáte z vyhledávání (SEO), z reklamy, z profilů a map, z partnerství, z doporučení nebo přímým oslovením firem. Který kanál zvolit jako první, záleží na tom, zda už web přináší poptávky, jak stabilní je sezóna a zda cílíte na firmy.',
  forWhom: 'Text je pro majitele překladatelské agentury, který hledá, jak sehnat klienty, a neví, kterým kanálem začít. Najdete tu porovnání šesti kanálů, jednoduchý způsob výběru prvního kroku a to, co má mít web, aby klienty z vyhledávání přiváděl.',

  tocTitle: 'Co v textu najdete',
  toc: [
    { id: 'kanaly', text: 'Který kanál se kdy vyplatí?' },
    { id: 'vyber', text: 'Jak vybrat první kanál?' },
    { id: 'reklama', text: 'Čím se SEO liší od reklamy pro překladatelskou agenturu?' },
    { id: 'web', text: 'Co má mít web, aby přiváděl klienty z vyhledávání?' },
  ],

  channelsTitle: 'Který kanál se kdy vyplatí?',
  channelsAnswer: 'Tabulka porovnává šest kanálů podle situace, rychlosti a toho, na čem závisí. Rychlost uvádím slovy, ne čísly, protože záleží na oboru, konkurenci a stavu webu. Nejde o pořadí podle kvality, ale o pomoc při výběru prvního kroku, když nemáte čas ani rozpočet na všechno najednou.',
  channels: {
    head: ['Kanál', 'Kdy dává smysl', 'Rychlost', 'Na čem závisí', 'Co hlídat'],
    rows: [
      ['SEO (vyhledávání)', 'web existuje, ale poptávky z vyhledávání jsou malé, cílíte na firmy', 'střednědobě', 'stav webu, konkurence, stránky pro hledané dotazy', 'indexace, duplicity, sezóna'],
      ['Reklama', 'potřebujete poptávky rychle a máte rozpočet', 'rychle, jen po dobu platby', 'rozpočet, kvalita stránky, nastavení kampaně', 'po zastavení poptávky mizí; reklamu nespravuji'],
      ['Profily a mapy (Google Maps, Mapy.com)', 'zákazníci hledají s městem a máte kancelář', 'střednědobě', 'úplnost profilu, shoda údajů s webem', 'shodný název, adresa a kontakt'],
      ['Katalogy', 'jen kvalitní a ověřené katalogy', 'různě', 'kvalita katalogu', 'odkazy bez hodnoty'],
      ['Partnerství (právníci, kanceláře, firmy)', 'chcete opakované zakázky', 'pomalu, ale stabilně', 'vztahy a důvěra', 'závislost na jednom partnerovi'],
      ['Doporučení a přímé oslovení firem (B2B)', 'máte referenční klienty a cílíte na firmy', 'různě', 'reference, jasná nabídka', 'pravidla pro obchodní sdělení'],
    ],
  },
  channelsText: 'Marketing překladatelské agentury není jeden kanál, ale kombinace několika. Propagace překladatelské agentury funguje nejlépe, když se kanály doplňují a každý má své místo.',
  channelsNote: 'Při přímém oslovení firem e-mailem dbejte na pravidla pro obchodní sdělení, zpravidla je potřeba souhlas příjemce. Nejde o právní poradenství, při pochybnostech se obraťte na právníka.',

  pickTitle: 'Jak vybrat první kanál?',
  pickAnswer: 'Začněte tím, co už máte. Pokud web existuje, ale nepřináší poptávky, nejdřív zkontrolujte web a indexaci. Pokud potřebujete poptávky rychle, přichází v úvahu reklama. Pokud cílíte na firmy, připravte stránku pro B2B. Doporučení a partnerství fungují vedle toho, ne místo toho.',
  pick: [
    'Pokud web existuje, ale poptávky nepřicházejí, nejdřív zkontrolujte web a indexaci.',
    'Pokud potřebujete poptávky rychle, zvažte reklamu a počítejte s tím, že končí s rozpočtem.',
    'Pokud cílíte na firmy, připravte stránku pro B2B a ověřte, že na ni vedou odkazy.',
    'Pokud máte spokojené klienty, požádejte je o doporučení a o referenci.',
  ],
  pickLead: 'Pořadí kontroly webu najdete v článku',
  pickLinkText: 'Proč překladatelská agentura nemá poptávky z webu?',
  pickB2bLead: 'Jak připravit stránku pro firmy, vysvětluji v článku',
  pickB2bLinkText: 'Jak získat B2B klienty pro překladatelskou agenturu',

  adsTitle: 'Čím se SEO liší od reklamy pro překladatelskou agenturu?',
  adsAnswer: 'SEO buduje stránky, které přivádějí poptávky dlouhodobě, ale první výsledky přicházejí později, u mých služeb obvykle po 2–3 měsících. Reklama přináší poptávky rychle, ale jen po dobu, kdy za ni platíte. Reklamu nespravuji. Obě cesty se dají kombinovat podle situace.',
  adsText: 'Reklama překladatelské agentury je rychlý nástroj, SEO je dlouhodobější základ. Co je důležité vědět před kombinací obou, vysvětluji v článku',
  adsLinkText: 'SEO a reklama',
  quote: 'Nejlepší kanál je ten, který agentura dokáže dělat pravidelně. Jednorázový zásah klienty nepřivede.',

  webTitle: 'Co má mít web, aby přiváděl klienty z vyhledávání?',
  webAnswer: 'Aby web přiváděl klienty z vyhledávání, musí ho Google vidět, musí mít stránky pro hledané dotazy (jazykové páry, služby, firmy) a musí mít jasný kontakt. Podrobnosti najdete v článku o příčinách, proč agentura nemá poptávky z webu, včetně pořadí kontroly.',
  web: [
    'Indexace: Google vidí všechny stránky a jazykové verze.',
    'Stránky jazykových párů, služeb a oborů pro dotazy, které firmy zadávají.',
    'Samostatná stránka pro firmy (B2B), která odpovídá na jejich otázky.',
    'Profily na Google Maps a Mapy.com se shodnými údaji.',
    'Kontakt a formulář viditelné na každé důležité stránce.',
  ],
  webLinkText: 'Příčiny, proč web nepřináší poptávky',

  auditTitle: 'Co zahrnuje bezplatný audit?',
  auditAnswer: 'Bezplatný audit zkontroluje technické chyby webu: indexaci, duplicitní obsah a další technické problémy. U vícejazyčných webů se dívám zvlášť na indexaci jazykových verzí a duplicity mezi nimi. Výsledek dostanete jako krátkou prezentaci do 24 hodin, bez hovoru a bez závazků.',
  cta: 'Chci audit zdarma',

  praguTitle: 'Pro agentury v Praze',
  praguText: 'Pokud je vaše agentura z Prahy, popisuji na samostatné stránce, co v praxi dělám: stránky jazykových párů, služeb pro firmy, indexaci jazykových verzí a lokální přítomnost.',
  praguLinkText: 'SEO pro agentury v Praze',

  faqTitle: 'Často kladené otázky',
  faq: [
    { q: 'S čím začít, když překladatelská agentura nemá dost klientů?', a: 'Začněte kontrolou toho, co už máte: zda je web vidět v Googlu, zda má stránky pro hledané dotazy a zda funguje kontakt. Teprve potom volte další kanál. Pořadí kontroly najdete v článku o chybějících poptávkách z webu. Bez tohoto základu další kanály přinesou méně.', links: [{ page: 'postNoLeads' as const, text: 'Proč překladatelská agentura nemá poptávky z webu?' }] },
    { q: 'Je lepší SEO, nebo reklama pro překladatelskou agenturu?', a: 'Záleží na situaci. Reklama přináší poptávky rychleji, ale jen po dobu, kdy za ni platíte. SEO se buduje déle a výsledky zůstávají. Reklamu nespravuji, proto k ní nedávám doporučení. Porovnání obou cest je v samostatném článku o SEO a reklamě.', links: [{ page: 'postAds' as const, text: 'SEO a reklama' }] },
    { q: 'Pomáhají katalogy a profily na mapách?', a: 'Pomáhají, pokud jsou údaje shodné s webem a profil je úplný, ale pozici ani počet poptávek nezaručí. Profil na mapách firmám usnadňuje najít vás při hledání s městem. Postup a kontrola budou v samostatném článku o Google Maps a Mapy.com.' },
    { q: 'Jak dlouho trvá, než SEO přinese první poptávky?', a: 'U mých služeb se první výsledky obvykle objeví za 2–3 měsíce. Je to zkušenost s mými projekty, ne obecné pravidlo trhu, a nic neručí. Doba závisí na stavu webu, konkurenci v oboru a na tom, zda jde o sezónní pokles, nebo o chybu.' },
  ],

  endTitle: 'Nevíte, kterým kanálem začít?',
  endText: 'Když si nejste jistí, jestli web překladatelské agentury nemá technické chyby, podívám se na ně.',
  caseLead: 'Jak vypadala práce na webu překladatelské agentury v praxi, popisuje',
  caseLinkText: 'případová studie',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  schema: {
    about: ['jak získat klienty překladatelská agentura', 'marketing překladatelské agentury', 'propagace překladatelské agentury', 'klienti pro překladatelskou agenturu'],
  },
};

export const POST_CLIENTS_CS = walk(raw);
