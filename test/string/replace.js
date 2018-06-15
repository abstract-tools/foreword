const test = require('tape')
const { replace } = require('../../string')

test('string replace', t => {
  const result = replace('a', 'b')('abc')

  t.same(result, 'bbc')
  t.end()
})
