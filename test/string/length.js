const test = require('tape')
const { length } = require('../../string')

test('string length: returns number', t => {
  const result = length('abc')

  t.same(result, 3)
  t.end()
})
