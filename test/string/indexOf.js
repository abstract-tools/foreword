const test = require('tape')
const { indexOf } = require('../../string')

test('string indexOf', t => {
  const result1 = indexOf('a')(['a', 'b', 'c'])
  const result2 = indexOf('a')(['b', 'c'])

  t.same(result1, 0)
  t.same(result2, -1)

  t.end()
})
