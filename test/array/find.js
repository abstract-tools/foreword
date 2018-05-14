const test = require('tape')
const { find } = require('../../array')

test('array find: return first value predicate matched', t => {
  const result = find(x => x === 1)([3, 2, 1])

  t.same(result, 1)
  t.end()
})

test('array find: return undefined if no match is found', t => {
  const result = find(x => x === 1)([4, 3, 2])

  t.same(result, undefined)
  t.end()
})
