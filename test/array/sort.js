const test = require('tape')
const sort = require('../../array/sort')

test('array sort: sort without mutating original', t => {
  const arr = [1,39,5]
  const result = sort((a, b) => a - b, arr)

  t.same(result, [1,5,39])
  t.same(arr, [1,39,5])

  t.end()
})
