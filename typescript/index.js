const { rules } = require('../esnext/base');

module.exports = {
  plugins: [
    '@typescript-eslint',
    'security'
  ],

  extends: [ 'esnext', 'esnext/style-guide', 'plugin:@typescript-eslint/recommended', 'plugin:security/recommended' ],
  parser: '@typescript-eslint/parser',

  rules: {
    ...rules,
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': [ 'error' ]
  }
};
