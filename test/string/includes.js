const test = require('tape')
const { includes } = require('../../string')

test('string includes', t => {
  const result1 = includes('abc')('abcdef')
  const result2 = includes('abc')('abdef')

  t.same(result1, true)
  t.same(result2, false)

  t.end()
})
