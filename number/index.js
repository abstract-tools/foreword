const add = require('./add');
const div = require('./div');
const isEven = require('./isEven');
const isOdd = require('./isOdd');
const max = require('./max');
const min = require('./min');
const mul = require('./mul');
const sub = require('./sub');

module.exports = {
  add,
  div,
  isEven,
  isOdd,
  max,
  min,
  mul,
  sub,
  divide: div,
  multiply: mul,
  subtract: sub
};
