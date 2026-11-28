// GA4 events of the translation-agency audit funnel (brief of 28.11.2026). Nothing is sent without the visitor's consent: the event is dropped unless the analytics consent is "granted" (the cookie banner, components/Analytics.astro),
// and gtag exists only when gtag.js is configured. No bypass of the banner, no queueing before consent.
export const consentGranted = (): boolean => { try { return localStorage.getItem('analytics-consent') === 'granted'; } catch { return false; } };
export function track(name: string, params: Record<string, string | number> = {}): void {
  const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (!g || !consentGranted()) return;
  g('event', name, params);
}
