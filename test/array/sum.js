const test = require('tape')
const sum = require('../../array/sum')

test('array sum', t => {
  const result = sum([1,2,3,4,5])

  t.same(result, 15)
  t.end()
})
