const test = require('tape')
const product = require('../../array/product')

test('array product', t => {
  const result = product([1,2,3])

  t.same(result, 6)
  t.end()
})
