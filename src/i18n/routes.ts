// Single source of truth for URLs. Every page exists in all three languages;
// slugs are translated. Blog posts are handled separately (see postPath).

export const LANGS = ['cs', 'en', 'ru', 'uk'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'cs';

export const LANG_PREFIX: Record<Lang, string> = { cs: '/', en: '/en/', ru: '/ru/', uk: '/uk/' };
export const HTML_LANG: Record<Lang, string> = { cs: 'cs-CZ', en: 'en', ru: 'ru', uk: 'uk' };
export const OG_LOCALE: Record<Lang, string> = { cs: 'cs_CZ', en: 'en_US', ru: 'ru_RU', uk: 'uk_UA' };

export const ROUTES = {
  home: { cs: '/', en: '/en/', ru: '/ru/', uk: '/uk/' },
  audit: { cs: '/audit-zdarma/', en: '/en/free-audit/', ru: '/ru/besplatnyj-audit/', uk: '/uk/bezkoshtovnyi-audyt/' },
  consulting: { cs: '/konzultace/', en: '/en/consulting/', ru: '/ru/konsultacii/', uk: '/uk/konsultatsii/' },
  start: { cs: '/start-3-mesice/', en: '/en/3-month-start/', ru: '/ru/start-3-mesyaca/', uk: '/uk/start-3-misiatsi/' },
  fullSeo: { cs: '/full-seo/', en: '/en/full-seo/', ru: '/ru/full-seo/', uk: '/uk/full-seo/' },
  maps: { cs: '/lokalni-seo-mapy/', en: '/en/maps/', ru: '/ru/karty/', uk: '/uk/mapy/' },
  geo: { cs: '/seo-a-geo/', en: '/en/seo-and-geo/', ru: '/ru/seo-i-geo/', uk: '/uk/seo-ta-geo/' },
  cases: { cs: '/pripadove-studie/', en: '/en/case-studies/', ru: '/ru/kejsy/', uk: '/uk/keisy/' },
  caseTypo: { cs: '/pripadove-studie/seo-tiskarna/', en: '/en/case-studies/seo-print-shop/', ru: '/ru/kejsy/seo-tipografiya/', uk: '/uk/kejsy/seo-tipografiya/' },
  caseEdu: { cs: '/pripadove-studie/seo-vzdelavaci-platforma/', en: '/en/case-studies/seo-education-platform/', ru: '/ru/kejsy/seo-obrazovatelnaya-platforma/', uk: '/uk/kejsy/seo-obrazovatelnaya-platforma/' },
  caseRazbor: { cs: '/pripadove-studie/rozbor-webu-realitni-kancelare-praha/', en: '/en/case-studies/review-real-estate-agency-prague/', ru: '/ru/kejsy/razbor-agentstvo-nedvizhimosti-praga/', uk: '/uk/kejsy/razbor-agentstvo-nedvizhimosti-praga/' },
  caseSeason: { cs: '/pripadove-studie/seo-v-nizke-sezone/', en: '/en/case-studies/seo-in-low-season/', ru: '/ru/kejsy/seo-v-nizkij-sezon/', uk: '/uk/kejsy/seo-v-nizkij-sezon/' },
  caseHalf: { cs: '/pripadove-studie/seo-prekladatelska-agentura/', en: '/en/case-studies/seo-translation-agency-half-year/', ru: '/ru/kejsy/seo-perevodcheskoe-agentstvo-polgoda/', uk: '/uk/kejsy/seo-perevodcheskoe-agentstvo-polgoda/' },
  nicheTranslation: { cs: '/seo-pro-prekladatelske-agentury-praha/', en: '/en/seo-for-translation-agencies-prague/', ru: '/ru/seo-dlya-perevodcheskih-agentstv-praga/', uk: '/uk/seo-dlya-perevodcheskih-agentstv-praga/' },
  nicheBrno: { cs: '/seo-pro-prekladatelske-agentury-brno/', en: '/en/seo-for-translation-agencies-brno/', ru: '/ru/seo-dlya-perevodcheskih-agentstv-brno/', uk: '/uk/seo-dlya-perevodcheskih-agentstv-brno/' },
  nicheAccountingBrno: { cs: '/seo-pro-ucetni-kancelare-brno/', en: '/en/seo-for-accounting-firms-brno/', ru: '/ru/seo-dlya-buhgalterskih-kompanij-brno/', uk: '/uk/seo-dlya-buhgalterskih-kompanij-brno/' },
  nicheDental: { cs: '/seo-pro-zubni-ordinace-praha/', en: '/en/seo-for-dental-practices-prague/', ru: '/ru/seo-dlya-stomatologij-praga/', uk: '/uk/seo-dlya-stomatologij-praga/' },
  nicheRealtyBrno: { cs: '/seo-pro-realitni-kancelare-brno/', en: '/en/seo-for-real-estate-agencies-brno/', ru: '/ru/seo-dlya-agentstv-nedvizhimosti-brno/', uk: '/uk/seo-dlya-agentstv-nedvizhimosti-brno/' },
  nicheAccounting: { cs: '/seo-pro-ucetni-kancelare-praha/', en: '/en/seo-for-accounting-firms-prague/', ru: '/ru/seo-dlya-buhgalterskih-kompanij-praga/', uk: '/uk/seo-dlya-buhgalterskih-kompanij-praga/' },
  nicheFitness: { cs: '/seo-pro-online-fitness-a-wellness-praha/', en: '/en/seo-for-online-fitness-and-wellness-prague/', ru: '/ru/seo-dlya-onlajn-fitnesa-i-wellness-praga/', uk: '/uk/seo-dlya-onlajn-fitnesa-i-wellness-praga/' },
  nicheElectronics: { cs: '/seo-pro-obchody-s-elektronikou/', en: '/en/seo-for-electronics-stores/', ru: '/ru/seo-dlya-magazinov-elektroniki-praga/', uk: '/uk/seo-dlya-magazinov-elektroniki-praga/' },
  nicheGaming: { cs: '/seo-pro-pocitacove-herny-praha/', en: '/en/seo-for-gaming-clubs-prague/', ru: '/ru/seo-dlya-kompyuternyh-klubov-praga/', uk: '/uk/seo-dlya-kompyuternyh-klubov-praga/' },
  nicheMachinery: { cs: '/seo-pro-strojirenske-firmy/', en: '/en/seo-for-machinery-companies/', ru: '/ru/seo-dlya-mashinostroitelnyh-kompanij/', uk: '/uk/seo-dlya-mashinostroitelnyh-kompanij/' },
  nicheTypography: { cs: '/seo-pro-tiskarny-a-polygrafii/', en: '/en/seo-for-printing-companies/', ru: '/ru/seo-dlya-tipografij/', uk: '/uk/seo-dlya-tipografij/' },
  nicheFinance: { cs: '/seo-pro-financni-poradce-cesko/', en: '/en/seo-for-financial-consultants-czechia/', ru: '/ru/seo-dlya-finansovyh-konsultantov-chehiya/', uk: '/uk/seo-dlya-finansovyh-konsultantov-chehiya/' },
  nicheRealty: { cs: '/seo-pro-realitni-kancelare-praha/', en: '/en/seo-for-real-estate-agencies-prague/', ru: '/ru/seo-dlya-agentstv-nedvizhimosti-praga/', uk: '/uk/seo-dlya-agentstv-nedvizhimosti-praga/' },
  nichePardubice: { cs: '/seo-pro-prekladatelske-agentury-pardubice/', en: '/en/seo-for-translation-agencies-pardubice/', ru: '/ru/seo-dlya-perevodcheskih-agentstv-pardubice/', uk: '/uk/seo-dlya-perevodcheskih-agentstv-pardubice/' },
  caseKb: { cs: '/pripadove-studie/seo-prekladatelska-agentura-4-mesice/', en: '/en/case-studies/seo-translation-agency-4-months/', ru: '/ru/kejsy/seo-perevodcheskoe-agentstvo-4-mesyaca/', uk: '/uk/kejsy/seo-perevodcheskoe-agentstvo-4-mesyaca/' },
  reviews: { cs: '/recenze/', en: '/en/reviews/', ru: '/ru/otzyvy/', uk: '/uk/vidhuky/' },
  blog: { cs: '/blog/', en: '/en/blog/', ru: '/ru/blog/', uk: '/uk/blog/' },
  postFinanceChannels: { cs: '/blog/jak-ziskat-klienty-pro-financniho-poradce/', en: '/en/blog/how-to-get-clients-for-a-financial-consultant/', ru: '/ru/blog/kak-poluchit-klientov-finansovomu-konsultantu-chehiya/', uk: '/uk/blog/kak-poluchit-klientov-finansovomu-konsultantu-chehiya/' },
  postAccountingNoLeads: { cs: '/blog/proc-web-ucetni-kancelare-neprinasi-poptavky/', en: '/en/blog/why-an-accounting-firm-website-brings-no-enquiries/', ru: '/ru/blog/pochemu-sajt-buhgalterskoj-firmy-ne-prinosit-zayavok/', uk: '/uk/blog/pochemu-sajt-buhgalterskoj-firmy-ne-prinosit-zayavok/' },
  postAccountingSmall: { cs: '/blog/ma-seo-smysl-pro-malou-ucetni-kancelar/', en: '/en/blog/does-seo-make-sense-for-a-small-accounting-firm/', ru: '/ru/blog/imeet-li-smysl-seo-dlya-nebolshoj-buhgalterskoj-firmy/', uk: '/uk/blog/imeet-li-smysl-seo-dlya-nebolshoj-buhgalterskoj-firmy/' },
  postAccountingLocal: { cs: '/blog/lokalni-pritomnost-ucetni-kancelare/', en: '/en/blog/local-presence-of-an-accounting-firm/', ru: '/ru/blog/lokalnoe-prisutstvie-buhgalterskoj-firmy/', uk: '/uk/blog/lokalnoe-prisutstvie-buhgalterskoj-firmy/' },
  postAccountingPages: { cs: '/blog/stranky-sluzeb-ucetni-kancelare/', en: '/en/blog/service-pages-of-an-accounting-firm/', ru: '/ru/blog/stranicy-uslug-buhgalterskoj-firmy/', uk: '/uk/blog/stranicy-uslug-buhgalterskoj-firmy/' },
  postWeakSeoDental: { cs: '/blog/slabe-seo-konkurence-zubni-ordinace/', en: '/en/blog/why-dental-practices-with-weak-seo-rank-ahead/', ru: '/ru/blog/slabaya-seo-konkurenciya-stomatologii/', uk: '/uk/blog/slabke-seo-konkurentsiya-stomatolohii/' },
  postFaqDental: { cs: '/blog/faq-na-webu-zubni-ordinace/', en: '/en/blog/faq-on-a-dental-practice-website/', ru: '/ru/blog/faq-na-sajte-stomatologii/', uk: '/uk/blog/faq-na-saiti-stomatolohii/' },
  postFaqRealty: { cs: '/blog/faq-na-webu-realitni-kancelare/', en: '/en/blog/faq-on-a-real-estate-agency-website/', ru: '/ru/blog/faq-na-sajte-agentstva-nedvizhimosti/', uk: '/uk/blog/faq-na-saiti-ahentstva-nerukhomosti/' },
  postServicesRealty: { cs: '/blog/stranky-sluzeb-realitni-kancelare/', en: '/en/blog/service-pages-for-a-real-estate-agency/', ru: '/ru/blog/stranicy-uslug-agentstva-nedvizhimosti/', uk: '/uk/blog/storinky-posluh-ahentstva-nerukhomosti/' },
  postMakleriRealty: { cs: '/blog/makleri-na-webu-realitni-kancelare/', en: '/en/blog/brokers-on-a-real-estate-agency-website/', ru: '/ru/blog/makleri-na-sajte-agentstva-nedvizhimosti/', uk: '/uk/blog/maklery-na-saiti-ahentstva-nerukhomosti/' },
  postDentalChannels: { cs: '/blog/jak-ziskat-pacienty-pro-zubni-ordinaci/', en: '/en/blog/how-to-get-patients-for-a-dental-practice/', ru: '/ru/blog/kak-poluchit-pacientov-dlya-stomatologii/', uk: '/uk/blog/yak-otrymaty-patsiientiv-dlia-stomatolohii/' },
  postWeakSeoGaming: { cs: '/blog/slabe-seo-konkurence-pocitacove-herny/', en: '/en/blog/why-computer-clubs-with-weak-seo-rank-ahead/', ru: '/ru/blog/slabaya-seo-konkurenciya-kompyuternye-kluby/', uk: '/uk/blog/slabke-seo-konkurentsiya-kompiuterni-kluby/' },
  postWebSocialGaming: { cs: '/blog/web-nebo-socialni-site-pocitacova-herna/', en: '/en/blog/website-or-social-media-for-a-computer-club/', ru: '/ru/blog/sajt-ili-socseti-kompyuternyj-klub/', uk: '/uk/blog/sait-abo-soctsereji-kompiuternyi-klub/' },
  postDupEshop: { cs: '/blog/duplicitni-stranky-eshop-tisk-varianty/', en: '/en/blog/duplicate-pages-in-a-print-e-shop/', ru: '/ru/blog/dubli-stranic-v-internet-magazine-s-pechatyu/', uk: '/uk/blog/dubli-storinok-v-internet-magazyni-z-drukom/' },
  postWebPages: { cs: '/blog/jake-stranky-ma-mit-web-firmy/', en: '/en/blog/which-pages-a-company-website-needs/', ru: '/ru/blog/kakie-stranicy-nuzhny-sajtu-kompanii/', uk: '/uk/blog/yaki-storinky-potribni-saitu-kompanii/' },
  postWeakSeoAcc: { cs: '/blog/slabe-seo-konkurence-ucetni-kancelare/', en: '/en/blog/why-accounting-firms-with-weak-seo-rank-ahead/', ru: '/ru/blog/slabaya-seo-konkurenciya-buhgalterskie-kompanii/', uk: '/uk/blog/slabaya-seo-konkurenciya-buhgalterskie-kompanii/' },
  postAccountingTime: { cs: '/blog/jak-dlouho-trva-seo-pro-ucetni-kancelar/', en: '/en/blog/how-long-does-seo-take-for-an-accounting-firm/', ru: '/ru/blog/skolko-vremeni-zanimaet-seo-dlya-buhgalterskoj-firmy/', uk: '/uk/blog/skolko-vremeni-zanimaet-seo-dlya-buhgalterskoj-firmy/' },
  postRedesignPlan: { cs: '/blog/redesign-webu-seo-pred-spustenim/', en: '/en/blog/seo-before-a-website-redesign/', ru: '/ru/blog/seo-pered-redizajnom-sajta/', uk: '/uk/blog/seo-pered-redizajnom-sajta/' },
  postSelectSpecialist: { cs: '/blog/jak-vybrat-seo-specialistu/', en: '/en/blog/how-to-choose-an-seo-specialist/', ru: '/ru/blog/kak-vybrat-seo-specialista/', uk: '/uk/blog/kak-vybrat-seo-specialista/' },
  postSeoPlan: { cs: '/blog/seo-plan-na-12-mesicu/', en: '/en/blog/12-month-seo-plan/', ru: '/ru/blog/seo-plan-na-12-mesyacev/', uk: '/uk/blog/seo-plan-na-12-mesyacev/' },
  postAccountingChannels: { cs: '/blog/jak-ziskat-klienty-pro-ucetni-kancelar/', en: '/en/blog/how-to-get-clients-for-an-accounting-firm/', ru: '/ru/blog/kak-poluchit-klientov-buhgalterskoj-kompanii-chehiya/', uk: '/uk/blog/kak-poluchit-klientov-buhgalterskoj-kompanii-chehiya/' },
  postRealtyPortals: { cs: '/blog/vlastni-web-nebo-realitni-portaly/', en: '/en/blog/own-website-or-real-estate-portals/', ru: '/ru/blog/sobstvennyj-sajt-ili-portaly-nedvizhimosti/', uk: '/uk/blog/sobstvennyj-sajt-ili-portaly-nedvizhimosti/' },
  postWeakSeo: { cs: '/blog/slabe-seo-konkurence-prekladatelske-agentury/', en: '/en/blog/why-competitors-with-weak-seo-rank-ahead/', ru: '/ru/blog/slabaya-seo-konkurenciya-perevodcheskie-agentstva/', uk: '/uk/blog/slabaya-seo-konkurenciya-perevodcheskie-agentstva/' },
  postRealtyPragueDistricts: { cs: '/blog/prazske-mestske-casti-a-ctvrti-web-realitni-kancelare/', en: '/en/blog/prague-districts-on-a-real-estate-agency-website/', ru: '/ru/blog/prazhskie-rajony-na-sajte-agentstva-nedvizhimosti/', uk: '/uk/blog/prazhskie-rajony-na-sajte-agentstva-nedvizhimosti/' },
  postRealtyBrnoDistricts: { cs: '/blog/mestske-casti-brna-web-realitni-kancelare/', en: '/en/blog/brno-districts-on-a-real-estate-agency-website/', ru: '/ru/blog/gorodskie-chasti-brno-sajt-agentstva-nedvizhimosti/', uk: '/uk/blog/gorodskie-chasti-brno-sajt-agentstva-nedvizhimosti/' },
  postRealtyDistricts: { cs: '/blog/stranky-ctvrti-a-lokalit-realitni-kancelare/', en: '/en/blog/neighbourhood-pages-for-a-real-estate-agency-website/', ru: '/ru/blog/stranicy-rajonov-i-lokaciy-sajta-agentstva-nedvizhimosti/', uk: '/uk/blog/stranicy-rajonov-i-lokaciy-sajta-agentstva-nedvizhimosti/' },
  postRealtyLocal: { cs: '/blog/lokalni-pritomnost-realitni-kancelare/', en: '/en/blog/local-presence-of-a-real-estate-agency/', ru: '/ru/blog/lokalnoe-prisutstvie-agentstva-nedvizhimosti/', uk: '/uk/blog/lokalnoe-prisutstvie-agentstva-nedvizhimosti/' },
  postRealtyListings: { cs: '/blog/nabidky-nemovitosti-seo-indexace-duplicity/', en: '/en/blog/property-listings-seo-indexing-duplicates/', ru: '/ru/blog/ob-yavleniya-nedvizhimosti-seo-indeksaciya-dubli/', uk: '/uk/blog/ob-yavleniya-nedvizhimosti-seo-indeksaciya-dubli/' },
  postRealtySmall: { cs: '/blog/ma-seo-smysl-pro-malou-realitni-kancelar/', en: '/en/blog/does-seo-make-sense-for-a-small-real-estate-agency/', ru: '/ru/blog/imeet-li-smysl-seo-dlya-nebolshogo-agentstva-nedvizhimosti/', uk: '/uk/blog/imeet-li-smysl-seo-dlya-nebolshogo-agentstva-nedvizhimosti/' },
  postRealtyNoLeads: { cs: '/blog/proc-web-realitni-kancelare-neprinasi-poptavky/', en: '/en/blog/why-a-real-estate-agency-website-brings-no-enquiries/', ru: '/ru/blog/pochemu-sajt-agentstva-nedvizhimosti-ne-prinosit-zayavok/', uk: '/uk/blog/pochemu-sajt-agentstva-nedvizhimosti-ne-prinosit-zayavok/' },
  postWeakSeoRealty: { cs: '/blog/slabe-seo-konkurence-realitni-kancelare/', en: '/en/blog/why-real-estate-agencies-with-weak-seo-rank-ahead/', ru: '/ru/blog/slabaya-seo-konkurenciya-agentstva-nedvizhimosti/', uk: '/uk/blog/slabaya-seo-konkurenciya-agentstva-nedvizhimosti/' },
  postRealty: { cs: '/blog/jak-ziskat-klienty-pro-realitni-kancelar/', en: '/en/blog/how-to-get-clients-for-a-real-estate-agency/', ru: '/ru/blog/kak-poluchit-klientov-agentstvu-nedvizhimosti/', uk: '/uk/blog/kak-poluchit-klientov-agentstvu-nedvizhimosti/' },
  postPairs: { cs: '/blog/stranka-pro-kazdy-jazykovy-par/', en: '/en/blog/page-for-every-language-pair/', ru: '/ru/blog/stranica-dlya-kazhdoj-yazykovoj-pary/', uk: '/uk/blog/stranica-dlya-kazhdoj-yazykovoj-pary/' },
  postB2b: { cs: '/blog/jak-ziskat-b2b-klienty-pro-prekladatelskou-agenturu/', en: '/en/blog/how-to-get-b2b-clients-for-a-translation-agency/', ru: '/ru/blog/kak-poluchit-b2b-klientov-perevodcheskomu-agentstvu/', uk: '/uk/blog/kak-poluchit-b2b-klientov-perevodcheskomu-agentstvu/' },
  postClients: { cs: '/blog/jak-ziskat-klienty-pro-prekladatelskou-agenturu/', en: '/en/blog/how-to-get-clients-for-a-translation-agency/', ru: '/ru/blog/kak-poluchit-klientov-perevodcheskomu-agentstvu/', uk: '/uk/blog/kak-poluchit-klientov-perevodcheskomu-agentstvu/' },
  postNoLeads: { cs: '/blog/proc-prekladatelska-agentura-nema-poptavky/', en: '/en/blog/why-translation-agency-no-leads/', ru: '/ru/blog/pochemu-agentstvo-ne-poluchaet-zayavki/', uk: '/uk/blog/pochemu-agentstvo-ne-poluchaet-zayavki/' },
  postChoose: { cs: '/blog/audit-konzultace-nebo-start/', en: '/en/blog/audit-consulting-or-start/', ru: '/ru/blog/audit-konsultaciya-ili-start/', uk: '/uk/blog/audit-konsultaciya-ili-start/' },
  postNewSite: { cs: '/blog/novy-web-a-google-ho-nevidi/', en: '/en/blog/new-site-not-in-google/', ru: '/ru/blog/novyj-sajt-ne-vidit-google/', uk: '/uk/blog/novyj-sajt-ne-vidit-google/' },
  postRedirects: { cs: '/blog/presmerovani-301-a-chyby-404/', en: '/en/blog/301-redirects-and-404-errors/', ru: '/ru/blog/redirekt-301-i-oshibki-404/', uk: '/uk/blog/redirekt-301-i-oshibki-404/' },
  postAds: { cs: '/blog/seo-a-reklama/', en: '/en/blog/seo-and-advertising/', ru: '/ru/blog/seo-i-reklama/', uk: '/uk/blog/seo-i-reklama/' },
  postRedesign: { cs: '/blog/po-redesignu-klesla-navstevnost/', en: '/en/blog/traffic-drop-after-redesign/', ru: '/ru/blog/padenie-trafika-posle-redizajna/', uk: '/uk/blog/padenie-trafika-posle-redizajna/' },
  postDuplicates: { cs: '/blog/duplicitni-obsah/', en: '/en/blog/duplicate-content/', ru: '/ru/blog/dublikaty-kontenta/', uk: '/uk/blog/dublikaty-kontenta/' },
  postSeoAudit: { cs: '/blog/co-je-seo-audit/', en: '/en/blog/what-is-an-seo-audit/', ru: '/ru/blog/chto-takoe-seo-audit/', uk: '/uk/blog/chto-takoe-seo-audit/' },
  postNotShown: { cs: '/blog/proc-se-web-nezobrazuje-v-googlu/', en: '/en/blog/why-is-my-site-not-in-google/', ru: '/ru/blog/pochemu-sajt-ne-v-google/', uk: '/uk/blog/pochemu-sajt-ne-v-google/' },
  postIndexing: { cs: '/blog/jak-zjistit-jestli-je-web-indexovany/', en: '/en/blog/how-to-check-if-a-site-is-indexed/', ru: '/ru/blog/kak-proverit-indeksaciyu-sajta/', uk: '/uk/blog/kak-proverit-indeksaciyu-sajta/' },
  faq: { cs: '/caste-dotazy/', en: '/en/faq/', ru: '/ru/voprosy-i-otvety/', uk: '/uk/pytannia-ta-vidpovidi/' },
  about: { cs: '/o-mne/', en: '/en/about/', ru: '/ru/obo-mne/', uk: '/uk/pro-mene/' },
  contact: { cs: '/kontakt/', en: '/en/contact/', ru: '/ru/kontakty/', uk: '/uk/kontakty/' },
  privacy: { cs: '/ochrana-osobnich-udaju/', en: '/en/privacy-policy/', ru: '/ru/politika-konfidencialnosti/', uk: '/uk/polityka-konfidentsiinosti/' },
  thanks: { cs: '/dekujeme/', en: '/en/thank-you/', ru: '/ru/spasibo/', uk: '/uk/dyakuiu/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type PageKey = keyof typeof ROUTES;
export const PAGE_KEYS = Object.keys(ROUTES) as PageKey[];

// Breadcrumb hierarchy (home is implicit root). Service pages hang directly off the home page: there is no
// /sluzby/ collection page; the services are reached from the "Services" dropdown in the header and from the home page.
export const PARENT: Partial<Record<PageKey, PageKey>> = {
  caseKb: 'cases',
  caseTypo: 'cases',
  caseEdu: 'cases',
  caseSeason: 'cases',
  caseRazbor: 'cases',
  caseHalf: 'cases',
  postIndexing: 'blog',
  postNotShown: 'blog',
  postSeoAudit: 'blog',
  postDuplicates: 'blog',
  postRedesign: 'blog',
  postAds: 'blog',
  postRedirects: 'blog',
  postNewSite: 'blog',
  postChoose: 'blog',
  postNoLeads: 'blog',
  postClients: 'blog',
  postB2b: 'blog',
  postPairs: 'blog',
  postRealty: 'blog',
  postRealtyNoLeads: 'blog',
  postWeakSeoRealty: 'blog',
  postRealtySmall: 'blog',
  postRealtyListings: 'blog',
  postRealtyPortals: 'blog',
  postRealtyDistricts: 'blog',
  postRealtyBrnoDistricts: 'blog',
  postRealtyPragueDistricts: 'blog',
  postWeakSeo: 'blog',
  postRealtyLocal: 'blog',
  postFinanceChannels: 'blog',
  postAccountingChannels: 'blog',
  postAccountingNoLeads: 'blog',
  postAccountingSmall: 'blog',
  postAccountingLocal: 'blog',
  postAccountingPages: 'blog',
  postAccountingTime: 'blog',
  postWeakSeoAcc: 'blog',
  postWebPages: 'blog',
  postDupEshop: 'blog',
  postWeakSeoDental: 'blog',
  postFaqDental: 'blog',
  postFaqRealty: 'blog',
  postServicesRealty: 'blog',
  postMakleriRealty: 'blog',
  postDentalChannels: 'blog',
  postWeakSeoGaming: 'blog',
  postWebSocialGaming: 'blog',
  postRedesignPlan: 'blog',
  postSelectSpecialist: 'blog',
  postSeoPlan: 'blog',
};

// Pages that exist in some languages only (no hreflang alternates for the missing ones; the language switcher falls
// back to the home page). The cs/en addresses of these pages are placeholders and are never built.
// Niche landing pages of the series that are not published yet. A page is built (and listed in the sitemap, the menu and the links of other
// pages) only when its flag is true. The Brno page needs three parts of its own (video with two other sites, verified market observations
// with a date, own FAQ) so that it is not a doorway copy of the Prague page: the build stops if the flag is on and the data is missing.
// The Pardubice page (brief of 22.10.2026, the highest doorway risk of the series) needs its own video with two other sites and a dated analysis
// of the Pardubice results; the video (same as Brno, by the author) and the dated observation (16. 10. 2026) now exist, so it is on.
// nicheFinance (Russian only, brief of 24.10.2026): the author's dated observation of 8 sites (last three months to 24.10.2026) and the confirmed quote exist, so it is on.
// nicheDental (cs, brief of 01.11.2026): switched ON by the author (01.11.2026) without D2 and before the regulatory check S2; S3 wording confirmed; S4 declined (no f5, no date).
// nicheRealty (first page of the real-estate niche): needs the author's own dated observations of real-estate sites and a verified analysis of the
// Praha results; both exist since 22.10.2026 (observations from the audit slides, results analysis of 22. 10. 2026), so it is on.
export const NICHE_READY = { nicheBrno: true, nichePardubice: true, nicheRealty: true, nicheAccounting: true, nicheAccountingBrno: true, nicheRealtyBrno: true, nicheDental: true, nicheFinance: true, nicheTypography: true, nicheMachinery: true, nicheGaming: true, nicheElectronics: true, nicheFitness: true } as const;

export const ONLY_LANGS: Partial<Record<PageKey, readonly Lang[]>> = {
  nicheBrno: NICHE_READY.nicheBrno ? ['cs', 'ru'] : [], nichePardubice: NICHE_READY.nichePardubice ? ['cs', 'ru'] : [], nicheRealty: NICHE_READY.nicheRealty ? ['cs', 'ru'] : [], nicheAccounting: NICHE_READY.nicheAccounting ? ['cs', 'ru'] : [], nicheAccountingBrno: NICHE_READY.nicheAccountingBrno ? ['cs'] : [], nicheRealtyBrno: NICHE_READY.nicheRealtyBrno ? ['cs'] : [], nicheDental: NICHE_READY.nicheDental ? ['cs'] : [], nicheFinance: NICHE_READY.nicheFinance ? ['ru'] : [], nicheTypography: NICHE_READY.nicheTypography ? ['cs'] : [], nicheMachinery: NICHE_READY.nicheMachinery ? ['cs'] : [], nicheGaming: NICHE_READY.nicheGaming ? ['cs', 'ru'] : [], nicheElectronics: NICHE_READY.nicheElectronics ? ['cs', 'ru'] : [], nicheFitness: NICHE_READY.nicheFitness ? ['ru'] : [], caseTypo: ['cs', 'ru'], caseEdu: ['cs', 'ru'], caseSeason: ['cs', 'ru'], caseHalf: ['cs', 'ru'], caseRazbor: ['cs', 'ru'], postIndexing: ['cs'], postNotShown: ['cs'], postSeoAudit: ['cs'], postDuplicates: ['cs'], postRedesign: ['cs'], postAds: ['cs'], postRedirects: ['cs'], postNewSite: ['cs'], postChoose: ['cs'], postNoLeads: ['cs'], postClients: ['cs'], postB2b: ['cs'], postPairs: ['cs'], postRealty: ['cs'], postRealtyNoLeads: ['cs'], postWeakSeoRealty: ['cs', 'ru'], postRealtySmall: ['cs'], postRealtyListings: ['cs'], postRealtyPortals: ['cs'], postRealtyDistricts: ['cs'], postRealtyBrnoDistricts: ['cs'], postRealtyPragueDistricts: ['cs'], postWeakSeo: ['cs', 'ru'], postRealtyLocal: ['cs'], postFinanceChannels: ['ru'], postAccountingChannels: ['cs', 'ru'], postAccountingNoLeads: ['cs'], postAccountingSmall: ['cs'], postAccountingLocal: ['cs'], postAccountingPages: ['cs'], postAccountingTime: ['cs'], postWeakSeoAcc: ['cs'], postWebPages: ['cs'], postDupEshop: ['cs'], postWeakSeoDental: ['cs'], postFaqDental: ['cs'], postFaqRealty: ['cs'], postServicesRealty: ['cs'], postMakleriRealty: ['cs'], postDentalChannels: ['cs'], postWeakSeoGaming: ['cs'], postWebSocialGaming: ['cs'], postRedesignPlan: ['cs'], postSelectSpecialist: ['cs'], postSeoPlan: ['cs'], nicheTranslation: ['cs', 'ru'] };
// Ukrainian version (brief of 02.11.2026): a mirror of the Russian one, built in iterations. Only the pages listed here exist in Ukrainian; every other page falls back to
// the Russian address when the Ukrainian pages link to it (see `path`) and has no Ukrainian alternate.
export const UK_READY = new Set<PageKey>(['home', 'audit', 'consulting', 'start', 'fullSeo', 'maps', 'geo', 'cases', 'reviews', 'faq', 'about', 'contact', 'privacy', 'thanks']);
export const langsFor = (key: PageKey): readonly Lang[] => (ONLY_LANGS[key] ?? LANGS).filter((l) => l !== 'uk' || UK_READY.has(key));

// Pages kept out of the index and sitemap.
export const NOINDEX: PageKey[] = ['thanks'];

export const SERVICE_KEYS = ['consulting', 'start', 'fullSeo', 'maps'] as const;
export type ServiceKey = (typeof SERVICE_KEYS)[number];

export const path = (key: PageKey, lang: Lang): string => (lang === 'uk' && !UK_READY.has(key) ? ROUTES[key].ru : ROUTES[key][lang]);


// Pages listed in the header's "Services" dropdown, in order. SEO + GEO/AEO is an explanatory page, not a service, so it is not here.
export const SERVICE_MENU = ['audit', 'consulting', 'start', 'fullSeo', 'maps'] as const satisfies readonly PageKey[];

// Pages of the "SEO pro" menu item (Czech) / "SEO для" (Russian): the niche landing pages /seo-pro-[obor]-[mesto]/. A page is listed in a language only if it
// exists in it (the Russian menu shows the real-estate niche only).
// Grouped by niche: "SEO pro" → "Překladatelské agentury" → Praha (Brno and Pardubice are added to `items` when their pages are published).
export const NICHE_GROUPS = [
  { id: 'translation', label: 'Překladatelské agentury', labelRu: 'Переводческие агентства', items: [{ page: 'nicheTranslation', label: 'Praha', labelRu: 'Прага' }, ...(NICHE_READY.nicheBrno ? [{ page: 'nicheBrno', label: 'Brno', labelRu: 'Брно' } as const] : []), ...(NICHE_READY.nichePardubice ? [{ page: 'nichePardubice', label: 'Pardubice', labelRu: 'Пардубице' } as const] : [])] },
  ...(NICHE_READY.nicheAccounting ? [{ id: 'accounting', label: 'Účetní kanceláře', labelRu: 'Бухгалтерские компании', items: [{ page: 'nicheAccounting', label: 'Praha', labelRu: 'Прага' }, ...(NICHE_READY.nicheAccountingBrno ? [{ page: 'nicheAccountingBrno', label: 'Brno', labelRu: 'Брно' } as const] : [])] } as const] : []),
  ...(NICHE_READY.nicheFitness ? [{ id: 'fitness', label: 'Online fitness a wellness', labelRu: 'Онлайн-фитнес и wellness', items: [{ page: 'nicheFitness', label: 'Praha', labelRu: 'Прага' }] } as const] : []),
  ...(NICHE_READY.nicheElectronics ? [{ id: 'electronics', label: 'Obchody s elektronikou', labelRu: 'Магазины электроники', items: [{ page: 'nicheElectronics', label: 'Praha', labelRu: 'Прага' }] } as const] : []),
  ...(NICHE_READY.nicheGaming ? [{ id: 'gaming', label: 'Počítačové herny', labelRu: 'Компьютерные клубы', items: [{ page: 'nicheGaming', label: 'Praha', labelRu: 'Прага' }] } as const] : []),
  ...(NICHE_READY.nicheMachinery ? [{ id: 'machinery', label: 'Strojírenské firmy', labelRu: 'Машиностроение', items: [{ page: 'nicheMachinery', label: 'Česko', labelRu: 'Чехия' }] } as const] : []),
  ...(NICHE_READY.nicheTypography ? [{ id: 'printing', label: 'Tiskárny a polygrafie', labelRu: 'Типографии', items: [{ page: 'nicheTypography', label: 'Česko', labelRu: 'Чехия' }] } as const] : []),
  ...(NICHE_READY.nicheFinance ? [{ id: 'finance', label: 'Finanční poradci', labelRu: 'Финансовые консультанты', items: [{ page: 'nicheFinance', label: 'Česko', labelRu: 'Чехия' }] } as const] : []),
  ...(NICHE_READY.nicheDental ? [{ id: 'dental', parent: 'medicine', label: 'Stomatologie', labelRu: 'Стоматология', items: [{ page: 'nicheDental', label: 'Praha', labelRu: 'Прага' }] } as const] : []),
  ...(NICHE_READY.nicheRealty ? [{ id: 'realty', label: 'Realitní kanceláře', labelRu: 'Агентства недвижимости', items: [{ page: 'nicheRealty', label: 'Praha', labelRu: 'Прага' }, ...(NICHE_READY.nicheRealtyBrno ? [{ page: 'nicheRealtyBrno', label: 'Brno', labelRu: 'Брно' } as const] : [])] } as const] : []),
] as const satisfies readonly { id: string; parent?: string; label: string; labelRu?: string; items: readonly { page: PageKey; label: string; labelRu?: string }[] }[];
// Menu level above the niches: a group with `parent: 'medicine'` is listed under "Medicína" (SEO pro → Medicína → Stomatologie → Praha).
export const NICHE_PARENTS = [{ id: 'medicine', label: 'Medicína', labelRu: 'Медицина' }] as const;
export const NICHE_MENU: readonly PageKey[] = NICHE_GROUPS.flatMap((g) => g.items.map((i) => i.page));

export const postPath = (lang: Lang, slug: string): string => `${LANG_PREFIX[lang]}blog/${slug}/`;

// Pairs whose hreflang cluster and language-switcher link are prepared but NOT switched on yet (brief of 05.11.2026: only after both pages are published and parity is confirmed).
// Remove the key from this set to switch the pair on: until then each page lists only itself (hreflang cs / ru), no cross-link and no switcher link; after: itself + the other and x-default = cs.
export const HREFLANG_HOLD: ReadonlySet<PageKey> = new Set<PageKey>([]);

export const alternatesFor = (key: PageKey, lang?: Lang): Partial<Record<Lang, string>> =>
  HREFLANG_HOLD.has(key) && lang
    ? { [lang]: ROUTES[key][lang] }
    : Object.fromEntries(langsFor(key).map((l) => [l, ROUTES[key][l]]));
