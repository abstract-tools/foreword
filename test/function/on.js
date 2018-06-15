const test = require('tape')
const { on } = require('../../index')

test('function on', t => {
  const result = on((x, y) => x === y, x => x.length)('hey', 'now')

  t.same(result, true)
  t.end()
})
