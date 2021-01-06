module.exports = {
  rules: {
    // Replace 'no-extra-parens' rule with '@typescript-eslint' version
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error'],

    // Warning only
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],

    /*
     * Enabling non-null-assertion
     * Non-null Assertion prevents the code from being polluted with Type assertion: "as SomeType" or "as unknown as SomeType".
     * Use with cautious in the following cases:
     *
     * - when dealing with APIs that return Data | undefined but in some cases, we know for sure the data is available. eg: new Map(['foo', 'bar']).get('foo')!
     * - Angular's Input sometimes won't have default value, these will be subjected to ESLint's no-initializer rule. "?:" adds "undefined" to the type but "!:" won't
     */
    'no-non-null-assertion': 'off'
  }
};
