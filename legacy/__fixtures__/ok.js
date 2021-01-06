/* global fs path __dirname load test */

var files = [];

fs.readdirSync(path.join(__dirname, '../rules')).forEach(function (name) {
  if (name === 'react.js' || name === 'react-a11y.js') {
    return;
  }

  files[name] = load('../rules/' + name); // eslint-disable-line global-require
});

Object.keys(files).forEach(function (name) {
  var config = files[name];

  test(name + ': does not reference react', function (t) {
    t.plan(2);

    // scan plugins for react and fail if it is found
    var hasReactPlugin = Object.prototype.hasOwnProperty.call(config, 'plugins')
      && config.plugins.indexOf('react') !== -1;
    t.notOk(hasReactPlugin, 'there is no react plugin');

    // scan rules for react/ and fail if any exist
    var reactRuleIds = Object.keys(config.rules)
      .filter(function (ruleId) { return ruleId.indexOf('react/') === 0; });
    t.deepEquals(reactRuleIds, [], 'there are no react/ rules');
  });
});
