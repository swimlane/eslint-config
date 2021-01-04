module.exports = {
  plugins: [
    'security'
  ],

  extends: [ 'esnext', 'esnext/style-guide', 'plugin:security/recommended' ],

  rules: {
    indent: [ 'error', 2, { SwitchCase: 1 } ],
    curly: [ 'off' ],
    semi: [ 2, 'always' ],
    'comma-dangle': [ 'error', 'never' ],
    'space-before-function-paren': 0
  }

};