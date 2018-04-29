const curry = require('../function/curry')

function includes (str, obj) {
  return Object.prototype.hasOwnProperty.call(obj, str)
}

module.exports = curry(2, includes)
