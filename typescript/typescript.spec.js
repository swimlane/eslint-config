const getErrors = require('../jest.setup')(__dirname);

test('ok', async () => {
  expect(await getErrors('ok.ts')).toMatchInlineSnapshot(`""`);
});

test('quotes', async () => {
  expect(await getErrors('quotes.ts')).toMatchInlineSnapshot(`
    "__fixtures__/quotes.ts: line 3, col 12, Error - Strings must use singlequote. (quotes)

    1 problem"
  `);
});

test('semi', async () => {
  expect(await getErrors('semi.ts')).toMatchInlineSnapshot(`
    "__fixtures__/semi.ts: line 3, col 19, Error - Missing semicolon. (semi)

    1 problem"
  `);
});
