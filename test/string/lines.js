const test = require('tape')
const lines = require('../../string/lines')

test('string lines: returns array of lines', t => {
  const result = lines('foo\nbar\nbaz\n')

  t.same(result, ['foo','bar','baz'])
  t.end()
})
