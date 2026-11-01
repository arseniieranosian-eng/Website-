// Full SEO price per niche (brief of 01.11.2026, "Ceny Full SEO po nišách"): ONE value per niche, the same in every city and language version, "od" (minimum per month), without VAT.
// The "Kolik to stojí?" block (cs) / "Сколько это стоит?" (ru) and the price FAQ of every niche page are built from here, so two versions of the price text can never exist on one page.
// Consultation (2 000 / 3 000 Kč) and Start (50 000 Kč) come from the shared sources; the general Full SEO price (fullseo-shared.ts) stays the minimum, "od 15 000 Kč".
import { PRICES, fmtKc } from './consulting-shared';
import { START_PRICE } from './start-shared';

export type NicheId = 'translation' | 'accounting' | 'gaming' | 'printing' | 'machinery' | 'realty' | 'dental' | 'electronics' | 'fitness' | 'finance';

// cs / ru = the niche in the accusative as the sentence needs it ("Full SEO pro [obor]", "Full SEO для [ниша]"); scope = "podle rozsahu webu" (electronics, machinery).
export const NICHE_PRICE: Record<NicheId, { monthly: number; scope: boolean; cs: string; ru: string }> = {
  translation: { monthly: 15000, scope: false, cs: 'překladatelské agentury', ru: 'переводческих агентств' },
  accounting: { monthly: 15000, scope: false, cs: 'účetní kanceláře', ru: 'бухгалтерских компаний' },
  gaming: { monthly: 15000, scope: false, cs: 'počítačové herny', ru: 'компьютерных клубов' },
  printing: { monthly: 18000, scope: false, cs: 'tiskárny a polygrafii', ru: 'типографий' },
  machinery: { monthly: 20000, scope: true, cs: 'strojírenské firmy', ru: 'машиностроительных компаний' },
  realty: { monthly: 24000, scope: false, cs: 'realitní kanceláře', ru: 'риелторских агентств' },
  dental: { monthly: 24000, scope: false, cs: 'zubní ordinace', ru: 'стоматологий' },
  electronics: { monthly: 30000, scope: true, cs: 'obchody s elektronikou', ru: 'магазинов электроники' },
  // Russian-only niches: prices were not discussed, default 15 000 Kč until the author changes it (brief, open question Q1).
  fitness: { monthly: 15000, scope: false, cs: 'online fitness a wellness', ru: 'фитнес-студий' },
  finance: { monthly: 15000, scope: false, cs: 'finanční poradce', ru: 'финансовых консультантов' },
};

const NB = ' ';
const ru = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, NB)}${NB}Kč`;
const cs = (n: number) => fmtKc(n).replace(/ /g, NB);

export const priceAnswerCs = (id: NicheId) => {
  const p = NICHE_PRICE[id];
  return `Konzultace stojí ${cs(PRICES.questions)} za hodinu, nebo ${cs(PRICES.audit)} s auditem webu a plánem na 12 měsíců. Balíček Start stojí ${cs(START_PRICE)} za tři měsíce. Full SEO pro ${p.cs} začíná na ${cs(p.monthly)} měsíčně${p.scope ? ' podle rozsahu webu' : ''}. Začít můžete bezplatným auditem technických chyb, který nic nestojí a k ničemu nezavazuje.`;
};
export const priceAnswerRu = (id: NicheId) => {
  const p = NICHE_PRICE[id];
  return `Консультация стоит ${ru(PRICES.questions)} в час, или ${ru(PRICES.audit)} с аудитом сайта и планом на 12 месяцев. Пакет Start стоит ${ru(START_PRICE)} за три месяца. Full SEO для ${p.ru} начинается от ${ru(p.monthly)} в месяц${p.scope ? ' в зависимости от объёма сайта' : ''}. Начать можно с бесплатного технического аудита, который ничего не стоит и ни к чему не обязывает.`;
};
export const priceFaqCs = (id: NicheId, obor: string) => ({ q: `Kolik stojí SEO pro ${obor}?`, a: priceAnswerCs(id) });
export const priceFaqRu = (id: NicheId, niche: string) => ({ q: `Сколько стоит SEO для ${niche}?`, a: priceAnswerRu(id) });
