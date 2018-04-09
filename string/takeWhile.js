const curry = require('../function/curry')

function takeWhile (f, str) {
  const i = Array.from(str).findIndex(x => !f(x))

  return i < 0 ? str : str.slice(0, i)
}

module.exports = curry(2, takeWhile)
