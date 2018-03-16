const test = require('tape')
const isEmpty = require('../../array/isEmpty')

test('array isEmpty: returns true is no length', t => {
  const result = isEmpty([])

  t.same(result, true)
  t.end()
})
