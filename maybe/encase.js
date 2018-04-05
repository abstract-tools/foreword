const curry = require('../function/curry')

function encase (f, a) {
  try {
    return f(a)
  } catch (err) {
    return undefined
  }
}

module.exports = curry(2, encase)
