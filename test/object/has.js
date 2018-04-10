const test = require('tape')
const has = require('../../object/has')

test('object has: returns true if object contains key', t => {
  const result = has('a', {a: 'test', b: 'test'})

  t.same(result, true)
  t.end()
})

test('object has: returns false if no key is found', t => {
  const result = has('c', {a: 'test', b: 'test'})

  t.same(result, false)
  t.end()
})
