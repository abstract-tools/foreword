const test = require('tape')
const { scan } = require('../../array')

test('array scan', t => {
  const result = scan((a, b) => a + b)(0)([1, 2, 3])

  t.same(result, [0, 1, 3, 6])
  t.end()
})
