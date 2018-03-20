const curry = require('../function/curry')

// map :: Object k (a -> b) -> Object k v -> Object k v
function map (spec = {}, obj = {}) {
  return Object.assign({}, obj, Object.keys(spec).reduce((a, k) => {
    return (obj[k] === undefined) ? a : Object.assign(a, {
      [k]: spec[k](obj[k])
    })
  }, {}))
}

module.exports = curry(2, map)
