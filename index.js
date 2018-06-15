// add :: Number -> Number -> Number
function add (a) {
  return b => a + b
}

// always :: a -> b -> a
function always (a) {
  return b => a
}

// and :: a -> b -> a | b
function and (a) {
  return b => a && b
}

// ap :: [a -> b] -> [a] -> [b]
function ap (fs) {
  return arr => fs.reduce((acc, f) => {
    return acc.concat(arr.map(f))
  }, [])
}

// apply :: (a -> *) -> [a, *] -> b
function apply (f) {
  return arr => arr.reduce((acc, a) => acc(a), f)
}

// ascend :: (a, a) -> Number
function ascend (a, b) {
  return a < b ? -1 : a > b ? 1 : 0
}

// ascendBy :: (a -> b) -> (a, a) -> Number
function ascendBy (f) {
  return (a, b) => {
    const x = f(a)
    const y = f(b)

    return x < y ? -1 : x > y ? 1 : 0
  }
}

// between :: (Number, Number) -> Number -> Boolean
function between (a, b) {
  return n => a <= n && b >= n
}

// both :: (a -> Boolean, a -> Boolean) -> a -> Boolean
function both (f, g) {
  return a => f(a) && g(a)
}

// branch :: (a -> Boolean, a -> b, a -> b) -> a -> b
function branch (p, f, g) {
  return a => p(a) ? f(a) : g(a)
}

// clamp :: (Number, Number) -> Number -> Number
function clamp (a, b) {
  return c => c < a ? a : c > b ? b : c
}

// compare :: ((a, a) -> Boolean) -> (a, a) -> Number
function compare (f) {
  return (a, b) => {
    return f(a, b) ? -1 : f(b, a) ? 1 : 0
  }
}

// complement :: (a -> Boolean) -> a -> Boolean
function complement (f) {
  return a => !f(a)
}

// compose :: (b -> c, a -> b) -> a -> c
function compose (f, g) {
  return a => f(g(a))
}

// dec :: Number -> Number
function dec (n) {
  return n - 1
}

// divide :: Number -> Number -> Number
function divide (a) {
  return b => b / a
}

// descend :: (a, a) -> Number
function descend (a, b) {
  return a > b ? -1 : a < b ? 1 : 0
}

// descendBy :: (a -> b) -> (a, a) -> Number
function descendBy (f) {
  return (a, b) => {
    const x = f(a)
    const y = f(b)

    return x > y ? -1 : x < y ? 1 : 0
  }
}

// either :: (a -> Boolean, a -> Boolean) -> a -> Boolean
function either (f, g) {
  return a => f(a) || g(a)
}

// equal :: a -> a -> Boolean
function equal (a) {
  return b => a === b
}

// equalBy :: (a -> b) -> (a, a) -> Boolean
function equalBy (f) {
  return (a, b) => f(a) === f(b)
}

// flip :: (a -> b -> c) -> b -> a -> c
function flip (f) {
  return (a, b) => f(b, a)
}

// gt :: a -> a -> Boolean
function gt (a) {
  return b => b > a
}

// gte :: a -> a -> Boolean
function gte (a) {
  return b => b >= a
}

// id :: a -> a
function id (a) {
  return a
}

// inc :: Number -> Number
function inc (n) {
  return n + 1
}

// isEven :: Number -> Boolean
function isEven (n) {
  return n % 2 === 0
}

// isOdd :: Number -> Boolean
function isOdd (n) {
  return n % 2 !== 0
}

// lt :: a -> a -> Boolean
function lt (a) {
  return b => b < a
}

// lte :: a -> a -> Boolean
function lte (a) {
  return b => b <= a
}

// match :: [a -> b?] -> a -> b?
function match (arr) {
  return a => arr.reduce((acc, f) => {
    return acc !== undefined ? acc : f(a)
  }, undefined)
}

// max :: Number -> Number -> Number
function max (a) {
  return b => a > b ? a : b
}

// min :: Number -> Number -> Number
function min (a) {
  return b => a > b ? b : a
}

// mod :: Number -> Number -> Number
function mod (a) {
  return b => ((a % b) + b) % b
}

// multiply :: Number -> Number -> Number
function multiply (a) {
  return b => a * b
}

// negate :: Number -> Number
function negate (n) {
  return -n
}

// not :: Boolean -> Boolean
function not (a) {
  return !a
}

// on :: (b -> b -> c) -> (a -> b) -> a -> a -> c
function on (f, g) {
  return (a, b) => f(g(a), g(b))
}

// or :: a -> b -> a | b
function or (a) {
  return b => a || b
}

// pipe :: [a -> b] -> a -> b
function pipe (arr) {
  return init => arr.reduce((acc, f) => f(acc), init)
}

// pow :: Number -> Number -> Number
function pow (a) {
  return b => Math.pow(b, a)
}

// rem :: Number -> Number -> Number
function rem (a) {
  return b => b % a
}

// subtract :: Number -> Number -> Number
function subtract (a) {
  return b => b - a
}

// unless :: (a -> Boolean, a -> b) -> a -> b?
function unless (f, g) {
  return a => f(a) ? undefined : g(a)
}

// when :: (a -> Boolean, a -> b) -> a -> b?
function when (f, g) {
  return a => f(a) ? g(a) : undefined
}

module.exports = {
  add,
  always,
  and,
  ap,
  apply,
  ascend,
  ascendBy,
  between,
  both,
  branch,
  clamp,
  compare,
  complement,
  compose,
  dec,
  descend,
  descendBy,
  divide,
  either,
  equal,
  equalBy,
  flip,
  gt,
  gte,
  id,
  inc,
  isEven,
  isOdd,
  lt,
  lte,
  match,
  max,
  min,
  mod,
  multiply,
  negate,
  not,
  on,
  or,
  pipe,
  pow,
  rem,
  subtract,
  unless,
  when
}
