const curry = require('./curry')

// Basic functions

// a -> b -> a
function always (a, b) {
  return a
}

// Boolean -> Boolean -> Boolean
function and (a, b) {
  return a && b
}

// Array (a -> b) -> Array a -> Array b
function ap (fs, arr) {
  return fs.reduce((acc, f) => {
    return acc.concat(arr.map(f))
  }, [])
}

// (a -> b) -> a -> b
function apply (f, a) {
  return f(a)
}

// (a -> b -> c) -> a -> b -> c
function binary (f, a, b) {
  return f(a, b)
}

// (a -> Boolean) -> (a -> Boolean) -> a -> Boolean
function both (f, g, a) {
  return f(a) && g(a)
}

function branch (p, f, g, a) {
  return p(a) ? f(a) : g(a)
}

function complement (f, a) {
  return !f(a)
}

function compose (f, g, a) {
  return f(g(a))
}

function either (f, g, a) {
  return f(a) || g(a)
}

function equal (a, b) {
  return a === b
}

function equalBy (f, a, b) {
  return f(a) === f(b)
}

function flip (f, a, b) {
  return f(b, a)
}

function gt (a, b) {
  return b > a
}

function gte (a, b) {
  return b >= a
}

function id (a) {
  return a
}

function lt (a, b) {
  return b < a
}

function lte (a, b) {
  return b <= a
}

function match (arr, a) {
  return arr.reduce((acc, f) => {
    return (acc !== undefined) ? acc : f(a)
  }, undefined)
}

function not (a) {
  return !a
}

function on (f, g, a, b) {
  return f(g(a), g(b))
}

function or (a, b) {
  return a || b
}

function pipe (arr, init) {
  return arr.reduce((acc, f) => f(acc), init)
}

function unless (f, g, a) {
  return f(a) ? undefined : g(a)
}

function when (f, g, a) {
  return f(a) ? g(a) : undefined
}

function where (a, f) {
  return f(a)
}

// Math

function add (a, b) {
  return a + b
}

function clamp (a, b, c) {
  return c < a ? a : c > b ? b : c
}

function dec (n) {
  return n - 1
}

function divide (a, b) {
  return b / a
}

function inc (n) {
  return n + 1
}

function isEven (n) {
  return n % 2 === 0
}

function isOdd (n) {
  return n % 2 !== 0
}

function max (a, b) {
  return a > b ? a : b
}

function min (a, b) {
  return a > b ? b : a
}

function mod (a, b) {
  return ((a % b) + b) % b
}

function multiply (a, b) {
  return a * b
}

function negate (n) {
  return -n
}

function pow (a, b) {
  return Math.pow(b, a)
}

function rem (a, b) {
  return b % a
}

function subtract (a, b) {
  return b - a
}

module.exports = {
  add: curry(2, add),
  always: curry(2, always),
  and: curry(2, and),
  ap: curry(2, ap),
  apply: curry(2, apply),
  binary: curry(3, binary),
  both: curry(3, both),
  branch: curry(4, branch),
  clamp: curry(3, clamp),
  complement: curry(2, complement),
  compose: curry(3, compose),
  curry,
  dec,
  divide: curry(2, divide),
  either: curry(3, either),
  equal: curry(2, equal),
  equalBy: curry(3, equalBy),
  flip: curry(3, flip),
  gt: curry(2, gt),
  gte: curry(2, gte),
  id,
  inc,
  isEven,
  isOdd,
  lt: curry(2, lt),
  lte: curry(2, lte),
  match: curry(2, match),
  max: curry(2, max),
  min: curry(2, min),
  mod: curry(2, mod),
  multiply: curry(2, multiply),
  negate,
  not,
  on: curry(4, on),
  or: curry(2, or),
  pipe: curry(2, pipe),
  pow: curry(2, pow),
  rem: curry(2, rem),
  subtract: curry(2, subtract),
  unless: curry(3, unless),
  when: curry(3, when),
  where: curry(2, where)
}
