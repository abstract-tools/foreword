const test = require('tape')
const filter = require('../../object/filter')

test('object filter', t => {
  const result = filter(['id', 'test'], {
    id: 123,
    test: 'test',
    name: 'bob'
  })

  t.same(result, {
    id: 123,
    test: 'test'
  })

  t.end()
})
