const curry = require('../function/curry')

function drop (n = 0, str = '') {
  return str.slice(n, Infinity)
}

module.exports = curry(2, drop)
