const test = require('tape')
const length = require('../../object/length')

test('object length', t => {
  const result1 = length({a: 1, b: 2, c: 3})
  const result2 = length({})

  t.same(result1, 3)
  t.same(result2, 0)

  t.end()
})
