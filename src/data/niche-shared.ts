// One source for the wording shared by all niche landing pages (/seo-pro-[obor]-[mesto]/): the capacity rule and its date.
// The rule is counted per niche, not per city, so the pages of one niche never disagree. It is a capacity limit, not a promise of
// exclusivity. No "X of 3" counter and no "places left" until it can be updated honestly. "Informace jednoho klienta nesdílím" is NOT
// stated: it needs to be real and in the contract first.
import { walk } from '../lib/cs-typo';

export const NICHE_CAPACITY_DATE = '22. 10. 2026';

export const NICHE_SHARED_CS = walk({
  audit: {
    title: 'Co zahrnuje bezplatný audit?',
    answer: 'Bezplatný audit zkontroluje technické chyby webu: indexaci, duplicitní obsah a další technické problémy. U vícejazyčných webů se dívám zvlášť na indexaci jazykových verzí a duplicity mezi nimi. Výsledek dostanete jako krátkou prezentaci do 24 hodin, bez hovoru a bez závazků.',
    notLead: 'Do auditu nepatří:',
    not: ['klíčová slova', 'konkurence', 'mapy', 'viditelnost v AI vyhledávání', 'rychlost načítání', 'mobilní verze'],
    cta: 'Chci bezplatný audit',
  },
  formats: {
    title: 'Jaké formáty spolupráce existují?',
    answer: 'Můžete začít bezplatným auditem, konzultací, SEO startem na 3 měsíce, nebo Full SEO na rok. Pro lokální přítomnost je samostatná služba Mapy. Každá stránka služby vysvětluje, co přesně formát obsahuje.',
    table: {
      head: ['Formát', 'Pro koho', 'Co zahrnuje'],
      rows: [
        { page: 'consulting' as const, label: 'SEO konzultace', who: 'pro ty, kdo potřebují odpovědi a plán', what: '1 hodina, nebo audit s plánem na 12 měsíců' },
        { page: 'start' as const, label: 'SEO start na 3 měsíce', who: 'pro ty, kdo chtějí postavit základ webu', what: '3 měsíce: audit, opravy, klíčová slova a klíčové stránky' },
        { page: 'fullSeo' as const, label: 'Full SEO na rok', who: 'pro ty, kdo chtějí dlouhodobý růst', what: '12 měsíců: strategie, čtvrtletní priority a měsíční obsah; GEO/AEO v každé službě' },
        { page: 'maps' as const, label: 'SEO pro Mapy', who: 'pro agentury, které hledají zákazníky lokálně', what: 'Google Maps a Mapy.com, od 4 měsíců' },
      ],
    },
    note: 'První výsledky se obvykle objeví za 2–3 měsíce; garance neexistuje.',
  },
  articles: { title: 'Další články pro agentury', lead: 'Praktické články pro majitele překladatelských agentur.', more: 'Číst článek', keys: ['postNoLeads'] as const },
  reviews: { title: 'Co říkají klienti?', answer: 'Recenze od klientů najdete na samostatné stránce, vždy s uvedením zdroje.', link: 'Všechny recenze' },
  end: {
    title: 'Zjistěte, jestli má váš web technické chyby',
    text: 'Bezplatný audit ukáže technické chyby webu překladatelské agentury: indexaci, duplicity a další technické problémy. Krátkou prezentaci pošlu do 24 hodin, bez hovoru a bez závazků.',
    cta: 'Chci bezplatný audit',
    contact: 'Napište mi',
  },
  capacityTitle: 'Jak spolupracuji s překladatelskými agenturami?',
  capacityAnswer: `Pracuji současně nejvýše se třemi firmami z jednoho oboru. Je to omezení kapacity, ne příslib výlučnosti: neříkám, že se mezi mými klienty nikdy neobjeví konkurent, říkám, kolik firem z oboru beru najednou. Údaj platí k ${NICHE_CAPACITY_DATE} a při změně ho aktualizuji.`,
  capacityShort: `Nejvýše tři firmy z jednoho oboru. Údaj platí k ${NICHE_CAPACITY_DATE}.`,
});
