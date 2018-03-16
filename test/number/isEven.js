const test = require('tape')
const isEven = require('../../number/isEven')

test('number isEven', t => {
  const result = isEven(4)

  t.same(result, true)
  t.end()
})
