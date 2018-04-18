const curry = require('../function/curry')

function get (n, arr) {
  return arr[n]
}

module.exports = curry(2, get)
