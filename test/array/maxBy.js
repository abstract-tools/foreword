const test = require('tape')
const maxBy = require('../../array/maxBy')

test('array maxBy', t => {
  const result = maxBy(x => x.length, ['bc','abc','a','b'])

  t.same(result, 'abc')
  t.end()
})
