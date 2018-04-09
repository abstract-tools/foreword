const curry = require('../function/curry')

function dropWhile (f, arr) {
  const i = arr.findIndex(x => !f(x))

  return i < 0 ? [] : arr.slice(i)
}

module.exports = curry(2, dropWhile)
