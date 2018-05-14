const test = require('tape')
const { last } = require('../../array')

test('array last: return last element in array', t => {
  const result = last([1, 2, 3])

  t.same(result, 3)
  t.end()
})

test('array last: empty array', t => {
  const result = last([])

  t.same(result, undefined)
  t.end()
})
