const test = require('tape')
const { ascendBy } = require('../../index')

test('function ascendBy', t => {
  const result = [{age: 30}, {age: 20}, {age: 25}].sort(ascendBy(x => x.age))

  t.same(result, [{age: 20}, {age: 25}, {age: 30}])
  t.end()
})
