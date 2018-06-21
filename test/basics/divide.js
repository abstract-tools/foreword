const test = require('tape')
const { divide } = require('../../index')

test('divide', t => {
  const result1 = divide(2)(10)

  t.same(result1, 5)

  t.end()
})
