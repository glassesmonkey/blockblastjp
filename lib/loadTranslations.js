// Import all translation files statically so they get bundled
const commonJa = require('../public/locales/ja/common.json');
const gamesJa = require('../public/locales/ja/games.json');
const termsJa = require('../public/locales/ja/terms.json');
const privacyJa = require('../public/locales/ja/privacy.json');
const commonScratchJa = require('../public/locales/ja/common-scratch.json');

// Translation registry
const translationRegistry = {
  ja: {
    common: commonJa,
    games: gamesJa,
    terms: termsJa,
    privacy: privacyJa,
    'common-scratch': commonScratchJa,
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
          defaultLocale: 'ja',
          locales: ['ja'],
        },
        defaultNS: 'common',
        reloadOnPrerender: false,
      }
    }
  };
}

module.exports = { loadTranslations };
