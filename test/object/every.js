const test = require('tape')
const { every } = require('../../object')

const result = every({
  a: x => x === 'foo',
  b: x => x !== 'bar',
  x: x => x > 10,
  y: x => x < 20
})

test('object every: predicate is true', t => {
  t.same(result({ a: 'foo', b: 'xxx', x: 11, y: 19 }), true)
  t.end()
})

test('object every: predicate is false', t => {
  t.same(result({ a: 'xxx', b: 'xxx', x: 11, y: 19 }), false)
  t.end()
})

test('object every: return false if not found', t => {
  t.same(result({ z: 1 }), false)
  t.end()
})
