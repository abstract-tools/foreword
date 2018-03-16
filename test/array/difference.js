const test = require('tape')
const difference = require('../../array/difference')

test('array difference', t => {
  const result = difference([1,2,3], [1])

  t.same(result, [2,3])
  t.end()
})
