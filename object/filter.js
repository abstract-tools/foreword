const curry = require('../function/curry')

// filter :: Array k -> Object k v -> Object k v
const filter = curry(2, function filter (arr = [], obj = {}) {
  return arr.reduce((a, b) => {
    return Object.assign(a, {
      [b]: obj[b]
    })
  }, {})
})

module.exports = filter
