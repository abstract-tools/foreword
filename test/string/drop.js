const test = require('tape')
const { drop } = require('../../string')

test('string drop: drop first 3 elements from string', t => {
  const result = drop(3)('mmmhmmm')

  t.same(result, 'hmmm')
  t.end()
})
