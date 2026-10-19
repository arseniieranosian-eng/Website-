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
- `/sluzby/konzultace/` (cs) and `/ru/uslugi/konsultacii/` (ru): briefs of 19.10.2026 — content in `src/data/consulting.ts` (cs) and `src/data/consulting-ru.ts` (ru), prices in `src/data/consulting-shared.ts`, one template `src/views/ConsultingPage.astro`, JSON-LD in `src/lib/schema-consulting.ts`. The en page still uses the generic `Service.astro`. `scripts/check-consulting.mjs` (part of `npm run build`) verifies both pages against the briefs (meta lengths, section order, JSON-LD == visible text). - `/ru/uslugi/start-3-mesyaca/` (ru): brief of 19.10.2026 — content `src/data/start-ru.ts`, price `src/data/start-shared.ts`, template `src/views/StartPage.astro`, JSON-LD `src/lib/schema-start.ts`, checked by `scripts/check-start.mjs` (part of `npm run build`). The cs/en versions of this page are still the generic template.
- The visible "Aktualizováno" date and `dateModified` come from git (`src/lib/lastmod.ts`) and update with every content edit. **Next content review: 17. 1. 2027** (about every 90 days).

## SEO
- SSG, mobile-first, no JS frameworks (the only scripts are the menu, form, cookie banner and GA).
- hreflang + x-default (cs) in `<head>` and in `sitemap.xml`; canonical on every page; `robots.txt`.
- Schema.org: Person, ProfessionalService, WebSite (every page), BreadcrumbList, FAQPage, Service, BlogPosting, ProfilePage. Review markup is emitted only for real reviews (`sample: false`).
- The thank-you pages are `noindex` and are not in the sitemap.
- `npm run build` fails on: duplicate title/description/H1, more or fewer than one H1, missing canonical/breadcrumbs, non-reciprocal hreflang, broken internal links, or a sitemap mismatch.

## Form and analytics
- Fields: name, e-mail or phone, website, service, message, consent (required). Anti-spam: honeypot plus a minimum fill time. Server-side filtering is also worth enabling on the form backend.
- After a successful submit the visitor goes to the thank-you page, which fires the GA4 `generate_lead` event once per submission (not on reload). Mark `generate_lead` as a key event in GA4.
- GA4 loads only after consent is given in the cookie banner.

## Deploy (Czech shared hosting)
1. `npm run build` (creates `dist/` and runs the SEO check).
2. Upload the **contents** of `dist/` (including the hidden `.htaccess`) to the web root via FTP/SFTP.
3. `.htaccess` (Apache) handles: HTTPS handled by the hosting panel; canonical host is `https://www.seo-eranosian.com`, the 404 page, gzip, caching and basic security headers. If the hosting runs nginx, tell me and I will write the equivalent config.
4. Enable the free SSL certificate in the hosting panel before the first launch.
The lead form posts to `/send.php` (in `public/`, copied to `dist/`), which e-mails the enquiry to the address set in `TO_EMAIL` at the top of that file. It needs PHP on the hosting. Test it once after the first upload; if mails land in spam or `mail()` is disabled, switch to SMTP or set `PUBLIC_FORM_ENDPOINT` to a third-party service.

## Before launch (TODO)
- [x] Contacts, LinkedIn / Instagram, author photo and intro video (`public/media/intro.mp4`, shown on the consulting page)
- [x] First real reviews and KB PŘEKLADY metrics (source: Make Up Digital Agency review)
- [x] About page bio, KB PŘEKLADY linked to the Make Up Digital Agency review
- [ ] More reviews for Maps / Full SEO
- [x] Domain `seo-eranosian.com` and IČO 21462259
- [x] Registered address in the privacy policy
- [ ] Privacy policy legal review
- [x] Logo, favicon set and OG image (from the client logo)
- [ ] The video has burned-in Russian subtitles; consider cs/en versions
- [ ] Set `PUBLIC_GSC_VERIFICATION` for the build (GA4 `G-K5G9E0QZF5` is already built in), test the form on the live site, submit `sitemap.xml` to Search Console and Seznam Webmaster
