const test = require('tape')
const lt = require('../../function/lt')

test('function lt', t => {
  t.same(lt(1, 0), true)

  t.end()
})
