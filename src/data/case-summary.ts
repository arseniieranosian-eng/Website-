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
