// Czech content of the blog article /blog/profil-zubni-ordinace-v-mapach/ (brief B of 21.11.2026, series "maps", pilot: dentistry): an informational how-to for owners / administrators of dental practices:
// how to fill in the profile on Google, Mapy.com and Firmy.cz. Texts are verbatim from the brief, written anew (not copied from /blog/lokalni-pritomnost-ucetni-kancelare/ and ...-realitni-kancelare/).
// Google formulations are PARAPHRASES (no direct quotes); the Google pages show no date of change, so the sources say only "zkontrolováno 21. 11. 2026". Checked on 21.11.2026 against the originals:
// name (3038177: unnecessary information, services and location information are not allowed in the name; practitioners may include a title), categories (fewest possible, not as keywords), description (no links of any
// type, no promotions / prices), practitioners (doctors and dentists are individual practitioners with additional guidelines), reviews (7400114 + 3474122: asking is allowed, incentives / selective soliciting / pressure are not),
// Firmy.cz (adding a profile is free, profiles are findable on Mapy.com). No medical advice (YMYL), no ratings or numbers of reviews, no numbers from the observation article, no link to that article (it is not published yet),
// no capacity line, no HowTo markup. Dates are set by hand (the author's day of publication, open question 2). The closing block has ONE button and ONE text link.
import { walk } from '../lib/cs-typo';

