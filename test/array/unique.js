const test = require('tape')
const unique = require('../../array/unique')

test('array unique: returns list of unique elements', t => {
  const result = unique([1, 1, 1, 3, 5, 5, 9])

  t.same(result, [1,3,5,9])
  t.end()
})
