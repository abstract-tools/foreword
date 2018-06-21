const test = require('tape')
const { clamp } = require('../../index')

test('clamp', t => {
  const result = clamp(1, 10)

  t.same(result(0), 1)
  t.same(result(11), 10)
  t.same(result(5), 5)

  t.end()
})
