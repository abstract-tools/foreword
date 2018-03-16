const test = require('tape')
const mod = require('../../number/mod')

test('number mod', t => {
  const result = mod(-20, 3)

  t.same(result, 1)
  t.end()
})
