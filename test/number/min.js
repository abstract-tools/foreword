const test = require('tape')
const min = require('../../number/min')

test('number min', t => {
  const result = min(4, 9)

  t.same(result, 4)
  t.end()
})
