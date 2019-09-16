const test = require('tape')
const { reject } = require('../../object')

test('object reject', t => {
  const result = reject(['name', 'test'])({
    id: 123,
    name: 'bob',
    test: 'test'
  })

  t.same(result, { id: 123 })
  t.end()
})
