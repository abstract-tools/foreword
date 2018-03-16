const test = require('tape')
const where = require('../../object/where')

const result = where({
  a: x => x === 'foo',
  b: x => x !== 'bar',
  x: x => x > 10,
  y: x => x < 20
})

test('object where: predicate is true', t => {
  t.same(result({a: 'foo', b: 'xxx', x: 11, y: 19}), true)
  t.end()
})

test('object where: predicate is false', t => {
  t.same(result({a: 'xxx', b: 'xxx', x: 11, y: 19}), false)
  t.end()
})
