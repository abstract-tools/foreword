const curry = require('../function/curry')

function takeWhile (f, arr = []) {
  const i = arr.findIndex(x => !f(x))

  return i < 0 ? arr : arr.slice(0, i)
}

module.exports = curry(2, takeWhile)
