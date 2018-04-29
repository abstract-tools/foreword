const test = require('tape')
const includes = require('../../array/includes')

test('array includes: returns true if match is found', t => {
  const result = includes(3, [1, 2, 3])

  t.same(result, true)
  t.end()
})

test('array includes: returns false if no match is found', t => {
  const result = includes(0, [1, 2, 3])

  t.same(result, false)
  t.end()
})
