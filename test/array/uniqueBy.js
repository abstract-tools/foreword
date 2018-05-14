const test = require('tape')
const { uniqueBy } = require('../../array')

test('array uniqueBy', t => {
  const result = uniqueBy(x => x.length)(['and', 'here', 'are', 'some', 'words'])

  t.same(result, ['and', 'here', 'words'])
  t.end()
})
