const test = require('tape')
const divide = require('../../number/divide')

test('number divide', t => {
  const result1 = divide(2, 10)
  const result2 = divide(2, 2, 10)

  t.same(result1, 5)
  t.same(result2, 2.5)

  t.end()
})
