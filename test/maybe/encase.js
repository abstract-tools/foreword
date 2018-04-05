const test = require('tape')
const encase = require('../../maybe/encase')

test('maybe encase', t => {
  const getter = x => x.a.b.c

  const result1 = encase(getter, {a: 0})
  const result2 = encase(getter, {a: {b: {c: 0}}})

  t.same(result1, undefined)
  t.same(result2, 0)

  t.end()
})
