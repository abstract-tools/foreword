const test = require('tape')
const { some } = require('../../object')

const result = some({
  x: x => x > 10,
  y: x => x < 20
})

test('object some: predicate is true', t => {
  t.same(result({ x: 11, y: 25 }), true)
  t.end()
})

test('object some: predicate is false', t => {
  t.same(result({ x: 5, y: 25 }), false)
  t.end()
})

test('object some: return false if not found', t => {
  t.same(result({ z: 1 }), false)
  t.end()
})
