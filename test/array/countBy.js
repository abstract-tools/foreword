const test = require('tape')
const countBy = require('../../array/countBy')

test('array countBy', t => {
  const result1 = countBy(Math.floor, [4.2, 6.1, 6.4])
  const result2 = countBy(x => x.length, ['one', 'two', 'three'])

  t.same(result1, {4: 1, 6: 2})
  t.same(result2, {3: 2, 5: 1})

  t.end()
})
