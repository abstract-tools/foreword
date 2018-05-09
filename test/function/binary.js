const test = require('tape')
const { binary } = require('../../index')

test('function binary', t => {
  const f = (a, b, c) => a + b
  const result = binary(f)(1)(2)

  t.same(result, 3)

  t.end()
})
