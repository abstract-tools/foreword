const test = require('tape')
const { multiply } = require('../../index')

test('number multiply', t => {
  const result1 = multiply(2)(5)

  t.same(result1, 10)

  t.end()
})
