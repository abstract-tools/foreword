const test = require('tape')
const { unless } = require('../../index')

test('unless', t => {
  const result = unless(
    x => x > 3,
    x => x * 2
  )

  t.same(result(4), undefined)
  t.same(result(3), 6)

  t.end()
})
