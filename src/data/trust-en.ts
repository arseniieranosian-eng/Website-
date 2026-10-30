// Trust bar (en): the same five tiles as trust-cs.ts (same figures, same periods), in English; used on the English home page (since 29.10.2026: the content of the bar is identical on all language versions).
// HTML text only.

export const TRUST_EN = {
  tiles: [
    { art: 'visits' as const, value: '1,200 → 10,500', label: 'visits per month (+775 %)', caption: 'print shop, July 2024 → July 2025' },
    { art: 'forms' as const, value: '×24', label: 'enquiries from the form', caption: 'translation agency, spring → summer 2026, from a low base' },
    { art: 'platform' as const, value: '+55 %', label: 'organic traffic', caption: 'new educational platform, March → September 2025' },
    { art: 'markets' as const, value: '4 markets', label: 'Czechia, Russia, Bulgaria, India', caption: 'projects by period in the experience overview' },
    { art: 'langs' as const, value: '4 languages', label: 'of content: cs, en, ru, uk', caption: 'I adapt content, not just translate it' },
    { art: 'speed' as const, value: '≈ 12 h', label: 'average time to send a free technical audit', caption: 'sent within 24 h · no call, no obligation' },
  ],
  note: 'Client names are not published. Counts and percentages are relative data. The average send time is based on my own audits.',
  more: 'All case studies',
};
