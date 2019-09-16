const test = require('tape')
const { concat } = require('../../object')

test('object concat', t => {
  const result = concat([{ name: 'fred', age: 10 }, { name: 'alice', age: 40 }, { name: 'bob' }])

  t.same(result, { name: 'bob', age: 40 })
  t.end()
})
