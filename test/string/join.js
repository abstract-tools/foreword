const test = require('tape')
const { join } = require('../../string')

test('string join: place string between array of strings', t => {
  const result = join('test')(['a', 'b', 'c'])

  t.same(result, 'atestbtestc')
  t.end()
})
