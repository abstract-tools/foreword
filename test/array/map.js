const test = require('tape')
const map = require('../../array/map')

test('array map: apply function to every value in list', t => {
  const result = map(x => x * 2, [1, 2, 3])

  t.same(result, [2, 4, 6])
  t.end()
})
