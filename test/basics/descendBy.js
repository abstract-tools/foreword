const test = require('tape')
const { descendBy } = require('../../index')

test('descendBy', t => {
  const result = [{age: 30}, {age: 20}, {age: 25}, {age: 20}].sort(descendBy(x => x.age))

  t.same(result, [{age: 30}, {age: 25}, {age: 20}, {age: 20}])
  t.end()
})
