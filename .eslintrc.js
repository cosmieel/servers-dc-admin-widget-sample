/* eslint-disable */

module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
    },
    env: {
        jest: true,
    },
    extends: [
        'plugin:vue/recommended',
        '@nuxtjs/eslint-config-typescript',
        'plugin:sonarjs/recommended',
        'plugin:nuxt/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
        '@regru/regru',
    ],
    plugins: [
        'sonarjs',
        '@typescript-eslint',
    ],
    overrides: [
        {
          files: ['*.mdx'],
          extends: 'plugin:mdx/recommended',
          rules: {
            'prettier/prettier': 'off',
          }
        },
    ],
    rules: {
        'sonarjs/cognitive-complexity': [ 'error', 20 ],
        'compat/compat': 'off',
        'space-in-parens': 'off',
        'array-bracket-spacing': ['error', 'always'],
        'semi': 'off',
        'padded-blocks': 'off',
        'import/named': 'off',
        'vue/comment-directive': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unused-params': 'off',
    }
}
