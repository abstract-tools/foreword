const test = require('tape')
const span = require('../../array/span')

test('array span', t => {
  const even = span(x => x % 2 === 0)

  const result1 = even([2, 4, 5, 6])
  const result2 = even([])

  t.same(result1, [[2, 4], [5, 6]])
  t.same(result2, [[], []])

  t.end()
})
