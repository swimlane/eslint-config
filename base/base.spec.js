const getErrors = require('../jest.setup')(__dirname);

test('ok', async () => {
  expect(await getErrors('ok.js')).toMatchInlineSnapshot(`""`);
});

test('no-mixed-spaces-and-tabs', async () => {
  expect(await getErrors('no-mixed-spaces-and-tabs.js')).toMatchInlineSnapshot(`
    "__fixtures__/no-mixed-spaces-and-tabs.js: line 2, col 1, Error - Expected indentation of 2 spaces but found 1 tab. (indent)

    1 problem"
  `);
});

test('arrow-parens', async () => {
  expect(await getErrors('arrow-parens.js')).toMatchInlineSnapshot(`
    "__fixtures__/arrow-parens.js: line 2, col 4, Error - Parsing error: Unexpected token >

    1 problem"
  `);
});

test('indent', async () => {
  expect(await getErrors('indent.js')).toMatchInlineSnapshot(`
    "__fixtures__/indent.js: line 3, col 1, Error - Expected indentation of 4 spaces but found 6. (indent)

    1 problem"
  `);
});
