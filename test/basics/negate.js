const test = require('tape')
const { negate } = require('../../index')

test('negate', t => {
  const result = negate(-2)

  t.same(result, 2)
  t.end()
})
