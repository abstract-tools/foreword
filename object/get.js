const curry = require('../function/curry')

// get :: String -> Object k v -> Maybe v
const get = curry(2, function get (str = '', obj = {}) {
  return obj[str]
})

module.exports = get
