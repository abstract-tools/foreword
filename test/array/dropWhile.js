const test = require('tape')
const dropWhile = require('../../array/dropWhile')

test('array dropWhile', t => {
  const result = dropWhile(x => x % 2 === 0, [2,4,5,6])

  t.same(result, [5,6])
  t.end()
})
