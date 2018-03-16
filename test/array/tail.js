const test = require('tape')
const tail = require('../../array/tail')

test('array tail: get last elements in array', t => {
  const result = tail([1,2,3,4,5])

  t.same(result, [2,3,4,5])
  t.end()
})

test('array empty: empty array', t => {
  const result = tail([])

  t.same(result, [])
  t.end()
})
