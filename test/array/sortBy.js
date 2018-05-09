const test = require('tape')
const { sortBy } = require('../../array')

test('array sortBy', t => {
  const result = sortBy(x => x.name, [
    { name: 'bat' },
    { name: 'ant' },
    { name: 'cat' },
    { name: 'ant' }
  ])

  t.same(result, [
    { name: 'ant' },
    { name: 'ant' },
    { name: 'bat' },
    { name: 'cat' }
  ])

  t.end()
})
