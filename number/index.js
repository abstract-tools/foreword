const add = require('./add')
const clamp = require('./clamp')
const dec = require('./dec')
const divide = require('./divide')
const inc = require('./inc')
const isEven = require('./isEven')
const isOdd = require('./isOdd')
const max = require('./max')
const min = require('./min')
const mod = require('./mod')
const multiply = require('./multiply')
const negate = require('./negate')
const pow = require('./pow')
const rem = require('./rem')
const subtract = require('./subtract')

module.exports = {
  add,
  clamp,
  dec,
  divide,
  inc,
  isEven,
  isOdd,
  max,
  min,
  mod,
  multiply,
  negate,
  pow,
  rem,
  subtract,
  div: divide,
  mul: multiply,
  sub: subtract
}
