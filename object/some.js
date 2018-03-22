const curry = require('../function/curry')

// some :: Object k (a -> Boolean) -> Object k v -> Boolean
function some (spec = {}, obj = {}) {
  return Object.keys(spec).some(k => {
    return spec[k](obj[k])
  })
}

module.exports = curry(2, some)
