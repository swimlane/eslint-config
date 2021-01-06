module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  plugins: ['@typescript-eslint', 'security'],

  extends: [
    'eslint:recommended',
    '../legacy/rules',
    '../es6/rules',
    'plugin:@typescript-eslint/recommended',
    'plugin:security/recommended',
    './rules'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },

  rules: {}
};
