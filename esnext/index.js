const { rules: baseRules } = require('./base');

module.exports = {
  plugins: ['security'],

  extends: ['esnext', 'esnext/style-guide', 'plugin:security/recommended'],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  env: {
    es6: true
  },

  rules: {
    ...baseRules
  }
};
