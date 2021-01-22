module.exports = {
  rules: {
    // Allowing groups
    'sort-imports': ['off', { allowSeparatedGroups: true }],

    // Allow unused args with underscore
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // no console
    'no-console': 'error',
    'no-alert': 'error',
    'no-debugger': 'error',

    // conflicts with prettier
    'array-bracket-spacing': 'off',
    'max-len': 'off',

    // overly strict security rules
    'security/detect-object-injection': 'off', // false positive prone, https://github.com/nodesecurity/eslint-plugin-security/issues/21
    'security/detect-non-literal-fs-filename': 'off' // many false positives
  }
};
