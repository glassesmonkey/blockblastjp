const path = require('path');

const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  defaultNS: 'common',
  localePath: typeof window === 'undefined'
    ? path.resolve('./public/locales')
    : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

module.exports = config;