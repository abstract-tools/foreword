const test = require('tape')
const { equalBy } = require('../../index')

test('function equalBy', t => {
  const result = equalBy(Math.abs)(5)(-5)

  t.same(result, true)
  t.end()
})
