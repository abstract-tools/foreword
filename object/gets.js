const curry = require('../function/curry')

// gets :: Array k -> Object k v -> Array (Maybe v)
const gets = curry(2, function gets (keys = [], obj = {}) {
  return keys.map(k => obj[k])
})

module.exports = gets
