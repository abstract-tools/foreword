const test = require('tape')
const { isEven } = require('../../index')

test('number isEven', t => {
  const result = isEven(4)

  t.same(result, true)
  t.end()
})
