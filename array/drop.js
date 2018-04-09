const curry = require('../function/curry')

function drop (n, arr) {
  return arr.slice(n, Infinity)
}

module.exports = curry(2, drop)
