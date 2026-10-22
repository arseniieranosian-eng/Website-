// One source for the wording shared by all niche landing pages (/seo-pro-[obor]-[mesto]/): the capacity rule and its date.
// The rule is counted per niche, not per city, so the pages of one niche never disagree. It is a capacity limit, not a promise of
// exclusivity. No "X of 3" counter and no "places left" until it can be updated honestly. "Informace jednoho klienta nesdílím" is NOT
// stated: it needs to be real and in the contract first.
import { walk } from '../lib/cs-typo';

export const NICHE_CAPACITY_DATE = '22. 10. 2026';

export const NICHE_SHARED_CS = walk({
  capacityTitle: 'Jak spolupracuji s překladatelskými agenturami?',
  capacityAnswer: `Pracuji současně nejvýše se třemi firmami z jednoho oboru. Je to omezení kapacity, ne příslib výlučnosti: neříkám, že se mezi mými klienty nikdy neobjeví konkurent, říkám, kolik firem z oboru beru najednou. Údaj platí k ${NICHE_CAPACITY_DATE} a při změně ho aktualizuji.`,
  capacityShort: `Nejvýše tři firmy z jednoho oboru. Údaj platí k ${NICHE_CAPACITY_DATE}.`,
});
