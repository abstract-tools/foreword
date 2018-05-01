const test = require('tape')
const match = require('../../function/match')
const when = require('../../function/when')

const fn = match([
  when(x => x === 100, x => 'x is 100'),
  when(x => x > 100, x => 'x is greater than 100'),
  when(x => true, x => 'x is something else')
])

test('function match: condition test', t => {
  const result = fn(100)

  t.equal(result, 'x is 100')
  t.end()
})

test('function match: condition test', t => {
  const result = fn(200)

  t.equal(result, 'x is greater than 100')
  t.end()
})

test('function match: condition test', t => {
  const result = fn(50)

  t.equal(result, 'x is something else')
  t.end()
})

test('function match: returns undefined', t => {
  const f = match([
    when(x => x === 100, x => true)
  ])

  t.same(f(10), undefined)
  t.end()
})
