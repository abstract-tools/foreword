const test = require('tape')
const { ascend } = require('../../index')

test('function ascend', t => {
  const result = [3, 1, 2, 3, 10].sort(ascend)

  t.same(result, [1, 2, 3, 3, 10])
  t.end()
})
