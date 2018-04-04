const curry = require('../function/curry')

function some (spec = {}, obj = {}) {
  return Object.keys(spec).some(k => {
    return spec[k](obj[k])
  })
}

module.exports = curry(2, some)
