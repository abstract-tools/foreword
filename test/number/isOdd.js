const test = require('tape')
const isOdd = require('../../number/isOdd')

test('number isOdd', t => {
  const result = isOdd(3)

  t.same(result, true)
  t.end()
})
