const test = require('tape')
const init = require('../../array/init')

test('array init: return initial elements of array', t => {
  const result = init([1, 2, 3, 4, 5])

  t.same(result, [1, 2, 3, 4])
  t.end()
})

test('array init: empty array', t => {
  const result = init([])

  t.same(result, [])
  t.end()
})
