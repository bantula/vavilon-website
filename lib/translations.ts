export type Lang = 'en' | 'sr'

const translations = {
  // ── Language switcher ──────────────────────────────────────────────────────
  lang_english:       { en: 'English',         sr: 'Engleski' },
  lang_serbian:       { en: 'Serbian',          sr: 'Srpski' },

  // ── Header / Nav ──────────────────────────────────────────────────────────
  nav_features:       { en: 'Features',         sr: 'Funkcije' },
  nav_how_it_works:   { en: 'How It Works',     sr: 'Kako funkcioniše' },
  nav_mission:        { en: 'Mission',           sr: 'Misija' },
  nav_pricing:        { en: 'Pricing',           sr: 'Cene' },
  nav_contact:        { en: 'Contact',           sr: 'Kontakt' },
  btn_launch_app:     { en: 'Launch App',        sr: 'Pokreni aplikaciju' },
  btn_book_demo:      { en: 'Book a Demo',       sr: 'Zakaži demo' },

  // ── Hero ──────────────────────────────────────────────────────────────────
  hero_eyebrow:       { en: 'Real-Time Translation Platform', sr: 'Platforma za prevod u realnom vremenu' },
  hero_line1:         { en: 'One tour.',         sr: 'Jedna tura.' },
  hero_line2:         { en: 'One guide.',        sr: 'Jedan vodič.' },
  hero_line3:         { en: 'Every language.',   sr: 'Svaki jezik.' },
  hero_subtitle:      {
    en: 'One speaker. 70+ languages. Zero apps to install. Vavilon delivers live spoken translation and subtitles to every listener, instantly, from any browser.',
    sr: 'Jedan govornik. 70+ jezika. Bez aplikacija. Vavilon pruža prevod govora uživo i titlove svakom slušaocu, trenutno, iz bilo kog pregledača.',
  },
  hero_cta_demo:      { en: 'Book a Demo',       sr: 'Zakaži demo' },
  hero_cta_live:      { en: 'See It Live',       sr: 'Pogledaj uživo' },
  stat_languages:     { en: 'Languages',         sr: 'Jezika' },
  stat_people:        { en: 'People per tour',   sr: 'Osoba po turi' },
  stat_latency:       { en: 'Latency',           sr: 'Kašnjenje' },
  badge_live:         { en: 'Live Translation Active', sr: 'Prevod uživo aktivan' },

  // ── What We Offer ─────────────────────────────────────────────────────────
  offer_eyebrow:      { en: 'What We Offer',     sr: 'Šta nudimo' },
  offer_h2_a:         { en: 'One platform. Every language.', sr: 'Jedna platforma. Svaki jezik.' },
  offer_h2_b:         { en: 'Zero friction.',    sr: 'Bez prepreka.' },
  offer_sub:          {
    en: 'Vavilon is a web-based real-time translation platform built for tours, museums, exhibitions, and conferences. Your guide or speaker talks, and every listener hears and reads it in their own language, instantly.',
    sr: 'Vavilon je platforma za prevod u realnom vremenu, namenjena turama, muzejima, izložbama i konferencijama. Vaš vodič govori, a svaki slušalac čuje i čita na svom jeziku, trenutno.',
  },
  offer_1_label:      { en: 'Live spoken translation',      sr: 'Prevod govora uživo' },
  offer_1_detail:     { en: 'Guide speaks → listeners hear in their language in under 500ms.', sr: 'Vodič govori → slušaoci čuju na svom jeziku za manje od 500ms.' },
  offer_2_label:      { en: 'Subtitles in a chat interface', sr: 'Titlovi u chat interfejsu' },
  offer_2_detail:     { en: 'Modern, accessible chat-style layout with animated delivery.', sr: 'Moderan, pristupačan chat interfejs sa animovanom isporukom.' },
  offer_3_label:      { en: 'QR code instant join',         sr: 'Trenutno priključivanje QR kodom' },
  offer_3_detail:     { en: 'Scan a QR code to join. No manual code entry, no friction.', sr: 'Skenirajte QR kod za priključivanje. Bez ručnog unosa koda, bez komplikacija.' },
  offer_4_label:      { en: 'Any device, any browser',      sr: 'Bilo koji uređaj, bilo koji pregledač' },
  offer_4_detail:     { en: 'Works on iOS, Android, and desktops. No installation required.', sr: 'Radi na iOS-u, Android-u i računarima. Bez instalacije.' },
  offer_5_label:      { en: '60+ people per tour',          sr: '60+ osoba po turi' },
  offer_5_detail:     { en: 'Designed for tour groups of 60 or more, with room for larger events.', sr: 'Dizajnirano za grupe od 60 i više osoba, sa prostorom za veće događaje.' },
  offer_6_label:      { en: '70+ languages including Serbian', sr: '70+ jezika uključujući srpski' },
  offer_6_detail:     { en: 'English, German, French, Italian, Spanish, Chinese, and more.', sr: 'Engleski, nemački, francuski, italijanski, španski, kineski i još mnogo toga.' },
  offer_cta_app:      { en: 'Try the Live App',             sr: 'Isprobaj aplikaciju' },
  offer_cta_features: { en: 'Explore all features →',       sr: 'Istraži sve funkcije →' },
  offer_badge1:       { en: '🎙️ 1 speaker broadcasting',    sr: '🎙️ 1 govornik emituje' },
  offer_badge2:       { en: '👥 60+ people, 70+ languages', sr: '👥 60+ osoba, 70+ jezika' },

  // ── Features Grid ─────────────────────────────────────────────────────────
  feat_eyebrow:       { en: 'Platform Features',  sr: 'Funkcije platforme' },
  feat_h2:            { en: 'Everything your team needs', sr: 'Sve što vaš tim treba' },
  feat_sub:           {
    en: 'Built from the ground up for live, high-stakes language scenarios where every word matters and every listener deserves to understand.',
    sr: 'Izgrađeno od temelja za žive jezičke scenarije gde svaka reč ima značaj i svaki slušalac zaslužuje da razume.',
  },
  feat_1_title:       { en: 'Real-Time Translation', sr: 'Prevod u realnom vremenu' },
  feat_1_desc:        { en: 'Speech is recognised and translated in under 500 ms. Every word delivered to listeners as fast as it is spoken.', sr: 'Govor se prepoznaje i prevodi za manje od 500ms. Svaka reč dostavlja se slušaocima brzinom govora.' },
  feat_2_title:       { en: '70+ Languages',        sr: '70+ Jezika' },
  feat_2_desc:        { en: 'Serbian, English, German, French, Italian, Spanish, Chinese, Japanese, Polish, Ukrainian, and dozens more. Every major language covered.', sr: 'Srpski, engleski, nemački, francuski, italijanski, španski, kineski, japanski, poljski, ukrajinski i još mnogo toga. Svaki važan jezik je pokriven.' },
  feat_3_title:       { en: 'No App Needed',         sr: 'Bez aplikacije' },
  feat_3_desc:        { en: 'Listeners join via a QR code or a shared link. No download, no account, no app store. Works in any modern browser.', sr: 'Slušaoci se priključuju QR kodom ili deljenim linkom. Bez preuzimanja, bez naloga, bez prodavnice aplikacija. Radi u svakom modernom pregledaču.' },
  feat_4_title:       { en: '60+ People Per Tour',   sr: '60+ Osoba po turi' },
  feat_4_desc:        { en: 'Built for tour groups. One guide can broadcast live translation to 60 or more listeners simultaneously across multiple language channels.', sr: 'Izgrađeno za turističke grupe. Jedan vodič može emitovati prevod uživo za 60 i više slušalaca istovremeno kroz više jezičkih kanala.' },
  feat_5_title:       { en: 'Live Subtitles',        sr: 'Titlovi uživo' },
  feat_5_desc:        { en: 'Listeners see a modern chat-style interface: guide messages on the left, translated responses on the right, with an animated typing indicator.', sr: 'Slušaoci vide moderan chat interfejs: poruke vodiča s leve strane, prevedeni odgovori s desne strane, sa animovanim indikatorom pisanja.' },
  feat_6_title:       { en: 'Works Anywhere',        sr: 'Radi svuda' },
  feat_6_desc:        { en: 'Tours, museums, exhibitions, guided walks, conferences. Any setting where language is a barrier becomes a connected experience.', sr: 'Ture, muzeji, izložbe, šetnje s vodičem, konferencije. Svako okruženje gde je jezik prepreka postaje povezano iskustvo.' },

  // ── Mission ───────────────────────────────────────────────────────────────
  mission_eyebrow:    { en: 'Our Mission',       sr: 'Naša misija' },
  mission_quote_a:    { en: 'We believe every experience deserves to be', sr: 'Verujemo da svako iskustvo zaslužuje da bude' },
  mission_quote_hl:   { en: 'understood.', sr: 'razumljeno.' },
  mission_quote_b:    { en: 'Vavilon exists to remove the language barrier from tours, museums, and conferences, from any moment that should bring people together, not divide them.', sr: 'Vavilon postoji da ukloni jezičku barijeru sa tura, muzeja i konferencija, iz svakog trenutka koji bi trebalo da spaja ljude, a ne da ih deli.' },
  mission_built:      { en: 'Built in Serbia. Deployed globally. Powered by Azure AI.', sr: 'Izgrađeno u Srbiji. Deployed globalno. Pokrenuto Azure AI-om.' },
  mission_v1_title:   { en: 'Speed',             sr: 'Brzina' },
  mission_v1_desc:    { en: 'Sub-500ms latency so nothing is lost in the moment.', sr: 'Kašnjenje ispod 500ms da se ništa ne izgubi u trenutku.' },
  mission_v2_title:   { en: 'Inclusivity',       sr: 'Inkluzivnost' },
  mission_v2_desc:    { en: '70+ languages ensuring no listener is left behind.', sr: '70+ jezika da nijedan slušalac ne ostane zapostavljen.' },
  mission_v3_title:   { en: 'Simplicity',        sr: 'Jednostavnost' },
  mission_v3_desc:    { en: 'No downloads. No accounts. Just scan and listen.', sr: 'Bez preuzimanja. Bez naloga. Samo skenirajte i slušajte.' },

  // ── Pricing ───────────────────────────────────────────────────────────────
  pricing_eyebrow:    { en: 'Plans & Pricing',   sr: 'Planovi i cene' },
  pricing_h2:         { en: 'Simple, transparent pricing', sr: 'Jednostavne, transparentne cene' },
  pricing_sub:        { en: 'One plan. Everything included. Start free, no commitment until your trial ends.', sr: 'Jedan plan. Sve uključeno. Počnite besplatno, bez obaveza do kraja probnog perioda.' },
  trial_badge:        { en: '7-Day Free Trial',  sr: '7-dnevna besplatna proba' },
  trial_price:        { en: 'Free',              sr: 'Besplatno' },
  trial_billing:      { en: 'No charge for 7 days, card not required', sr: 'Bez naplate 7 dana, kartica nije potrebna' },
  trial_desc:         { en: "Tell us a bit about your agency and we'll reach out to get you set up. Full access to all features during the trial, no commitment.", sr: 'Recite nam nešto o svojoj agenciji i javićemo vam se da vas postavimo. Pun pristup svim funkcijama tokom probnog perioda, bez obaveza.' },
  pro_badge:          { en: 'Professional',      sr: 'Profesionalni' },
  pro_billing:        { en: 'Everything included, billed monthly', sr: 'Sve uključeno, mesečna naplata' },
  pro_f1:             { en: '70+ languages with live translated audio', sr: '70+ jezika sa prevedenim audiom uživo' },
  pro_f2:             { en: '60+ listeners per tour, simultaneously', sr: '60+ slušalaca po turi, istovremeno' },
  pro_f3:             { en: 'Listeners join via QR code, no app needed', sr: 'Slušaoci se priključuju QR kodom, bez aplikacije' },
  pro_f4:             { en: 'Under 500 ms latency',  sr: 'Kašnjenje ispod 500ms' },
  pro_f5:             { en: 'iOS, Android, and any browser', sr: 'iOS, Android i bilo koji pregledač' },
  pro_f6:             { en: 'Cancel any time',        sr: 'Otkažite u bilo kom trenutku' },
  btn_subscribe:      { en: 'Start Subscription →',  sr: 'Započni pretplatu →' },
  btn_contact_me:     { en: 'Contact Me →',           sr: 'Kontaktirajte me →' },
  btn_sending:        { en: 'Sending…',               sr: 'Slanje…' },
  form_first_name:    { en: 'First name',             sr: 'Ime' },
  form_last_name:     { en: 'Last name',              sr: 'Prezime' },
  form_email:         { en: 'Email address',          sr: 'Email adresa' },
  form_phone:         { en: 'Phone number (optional)', sr: 'Broj telefona (opciono)' },
  form_success:       { en: 'Our team will contact you shortly.', sr: 'Naš tim će vas uskoro kontaktirati.' },
  form_error:         { en: 'Could not reach the server. Please try again.', sr: 'Nije moguće doći do servera. Molimo pokušajte ponovo.' },
  pro_sales_msg:      { en: 'There is something wrong on our side. Our sales team will contact you immediately.', sr: 'Nešto nije u redu s naše strane. Naš prodajni tim će vas odmah kontaktirati.' },

  // ── Newsletter / Contact ──────────────────────────────────────────────────
  news_eyebrow:       { en: 'Stay Updated',      sr: 'Ostanite u toku' },
  news_h2:            { en: 'Get product updates & insights', sr: 'Primajte novosti i uvide o proizvodu' },
  news_sub:           { en: 'Early access news, new language additions, and translation tips delivered to your inbox. No spam, unsubscribe any time.', sr: 'Vesti o ranom pristupu, novi jezici i saveti o prevođenju dostavljeni u vaše sanduče. Bez spama, otpišite se u bilo kom trenutku.' },
  news_placeholder:   { en: 'your@email.com',    sr: 'vas@email.com' },
  news_label:         { en: 'Your email address', sr: 'Vaša email adresa' },
  btn_subscribe_news: { en: 'Subscribe',          sr: 'Pretplatite se' },
  news_success:       { en: "You're on the list! We'll be in touch soon.", sr: 'Na listi ste! Uskoro ćemo vas kontaktirati.' },
  news_email_error:   { en: 'Please enter a valid email address.', sr: 'Molimo unesite validnu email adresu.' },
  divider_or:         { en: 'or',                 sr: 'ili' },
  demo_h3:            { en: 'Ready to break the language barrier?', sr: 'Spremi da srušite jezičku barijeru?' },
  demo_desc:          { en: "See Vavilon in action with a personalised live demo. We'll show you exactly how it works for your tours, museum, or conference.", sr: 'Pogledajte Vavilon u akciji kroz personalizovanu demonstraciju uživo. Pokazaćemo vam tačno kako funkcioniše za vaše ture, muzej ili konferenciju.' },
  demo_reach:         { en: 'Or reach us directly:', sr: 'Ili nas kontaktirajte direktno:' },

  // ── Booking ───────────────────────────────────────────────────────────────
  booking_eyebrow:    { en: 'Book a Demo',        sr: 'Zakaži demo' },
  booking_h2:         { en: 'See Vavilon in action', sr: 'Pogledaj Vavilon u akciji' },
  booking_sub:        { en: 'Pick a time that works for you and we will walk you through the platform live, no preparation needed on your end.', sr: 'Izaberite vreme koje vam odgovara i provešćemo vas kroz platformu uživo, bez ikakve pripreme sa vaše strane.' },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer_desc:        { en: 'Real-time spoken translation for tours, museums, and conferences. One speaker, 70+ languages, zero apps to install.', sr: 'Prevod govora u realnom vremenu za ture, muzeje i konferencije. Jedan govornik, 70+ jezika, bez instalacije aplikacija.' },
  footer_email_us:    { en: 'Email us',            sr: 'Pišite nam' },
  footer_product:     { en: 'Product',             sr: 'Proizvod' },
  footer_live_app:    { en: 'Live App',             sr: 'Aplikacija uživo' },
  footer_company:     { en: 'Company',             sr: 'Kompanija' },
  footer_rights:      { en: 'All rights reserved.', sr: 'Sva prava zadržana.' },
  footer_built:       { en: 'Built in Serbia 🇷🇸 · Powered by', sr: 'Izgrađeno u Srbiji 🇷🇸 · Pokrenuto' },

  // ── Sticky button ─────────────────────────────────────────────────────────
  sticky_contact:     { en: 'Contact Us',          sr: 'Kontaktirajte nas' },
} satisfies Record<string, Record<Lang, string>>

export type TranslationKey = keyof typeof translations
export type Translations = Record<TranslationKey, string>

export function getTranslations(lang: Lang): Translations {
  return Object.fromEntries(
    Object.entries(translations).map(([k, v]) => [k, v[lang]])
  ) as Translations
}
