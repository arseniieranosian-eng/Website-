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
Create `src/content/blog/cs/my-slug.md` with the frontmatter `title`, `description`, `date`, `translationKey`, `services`.
For a translation, add a file in `en/` or `ru/` with **the same** `translationKey` and a translated file name (that is the slug).
hreflang is generated only between versions that exist. The home page picks up the 3 latest posts automatically.

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

## Before launch (TODO)
- [ ] `src/data/site.ts`: real e-mail, phone, socials, author photo/video (`public/media/`)
- [ ] `src/data/reviews.ts`: real reviews, `sample: false`
- [ ] `src/data/cases.ts` and `PROOF` in `site.ts`: real numbers (no `XX` placeholders)
- [ ] About page bio (`src/views/About.astro`), privacy policy text (company ID, address)
- [ ] `public/images/og.png`: final OG image
- [ ] Set the environment variables, submit `sitemap.xml` to Search Console and Seznam Webmaster
