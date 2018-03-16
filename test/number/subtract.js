const test = require('tape')
const subtract = require('../../number/subtract')

test('number subtract', t => {
  const result = subtract(1, 10)

  t.same(result, 9)
  t.end()
})
