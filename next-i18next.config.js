const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: 'ru',
        locales:       ['ru', 'en'],
    },
    lazy:       true,
    localePath: path.resolve('./public/locales'),
    strategy:   'prefix_except_default'
}
