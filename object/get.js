const curry = require('../function/curry')

function get (str, obj) {
  return obj[str]
}

module.exports = curry(2, get)
