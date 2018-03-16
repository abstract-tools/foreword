const test = require('tape')
const both = require('../../function/both')

test('function both', t => {
  const test = both(x => x > 10, x => x < 20)

  t.same(test(15), true)
  t.same(test(30), false)
  t.same(test(5), false)

  t.end()
})
