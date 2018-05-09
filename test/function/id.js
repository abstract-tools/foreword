const test = require('tape')
const { id } = require('../../index')

test('function identity: returns itself', t => {
  const result = id('a')

  t.same(result, 'a')
  t.end()
})
