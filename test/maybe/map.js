const test = require('tape')
const map = require('../../maybe/map')

test('maybe map: applies function to non-null value', t => {
  const result = map(x => x + 1, 1)

  t.same(result, 2)
  t.end()
})

test('maybe map: returns value if null', t => {
  const result = map(x => x + 1, undefined)

  t.same(result, undefined)
  t.end()
})
