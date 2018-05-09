const test = require('tape')
const { take } = require('../../array')

test('array take: get first 3 elements in array', t => {
  const result = take(3, [1, 2, 3, 4, 5])

  t.same(result, [1, 2, 3])
  t.end()
})
