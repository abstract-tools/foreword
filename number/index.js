const add = require('./add')
const divide = require('./divide')
const isEven = require('./isEven')
const isOdd = require('./isOdd')
const max = require('./max')
const min = require('./min')
const multiply = require('./multiply')
const subtract = require('./subtract')

module.exports = {
  add,
  divide,
  isEven,
  isOdd,
  max,
  min,
  multiply,
  subtract,
  div: divide,
  mul: multiply,
  sub: subtract
}
