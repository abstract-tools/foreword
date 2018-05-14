const test = require('tape')
const { length } = require('../../array')

test('array length: returns number of values', t => {
  const result = length([1, 2, 3])

  t.same(result, 3)
  t.end()
})
