const test = require('tape')
const { minBy } = require('../../index')

test('minBy', t => {
  const result1 = minBy(n => n * n)(-3)(2)
  const result2 = minBy(n => n * n)(2)(-3)

  t.same(result1, 2)
  t.same(result2, 2)

  t.end()
})
