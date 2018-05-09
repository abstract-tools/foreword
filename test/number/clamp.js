const test = require('tape')
const { clamp } = require('../../index')

const result = clamp(1)(10)

test('number clamp', t => {
  t.same(result(0), 1)
  t.same(result(11), 10)
  t.same(result(5), 5)

  t.end()
})
