const curry = require('../function/curry')

function span (f, arr = []) {
  const i = arr.findIndex(x => !f(x))
  const n = i < 0 ? Infinity : i

  return [arr.slice(0, n), arr.slice(n)]
}

module.exports = curry(2, span)
