const curry = require('../function/curry')

function map (f, arr = []) {
  return arr.map(f)
}

module.exports = curry(2, map)
