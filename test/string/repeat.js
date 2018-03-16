const test = require('tape')
const repeat = require('../../string/repeat')

test('string repeat', t => {
  const result = repeat(3, 'ha')

  t.same(result, 'hahaha')
  t.end()
})
