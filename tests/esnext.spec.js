/* eslint-disable import/no-commonjs */
/* eslint-disable no-sync */

const fs = require('fs');
const { ESLint } = require('eslint');

const eslint = new ESLint({
  useEslintrc: false,
  overrideConfigFile: './configs/esnext.js'
});

async function getErrors(fileToTest) {
  const results = await eslint.lintText(fs.readFileSync(fileToTest, 'utf8'));
  if (results.length) {
    return results[0].messages;
  }
  return [];
}

test('quotes', async () => {
  expect(await getErrors('tests/fixtures/esnext/quotes.js'))
    .toMatchInlineSnapshot(`
    Array [
      Object {
        "column": 12,
        "endColumn": 19,
        "endLine": 6,
        "fix": Object {
          "range": Array [
            102,
            109,
          ],
          "text": "'Earth'",
        },
        "line": 6,
        "message": "Strings must use singlequote.",
        "messageId": "wrongQuotes",
        "nodeType": "Literal",
        "ruleId": "quotes",
        "severity": 2,
      },
    ]
  `);
});

test('semi', async () => {
  expect(await getErrors('tests/fixtures/esnext/semi.js'))
    .toMatchInlineSnapshot(`
    Array [
      Object {
        "column": 19,
        "endColumn": 1,
        "endLine": 7,
        "fix": Object {
          "range": Array [
            109,
            109,
          ],
          "text": ";",
        },
        "line": 6,
        "message": "Missing semicolon.",
        "messageId": "missingSemi",
        "nodeType": "ReturnStatement",
        "ruleId": "semi",
        "severity": 2,
      },
    ]
  `);
});
