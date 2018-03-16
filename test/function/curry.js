const test = require('tape')
const curry = require('../../function/curry')

test('function curry: returns a new function if fewer arguments are provided', t => {
  const sum = curry(3, (a, b, c) => a + b + c)
  const sum3 = sum(1, 2)

  t.same(sum3(3), 6)
  t.end()
})

test('function curry: works with default parameters', t => {
  const add = curry(2, (a, b = 2) => a + b)
  const add1 = add(1)

  t.same(add1(5), 6)
  t.same(add1(undefined), 3)

  t.end()
})

test('function curry: throws out extra arguments', t => {
  const sum = curry(2, (a, b) => a * b)

  t.same(sum(1, 2, 3), 2)
  t.end()
})
