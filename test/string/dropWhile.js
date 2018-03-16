const test = require('tape')
const dropWhile = require('../../string/dropWhile')

test('string dropWhile', t => {
  const result = dropWhile(x => x === 'm', 'mmmhmmm')

  t.same(result, 'hmmm')
  t.end()
})
