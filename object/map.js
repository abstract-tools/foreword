const curry = require('../function/curry')

function map (spec = {}, obj = {}) {
  const keys = Object.keys(obj)

  return Object.assign({}, obj, Object.keys(spec).reduce((a, k) => {
    return !keys.includes(k) ? a : Object.assign(a, {
      [k]: spec[k](obj[k])
    })
  }, {}))
}

module.exports = curry(2, map)
