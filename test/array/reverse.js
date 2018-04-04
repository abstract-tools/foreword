const test = require('tape')
const reverse = require('../../array/reverse')

test('array reverse: swap order of array, do not mutate original', t => {
  const arr = [1, 2, 3]
  const result = reverse(arr)

  t.same(result, [3, 2, 1])
  t.same(arr, [1, 2, 3])

  t.end()
})
