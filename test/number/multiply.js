const test = require('tape')
const multiply = require('../../number/multiply')

test('number multiply', t => {
  const result1 = multiply(2, 5)
  const result2 = multiply(1, 2, 3)

  t.same(result1, 10)
  t.same(result2, 6)

  t.end()
})
