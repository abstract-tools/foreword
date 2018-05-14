const test = require('tape')
const { flip } = require('../../index')

test('function flip: first two arguments are swapped', t => {
  const result = flip((a, b) => a.concat(b))

  t.same(result([1, 2, 3])([4]), [4, 1, 2, 3])
  t.end()
})
