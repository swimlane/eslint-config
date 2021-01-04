module.exports = {
  extends: [ ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  env: {
    es6: true
  },

  rules: {
    indent: [ 'error', 2, { SwitchCase: 1 } ],
    curly: [ 'off' ],
    semi: [ 2, 'always' ],
    'comma-dangle': [ 'error', 'never' ],
    'space-before-function-paren': 0
  }

};