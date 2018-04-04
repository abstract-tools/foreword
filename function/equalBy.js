const curry = require('./curry')

function equalBy (f, a, b) {
  return f(a) === f(b)
}

module.exports = curry(3, equalBy)
