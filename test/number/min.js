const test = require('tape')
const min = require('../../number/min')

test('number min', t => {
  const result1 = min(4, 9)
  const result2 = min(9, 4)

  t.same(result1, 4)
  t.same(result2, 4)

  t.end()
})
