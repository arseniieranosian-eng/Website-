# Arsenii Eranosian — SEO site (cs / en / ru)

A static site built with [Astro](https://astro.build) 5. One goal: an enquiry through the form, with the free SEO audit as the main entry point.

## Commands

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # build to dist/ + automatic SEO check (scripts/check-seo.mjs)
npm run check      # TypeScript / Astro type check
```

## Environment variables (`.env`, see `.env.example`)

| Variable | Purpose |
|---|---|
| `SITE_URL` | production domain (canonical, hreflang, sitemap) |
| `PUBLIC_FORM_ENDPOINT` | form backend URL that accepts POST JSON (Formspree, Web3Forms, your own) |
| `PUBLIC_GA_ID` | GA4 measurement ID (`G-…`) |
| `PUBLIC_GSC_VERIFICATION` | Google Search Console HTML-tag verification token |

## URL structure
There is no services collection page. Service pages sit at the top level (`/konzultace/`, `/start-3-mesice/`, `/full-seo/`, `/lokalni-seo-mapy/` (was `/mapy/`, 301); `/en/consulting/` …; `/ru/konsultacii/` …) and are reached from the header "Services" dropdown (`SERVICE_MENU` in `src/i18n/routes.ts`) and from the services block of the home page (`#services`). The old `/sluzby/…`, `/en/services/…`, `/ru/uslugi/…` URLs are 301-redirected in `public/.htaccess`.

## Where things live

| What | File |
|---|---|
| All URLs and translated slugs, breadcrumb hierarchy | `src/i18n/routes.ts` |
| Title / description / H1 / nav name for every page and language | `src/i18n/meta.ts` |
| Shared interface strings | `src/i18n/ui.ts` |
| Contacts, socials, photo/video, "numbers as proof" block | `src/data/site.ts` |
| Services (cards and detail pages) | `src/data/services.ts` |
| **Reviews — single source** (home, services, case study, /recenze/) | `src/data/reviews.ts` |
| FAQ — single source (home, services, /caste-dotazy/) | `src/data/faq.ts` |
| Case studies | `src/data/cases.ts` |
| Blog posts | `src/content/blog/{cs,en,ru}/{slug}.md` |
| Page templates | `src/views/*.astro` |
| Lead form (one component) | `src/components/LeadForm.astro` |

### Adding a blog post
There are no articles yet: the blog index is shown with an empty-state message, is `noindex` and stays out of the sitemap until a language gets its first post; the home page "From the blog" block and the thank-you page suggestions also appear only when posts exist.
Create `src/content/blog/cs/my-slug.md` with the frontmatter `title`, `description`, `date`, `translationKey`, `services`.
For a translation, add a file in `en/` or `ru/` with **the same** `translationKey` and a translated file name (that is the slug).
hreflang is generated only between versions that exist. The home page picks up the 3 latest posts automatically.

## Page briefs implemented
- `/ru/konsultacii/` (ru): brief of 19.10.2026 — content `src/data/consulting-ru.ts`, prices `src/data/consulting-shared.ts`, template `src/views/ConsultingPage.astro`, JSON-LD `src/lib/schema-consulting.ts`, checked by `scripts/check-consulting.mjs`. `/konzultace/` (cs): own brief of 19.10.2026 — content `src/data/consulting-cs.ts`, template `src/views/ConsultingCsPage.astro`, JSON-LD `src/lib/schema-consulting-cs.ts`, checked by `scripts/check-consulting-cs.mjs`. The en page still uses the generic `Service.astro`. - `/ru/start-3-mesyaca/` (ru): brief of 19.10.2026 — content `src/data/start-ru.ts`, price `src/data/start-shared.ts`, template `src/views/StartPage.astro`, JSON-LD `src/lib/schema-start.ts`, checked by `scripts/check-start.mjs` (part of `npm run build`). The cs/en versions of this page are still the generic template.
- `/ru/full-seo/` (ru): brief of 19.10.2026 — content `src/data/fullseo-ru.ts`, price `src/data/fullseo-shared.ts`, template `src/views/FullSeoPage.astro`, JSON-LD `src/lib/schema-fullseo.ts`, checked by `scripts/check-fullseo.mjs` (part of `npm run build`). The cs/en versions are still the generic template.
- `/ru/karty/` (ru): brief of 19.10.2026 — content `src/data/maps-ru.ts`, term in `src/data/maps-shared.ts`, template `src/views/MapsPage.astro`, JSON-LD `src/lib/schema-maps.ts`, checked by `scripts/check-maps.mjs`. Pay-per-result rates are in `src/data/maps-shared.ts` (from the author's price slides: calls 1 000 Kč/10, routes 1 000 Kč/20, site visits 500 Kč/10, Full package 1 800 Kč/month, all per 1 profile) and are emitted as priceSpecification; rates apply to the contract period and results are confirmed by the maps' own statistics export; the minimum monthly payment is still to be confirmed. The case block is hidden until a maps case exists. Seznam maps are named "Mapy.com (Seznam)" / "Firmy.cz" everywhere.
- `/start-3-mesice/` (cs): brief of 19.10.2026 — content `src/data/start-cs.ts`, template `src/views/StartCsPage.astro`, JSON-LD `src/lib/schema-start-cs.ts`, checked by `scripts/check-start-cs.mjs`. The en version is still the generic template.
- `/ru/besplatnyj-audit/` (ru): brief of 19.10.2026 — content `src/data/audit-ru.ts`, template `src/views/AuditRuPage.astro`, JSON-LD `src/lib/schema-audit-ru.ts`, checked by `scripts/check-audit-ru.mjs`. The free audit is technical errors only. The sample-presentation video is `public/media/audit-example.mp4` (made by `scripts/prepare-audit-video.sh`; it still carries the VEED watermark until a clean export replaces the file). `AUDIT_VIDEO` in `src/data/audit-ru.ts` switches the video block, the text under it and the VideoObject on or off together. cs/en audit pages are still the old template.
- `/full-seo/` (cs): brief of 20.10.2026 — content `src/data/fullseo-cs.ts` (the Start comparison table, notes and the case line are shared with `start-cs.ts`), template `src/views/FullSeoCsPage.astro`, JSON-LD `src/lib/schema-fullseo-cs.ts`, checked by `scripts/check-fullseo-cs.mjs`. The en version is still the generic template.
- `/lokalni-seo-mapy/` (cs, was `/mapy/`): keyword brief of 20.10.2026 — content `src/data/maps-cs.ts`, template `src/views/MapsCsPage.astro`, JSON-LD `src/lib/schema-maps-cs.ts`, checked by `scripts/check-maps-cs.mjs`. Rates and the 4-month term are shared with the Russian page (`src/data/maps-shared.ts`). Five slides (price, Full package, branch charts) live in `public/images/maps/`. There is no case block and no case link on either maps page until a maps case exists.
- `/seo-a-geo/` (cs): brief of 20.10.2026 — an informational hub, NOT a service (no form, no price, no Service/Offer markup): content `src/data/geo-cs.ts`, template `src/views/GeoCsPage.astro`, JSON-LD `src/lib/schema-geo-cs.ts` (Article, DefinedTermSet, HowTo, FAQPage), checked by `scripts/check-geo-cs.mjs`. GEO/AEO is part of every service: the service pages end with the `GeoNote` line instead of a card, the forms have no SEO + GEO/AEO option, the top menu has its own item. The en/ru versions still use `src/views/Geo.astro` (prices removed).
- Case study (cs) `/pripadove-studie/seo-prekladatelska-agentura-4-mesice/`: brief of 20.10.2026 — the client is ANONYMOUS (its name must not appear anywhere; `scripts/check-case-cs.mjs` fails the build if it does). Content `src/data/case-cs.ts`, template `src/views/CaseCsPage.astro`, JSON-LD `src/lib/schema-case-cs.ts`. The short case line used on service pages, About and teasers is one source: `src/data/case-summary.ts`. Only confirmed figures are used (8× = June vs May, form and e-mail only); ×24, ×6, ×300+ are not. The "Co bude dál?" block is hidden until autumn data exists; there is no reviews block. The old `/kb-preklady/` addresses are 301-redirected in `public/.htaccess`; en/ru versions still use `src/views/Case.astro` with `src/data/cases.ts` (anonymised).
- Print-shop case (ru only) `/ru/kejsy/seo-tipografiya/`: brief of 20.10.2026 — anonymous client; content `src/data/case-typo-ru.ts`, template `src/views/CaseTypoRuPage.astro`, JSON-LD `src/lib/schema-case-typo.ts`, checked by `scripts/check-case-typo-ru.mjs`. The only figures: 1 200 → 10 500 organic visits a month, +775 % (×8.75), July 2024 → July 2025 (`TYPO_FORMULA` / `TYPO_LINE` in `src/data/case-summary.ts` is the single source; +777 % was replaced by +775 % site-wide). It is a Russian-only page: `ONLY_LANGS` in `src/i18n/routes.ts` skips cs/en (no hreflang, not in the sitemap or in the cs/en case lists).
- Czech home page `/` (hub, brief of 20.10.2026): dedicated `src/views/HomeCsPage.astro`, content `src/data/home-cs.ts` (prices from the shared sources, case formulas from `case-summary.ts`; Maps show no price until the terms are decided), JSON-LD `src/lib/schema-home-cs.ts` (WebPage + FAQPage; the global graph now also carries the `hasOfferCatalog` of the five services in menu order), check `scripts/check-home-cs.mjs`. The Blog link is removed from the menu and footer in all languages (the blog is empty; bring it back by re-adding `'blog'` to `NAV` in `Header.astro` and `PAGES` in `Footer.astro`). The en and ru home pages are still the generic template. Review: 18.01.2027.
- Czech about page `/o-mne/` (brief of 20.10.2026): dedicated `src/views/AboutCsPage.astro`, content `src/data/about-cs.ts`, trust bar `src/data/trust-cs.ts` + `src/components/TrustBarCs.astro` (HTML text, periods in the captions), JSON-LD `src/lib/schema-about-cs.ts` (ProfilePage → global Person, FAQPage; no page-level Person so the global graph stays the single one), check `scripts/check-about-cs.mjs`. Clients anonymous (the reviews block, from the shared source, may name reviewers' companies). Not confirmed, kept as in the brief: "od roku 2024", the four markets, the Indian internship figure (+60 %), the tools list (incl. SEMrush); no photo / education block beyond the existing photo. The Czech service pages got a "Kdo to dělá?" block (`WhoDoesItCs.astro`). Review: 18.01.2027.
- Translation-agency case Part 2, Czech `/pripadove-studie/seo-v-nizke-sezone/` (brief of 20.10.2026): adaptation of the ru page, hreflang cs ↔ ru. One Czech formula `SEASON_FORMULA_CS` / `SEASON_LINE_CS` (`src/data/case-summary.ts`) on the page, in the case list card, Part 1 ("Pokračování: Část 2"), Start and Full SEO; `×24` is allowed in built pages only together with "jedno okno, ne meziročně" (ru: "одно окно, не год к году"), see `check-case-cs.mjs`. The cs case series has its own `@id` (`https://seo-eranosian.com/pripadove-studie/#seo-case-series`), also declared on Part 1 cs. No charts (no Trends / GA4 data). Content `src/data/case-season-cs.ts`, template `src/views/CaseSeasonCsPage.astro`, check `scripts/check-case-season-cs.mjs`. Review: 18.01.2027.
- Education-platform case, Czech `/pripadove-studie/seo-vzdelavaci-platforma/` (brief of 20.10.2026): short anonymised case, "my / jsme" allowed here only; one figure +55 % (`EDU_FORMULA_CS` / `EDU_LINE_CS` in `src/data/case-summary.ts`), market / data source not stated so not invented. The ru page of the same case exists too, so hreflang cs ↔ ru is emitted (no en). Content `src/data/case-edu-cs.ts` (Czech typography via `src/lib/cs-typo.ts`), template `src/views/CaseEduCsPage.astro`, check `scripts/check-case-edu-cs.mjs`. Review: 18.01.2027.
- Logo: navy/orange ER mark. Source `scripts/assets/logo-source.jpg`; `python3 scripts/make-logo-assets.py` rebuilds `public/images/logo-mark.png`, `logo.png` (schema logo, 762×487) and the favicons / apple-touch / 512 icons.
- Author photos (21.10.2026): photo 1 (laptop, outdoors) is the flagship one: `public/images/author-1.jpg` / `author-1-720.jpg` (4:5 crops, used in the heroes, the home about block and the schema image) and the round `author-1-avatar.jpg` under the quotes; photo 2 (coffee) is `author-2.jpg` / `author-2-720.jpg`, shown on the about pages after photo 1 (`<AuthorMedia second />`). Paths are in `src/data/site.ts`.
- Czech `/seo-a-geo/`, block "Příklady z praxe" (21.10.2026): four screenshots of Google AI answers that mention the translation agency (medical translation; diploma in Prague = one query on two screenshots; Pardubice / Brno / Praha). The client's name, addresses, phone and logo are covered with grey bars (originals are not in the repo; to redo, cover the same spots and export to `public/images/geo/*.webp`). The red arrows are the author's marks. Captions state only what the screenshots show; no dates are claimed (the screenshots carry none) and the note under the block says AI mentions are not guaranteed. Content in `src/data/geo-cs.ts` (`examples`), ImageObjects in `src/lib/schema-geo-cs.ts`, check in `scripts/check-geo-cs.mjs`.
- Half-year case, Czech `/pripadove-studie/seo-prekladatelska-agentura/` (key `caseHalf`, cs only; brief of 21.10.2026). It is a case of its own: the translation-agency work is told as THREE separate cases (the first 4 months at `…-4-mesice/` = `caseKb`, the summer = `caseSeason`, the half year = `caseHalf`), each with its own formula (`KB_FORMULA_CS` ×8, `SEASON_FORMULA_CS`, `HALF_FORMULA_CS`). Content: "půl roku práce", anonymous agency; goals, starting point, what was built, results table (goal → metric → result → period → source), the owner's quote (draft from the author: Yelyzaveta Butyrina, her Instagram, photo), language shares (SVG chart + table + a screenshot of the original table with the site name, absolute counts and footnote numbers covered), cities, AI, six conclusions, the author's quote, 5 FAQ. `src/data/case-half-cs.ts`, template `src/views/CaseHalfCsPage.astro`, markup `src/lib/schema-case-half.ts` (Article in the case series, two Quotations, owner Person, two ImageObjects, FAQPage), check `scripts/check-case-half-cs.mjs` (the 4-month case keeps `check-case-cs.mjs`). Redirects: `kb-preklady/` → the 4-month case (see `public/.htaccess`); neither case address redirects. No charts for Search Console / cities (no data). Review: 19.01.2027.
- Czech free audit `/audit-zdarma/` (brief of 20.10.2026): technical errors only, presentation within 24 hours, no call, free. Dedicated page `src/views/AuditCsPage.astro`, content `src/data/audit-cs.ts` (consultation prices from `consulting-shared.ts`, case line `CASE_LINE.cs`, own Czech sample video `public/media/audit-example-cs.mp4` prepared by `scripts/prepare-audit-video-cs.sh`), JSON-LD `src/lib/schema-audit-cs.ts` (Service with Offer 0 CZK, HowTo `#howto`, VideoObject, FAQPage; no Review / AggregateRating), check `scripts/check-audit-cs.mjs`. The en page is still the generic template (to be adapted separately). Review: 18.01.2027.
- Print-shop case, Czech pair `/pripadove-studie/seo-tiskarna/` (brief of 20.10.2026): adaptation of the ru case with the same figures (one source, `TYPO_FORMULA_CS` / `TYPO_LINE_CS` in `src/data/case-summary.ts`), hreflang cs ↔ ru (+ x-default → cs), extra "Dá se to zopakovat v Česku?" section and market sentence ("ruskojazyčný web pro ruskojazyčný trh"). Czech number typography (non-breaking spaces) is applied in `src/data/case-typo-cs.ts`. Open points not invented: January 2024 starting traffic, exact data source, author's role on the landing pages, example queries for the keyword table (that column is omitted). Template `src/views/CaseTypoCsPage.astro`, shared JSON-LD `src/lib/schema-case-typo.ts`, check `scripts/check-case-typo-cs.mjs`. Review: 18.01.2027.
- Education-platform case (ru only) `/ru/kejsy/seo-obrazovatelnaya-platforma/`: brief of 20.10.2026 — anonymous client, a short case; the author worked together with a colleague ("мы с коллегой" allowed in this case only). The only figure is +55 % organic traffic, March → September 2025, relative data (`EDU_LINE` in `src/data/case-summary.ts`). Content `src/data/case-edu-ru.ts`, template `src/views/CaseEduRuPage.astro`, JSON-LD `src/lib/schema-case-edu.ts`, checked by `scripts/check-case-edu-ru.mjs`. Both ru cases have their own og:image card (`public/images/pripadove-studie/og-*.png`, `ogImage` prop of `Base.astro`).
- Translation-agency case, Part 2 (ru only) `/ru/kejsy/seo-v-nizkij-sezon/`: brief of 20.10.2026 — "SEO в низкий сезон". One result formula `SEASON_FORMULA` / `SEASON_LINE` (`src/data/case-summary.ts`) repeated word for word on the page, in the `/ru/kejsy/` card, Part 1 ("Продолжение: Часть 2"), Start and Full SEO; `×24` is allowed in built pages only together with "одно окно, не год к году" (`check-case-cs.mjs`). Form leads only, relative data, no client name. Article `isPartOf` the `CreativeWorkSeries` `https://seo-eranosian.com/ru/kejsy/#seo-case-series` (also declared on Part 1); WebPage `relatedLink` → Part 1. No charts (no Trends / GA4 data yet). Open points: dates of +357 % / +398 % ("даты уточняются" shown), client consent, Part 1 link retargeting if its URL changes. Content `src/data/case-season-ru.ts`, template `src/views/CaseSeasonRuPage.astro`, JSON-LD `src/lib/schema-case-season.ts`, check `scripts/check-case-season-ru.mjs`. Review: 18.01.2027.
- The visible "Aktualizováno" date and `dateModified` come from git (`src/lib/lastmod.ts`) and update with every content edit. **Next content review: 17. 1. 2027** (about every 90 days).

## SEO
- SSG, mobile-first, no JS frameworks (the only scripts are the menu, form, cookie banner and GA).
- hreflang + x-default (cs) in `<head>` and in `sitemap.xml`; canonical on every page; `robots.txt`.
- Schema.org: Person, ProfessionalService, WebSite (every page), BreadcrumbList, FAQPage, Service, BlogPosting, ProfilePage. Review markup is emitted only for real reviews (`sample: false`).
- The thank-you pages are `noindex` and are not in the sitemap.
- `npm run build` fails on: duplicate title/description/H1, more or fewer than one H1, missing canonical/breadcrumbs, non-reciprocal hreflang, broken internal links, or a sitemap mismatch.

## Form and analytics
- Pop-up form: `src/components/LeadModal.astro` (a native `<dialog>` with the same `LeadForm`, on every page except the thank-you page). Buttons with `href="#form"` and the primary buttons that point to the free-audit page open it instead of scrolling/navigating; the service is preselected from the page's own form (or "audit" for audit buttons) and the site address becomes mandatory when "audit" is selected. The on-page forms stay. Without JavaScript the buttons are normal links.
- Fields: name, e-mail or phone, website, service, message, consent (required). Anti-spam: honeypot plus a minimum fill time. Server-side filtering is also worth enabling on the form backend.
- After a successful submit the visitor goes to the thank-you page, which fires the GA4 `generate_lead` event once per submission (not on reload). Mark `generate_lead` as a key event in GA4.
- GA4 loads only after consent is given in the cookie banner.

## Deploy (Czech shared hosting)
1. `npm run build` (creates `dist/` and runs the SEO check).
2. Upload the **contents** of `dist/` (including the hidden `.htaccess`) to the web root via FTP/SFTP.
3. `.htaccess` (Apache) handles: HTTPS handled by the hosting panel; canonical host is `https://seo-eranosian.com`, the 404 page, gzip, caching and basic security headers. If the hosting runs nginx, tell me and I will write the equivalent config.
4. Enable the free SSL certificate in the hosting panel before the first launch.
The lead form posts to `/send.php` (in `public/`, copied to `dist/`), which e-mails the enquiry to the address set in `TO_EMAIL` at the top of that file. It needs PHP on the hosting. Test it once after the first upload; if mails land in spam or `mail()` is disabled, switch to SMTP or set `PUBLIC_FORM_ENDPOINT` to a third-party service.

## Before launch (TODO)
- [x] Contacts, LinkedIn / Instagram, author photo and intro video (`public/media/intro.mp4`, shown on the consulting page)
- [x] First real reviews and the translation-agency case figures (the client is anonymous)
- [x] About page bio
- [ ] More reviews for Maps / Full SEO
- [x] Domain `seo-eranosian.com` and IČO 21462259
- [x] Registered address in the privacy policy
- [ ] Privacy policy legal review
- [x] Logo, favicon set and OG image (from the client logo)
- [ ] The video has burned-in Russian subtitles; consider cs/en versions
- [ ] Set `PUBLIC_GSC_VERIFICATION` for the build (GA4 `G-K5G9E0QZF5` is already built in), test the form on the live site, submit `sitemap.xml` to Search Console and Seznam Webmaster

## Canonical host: seo-eranosian.com (without www)
Since 21.10.2026 the canonical host is `https://seo-eranosian.com` (no `www`): `astro.config.mjs` (`site`), canonical, sitemap, robots, hreflang, Open Graph, JSON-LD ids and the `.htaccess` redirect targets all use it. The redirect `www` → no-`www` (and HTTP → HTTPS) is set ONLY in the hosting panel (Webserver → Nastavení), never in `.htaccess` (a duplicate once caused ERR_TOO_MANY_REDIRECTS). In Search Console use a Domain property and inspect `https://seo-eranosian.com/...`.

## Blog article «Jak zjistit, jestli je web indexovaný» (cs)

`/blog/jak-zjistit-jestli-je-web-indexovany/`, a dedicated page (not Markdown): `src/data/post-indexing-cs.ts`, `src/lib/schema-post-indexing.ts`, `src/views/PostIndexingCsPage.astro`, `src/components/IndexIllustration.astro`, check `scripts/check-post-indexing-cs.mjs`. Dedicated articles are listed on the blog index through `src/data/blog-posts.ts` (the index and its sitemap entry become indexable once one exists). The four pictures are drawn illustrations labelled "ilustrace" (replace with real Search Console screenshots later). Before each review (every 90 days, next 19. 1. 2027) check the Czech names of the Search Console items against a live account. Links to the funnel articles 1, 3 and 5 are to be added when they are published.

## Blog article «Proč se můj web nezobrazuje v Googlu» (cs)

`/blog/proc-se-web-nezobrazuje-v-googlu/`: `src/data/post-not-shown-cs.ts`, `src/lib/schema-post-not-shown.ts`, `src/views/PostNotShownCsPage.astro`, check `scripts/check-post-not-shown-cs.mjs`. Same pattern and illustrations as the indexing article (`IndexIllustration.astro` kinds `wp`, `manual`); no HowTo markup. The indexing article links to it (anchor «Proč se web nezobrazuje v Googlu»). Review every 90 days (next 19. 1. 2027); check the Czech names in Search Console and WordPress («Ruční akce», «Problémy se zabezpečením», «Odrazovat vyhledávače od indexování webu»). Links to articles 2, 3, 5 are to be added when published.
