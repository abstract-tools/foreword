const test = require('tape')
const { takeWhile } = require('../../array')

test('array takeWhile', t => {
  const result = takeWhile(x => x % 2 !== 0)([1, 3, 5, 4, 8])

  t.same(result, [1, 3, 5])
  t.end()
})

test('array takeWhile: take all', t => {
  const result = takeWhile(x => x % 2 !== 0)([1, 3, 5])

  t.same(result, [1, 3, 5])
  t.end()
})
