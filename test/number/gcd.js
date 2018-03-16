const test = require('tape')
const gcd = require('../../number/gcd')

test('number gcd: get greatest common denominator', t => {
  const result = gcd(12, 18)

  t.same(result, 6)
  t.end()
})
