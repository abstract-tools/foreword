const test = require('tape')
const { subtract } = require('../../index')

test('subtract', t => {
  const result1 = subtract(1)(10)

  t.same(result1, 9)

  t.end()
})
