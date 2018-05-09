const test = require('tape')
const { prepend } = require('../../array')

test('array prepend: adds value to the beginning', t => {
  const result1 = prepend([3, 4], [1, 2])
  const result2 = prepend(3, [1, 2])

  t.same(result1, [[3, 4], 1, 2])
  t.same(result2, [3, 1, 2])

  t.end()
})
