const test = require('tape')
const not = require('../../function/not')

test('function not: returns the opposite boolean', t => {
  const result = not(true)

  t.same(result, false)
  t.end()
})
