const test = require('tape')
const { groupBy } = require('../../array')

test('array groupBy', t => {
  const result = groupBy(Math.floor)([4.2, 6.1, 6.4])

  t.same(result, { 4: [4.2], 6: [6.1, 6.4] })
  t.end()
})
