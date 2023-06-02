require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/typescript/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'key-spacing': [
            'error',
            {
                'align': 'value'
            }
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 2,
            },
        ],
    },
    overrides: [
        {
            files: [
                '**/*.{ts,tsx,vue}',
            ],
            rules: {
                'no-undef':             'off',
                'import/no-unresolved': 'off',
            },
        },
        {
            files: [
                '**/*.vue',
            ],
            rules: {
                'vue/multi-word-component-names': 'off',
            },
        },
    ],
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
    },
};
