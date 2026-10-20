// Trust bar (cs): one data source for the tiles, the figures match the case pages. HTML text only, every tile carries its
// period. Used on /o-mne/ (the brief also names the home page; the accepted home brief has no numbers block, so it is not there).
import { walk } from '../lib/cs-typo';

export const TRUST_CS = walk({
  tiles: [
    { value: '1 200 → 10 500', label: 'návštěv za měsíc (+775 %)', caption: 'tiskárna, červenec 2024 → červenec 2025' },
    { value: '×24', label: 'poptávek z formuláře', caption: 'překladatelská agentura, jaro → léto 2026, od nízké základny' },
    { value: '+55 %', label: 'organické návštěvnosti', caption: 'nová vzdělávací platforma, březen → září 2025' },
    { value: '4 trhy', label: 'Česko, Rusko, Bulharsko, Indie', caption: 'projekty podle období v přehledu zkušeností' },
    { value: '4 jazyky', label: 'obsahu: cs, en, ru, uk', caption: 'obsah adaptuji, ne jen překládám' },
  ],
  note: 'Názvy klientů nezveřejňuji. Počty a procenta jsou relativní data.',
  more: 'Všechny případové studie',
});
