const test = require('tape')
const toArray = require('../../maybe/toArray')

test('maybe toArray', t => {
  const result1 = toArray([])
  const result2 = toArray(null)
  const result3 = toArray(3)

  t.same(result1, [])
  t.same(result2, [])
  t.same(result3, [3])

  t.end()
})
