const curry = require('../function/curry')

function take (n, str) {
  return str.slice(0, n)
}

module.exports = curry(2, take)
