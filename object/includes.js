const curry = require('../function/curry')

function includes (k, obj) {
  return Object.prototype.hasOwnProperty.call(obj, k)
}

module.exports = curry(2, includes)
