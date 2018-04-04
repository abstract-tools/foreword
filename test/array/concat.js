const test = require('tape')
const concat = require('../../array/concat')

test('array concat: concatenate a list of lists into one list', t => {
  const result = concat([[1, 2], [3], [4, 5]])

  t.same(result, [1, 2, 3, 4, 5])
  t.end()
})
