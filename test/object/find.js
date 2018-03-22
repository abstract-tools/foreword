const test = require('tape')
const find = require('../../object/find')

test('object find', t => {
  const result1 = find(['a','b','c'], {a:{b:{c:1}}})
  const result2 = find(['a','b','d'], {a:{b:{c:1}}})

  t.same(result1, 1)
  t.same(result2, undefined)

  t.end()
})
