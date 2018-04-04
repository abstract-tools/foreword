const curry = require('../function/curry')

function every (spec = {}, obj = {}) {
  return Object.keys(spec).every(k => {
    return spec[k](obj[k])
  })
}

module.exports = curry(2, every)
