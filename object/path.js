const curry = require('../function/curry')

// path :: Array k -> Object k v -> Maybe v
function path ([key = '', ...keys], obj = {}) {
  if (!keys.length || !obj[key]) {
    return obj[key]
  }

  return path(keys, obj[key])
}

module.exports = curry(2, path)
