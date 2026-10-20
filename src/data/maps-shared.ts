// Terms of the maps service, shared by every language version (single source for the numbers).
export const MAPS_MIN_MONTHS = 4;

// Pay-per-result rates in CZK, always per one profile (from the author's price slides): `price` CZK per `qty` results.
export const MAPS_RATES = [
  { key: 'calls', qty: 10, price: 1000 },
  { key: 'routes', qty: 20, price: 1000 },
  { key: 'visits', qty: 10, price: 500 },
] as const;
export const MAPS_FULL_MONTHLY = 1800; // Full package, per month, per profile
