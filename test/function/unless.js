const test = require('tape')
const { unless } = require('../../index')

const result = unless(
  x => x > 3,
  x => x * 2
)

test('unless predicate is true', t => {
  t.same(result(4), undefined)
  t.end()
})

test('unless predicate is false', t => {
  t.same(result(3), 6)
  t.end()
})
