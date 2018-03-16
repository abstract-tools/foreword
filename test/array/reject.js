const test = require('tape')
const reject = require('../../array/reject')

test('array reject', t => {
  const result = reject(x => x % 2 !== 0, [1,2,3,4,5])

  t.same(result, [2,4])
  t.end()
})
