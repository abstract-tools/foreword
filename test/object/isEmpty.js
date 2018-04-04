const test = require('tape')
const isEmpty = require('../../object/isEmpty')

test('object isEmpty: returns true if contains no keys', t => {
  const result = isEmpty({})

  t.same(result, true)
  t.end()
})

test('object isEmpty: returns false if contains keys', t => {
  const result = isEmpty({a: 'test'})

  t.same(result, false)
  t.end()
})
