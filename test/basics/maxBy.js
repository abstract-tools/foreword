const test = require('tape')
const { maxBy } = require('../../index')

test('maxBy', t => {
  const result1 = maxBy(n => n * n)(-3)(2)
  const result2 = maxBy(n => n * n)(2)(-3)

  t.same(result1, -3)
  t.same(result2, -3)

  t.end()
})
