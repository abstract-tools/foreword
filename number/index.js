const add = require('./add');
const div = require('./div');
const mul = require('./mul');
const sub = require('./sub');

module.exports = {
  add,
  div,
  mul,
  sub,
  divide: div,
  multiply: mul,
  subtract: sub
};
