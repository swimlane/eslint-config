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
    'space-before-function-paren': 0,

    'generator-star-spacing': 2,

    'babel/generator-star-spacing': 0,

    'sort-imports': [ 'error', { allowSeparatedGroups: true } ],

    'import/prefer-default-export': 'off',

    'security/detect-object-injection': 'off'
  }

};