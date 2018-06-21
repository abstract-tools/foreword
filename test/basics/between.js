const test = require('tape')
const { between } = require('../../index')

test('between', t => {
  const test = between(0, 10)

  t.same(test(5), true)
  t.same(test(0), true)
  t.same(test(10), true)
  t.same(test(20), false)
  t.same(test(-1), false)

  t.end()
})
