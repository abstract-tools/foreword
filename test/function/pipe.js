const test = require('tape')
const { pipe } = require('../../index')

test('function pipe: pass value from left to right', t => {
  const result = pipe([
    x => x + 1,
    x => x * 2
  ])

  t.same(result(2), 6)
  t.end()
})
