const test = require('tape')
const { concat } = require('../../string')

test('string concat: combines a list of strings', t => {
  const result = concat(['one', 'two', 'three'])

  t.same(result, 'onetwothree')
  t.end()
})
