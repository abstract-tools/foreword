const test = require('tape')
const { sortWith } = require('../../array')
const { ascendBy, descendBy } = require('../../index')

test('array sortWith', t => {
  const data = [{ name: 'alice', age: 40 }, { name: 'bob', age: 30 }, { name: 'clara', age: 40 }]
  const ageNameSort = sortWith([
    descendBy(x => x.age),
    ascendBy(x => x.name)
  ])

  const result = ageNameSort(data)

  t.same(result, [{ name: 'alice', age: 40 }, { name: 'clara', age: 40 }, { name: 'bob', age: 30 }])
  t.end()
})
