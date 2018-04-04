const curry = require('../function/curry')

function take (n = Infinity, str = '') {
  return str.slice(0, n)
}

module.exports = curry(2, take)
