const test = require('tape')
const { get } = require('../../array')

test('array get', t => {
  const result1 = get(1)([1, 2, 3])
  const result2 = get(1)([])

  t.same(result1, 2)
  t.same(result2, undefined)

  t.end()
})
