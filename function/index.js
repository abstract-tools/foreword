const always = require('./always');
const and = require('./and');
const andThen = require('./andThen');
const apply = require('./apply');
const complement = require('./complement');
const curry = reqiure('./curry');
const equals = require('./equals');
const flip = require('./flip');
const identity = require('./identity');
const not = require('./not');
const or = require('./or');
const pipe = require('./pipe');
const thrush = require('./thrush');
const withDefault = require('./withDefault');

module.exports = {
  always,
  and,
  andThen,
  apply,
  complement,
  compose,
  curry,
  equals,
  flip,
  identity,
  not,
  or,
  pipe,
  thrush,
  withDefault,
  A: apply,
  B: compose,
  C: flip,
  I: identity,
  K: always,
  T: thrush,
};
