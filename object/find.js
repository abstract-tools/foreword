const curry = require('../function/curry')

// find :: Array k -> Object k v -> Maybe v
function find ([key = '', ...keys], obj = {}) {
  if (!keys.length) {
    return obj[key]
  }

  if (obj[key] == null) {
    return undefined
  }

  return find(keys, obj[key])
}

module.exports = curry(2, find)
