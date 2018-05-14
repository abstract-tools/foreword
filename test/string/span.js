const test = require('tape')
const { span } = require('../../string')

test('string span', t => {
  const isM = span(x => x === 'm')

  const result1 = isM('mmmhmmm')
  const result2 = isM('')

  t.same(result1, ['mmm', 'hmmm'])
  t.same(result2, ['', ''])

  t.end()
})
