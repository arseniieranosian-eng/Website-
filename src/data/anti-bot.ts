// Cloudflare Turnstile (free, privacy-friendly CAPTCHA replacement) for the lead form.
// TURNSTILE_SITEKEY is the PUBLIC site key from the Cloudflare dashboard (Turnstile → Add widget, domain seo-eranosian.com, mode "Managed" or "Invisible").
// Empty string = Turnstile is off and the form behaves as before (honeypot, fill-time, Origin and per-IP limit in public/send.php).
// The SECRET key never goes into git: put it into send-config.php on the hosting as 'turnstile_secret' (see public/send.php).
export const TURNSTILE_SITEKEY = '';
