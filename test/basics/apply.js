const test = require('tape')
const { apply } = require('../../index')

test('apply: applies function to value', t => {
  const result = apply(a => b => a + b)([1, 1])

  t.same(result, 2)
  t.end()
})
