const test = require('tape')
const { dropWhile } = require('../../string')

test('string dropWhile', t => {
  const result = dropWhile(x => x === 'm')('mmmhmmm')

  t.same(result, 'hmmm')
  t.end()
})

test('string dropWhile: drop all', t => {
  const result = dropWhile(x => x === 'm')('mmmmmmm')

  t.same(result, '')
  t.end()
})
