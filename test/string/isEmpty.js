const test = require('tape')
const { isEmpty } = require('../../string')

test('string isEmpty', t => {
  const result1 = isEmpty('')
  const result2 = isEmpty('abc')

  t.same(result1, true)
  t.same(result2, false)

  t.end()
})
