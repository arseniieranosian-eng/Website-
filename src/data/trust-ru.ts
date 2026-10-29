// Trust bar (ru): the same five tiles as trust-cs.ts (same figures, same periods), in Russian; used on the Russian home page (since 29.10.2026: the content of the bar is identical on all language versions).
// HTML text only.

export const TRUST_RU = {
  tiles: [
    { art: 'visits' as const, value: '1 200 → 10 500', label: 'визитов в месяц (+775 %)', caption: 'типография, июль 2024 → июль 2025' },
    { art: 'forms' as const, value: '×24', label: 'заявок из формы', caption: 'переводческое агентство, весна → лето 2026, от низкой базы' },
    { art: 'platform' as const, value: '+55 %', label: 'органического трафика', caption: 'новая образовательная платформа, март → сентябрь 2025' },
    { art: 'markets' as const, value: '4 рынка', label: 'Чехия, Болгария, Россия, Индия', caption: 'проекты по периодам в обзоре опыта' },
    { art: 'langs' as const, value: '4 языка', label: 'контента: cs, en, ru, uk', caption: 'контент адаптирую, а не просто перевожу' },
  ],
  note: 'Названия клиентов не публикую. Числа и проценты относительные.',
  more: 'Все кейсы',
};
