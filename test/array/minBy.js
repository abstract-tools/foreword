const test = require('tape')
const minBy = require('../../array/minBy')

test('array minBy', t => {
  const result = minBy(x => x.length, ['bc','abc','a','b'])

  t.same(result, 'a')
  t.end()
})
