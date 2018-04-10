const test = require('tape')
const has = require('../../array/has')

test('array has: returns true if match is found', t => {
  const result = has(3, [1, 2, 3])

  t.same(result, true)
  t.end()
})

test('array has: returns false if no match is found', t => {
  const result = has(0, [1, 2, 3])

  t.same(result, false)
  t.end()
})
