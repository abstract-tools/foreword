const test = require('tape')
const has = require('../../string/has')

test('string has: returns true if substring is found', t => {
  const result = has('abc', 'abcdef')

  t.same(result, true)
  t.end()
})

test('string has: returns false if substring is not found', t => {
  const result = has('abc', 'abdef')

  t.same(result, false)
  t.end()
})
