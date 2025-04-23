import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
    features: {
        typescript: {
            strict: true,
        },

        stylistic: {
            indent: 4,
            semi: false,
            quotes: 'single',
        },
    },
}).override({
    rules: {
        'vue/multi-word-component-names': 'off',
    },
})
