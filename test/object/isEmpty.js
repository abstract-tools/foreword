const test = require('tape')
const { isEmpty } = require('../../object')

test('object isEmpty', t => {
  const result1 = isEmpty({})
  const result2 = isEmpty({ a: 'test' })

  t.same(result1, true)
  t.same(result2, false)

  t.end()
})
