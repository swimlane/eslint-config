/* eslint-disable import/no-commonjs */
/* eslint-disable no-sync */

const fs = require('fs');
const { ESLint } = require('eslint');

const eslint = new ESLint({
  useEslintrc: false,
  overrideConfigFile: './configs/base.js'
});

async function getErrors(fileToTest) {
  const results = await eslint.lintText(fs.readFileSync(fileToTest, 'utf8'));
  if (results.length) {
    return results[0].messages;
  }
  return [];
}

test('no-mixed-spaces-and-tabs', async () => {
  expect(
    await getErrors('tests/fixtures/base/no-mixed-spaces-and-tabs.js')
  ).toMatchInlineSnapshot(`
    Array [
      Object {
        "column": 1,
        "endColumn": 2,
        "endLine": 2,
        "fix": Object {
          "range": Array [
            21,
            22,
          ],
          "text": "  ",
        },
        "line": 2,
        "message": "Expected indentation of 2 spaces but found 1 tab.",
        "messageId": "wrongIndentation",
        "nodeType": "Keyword",
        "ruleId": "indent",
        "severity": 2,
      },
    ]
  `);
});

test('arrow-parens', async () => {
  expect(
    await getErrors('tests/fixtures/base/arrow-parens.js')
  ).toMatchInlineSnapshot(`Array []`);
});

test('indent', async () => {
  expect(
    await getErrors('tests/fixtures/base/indent.js')
  ).toMatchInlineSnapshot(`
    Array [
      Object {
        "column": 1,
        "endColumn": 7,
        "endLine": 6,
        "fix": Object {
          "range": Array [
            86,
            92,
          ],
          "text": "    ",
        },
        "line": 6,
        "message": "Expected indentation of 4 spaces but found 6.",
        "messageId": "wrongIndentation",
        "nodeType": "Keyword",
        "ruleId": "indent",
        "severity": 2,
      },
    ]
  `);
});
