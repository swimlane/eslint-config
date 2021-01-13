module.exports = {
  rules: {
    // Replace 'no-extra-parens' rule with '@typescript-eslint' version
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error'],

    // Replace 'no-unused-vars' rule with '@typescript-eslint' version
    'no-unused-vars': 'off',
    // Allow unused args with underscore
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // Replace 'no-shadow' rule with '@typescript-eslint' version
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

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
    '@typescript-eslint/no-non-null-assertion': 'off',

    // Allow loose naming convention for enum members
    '@typescript-eslint/naming-convention': ['error', { selector: 'enumMember', format: null }]
  }
};
