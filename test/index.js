const eslint = require('eslint')
const test = require('tape')
const path = require('path')

const linter = new eslint.CLIEngine({
  configFile: path.join(__dirname, '..', 'eslintrc.json')
})

test('api: lintText', function (t) {
  t.plan(1)
  const result = linter.executeOnText("console.log('hi there')\n\n")
  t.equals(result.results[0].messages[0].message, 'Missing semicolon.')
})
