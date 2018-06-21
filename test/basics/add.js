const test = require('tape')
const { add } = require('../../index')

test('add', t => {
  const result1 = add(1)(1)

  t.same(result1, 2)

  t.end()
})
