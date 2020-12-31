/* eslint-disable import/no-commonjs */

module.exports = {

  extends: [ 'esnext', 'esnext/style-guide', 'node', 'node/style-guide' ],

  rules: {
    indent: [ 'error', 2 ],
    curly: [ 'off' ],
    semi: [ 2, 'always' ],
    'comma-dangle': [ 'error', 'never' ],
    'space-before-function-paren': [ 'off' ]
  }

};