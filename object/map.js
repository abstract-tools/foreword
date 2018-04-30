const curry = require('../function/curry')

function map (spec, obj) {
  return Object.assign({}, obj, Object.keys(spec).reduce((acc, k) => {
    return !obj.hasOwnProperty(k) ? acc : Object.assign(acc, {
      [k]: spec[k](obj[k])
    })
  }, {}))
}

module.exports = curry(2, map)
