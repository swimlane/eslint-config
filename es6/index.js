module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['security'],
  extends: ['eslint:recommended', 'plugin:security/recommended', '../legacy/rules', './rules'],
  rules: {}
};
