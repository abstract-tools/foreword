// append :: String -> String -> String
function append (a) {
  return b => b + a
}

// concat :: [String] -> String
function concat (arr) {
  return arr.join('')
}

// drop :: Number -> String -> String
function drop (n) {
  return str => str.slice(n, Infinity)
}

// dropWhile :: (String -> Boolean) -> String -> String
function dropWhile (f) {
  return str => {
    const i = str.split('').findIndex(a => !f(a))

    return i < 0 ? '' : str.slice(i)
  }
}

// includes :: String -> String -> Boolean
function includes (a) {
  return str => str.includes(a)
}

// indexOf :: String -> String -> Number?
function indexOf (a) {
  return str => {
    const i = str.indexOf(a)

    return i === -1 ? undefined : i
  }
}

// isEmpty :: String -> Boolean
function isEmpty (str) {
  return !str.length
}

// join :: String -> [String] -> String
function join (str) {
  return arr => arr.join(str)
}

// length :: String -> Number
function length (str) {
  return str.length
}

// repeat :: Number -> String -> String
function repeat (n) {
  return str => str.repeat(n)
}

// replace :: (RegExp | String, String) -> String -> String
function replace (a, b) {
  return str => str.replace(a, b)
}

// reverse :: String -> String
function reverse (str) {
  return str.split('').reverse().join('')
}

// search :: RegExp -> String -> Number?
function search (reg) {
  return str => {
    const i = str.search(reg)

    return i === -1 ? undefined : i
  }
}

// slice :: (Number, Number) -> String -> String
function slice (a, b) {
  return str => str.slice(a, b)
}

// span :: (String -> Boolean) -> String -> [String, String]
function span (f) {
  return str => {
    const i = str.split('').findIndex(a => !f(a))
    const n = i < 0 ? Infinity : i

    return [str.slice(0, n), str.slice(n)]
  }
}

// split :: String -> String -> [String]
function split (a) {
  return b => b.split(a)
}

// take :: Number -> String -> String
function take (n) {
  return str => str.slice(0, n)
}

// takeWhile :: (String -> Boolean) -> String -> String
function takeWhile (f) {
  return str => {
    const i = str.split('').findIndex(a => !f(a))

    return i < 0 ? str : str.slice(0, i)
  }
}

// toLower :: String -> String
function toLower (str) {
  return str.toLowerCase()
}

// toUpper :: String -> String
function toUpper (str) {
  return str.toUpperCase()
}

// trim :: String -> String
function trim (str) {
  return str.trim()
}

module.exports = {
  append,
  concat,
  drop,
  dropWhile,
  includes,
  indexOf,
  isEmpty,
  join,
  length,
  repeat,
  replace,
  reverse,
  search,
  slice,
  span,
  split,
  take,
  takeWhile,
  toLower,
  toUpper,
  trim
}
