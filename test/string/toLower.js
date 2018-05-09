const test = require('tape')
const { toLower } = require('../../string')

test('string toLower: return all lowercase letters', t => {
  const result = toLower('AbCdEf')

  t.same(result, 'abcdef')
  t.end()
})
