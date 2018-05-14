const test = require('tape')
const { indexOf } = require('../../array')

test('array indexOf', t => {
  const result1 = indexOf(1)([1, 2, 3])
  const result2 = indexOf('a')([1, 2, 3])

  t.same(result1, 0)
  t.same(result2, -1)

  t.end()
})
