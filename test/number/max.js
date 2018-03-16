const test = require('tape')
const max = require('../../number/max')

test('number max', t => {
  const result = max(4, 9)

  t.same(result, 9)
  t.end()
})
