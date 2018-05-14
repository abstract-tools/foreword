const test = require('tape')
const { slice } = require('../../array')

test('array slice: return subset of list', t => {
  const result = slice(1)(3)([1, 2, 3, 4, 5])

  t.same(result, [2, 3])
  t.end()
})
