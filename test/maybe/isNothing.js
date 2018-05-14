const test = require('tape')
const { isNothing } = require('../../maybe')

test('maybe isNothing', t => {
  const result1 = isNothing([])
  const result2 = isNothing(null)
  const result3 = isNothing(3)

  t.same(result1, false)
  t.same(result2, true)
  t.same(result3, false)

  t.end()
})
