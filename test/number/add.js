const test = require('tape')
const add = require('../../number/add')

test('number add', t => {
  const result1 = add(1, 1)
  const result2 = add(1, 1, 1)

  t.same(result1, 2)
  t.same(result2, 3)

  t.end()
})
