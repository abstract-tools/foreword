const test = require('tape')
const { lt } = require('../../index')

test('function lt', t => {
  t.same(lt(1)(0), true)

  t.end()
})
