const test = require('tape')
const { reduce } = require('../../array')

test('array reduce: transforms an array to a value', t => {
  const result = reduce((acc, x) => acc + x, 0)([1, 2, 3])

  t.same(result, 6)
  t.end()
})
