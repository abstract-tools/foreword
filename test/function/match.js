const test = require('tape')
const match = require('../../function/match')

const fn = match([
  [x => x === 100, x => 'x is 100'],
  [x => x > 100, x => 'x is greater than 100'],
  [_ => true, _ => 'x is something else']
])

test('condition test', t => {
  const result = fn(100)

  t.equal(result, 'x is 100')
  t.end()
})

test('condition test', t => {
  const result = fn(200)

  t.equal(result, 'x is greater than 100')
  t.end()
})

test('condition test', t => {
  const result = fn(50)

  t.equal(result, 'x is something else')
  t.end()
})
