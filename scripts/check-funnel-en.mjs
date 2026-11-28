// Check of the audit funnel of the English translation-agency page (brief of 28.11.2026), static part: the thank-you page /en/free-audit/thank-you/ (noindex, nofollow, own canonical, not in the sitemap, no hreflang, texts exactly as in the brief, no prices,
// no forms), the form of /en/free-audit/ (the niche fields and the hidden source fields are in the HTML but hidden and disabled, so the ordinary form is unchanged; website address required; honeypot; "Free SEO Audit" preselected), the context line
// (hidden by default), the three audit buttons of the niche page, the analytics helper (events only with the consent). The dynamic part (parameter on, payload, thank-you redirect) is tested in the session with a browser.
import { readFileSync } from 'node:fs';
const errs = []; const e = (m) => errs.push(m);
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;| /g, ' ');
const txt = (s) => dec(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const t = readFileSync('dist/en/free-audit/thank-you/index.html', 'utf8');
const tm = (t.match(/<main[\s\S]*?<\/main>/) || [t])[0];
const title = dec(t.match(/<title>([\s\S]*?)<\/title>/)[1]);
if (title !== 'Free SEO Audit Requested | Eranosian' || title.length !== 36) e(`thank-you title ${title.length}`);
if (!/<meta name="robots" content="noindex, nofollow">/.test(t)) e('thank-you robots noindex, nofollow');
if (!t.includes('<link rel="canonical" href="https://seo-eranosian.com/en/free-audit/thank-you/">')) e('thank-you canonical on itself');
if (/<link rel="alternate"[^>]*hreflang=/.test(t)) e('thank-you: no hreflang in the head');
const sm = readFileSync('dist/sitemap.xml', 'utf8');
if (sm.includes('thank-you')) e('thank-you pages must not be in the sitemap');
const h1 = txt((tm.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (h1 !== 'Thank you, I have your request' || h1.length !== 30) e('thank-you H1');
const lead = txt((tm.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (lead !== 'I received your request and I will check your website. Within 24 hours you will get a short presentation with the main technical errors by e-mail. There is no call and no obligation. If you gave me a phone number only, I will write to ask for an e-mail address to send it to.' || lead.split(' ').length !== 54) e(`thank-you intro ${lead.split(' ').length}`);
const steps = [...tm.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)].flatMap((m) => [...m[1].matchAll(/<li><span>([\s\S]*?)<\/span>/g)].map((x) => txt(x[1])));
if (JSON.stringify(steps) !== JSON.stringify(['I check indexing, duplicate pages and other technical problems, and, if your site has several language versions, each version separately.', 'You receive a short presentation by e-mail, in English.', 'You decide whether to continue. Nothing is required of you.'])) e(`thank-you steps: ${JSON.stringify(steps)}`);
if (!/<h2[^>]*>What happens next\?<\/h2>/.test(tm) || !tm.includes('Times on this website are Prague time (CET).') || !/href="\/en\/reviews\/">Client reviews<\/a>/.test(tm) || !/id="thanks-back" href="\/en\/seo-for-translation-agencies-prague\/" hidden>Back to the page for translation agencies<\/a>/.test(tm)) e('thank-you h2 / time line / links');
if (/<form|CZK|€|Kč|buy|order now/i.test(tm)) e('thank-you: no forms, no prices, no purchase buttons');
if (/application\/ld\+json[\s\S]*Offer/.test(t)) e('thank-you: no Offer markup');
// form on /en/free-audit/
const a = readFileSync('dist/en/free-audit/index.html', 'utf8');
const form = (a.match(/<form[\s\S]*?<\/form>/) || [''])[0];
if (!/<form[^>]*data-niche-form[^>]*data-thanks-niche="\/en\/free-audit\/thank-you\/"/.test(form) && !/<form[^>]*data-thanks-niche="\/en\/free-audit\/thank-you\/"[^>]*data-niche-form/.test(form)) e('niche form attributes');
const box = (form.match(/<div data-niche-fields hidden>[\s\S]*?<\/div>\s*<\/div>/) || [''])[0];
if (!box || !/<fieldset class="field" disabled>/.test(box) || !/<select[^>]*name="offices"[^>]*disabled/.test(box)) e('niche fields hidden and disabled by default');
for (const n of ['source_page', 'niche', 'site_lang', 'utm_source', 'utm_medium', 'utm_campaign', 'referrer', 'submitted_at']) if (!new RegExp(`<input type="hidden" name="${n}"[^>]*disabled`).test(form)) e(`hidden field ${n} disabled by default`);
if (!/<legend>Which languages does your website have\?<\/legend>/.test(box) || (box.match(/name="site_languages"/g) || []).length !== 3 || !/Where are your offices\?/.test(box) || !['Prague only', 'Prague and other cities', 'Outside Prague'].every((o) => box.includes(`<option value="${o}">`))) e('niche fields: languages (3) and offices (3 options)');
if (!/<input[^>]*name="website"[^>]*required/.test(form) || !/Website address \*/.test(form) || !/<option value="audit" selected/.test(form) || !/name="company"/.test(form) || !/name="started"/.test(form)) e('website required, audit preselected, honeypot + fill-time');
if (/budget|calendar|chat|timer|places left/i.test(form)) e('no budget questions, calendar, chat, timers');
if (!/<p class="muted" data-niche-context hidden>You are requesting an audit for a translation agency website\.<\/p>/.test(a)) e('context line hidden by default');
// the ordinary form of the other pages has no niche attributes
for (const p of ['dist/en/contact/index.html', 'dist/en/index.html', 'dist/en/3-month-start/index.html']) if (/data-niche-form|data-niche-fields/.test(readFileSync(p, 'utf8'))) e(`${p}: the niche form must not appear elsewhere`);
// analytics helper
const tr = readFileSync('src/lib/track.ts', 'utf8');
if (!/analytics-consent'\) === 'granted'/.test(tr) || !/if \(!g \|\| !consentGranted\(\)\) return;/.test(tr)) e('events only with the consent');
if (errs.length) { console.error('✗ check-funnel-en:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log('✓ check-funnel-en: ok (thank-you page, niche form markup, consent-gated events)');
