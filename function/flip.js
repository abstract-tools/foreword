const curry = require('./curry')

function flip (f, a, b) {
  return f(b, a)
}

module.exports = curry(3, flip)
