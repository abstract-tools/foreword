const test = require('tape')
const { zip } = require('../../array')

test('array zip', t => {
  const result1 = zip(['a', 'b', 'c'], [1, 2, 3, 4])
  const result2 = zip(['a', 'b', 'c'], [1, 2])

  t.same(result1, {a: 1, b: 2, c: 3})
  t.same(result2, {a: 1, b: 2})

  t.end()
})
