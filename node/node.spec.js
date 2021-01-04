const getErrors = require('../jest.setup')(__dirname);

test('ok', async () => {
  expect(await getErrors('ok.js')).toMatchInlineSnapshot(`""`);
});
