const test = require('tape')
const takeWhile = require('../../string/takeWhile')

test('string takeWhile', t => {
  const result = takeWhile(x => x === 'm', 'mmmhmmm')

  t.same(result, 'mmm')
  t.end()
})

test('string takeWhile: take all', t => {
  const result = takeWhile(x => x === 'm', 'mmmmmmm')

  t.same(result, 'mmmmmmm')
  t.end()
})
