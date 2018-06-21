const test = require('tape')
const { compare } = require('../../index')

test('compare', t => {
  const result = [3, 1, 2, 1].sort(compare((a, b) => a > b))

  t.same(result, [3, 2, 1, 1])
  t.end()
})
