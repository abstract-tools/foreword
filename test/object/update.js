const test = require('tape')
const { update } = require('../../object')

test('object update: changes same key value, adds new key value', t => {
  const result = update({ a: false, b: true })({ a: true, c: true })

  t.same(result, { a: false, b: true, c: true })
  t.end()
})
