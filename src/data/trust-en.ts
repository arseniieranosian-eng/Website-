// Trust bar (en): the same figures as the case pages and trust-cs.ts, each tile with its period. HTML text only.
// The brief's fifth tile (a client review) is left out: the reviews block follows right below and its texts are long.

export const TRUST_EN = {
  tiles: [
    { art: 'visits' as const, value: '1,200 → 10,500', label: 'organic visits per month (+775 %)', caption: 'print shop, July 2024 → July 2025' },
    { art: 'platform' as const, value: '+55 %', label: 'organic traffic', caption: 'educational platform, March → September 2025 (7 months), relative data from the low base of a new site' },
    { art: 'forms' as const, value: '+65–70 %', label: 'enquiries month over month, three months in a row; B2B enquiries tripled', caption: 'translation agency, March–September 2026' },
    { art: 'markets' as const, value: '4 markets', label: 'Czech, Russian, Bulgarian, Indian', caption: 'projects; content in Czech, English, Russian and Ukrainian' },
  ],
  note: 'Data are relative, clients anonymous, results as of the end of each project.',
  more: 'Case studies',
};
