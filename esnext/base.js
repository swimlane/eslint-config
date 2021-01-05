module.exports = {
  extends: [],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  env: {
    es6: true
  },

  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    curly: ['off'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': 'off',

    // deprecated (The babel/generator-star-spacing rule is deprecated. Please use the built in generator-star-spacing rule instead)
    'babel/generator-star-spacing': 'off',
    'generator-star-spacing': 'error',

    // Allowing groups
    'sort-imports': ['error', { allowSeparatedGroups: true }],

    'import/prefer-default-export': 'off',

    // false positive prone, https://github.com/nodesecurity/eslint-plugin-security/issues/21
    'security/detect-object-injection': 'off',

    // conflicts with prettier
    'array-bracket-spacing': 'off',
    'max-len': 'off'
  }
};
