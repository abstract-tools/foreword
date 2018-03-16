const test = require('tape')
const compact = require('../../array/compact')

test('array compact: return only truthy values', t => {
  const result = compact([0, 1, 'test', null, false])

  t.same(result, [1,'test'])
  t.end()
})
