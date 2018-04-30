const test = require('tape')
const max = require('../../number/max')

test('number max', t => {
  const result1 = max(4, 9)
  const result2 = max(9, 4)
  const result3 = max(3, 1, 9, 10)

  t.same(result1, 9)
  t.same(result2, 9)
  t.same(result3, 10)

  t.end()
})
