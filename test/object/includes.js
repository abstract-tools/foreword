const test = require('tape')
const { includes } = require('../../object')

test('object includes', t => {
  const result1 = includes('a')({a: 'test', b: 'test'})
  const result2 = includes('c')({a: 'test', b: 'test'})

  t.same(result1, true)
  t.same(result2, false)

  t.end()
})
