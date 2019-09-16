const test = require('tape')
const { gets } = require('../../object')

test('object gets', t => {
  const result = gets(['a', 'b'])({ a: 1, b: 2, c: 3 })

  t.same(result, [1, 2])
  t.end()
})
