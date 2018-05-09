const test = require('tape')
const { match, when } = require('../../index')

const fn = match([
  when(x => x === 100, x => 'x is 100'),
  when(x => x > 100, x => 'x is greater than 100'),
  when(x => true, x => 'x is something else')
])

test('function match: condition test', t => {
  const result1 = fn(100)
  const result2 = fn(200)
  const result3 = fn(50)

  t.equal(result1, 'x is 100')
  t.equal(result2, 'x is greater than 100')
  t.equal(result3, 'x is something else')

  t.end()
})

test('function match: returns undefined', t => {
  const f = match([
    when(x => x === 100, x => true)
  ])

  t.same(f(10), undefined)
  t.end()
})
