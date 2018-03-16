const test = require('tape')
const takeWhile = require('../../string/takeWhile')

test('string takeWhile', t => {
  const result = takeWhile(x => x === 'm', 'mmmhmmm')

  t.same(result, 'mmm')
  t.end()
})
