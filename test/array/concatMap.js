const test = require('tape')
const concatMap = require('../../array/concatMap')
const range = require('../../array/range')

test('array concatMap', t => {
  const result1 = concatMap(x => [x, x], [1, 2, 3])
  const result2 = concatMap(x => range(1, x + 1), [1, 2, 3])

  t.same(result1, [1, 1, 2, 2, 3, 3])
  t.same(result2, [1, 1, 2, 1, 2, 3])

  t.end()
})
