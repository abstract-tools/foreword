const curry = require('../function/curry')

function every (f, arr = []) {
  return arr.every(f)
}

module.exports = curry(2, every)
