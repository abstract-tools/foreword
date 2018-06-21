const test = require('tape')
const { call } = require('../../index')

test('call: applies function to value', t => {
  const result = call(a => b => c => a + b + c)(1, 1, 1)

  t.same(result, 3)
  t.end()
})
