const test = require('tape')
const path = require('../../object/path')

test('object path', t => {
  const result1 = path(['a','b','c'], {a:{b:{c:1}}})
  const result2 = path(['a','b','d'], {a:{b:{c:1}}})

  t.same(result1, 1)
  t.same(result2, undefined)

  t.end()
})
