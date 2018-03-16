const test = require('tape')
const multiply = require('../../number/multiply')

test('number multiply', t => {
  const result = multiply(2, 5)

  t.same(result, 10)
  t.end()
})
