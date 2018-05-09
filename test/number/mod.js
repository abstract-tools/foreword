const test = require('tape')
const { mod } = require('../../index')

test('number mod', t => {
  const result = mod(-20)(3)

  t.same(result, 1)
  t.end()
})
