const test = require('tape')
const { search } = require('../../string')

test('string search', t => {
  const result1 = search('abc')('xyzabc')
  const result2 = search('abc')('tuvwyx')

  t.same(result1, 3)
  t.same(result2, -1)

  t.end()
})
