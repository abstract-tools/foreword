const test = require('tape')
const { map } = require('../../object')

const data = {
  id: 123,
  firstName: '   Test ',
  data: {
    elapsed: 100,
    remaining: 1000
  }
}

test('object map', t => {
  const result = map({
    firstName: x => x.trim(),
    lastName: x => x.trim(),
    data: map({
      elapsed: x => x + 1,
      remaining: x => x - 1
    })
  })

  t.same(result(data), {
    id: 123,
    firstName: 'Test',
    data: {
      elapsed: 101,
      remaining: 999
    }
  })

  t.end()
})
