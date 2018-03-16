const test = require('tape')
const negate = require('../../number/negate')

test('number negate', t => {
  const result = negate(-2)

  t.same(result, 2)
  t.end()
})
