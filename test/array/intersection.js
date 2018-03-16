const test = require('tape')
const intersection = require('../../array/intersection')

test('array intersection', t => {
  const result = intersection([1,2,3], [2,3,4,5])

  t.same(result, [2,3])
  t.end()
})
