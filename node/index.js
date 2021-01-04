module.exports = {
  extends: [ '../esnext/index' ],
  rules: {
    'import/no-nodejs-modules': 0
  },
  globals: {
    __dirname: 'readonly'
  }
};