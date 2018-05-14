const test = require('tape')
const { take } = require('../../string')

test('string take: take first 3 elements from string', t => {
  const result = take(3)('mmmhmmm')

  t.same(result, 'mmm')
  t.end()
})
