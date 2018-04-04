const curry = require('../function/curry')

function drop (n = 0, arr = []) {
  return arr.slice(n, Infinity)
}

module.exports = curry(2, drop)
