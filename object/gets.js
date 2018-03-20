const curry = require('../function/curry')

// gets :: Array k -> Object k v -> Array (Maybe v)
function gets (keys = [], obj = {}) {
  return keys.map(k => obj[k])
}

module.exports = curry(2, gets)
