const test = require('tape')
const { gets } = require('../../array')

test('array gets', t => {
  const result1 = gets([0, 1])([1, 2, 3])
  const result2 = gets([0, 1])([])

  t.same(result1, [1, 2])
  t.same(result2, [undefined, undefined])

  t.end()
})
