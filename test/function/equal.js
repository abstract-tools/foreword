const test = require('tape')
const equal = require('../../function/equal')

test('function equal: returns false if values are not equal', t => {
  const result = equal(1, 2)

  t.same(result, false)
  t.end()
})

test('function equal: returns true if values are equal', t => {
  const result = equal(1, 1)

  t.same(result, true)
  t.end()
})
