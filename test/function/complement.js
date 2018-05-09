const test = require('tape')
const { complement } = require('../../index')

test('function complement: returns false if predicate is true', t => {
  const result = complement(Number.isInteger)(42)

  t.same(result, false)
  t.end()
})
