const curry = require('../function/curry')

// find :: (a -> Boolean) -> Array a -> Maybe a
function find (f, arr = []) {
  return arr.find(f)
}

module.exports = curry(2, find)
