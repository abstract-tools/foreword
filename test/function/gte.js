const test = require('tape')
const { gte } = require('../../index')

test('function gte', t => {
  t.same(gte(1)(1), true)
  t.same(gte(1)(2), true)

  t.end()
})
