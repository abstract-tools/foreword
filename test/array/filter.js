const test = require('tape')
const filter = require('../../array/filter')

test('array filter: return subset of list where predicate matches', t => {
  const result = filter(x => x === 1, [1, 2, 3])

  t.same(result, [1])
  t.end()
})
