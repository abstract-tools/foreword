const curry = require('../function/curry')

function get (k, obj) {
  return obj[k]
}

module.exports = curry(2, get)
