const test = require('tape')
const { partition } = require('../../array')

test('array partition', t => {
  const result = partition(x => x > 60, [49, 58, 76, 43, 88, 77, 90])

  t.same(result, [[76, 88, 77, 90], [49, 58, 43]])
  t.end()
})
