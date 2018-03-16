const test = require('tape')
const slice = require('../../string/slice')

test('string slice: return subset of string', t => {
  const result = slice(1, 3, 'abcdef')

  t.same(result, 'bc')
  t.end()
})
