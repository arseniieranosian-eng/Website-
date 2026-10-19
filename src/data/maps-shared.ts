// Terms of the maps service, shared by every language version (single source for the minimum term).
export const MAPS_MIN_MONTHS = 4;

// Pay-per-result rates in CZK, always per one profile (from the author's price slides).
export const MAPS_RATES = [
  { name: 'Звонки', unit: 'за 10 звонков', price: 1000 },
  { name: 'Маршруты', unit: 'за 20 маршрутов', price: 1000 },
  { name: 'Переходы на сайт', unit: 'за 10 переходов', price: 500 },
];
export const MAPS_FULL_MONTHLY = 1800; // Full package, per month, per profile
