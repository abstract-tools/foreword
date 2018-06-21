const test = require('tape')
const { descend } = require('../../index')

test('ascend', t => {
  const result = [3, 1, 2, 3, 10].sort(descend)

  t.same(result, [10, 3, 3, 2, 1])
  t.end()
})
