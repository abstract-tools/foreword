const test = require('tape')
const reverse = require('../../string/reverse')

test('string reverse: swap order of string', t => {
  const result = reverse('abc')

  t.same(result, 'cba')
  t.end()
})
