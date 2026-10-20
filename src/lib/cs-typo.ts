// Czech number typography: non-breaking space inside 4-digit-group numbers ("1 200", "10 500") and before the percent sign
// ("55 %"). `walk` applies it to every string of a content object (keys and language codes stay as they are).
export const nb = (s: string) => s.replace(/(\d) (?=\d{3}(?!\d))/g, '$1\u00a0').replace(/ %/g, '\u00a0%');
export const walk = <T,>(v: T): T =>
  (typeof v === 'string' ? nb(v) : Array.isArray(v) ? v.map(walk) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)])) : v) as T;
