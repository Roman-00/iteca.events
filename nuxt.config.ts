/**
 * Конфигурация приложения
 *
 * @link https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
    app: {
        head: {
            charset:  'utf-8',
            viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
            title:    'Iteca Events',
            link:     [],
            meta:     [
                {
                    name:    'theme-color',
                    content: '#fefefe'
                }
            ]
        }
    },
    css: [
        '~/assets/scss/_globals.scss',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "@/assets/scss/_variables.scss" as *;
                        @use "@/assets/scss/_mixins.scss" as *;
                        @use "@/assets/scss/_fonts.scss" as *;
                    `,
                },
            },
        },
    },
    runtimeConfig: {
        public: {
            mode: process.env.MODE,
        }
    },
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/device',
    ],
    i18n: {
        locales: [
            {
                code: 'ru',
                name: 'Русский',
                file: 'ru.json'
            },
            {
                code: 'en',
                name: 'English',
                file: 'en.json'
            }
        ],
        lazy:          true,
        langDir:       'lang',
        defaultLocale: 'ru',
        strategy:      'prefix_except_default'
    },
    postcss: {
        plugins: {
            'postcss-preset-env': {},
        },
    },
    build: {
        transpile: ['@yeger/vue-masonry-wall'],
    },
});
