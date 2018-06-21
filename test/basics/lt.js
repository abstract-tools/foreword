const test = require('tape')
const { lt } = require('../../index')

test('lt', t => {
  t.same(lt(1)(0), true)

  t.end()
})
