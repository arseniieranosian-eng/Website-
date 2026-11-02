// Trust bar (uk): the same tiles as trust-ru.ts (same figures, same periods), in Ukrainian; used on the Ukrainian home page. HTML text only.

export const TRUST_UK = {
  tiles: [
    { art: 'forms' as const, value: '×24', label: 'заявок із форми', caption: 'перекладацька агенція, весна → літо 2026, від низької бази' },
    { art: 'visits' as const, value: '1 200 → 10 500', label: 'візитів на місяць (+775 %)', caption: 'друкарня, липень 2024 → липень 2025' },
    { art: 'platform' as const, value: '+55 %', label: 'органічного трафіку', caption: 'нова освітня платформа, березень → вересень 2025' },
    { art: 'markets' as const, value: '4 ринки', label: 'Чехія, Болгарія, Росія, Індія', caption: 'проєкти за періодами в огляді досвіду' },
    { art: 'langs' as const, value: '4 мови', label: 'контенту: cs, en, ru, uk', caption: 'контент адаптую, а не просто перекладаю' },
    { art: 'speed' as const, value: '≈ 12 год', label: 'середній час надсилання безкоштовного технічного аудиту', caption: 'надсилаю протягом 24 год · без дзвінка, без зобов’язань' },
  ],
  note: 'Назви клієнтів не публікую. Числа та відсотки відносні. Середній час надсилання ґрунтується на моїх власних аудитах.',
  more: 'Усі кейси',
};
