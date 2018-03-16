const test = require('tape')
const span = require('../../string/span')

test('string span', t => {
  const result = span(x => x === 'm', 'mmmhmmm')

  t.same(result, ['mmm', 'hmmm'])
  t.end()
})
