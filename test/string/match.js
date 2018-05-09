const test = require('tape')
const { match } = require('../../string')

test('string match', t => {
  const result1 = match(/a/)('abc')
  const result2 = match(/a/)('xyz')

  t.ok(result1)
  t.notOk(result2)

  t.end()
})
