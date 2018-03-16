const test = require('tape')
const union = require('../../array/union')

test('array union', t => {
  const result = union([1,5,7], [3,5])

  t.same(result, [1,5,7,3])
  t.end()
})
