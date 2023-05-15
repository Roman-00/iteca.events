const { i18n } = require('./next-i18next.config');
const withSvgr = require('next-plugin-svgr');

/**
 * Конфигурация приложения
 *
 * @type {import('next').NextConfig}
 */
module.exports = withSvgr({
    i18n,
    reactStrictMode: true,
    poweredByHeader: false,
    env:             {
        APP_URL: process.env.APP_URL,
        APP_ENV: process.env.MODE
    }
})
