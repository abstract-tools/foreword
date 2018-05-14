const test = require('tape')
const { lte } = require('../../index')

test('function lte', t => {
  t.same(lte(1)(1), true)
  t.same(lte(2)(1), true)

  t.end()
})
