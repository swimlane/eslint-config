module.exports = {
  rules: {
    // Replace 'no-extra-parens' rule with '@typescript-eslint' version
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error'],

    // Warning only
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }]
  }
};
