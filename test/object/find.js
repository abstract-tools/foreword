const test = require('tape')
const { find } = require('../../object')

test('object find', t => {
  const result1 = find(['a', 'b', 'c'])({ a: { b: { c: 1 } } })
  const result2 = find(['a', 'c', 'd'])({ a: { b: 0 } })
  const result3 = find(['a', 'b', 'c'])({ a: { b: null } })
  const result4 = find(['a', 'b', 'c'])({ a: { b: { c: null } } })

  t.same(result1, 1)
  t.same(result2, undefined)
  t.same(result3, undefined)
  t.same(result4, null)

  t.end()
})
