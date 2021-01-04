const getErrors = require('../jest.setup')(__dirname);

test('ok', async () => {
  expect(await getErrors('ok.js')).toMatchInlineSnapshot(`""`);
});

test('quotes', async () => {
  expect(await getErrors('quotes.js')).toMatchInlineSnapshot(`
    "/Users/jayson.harshbarger/workspace/tools/eslint-config/esnext/__fixtures__/quotes.js: line 5, col 12, Error - Strings must use singlequote. (quotes)

    1 problem"
  `);
});

test('semi', async () => {
  expect(await getErrors('semi.js')).toMatchInlineSnapshot(`
    "/Users/jayson.harshbarger/workspace/tools/eslint-config/esnext/__fixtures__/semi.js: line 5, col 19, Error - Missing semicolon. (semi)

    1 problem"
  `);
});

test('indent', async () => {
  expect(await getErrors('indent.js')).toMatchInlineSnapshot(`
    "/Users/jayson.harshbarger/workspace/tools/eslint-config/esnext/__fixtures__/indent.js: line 3, col 1, Error - Expected indentation of 4 spaces but found 6. (indent)

    1 problem"
  `);
});

test('security/detect-unsafe-regex', async () => {
  expect(await getErrors('detect-unsafe-regex.js')).toMatchInlineSnapshot(`
    "/Users/jayson.harshbarger/workspace/tools/eslint-config/esnext/__fixtures__/detect-unsafe-regex.js: line 3, col 12, Warning - Unsafe Regular Expression (security/detect-unsafe-regex)

    1 problem"
  `);
});

test('security/detect-child-process', async () => {
  expect(await getErrors('detect-child-process.js')).toMatchInlineSnapshot(`
    "/Users/jayson.harshbarger/workspace/tools/eslint-config/esnext/__fixtures__/detect-child-process.js: line 3, col 1, Error - Do not import Node.js builtin module \\"child_process\\" (import/no-nodejs-modules)

    1 problem"
  `);
});
