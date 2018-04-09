const curry = require('../function/curry')

function filter (f, arr) {
  return arr.filter(f)
}

module.exports = curry(2, filter)
