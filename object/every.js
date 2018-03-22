const curry = require('../function/curry')

// every :: Object k (a -> Boolean) -> Object k v -> Boolean
function every (spec = {}, obj = {}) {
  return Object.keys(spec).every(k => {
    return spec[k](obj[k])
  })
}

module.exports = curry(2, every)
