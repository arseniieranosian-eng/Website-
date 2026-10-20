// One source for the short case line shown on the service pages, the About page and the case teasers.
// The client is anonymous: the name must not appear anywhere (page text, alt, URL, JSON-LD).
// Figures: only what the author's text confirms, each with its period and source. "8×" is June vs May, counted from
// the form and e-mail only (calls and messages are not measured, so the real number is higher).
import type { Lang } from '../i18n/routes';

export const CASE_LABEL: Record<Lang, string> = {
  cs: 'Překladatelská agentura',
  en: 'Translation agency',
  ru: 'Переводческое агентство',
};

export const CASE_LINE: Record<Lang, string> = {
  cs: 'Překladatelská agentura se třemi pobočkami: za 4 měsíce SEO práce vzrostl počet poptávek v červnu 8× oproti květnu (formulář a e-mail), agentura získala prvního B2B klienta a objevila se v odpovědích Google AI Overview.',
  en: 'A translation agency with three branches: over 4 months of SEO work, enquiries in June grew 8× compared with May (form and e-mail), the agency won its first B2B client and appeared in Google AI Overview answers.',
  ru: 'Переводческое агентство с тремя филиалами: за 4 месяца SEO-работы число заявок в июне выросло в 8 раз по сравнению с маем (форма и e-mail), агентство получило первого B2B-клиента и появилось в ответах Google AI Overview.',
};

export const CASE_GEO_LINE: Record<Lang, string> = {
  cs: 'Překladatelská agentura se po práci na SEO objevila v odpovědích Google AI Overview.',
  en: 'After SEO work, a translation agency appeared in Google AI Overview answers.',
  ru: 'После SEO-работы переводческое агентство появилось в ответах Google AI Overview.',
};

// The print-shop case (ru page only): the one result formula, used everywhere the case is mentioned.
// 1 200 → 10 500 organic visits a month = ×8.75 = +775 %, July 2024 → July 2025 (same month, so no seasonality).
export const TYPO_FORMULA = '1 200 → 10 500 визитов в месяц, +775%, июль 2024 → июль 2025';
// Czech pair of the same case: same figures, Czech number format (non-breaking spaces).
export const TYPO_FORMULA_CS = '1 200 → 10 500 návštěv za měsíc, +775 %, červenec 2024 → červenec 2025'.replace(/(\d) (?=\d{3}(?!\d))/g, '$1\u00a0').replace(/ %/g, '\u00a0%');
export const TYPO_LINE_CS: string = `Tiskárna: organická návštěvnost ${TYPO_FORMULA_CS}.`;
export const TYPO_LINE: string =
  'Типография: органический трафик вырос с 1 200 до 10 500 визитов в месяц (+775%, июль 2024 → июль 2025).';

// The education-platform case (ru page only): +55 % organic traffic, March → September 2025 (7 months), relative data
// from the low base of a new site. No absolute numbers, leads, rankings or Instagram are ever stated.
export const EDU_FORMULA = '+55% органического трафика, март → сентябрь 2025, относительные данные от низкой базы';
export const EDU_LINE: string =
  'Образовательная платформа: +55% органического трафика за 7 месяцев (март → сентябрь 2025, относительные данные от низкой базы нового сайта).';

// Part 2 of the translation-agency case (ru page only): the one result formula, repeated word for word everywhere.
// Form leads only (e-mail separate, calls / messengers not measured). Two adjacent windows, not year over year.
export const SEASON_FORMULA = 'Заявки с сайта ×24 (+2300%): весна (март–май) → лето (июнь–август) 2026, одно окно, не год к году. От низкой базы';
export const SEASON_LINE: string = `Переводческое агентство, часть 2. ${SEASON_FORMULA}.`;

// Czech pair of the education-platform case (cs page): same single figure, Czech number format.
export const EDU_FORMULA_CS = '+55\u00a0% organické návštěvnosti, březen → září 2025 (7 měsíců), relativní data od nízké základny nového webu';
export const EDU_LINE_CS: string = `Vzdělávací platforma: ${EDU_FORMULA_CS}.`;
