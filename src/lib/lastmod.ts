import DATES from '../data/page-dates.json';

// "Last modified" date of a page's content (brief of 03.11.2026, P2.2): an EXPLICIT value, not the date of the latest git commit.
// The value lives in data/page-dates.json, keyed by the first file of the call (the page's view). Change it by hand only after a SUBSTANTIAL edit of the page
// (facts, prices, structure, new sections); a typo fix, a rename or a technical commit does not move it. The visible "Aktualizováno" date and the dateModified
// of the JSON-LD both come from here, so they always match. A page that is not in the file gets `fallback` (give it the day of its publication).
export function lastModified(files: string[], fallback: string): string {
  return (DATES as Record<string, string>)[files[0]] ?? fallback;
}

// 2026-10-19 -> "19. 10. 2026"
export const csDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d}. ${m}. ${y}`;
};
