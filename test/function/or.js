const test = require('tape')
const { or } = require('../../index')

test('function or', t => {
  const result1 = or(false)(true)
  const result2 = or(false)(false)

  t.same(result1, true)
  t.same(result2, false)

  t.end()
})
