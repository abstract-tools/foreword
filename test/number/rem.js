const test = require('tape')
const { rem } = require('../../index')

test('number rem', t => {
  const result = rem(3)(-20)

  t.same(result, -2)
  t.end()
})
