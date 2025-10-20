const { serverSideTranslations } = require('next-i18next/serverSideTranslations');

const i18nConfig = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  defaultNS: 'common',
  // In Workers environment, use absolute path from root
  localePath: typeof window === 'undefined'
    ? require('path').resolve('./public/locales')
    : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

// Custom wrapper that provides config directly to avoid file system lookup
async function getServerSideTranslations(locale, namespacesRequired = []) {
  return serverSideTranslations(locale, namespacesRequired, i18nConfig);
}

module.exports = { getServerSideTranslations };
