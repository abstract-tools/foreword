const test = require('tape')
const { always } = require('../../index')

test('function always: returns original value', t => {
  const result = always('a')('b')

  t.equal(result, 'a')
  t.end()
})
