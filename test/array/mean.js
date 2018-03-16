const test = require('tape')
const mean = require('../../array/mean')

test('array mean', t => {
  const result = mean([1,2,3,4,5])

  t.same(result, 3)
  t.end()
})
