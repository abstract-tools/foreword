const test = require('tape')
const { findIndex } = require('../../array')

test('array findIndex', t => {
  const result1 = findIndex(x => x === 2, [1, 2, 3, 4])
  const result2 = findIndex(x => x === 5, [1, 2, 3, 4])

  t.same(result1, 1)
  t.same(result2, -1)

  t.end()
})
