const test = require('tape')
const either = require('../../function/either')

test('function either', t => {
  const test = either(x => x > 10, x => x % 2 === 0)

  t.same(test(15), true)
  t.same(test(5), false)
  t.same(test(4), true)

  t.end()
})
