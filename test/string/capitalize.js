const test = require('tape')
const capitalize = require('../../string/capitalize')

test('string capitalize', t => {
  const result = capitalize('hello, world!')

  t.same(result, 'Hello, world!')
  t.end()
})
