const test = require('tape')
const { append } = require('../../array')

test('array append: adds value to the end', t => {
  const result1 = append([3, 4])([1, 2])
  const result2 = append(3)([1, 2])

  t.same(result1, [1, 2, [3, 4]])
  t.same(result2, [1, 2, 3])

  t.end()
})
