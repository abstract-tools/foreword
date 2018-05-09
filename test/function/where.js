const test = require('tape')
const { where } = require('../../index')

test('function where', t => {
  const result = where({ a: x => x + 1 }, ({ a }) => a(2))

  t.same(result, 3)
  t.end()
})
