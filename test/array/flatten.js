const test = require('tape')
const flatten = require('../../array/flatten')

test('array flatten', t => {
  const result = flatten([1, [[2], 3], [4, [[5]]]])

  t.same(result, [1, 2, 3, 4, 5])
  t.end()
})
