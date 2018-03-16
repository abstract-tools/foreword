const test = require('tape')
const head = require('../../array/head')

test('array head: get first element in array', t => {
  const result = head([1,2,3])

  t.same(result, 1)
  t.end()
})

test('array head: empty array', t => {
  const result = head([])

  t.same(result, undefined)
  t.end()
})