// Set by hand: the day the author publishes; the day of the brief is a placeholder. Do NOT bump it when the page is edited.
export const POST_PROFILE_PUBLISHED = '2026-11-21';
export const POST_PROFILE_MODIFIED = '2026-11-21';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/profil-zubni-ordinace-v-mapach.webp', width: 1200, height: 630, alt: 'Ilustrace: karta profilu zubní ordinace v mapách s názvem, adresou, telefonem a ordinační dobou' },

  lead: 'Profil ordinace v mapách je karta s názvem, adresou, telefonem, kategoriemi a ordinační dobou. Tady je přehled, co do ní na Googlu, Mapy.com a Firmy.cz vyplnit a co si ověřit v aktuální nápovědě.',

  whereTitle: 'Kde by měla být ordinace v mapách vidět?',
  whereAnswer: 'Základem je profil na Googlu, který ordinaci zobrazí v Google Maps. Doplňují ho Mapy.com a Firmy.cz, kde je podle nápovědy vložení firmy zdarma. Důležitější než počet profilů je, aby údaje všude seděly a aby ordinace měla k profilům přístup a mohla je sama upravovat.',
  whereTableHead: ['Služba', 'K čemu slouží', 'Kdo profil spravuje'],
  whereTableRows: [
    ['Google', 'zobrazuje ordinaci v Google Maps a ve vyhledávání Googlu', 'ordinace nebo pověřená osoba po ověření profilu'],
    ['Mapy.com', 'zobrazuje ordinaci v mapách Seznamu; profily z Firmy.cz jsou tam dohledatelné', 'ordinace přes svůj firemní profil na Firmy.cz'],
    ['Firmy.cz', 'katalog firem Seznamu s firemním profilem', 'ordinace nebo pověřená osoba po přihlášení a registraci'],
  ],
  whereTableNote: 'Tabulka není vyčerpávající přehled pravidel jednotlivých služeb.',

  setupTitle: 'Jak profil založit a ověřit?',
  setupAnswer: 'Nejdřív zjistěte, zda ordinace profil už nemá, aby nevznikl duplicitní. Pak profil založte nebo převezměte, vyplňte údaje a projděte ověřením, které služba nabídne. Postup se v čase mění, proto ho vždy porovnejte s aktuální nápovědou dané služby a zapište si, kdo má k profilu přístup.',
  setupSteps: [
    'Vyhledejte název a adresu ordinace a zkontrolujte, zda profil už neexistuje.',
    'Založte profil na Googlu, nebo převezměte existující, podle aktuální nápovědy.',
    'Vyplňte název, adresu, telefon, kategorie a ordinační dobu.',
    'Projděte ověřením, které Google nabídne.',
    'Zkontrolujte záznam na Firmy.cz a profil na Mapy.com.',
    'Zapište, kdo má k jednotlivým profilům přístup.',
  ],

  nameTitle: 'Jak zadat název ordinace?',
  nameAnswer: 'Název profilu má odpovídat skutečnému názvu ordinace, jak je uvedený na vývěsce a na webu. Google uvádí, že zbytečné informace v názvu nejsou povolené. Nepřidávejte proto město, služby ani slogany. Pokud název obsahuje titul nebo jméno lékaře, musí sedět s tím, co je vidět na vstupu.',
  nameList: [
    'název jako na vývěsce,',
    'bez města a oboru,',
    'bez sloganů,',
    'titul nebo jméno lékaře jen tehdy, když je na vývěsce.',
  ],

  categoryTitle: 'Jak vybrat kategorie?',
  categoryAnswer: 'Google doporučuje vybrat co nejméně kategorií a nepoužívat je jen jako klíčová slova. Hlavní kategorie má nejlépe popisovat ordinaci, další přidejte jen tehdy, když odpovídají péči, kterou ordinace skutečně poskytuje. Nabídka kategorií se mění, proto ji ověřte přímo v profilu.',

  servicesTitle: 'Co napsat do popisu a seznamu služeb?',
  servicesAnswer: 'Služby a popis pište věcně: co ordinace nabízí, komu a kde. Neslibujte výsledek léčby a nepoužívejte superlativy. Popis na Googlu podle nápovědy nesmí obsahovat odkazy. Text o zdravotní péči by měl před zveřejněním schválit lékař nebo odpovědná osoba ordinace, která za něj ručí.',
  servicesList: [
    'služby jen ty, které ordinace skutečně poskytuje,',
    'bez slibů výsledku,',
    'bez superlativů,',
    'bez odkazů v popisu na Googlu,',
    'text schválil lékař nebo odpovědná osoba.',
  ],
  servicesNote: 'Pravidla reklamy zdravotních služeb tento článek neřeší; ověřte je u odpovědné osoby ordinace nebo u právníka.',

  dataTitle: 'Jak zapsat adresu, telefon, ordinační dobu a web?',
  dataAnswer: 'Název, adresa a telefon mají být na webu, v Googlu, na Mapy.com i na Firmy.cz zapsané stejně, včetně formátu ulice a čísla. Telefon má být číslo, které ordinace skutečně zvedá. Otevírací dobu měňte při každé změně, včetně svátků. Web v profilu má vést na stránku se stejnými údaji.',
  dataList: [
    'stejný název,',
    'stejná ulice a číslo,',
    'stejné město a PSČ,',
    'stejný formát telefonu,',
    'stejná ordinační doba,',
    'web vede na stránku se stejnými údaji,',
    'změny provést všude najednou.',
  ],
  quote: 'Profil v mapách nemá být reklamní text. Má být pravdivý, stejný všude a udržovaný.',

  reviewsTitle: 'Jak je to s recenzemi a odpověďmi?',
  reviewsAnswer: 'Google umožňuje požádat pacienty o upřímné hodnocení, například odkazem nebo QR kódem. Zakázané je nabízet za recenzi odměnu, žádat o hodnocení jen vybrané pacienty nebo na ně tlačit. Odpovídejte věcně a nezveřejňujte zdravotní údaje; nepotvrzujte ani, že dotyčný je pacient ordinace.',
  reviewsList: [
    'požádat o upřímné hodnocení (odkaz nebo QR kód),',
    'bez odměn,',
    'bez výběru jen spokojených pacientů,',
    'bez tlaku,',
    'odpověď věcná, bez zdravotních údajů.',
  ],

  errorsTitle: 'Co dělat s duplicitním nebo chybným profilem?',
  errorsAnswer: 'Pokud existuje druhý profil ordinace nebo údaje nesedí, začněte v nápovědě dané služby. Google, Mapy.com i Firmy.cz mají vlastní postup pro opravu údajů a hlášení chyb. Než cokoli měníte, zapište si původní stav, aby bylo vidět, co a kdy se upravovalo.',

  checkTitle: 'Jak často profil kontrolovat?',
  checkAnswer: 'Údaje je rozumné projít jednou za čtvrtletí a vždy po změně, například nového telefonu, adresy nebo ordinační doby. Interval je moje doporučení, ne požadavek Googlu. Při kontrole porovnejte profil na každé službě s webem a všechny rozdíly opravte najednou, ne postupně.',

  sourcesTitle: 'Zdroje',
  sourcesDate: 'zkontrolováno 21. 11. 2026',
  sources: [
    { text: 'Google Business Profile: Pokyny pro profily', href: 'https://support.google.com/business/answer/3038177' },
    { text: 'Google Business Profile: Jak se určuje místní řazení', href: 'https://support.google.com/business/answer/7091' },
    { text: 'Google: Zásady pro hodnocení a recenze', href: 'https://support.google.com/contributionpolicy/answer/7400114' },
    { text: 'Google: Tipy pro získání recenzí', href: 'https://support.google.com/business/answer/3474122' },
    { text: 'Firmy.cz nápověda: Vložení nové firmy', href: 'https://napoveda.firmy.cz/zaciname/vlozeni-nove-firmy/' },
  ],

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Potřebuje ordinace profil v mapách, když už má web?', a: 'Ano. Web popisuje péči a ordinaci, profil v mapách ukazuje polohu, telefon a ordinační dobu přímo ve výsledcích map. Jedno druhé nenahrazuje, a proto mají údaje na obou místech sedět do posledního znaku, včetně formátu telefonního čísla a zápisu ulice.' },
    { q: 'Stačí profil na Googlu, nebo i Mapy.com a Firmy.cz?', a: 'Google je rozumný začátek, protože se zobrazuje v Google Maps. Mapy.com a Firmy.cz ho doplňují pro lidi, kteří hledají tam. Víc profilů dává smysl jen tehdy, když je ordinace dokáže udržet aktuální a shodné, protože rozdíly mezi nimi působí nedůvěryhodně.' },
    { q: 'Může ordinace do názvu profilu přidat „zubař Praha“?', a: 'Podle zásad Googlu ne. Název má odpovídat skutečnému názvu ordinace a nemá obsahovat zbytečné informace. Město a obor patří do adresy a kategorie, ne do názvu. Úpravy názvu kvůli lepší pozici zásady nepovolují, proto je do profilu raději nepřidávejte ani dočasně.' },
    { q: 'Může mít profil i jednotlivý lékař?', a: 'Zásady Googlu mezi odborníky s vlastním profilem počítají i lékaře a zubaře, ale platí pro ně zvláštní podmínky. Zda to sedí na vaši ordinaci, ověřte v aktuálních zásadách a dohodněte se s lékaři, kteří v ordinaci pracují, aby nevznikaly duplicity.' },
  ],

  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  mistake: { before: 'Našli jste chybu?', link: 'Napište mi.' },
  endTitle: 'Chcete mít profil své ordinace v mapách v pořádku?',
  endCta: 'Lokální SEO pro Google Maps a Mapy.com',
  endLink: { before: 'Podívejte se také na', text: 'SEO pro zubní ordinace v Praze', after: '.' },
  relatedTitle: 'Související články',
  relatedLead: 'Další články o profilech, mapách a webech zubních ordinací.',
  relatedMore: 'Číst článek',
};

export const POST_PROFILE_CS = walk(raw);
