const curry = require('../function/curry')

// update :: Object k v -> Object k v -> Object k v
function update (a = {}, b = {}) {
  return Object.assign({}, b, a)
}

module.exports = curry(2, update)
