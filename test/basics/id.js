const test = require('tape')
const { id } = require('../../index')

test('id: returns itself', t => {
  const result = id('a')

  t.same(result, 'a')
  t.end()
})
