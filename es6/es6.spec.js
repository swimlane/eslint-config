const getErrors = require('../jest.setup')(__dirname);

test('ok', async () => {
  expect(await getErrors('ok.js')).toEqual('');
});

test('quotes', async () => {
  expect(await getErrors('quotes.js')).toMatchInlineSnapshot(`
    "__fixtures__/quotes.js: line 5, col 12, Error - Strings must use singlequote. (quotes)

    1 problem"
  `);
});

test('semi', async () => {
  expect(await getErrors('semi.js')).toMatchInlineSnapshot(`
    "__fixtures__/semi.js: line 5, col 19, Error - Missing semicolon. (semi)

    1 problem"
  `);
});

test('indent', async () => {
  expect(await getErrors('indent.js')).toMatchInlineSnapshot(`
    "__fixtures__/indent.js: line 3, col 1, Error - Expected indentation of 4 spaces but found 6. (indent)

    1 problem"
  `);
});

test('security/detect-unsafe-regex', async () => {
  expect(await getErrors('detect-unsafe-regex.js')).toMatchInlineSnapshot(`
    "__fixtures__/detect-unsafe-regex.js: line 3, col 12, Warning - Unsafe Regular Expression (security/detect-unsafe-regex)

    1 problem"
  `);
});

test('security/detect-child-process', async () => {
  expect(await getErrors('detect-child-process.js')).toMatchInlineSnapshot(`
    "__fixtures__/detect-child-process.js: line 3, col 19, Warning - Found require(\\"child_process\\") (security/detect-child-process)

    1 problem"
  `);
});

test('no console', async () => {
  expect(await getErrors('no-console.js')).toMatchInlineSnapshot(`
    "__fixtures__/no-console.js: line 1, col 1, Error - Unexpected console statement. (no-console)

    1 problem"
  `);
});

test('no alert', async () => {
  expect(await getErrors('no-alert.js')).toMatchInlineSnapshot(`
    "__fixtures__/no-alert.js: line 1, col 1, Error - Unexpected alert. (no-alert)

    1 problem"
  `);
});

test('no debugger', async () => {
  expect(await getErrors('no-debugger.js')).toMatchInlineSnapshot(`
    "__fixtures__/no-debugger.js: line 1, col 1, Error - Unexpected 'debugger' statement. (no-debugger)

    1 problem"
  `);
});
