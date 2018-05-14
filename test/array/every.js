const test = require('tape')
const { every } = require('../../array')

test('array every: returns true is all values match predicate', t => {
  const result = every(x => x === 1)([1, 1, 1])

  t.same(result, true)
  t.end()
})

test('array every: returns false if one value does not match predicate', t => {
  const result = every(x => x === 1)([1, 1, 2])

  t.same(result, false)
  t.end()
})
