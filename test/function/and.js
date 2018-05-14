const test = require('tape')
const { and } = require('../../index')

test('function and: returns true if both values are true', t => {
  const result = and(true)(true)

  t.same(result, true)
  t.end()
})
