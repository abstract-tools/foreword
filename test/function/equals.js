const test = require('tape')
const equals = require('../../function/equals')

test('function equals: returns false if values are not equal', t => {
  const result = equals(1, 2)

  t.same(result, false)
  t.end()
})

test('function equals: returns true if values are equal', t => {
  const result = equals(1, 1)

  t.same(result, true)
  t.end()
})

