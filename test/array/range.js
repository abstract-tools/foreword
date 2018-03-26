const test = require('tape')
const range = require('../../array/range')

test('array range', t => {
  const result1 = range(1, 5)
  const result2 = range(50, 53)

  t.same(result1, [1,2,3,4])
  t.same(result2, [50,51,52])

  t.end()
})
