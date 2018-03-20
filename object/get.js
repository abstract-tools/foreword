const curry = require('../function/curry')

// get :: String -> Object k v -> Maybe v
function get (str = '', obj = {}) {
  return obj[str]
}

module.exports = curry(2, get)
