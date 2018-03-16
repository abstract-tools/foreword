const test = require('tape')
const values = require('../../object/values')

test('object values: returns an array of values', t => {
  const result = values({a:true, b:true})

  t.same(result, [true, true])
  t.end()
})
