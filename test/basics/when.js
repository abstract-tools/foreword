const test = require('tape')
const { when } = require('../../index')

test('when predicate is true', t => {
  const result = when(
    x => x > 3,
    x => x * 2
  )

  t.same(result(4), 8)
  t.same(result(3), undefined)

  t.end()
})
