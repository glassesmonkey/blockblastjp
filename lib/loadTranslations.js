// Import all translation files statically so they get bundled
const commonEn = require('../public/locales/en/common.json');
const gamesEn = require('../public/locales/en/games.json');
const termsEn = require('../public/locales/en/terms.json');
const privacyEn = require('../public/locales/en/privacy.json');

// Translation registry
const translationRegistry = {
  en: {
    common: commonEn,
    games: gamesEn,
    terms: termsEn,
    privacy: privacyEn,
    'common-scratch': commonEn, // Fallback to common for missing files
  }
};

/**
 * Load translation files from pre-imported static modules
 * This works in Cloudflare Workers because files are bundled at build time
 */
function loadTranslations(locale, namespaces) {
  const translations = {};

  namespaces.forEach(ns => {
    if (translationRegistry[locale] && translationRegistry[locale][ns]) {
      translations[ns] = translationRegistry[locale][ns];
    } else {
      console.warn(`Translation not found: ${locale}/${ns}`);
      translations[ns] = {};
    }
  });

  return {
    _nextI18Next: {
      initialI18nStore: {
        [locale]: translations
      },
      initialLocale: locale,
      ns: namespaces,
      userConfig: {
        i18n: {
          defaultLocale: 'en',
          locales: ['en'],
        },
        defaultNS: 'common',
        reloadOnPrerender: false,
      }
    }
  };
}

module.exports = { loadTranslations };
