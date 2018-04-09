const curry = require('../function/curry')

function some (f, arr) {
  return arr.some(f)
}

module.exports = curry(2, some)
