const test = require('tape')
const ap = require('../../function/ap')

test('function ap: apply a list of functions over an array', t => {
  const result = ap([x => x * 2, x => x + 3], [1,2,3])

  t.same(result, [2,4,6,4,5,6])
  t.end()
})
