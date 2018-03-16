const test = require('tape')
const lcm = require('../../number/lcm')

test('number lcm', t => {
  const result = lcm(12, 18)

  t.same(result, 36)
  t.end()
})
