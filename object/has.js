const curry = require('../function/curry')

function has (str, obj) {
  return Object.prototype.hasOwnProperty.call(obj, str)
}

module.exports = curry(2, has)
