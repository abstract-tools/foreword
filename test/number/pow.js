const test = require('tape')
const pow = require('../../number/pow')

test('number pow', t => {
  const result = pow(2, -2)

  t.same(result, 4)
  t.end()
})
