const test = require('tape')
const { max } = require('../../array')

test('array max: get highest number in array', t => {
  const result = max([4, 11, 3, 3, 69, 420])

  t.same(result, 420)
  t.end()
})

test('array max: get highest string in array', t => {
  const result = max(['cat', 'dog', 'zebra', 'ant'])

  t.same(result, 'zebra')
  t.end()
})
