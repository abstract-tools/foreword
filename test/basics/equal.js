const test = require('tape')
const { equal } = require('../../index')

test('equal', t => {
  const result1 = equal(1)(2)
  const result2 = equal(1)(1)

  t.same(result1, false)
  t.same(result2, true)

  t.end()
})
