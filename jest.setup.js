const { join } = require('path');
const { ESLint } = require('eslint');

module.exports = dirname => {
  const overrideConfigFile = join(dirname, 'index.js');

  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile
  });

  return async fileToTest => {
    const path = join(dirname, '__fixtures__', fileToTest);
    const results = await eslint.lintFiles([path]);
    const formatter = await eslint.loadFormatter('compact');
    const resultText = formatter.format(results);
    // eslint-disable-next-line security/detect-non-literal-regexp
    return resultText.replace(new RegExp(dirname + '/', 'g'), '');
  };
};
