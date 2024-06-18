const eslint = require('eslint');
const test = require('tape');
const path = require('path');

const linter = new eslint.ESLint({
  overrideConfigFile: path.join(__dirname, '..', 'eslint.config.js'),
});

test('api: lintText', function (t) {
  t.plan(1);
  // const result = linter.lintText("console.log('hi there')\n\n")
  linter.lintText("console.log('hi there')\n\n")
  .then(result => {
    console.log('result: ', result);
    console.log('message: ', result[0].messages);
    t.equals(result[0].messages[0].message, 'Missing semicolon.');
  });
});
