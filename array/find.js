const curry = require('../function/curry')

// find :: (a -> Boolean) -> Array a -> Maybe a
const find = curry(2, function find (f, arr = []) {
  return arr.find(f)
})

module.exports = find
