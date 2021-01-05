const { rules: baseRules } = require('../esnext/base');

module.exports = {
  plugins: ['@typescript-eslint', 'security'],

  extends: ['esnext', 'esnext/style-guide', 'plugin:@typescript-eslint/recommended', 'plugin:security/recommended'],
  parser: '@typescript-eslint/parser',

  rules: {
    ...baseRules,

    // Replace 'no-extra-parens' rule with '@typescript-eslint' version
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error'],

    // Warning only
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],

    // Better handeled via TypeScript compiler
    'import/named': 'off',
    'import/no-unresolved': 'off'
  }
};
