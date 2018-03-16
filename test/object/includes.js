const test = require('tape')
const includes = require('../../object/includes')

test('object includes: returns true if object contains key', t => {
  const result = includes('a', {a:'test',b:'test'})

  t.same(result, true)
  t.end()
})

test('object includes: returns false if no key is found', t => {
  const result = includes('c', {a:'test',b:'test'})

  t.same(result, false)
  t.end()
})
