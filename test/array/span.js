const test = require('tape')
const span = require('../../array/span')

test('array span', t => {
  const result = span(x => x % 2 === 0, [2,4,5,6])

  t.same(result, [[2,4],[5,6]])
  t.end()
})
