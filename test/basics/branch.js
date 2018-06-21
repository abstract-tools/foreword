const test = require('tape')
const { branch } = require('../../index')

test('branch', t => {
  const fn = branch(x => x === 10, x => x + 1, x => x - 1)

  t.same(fn(10), 11)
  t.same(fn(9), 8)

  t.end()
})
