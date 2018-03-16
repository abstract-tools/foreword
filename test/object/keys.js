const test = require('tape')
const keys = require('../../object/keys')

test('object keys: returns an array of keys', t => {
  const result = keys({a:'test',b:'test'})

  t.same(result, ['a', 'b'])
  t.end()
})
