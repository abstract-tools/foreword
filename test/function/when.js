const test = require('tape')
const { when } = require('../../index')

const result = when(
  x => x > 3,
  x => x * 2
)

test('when predicate is true', t => {
  t.same(result(4), 8)
  t.end()
})

test('when predicate is false', t => {
  t.same(result(3), undefined)
  t.end()
})
