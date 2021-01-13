/* globals readdirSync:readonly */

import test from 'tape';

const base = require('../rules');

const files = { base };

readdirSync('../rules').forEach(name => {
  if (name === 'react.js' || name === 'react-a11y.js') {
    return;
  }

  // eslint-disable-next-line security/detect-non-literal-require, security/detect-object-injection, security/detect-object-injection
  files[name] = require(`../rules/${ name }`);
});

Object.keys(files).forEach(name => {
  // eslint-disable-next-line security/detect-object-injection
  const config = files[name];

  test(`${ name }: does not reference react`, t => {
    t.plan(2);

    // scan plugins for react and fail if it is found
    const hasReactPlugin = Object.prototype.hasOwnProperty.call(config, 'plugins')
      && config.plugins.indexOf('react') !== -1;
    t.notOk(hasReactPlugin, 'there is no react plugin');

    // scan rules for react/ and fail if any exist
    const reactRuleIds = Object.keys(config.rules)
      .filter(ruleId => ruleId.indexOf('react/') === 0);
    t.deepEquals(reactRuleIds, [], 'there are no react/ rules');
  });
});

export const x = (_unused) => {
  return 4;
};