module.exports = {
  rules: {
    // Allowing groups
    'sort-imports': ['off', { allowSeparatedGroups: true }],

    // false positive prone, https://github.com/nodesecurity/eslint-plugin-security/issues/21
    'security/detect-object-injection': 'off',

    // conflicts with prettier
    'array-bracket-spacing': 'off',
    'max-len': 'off'
  }
};
