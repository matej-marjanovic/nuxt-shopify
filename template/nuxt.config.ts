import * as dotenv from 'dotenv'

dotenv.config()

export default defineNuxtConfig({
    modules: [
        '@konkonam/nuxt-shopify',
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxt/icon',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
    ],

    future: {
        compatibilityVersion: 4,
    },

    compatibilityDate: '2024-11-07',

    components: [
        {
            path: '~/components',
            pathPrefix: false,
            global: true,
        },
    ],

    i18n: {
        defaultLocale: 'en',

        locales: [
            { code: 'en', name: 'English', file: 'en.json' },
        ],

        bundle: {
            optimizeTranslationDirective: false,
        },
    },

    icon: {
        serverBundle: {
            collections: [ 'hugeicons' ],
        },
    },

    imports: {
        dirs: [
            '~/composables',
        ],
    },

    shopify: {
        name: process.env.SHOPIFY_STOREFRONT_NAME ?? '',

        logger: {
            level: 999,
        },

        clients: {
            storefront: {
                apiVersion: process.env.SHOPIFY_STOREFRONT_API_VERSION ?? '',
                publicAccessToken: process.env.SHOPIFY_STOREFRONT_PUBLIC_TOKEN ?? '',
            },
        },
    },
})
