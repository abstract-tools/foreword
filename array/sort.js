const curry = require('../function/curry')

function sort (f, arr = []) {
  return [...arr].sort(f)
}

module.exports = curry(2, sort)
