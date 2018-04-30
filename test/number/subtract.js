const test = require('tape')
const subtract = require('../../number/subtract')

test('number subtract', t => {
  const result1 = subtract(1, 10)
  const result2 = subtract(1, 1, 10)

  t.same(result1, 9)
  t.same(result2, 8)

  t.end()
})
