const { rules: baseRules } = require('../esnext/base');

module.exports = {
  plugins: ['security'],
  extends: ['esnext', 'esnext/style-guide', 'node', 'node/style-guide', 'plugin:security/recommended'],
  rules: {
    ...baseRules
  },
  env: {
    node: true,
    es6: true,
    commonjs: true
  },
  globals: {
    __dirname: 'readonly'
  }
};
