const getErrors = require('../jest.setup')(__dirname);

test('quotes', async () => {
  expect(await getErrors('quotes.ts')).toMatchInlineSnapshot(`
    "/Users/jayson.harshbarger/workspace/tools/eslint-config/typescript/__fixtures__/quotes.ts: line 5, col 12, Error - Strings must use singlequote. (quotes)

    1 problem"
  `);
});

test('semi', async () => {
  expect(await getErrors('semi.ts')).toMatchInlineSnapshot(`
    "/Users/jayson.harshbarger/workspace/tools/eslint-config/typescript/__fixtures__/semi.ts: line 5, col 19, Error - Missing semicolon. (semi)

    1 problem"
  `);
});
