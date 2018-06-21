const test = require('tape')
const { inc } = require('../../index')

test('inc', t => {
  const result = inc(0)

  t.same(result, 1)
  t.end()
})
