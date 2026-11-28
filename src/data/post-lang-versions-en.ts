// English content of the blog article /en/blog/czech-and-english-website-versions-translation-agency/ (brief of 28.11.2026, content funnel to /en/seo-for-translation-agencies-prague/, article A).
// An ADAPTATION, not a translation of a Czech article: no Czech text is carried over, no link to a Czech page or to another article in the body (rule F: only the "Related articles" card), no hreflang pair with a Czech page.
// Google statements are reworded to what the Google Search Central pages say (checked 28.11.2026): the sentences "hreflang is a signal, not an instruction" and "x-default is optional" are NOT on those pages and were removed.
// Dates (Published / Updated, Sources checked, the date of the own-site observation) are placeholders of the brief: the author sets the real ones at publication; the observation figures are verified against dist and the sitemap by scripts/check-post-lang-versions-en.mjs.
export const POST_LANGVERSIONS_EN_PUBLISHED = '2026-11-28';
export const POST_LANGVERSIONS_EN_MODIFIED = '2026-11-28';
export const POST_LANGVERSIONS_EN_CHECKED = '28 November 2026';
// Own-site observation (K2): figures counted from dist/sitemap.xml and the built pages on the date above (addresses that belong to a language group, and the languages in those groups).
export const POST_LANGVERSIONS_EN_OBS = { addresses: 95, languages: 4 } as const;
export const POST_LANGVERSIONS_EN = {
  "lang": "en",
  "authorLabel": "Author",
  "authorName": "Arsenii Eranosian",
  "updatedLabel": "Updated",
  "readLabel": "Reading time",
  "readUnit": "min",
  "cover": {
    "src": "/images/blog/czech-and-english-website-versions-translation-agency.webp",
    "width": 1200,
    "height": 630,
    "alt": "Illustration: Czech and English page versions linked in both directions"
  },
  "lead": "Give each language version its own address, link the versions to each other in both directions and mark them with hreflang, each version listing itself too. Translated versions are not duplicates while the main text is translated. Google's documentation says hreflang helps it show the right version, so I cannot promise which version a searcher sees.",
  "quote": "A second language version is not a copy of the first. It is a page for another visitor, and it needs its own text.",
  "urls": {
    "title": "Should the Czech and English versions have separate addresses?",
    "answer": "Yes. Each language version should have its own address, for example one for the Czech page and one under /en/ for the English page, so that Google can index every version separately. The address should not change with the visitor's browser language, because then Google may see only one of the versions."
  },
  "hreflang": {
    "title": "What does hreflang tell Google?",
    "answer": "Hreflang tells Google which other language versions of a page exist, so that it can show the version that fits the searcher. Every version should list all the versions, itself included, and the links must work in both directions. If a version does not link back, Google may ignore the annotation."
  },
  "guarantee": {
    "title": "Does hreflang guarantee which version appears?",
    "answer": "Google's documentation says hreflang helps Google Search point users to the most appropriate version, and it makes no promise about the result. I cannot predict which version a given searcher will see, and I do not promise it. What you can control is that the versions are correct and linked."
  },
  "dup": {
    "title": "Are the Czech and English versions duplicates?",
    "answer": "Not if the main text is translated: Google's documentation says localized versions are considered duplicates only when the main content stays untranslated. The risk is an English page that is still mostly Czech, or one where only the menu and footer are translated. Those versions can be treated as duplicates, and visitors find them unclear."
  },
  "x": {
    "title": "What does x-default do?",
    "answer": "The x-default value marks the fallback page for searchers whose language does not match any listed version. Google says it was designed for language selector pages, and it can also point to the main version. Add it like the other values, with the same address on every version, and check that the address works."
  },
  "check": {
    "title": "How can I check my own site?",
    "intro": "Check a few important pages first, not the whole site at once. You need a browser and access to the Search Console of your site.",
    "steps": [
      "List every language version and its address for a few important pages.",
      "Open each version and check that it links to the other versions.",
      "Check that every link works in both directions.",
      "Check that each version also lists itself.",
      "Use the URL Inspection tool in Search Console to see whether Google indexed each version."
    ]
  },
  "obs": {
    "title": "What did I see on my own site?"
  },
  "prague": {
    "title": "What is different for an agency in Prague?",
    "answer": "Your visitors may search in Czech or in English, and both versions need the same company details: name, address, phone number and fields. Describe the Prague office the same way on the website, on Google Maps and on Mapy.com. Whether English searches matter for your agency depends on your clients, and I do not assume it."
  },
  "sources": {
    "title": "Sources",
    "line": "Google documentation, checked on {checked}. The first two pages show their own update dates (21 September 2026 and 10 December 2025); the Search Console help page shows none.",
    "items": [
      {
        "text": "Tell Google about localized versions of your page",
        "href": "https://developers.google.com/search/docs/specialty/international/localized-versions"
      },
      {
        "text": "Managing multi-regional and multilingual sites",
        "href": "https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites"
      },
      {
        "text": "URL Inspection tool (Search Console Help)",
        "href": "https://support.google.com/webmasters/answer/9012289"
      }
    ]
  },
  "faqTitle": "Frequently asked questions",
  "faq": [
    {
      "q": "Do I need an English version if most of my clients are Czech?",
      "a": "That depends on who your clients are and how they search, and I do not assume it in advance. An English version makes sense when you have clients or enquiries in English. If it would be only a partial copy of the Czech pages, it is better to publish fewer pages and finish them."
    },
    {
      "q": "Is a partly translated page a problem?",
      "a": "It can be. If the main content stays in the original language and only the template is translated, Google's documentation treats the versions as duplicates and advises one language per page. A page that mixes both languages is unclear to visitors too. Finish the translation before adding the page to hreflang, or leave it without an English version."
    },
    {
      "q": "Does Seznam read hreflang?",
      "a": "I could not find a statement from Seznam about hreflang, so I do not state how it treats language versions. The checks in this article describe how Google works. If you have a source from Seznam, write to me and I will add it, with its date."
    },
    {
      "q": "Will the free audit check my language versions?",
      "a": "Yes, in part. The free audit checks indexing, duplicate pages and other technical problems, and for a website with several language versions it checks each version separately. It does not cover keywords, competition, maps, AI visibility, speed or the mobile version. You get a short presentation within 24 hours."
    }
  ],
  "moreTitle": "Related articles",
  "moreLead": "Another article on why an agency website gets no enquiries.",
  "moreMore": "Read the article",
  "disclosure": "I am an SEO specialist, so my assessment may be biased.",
  "mistake": {
    "before": "Found a mistake?",
    "link": "Write to me."
  },
  "endTitle": "Want a second pair of eyes on the language versions of your agency website?",
  "endCta": "SEO for translation agencies in Prague"
} as const;
