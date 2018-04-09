const curry = require('../function/curry')

function drop (n, str) {
  return str.slice(n, Infinity)
}

module.exports = curry(2, drop)
