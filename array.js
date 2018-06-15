// append :: a -> [a] -> [a]
function append (a) {
  return b => [...b, a]
}

// concat :: [[a]] -> [a]
function concat (arr) {
  return arr.reduce((acc, a) => acc.concat(a), [])
}

// concatMap :: (a -> [b]) -> [a] -> [b]
function concatMap (f) {
  return arr => arr.reduce((acc, a) => acc.concat(f(a)), [])
}

// countBy :: (a -> b) -> [a] -> {b: Number}
function countBy (f) {
  return arr => arr.reduce((acc, a) => {
    const k = f(a)

    return Object.assign(acc, {
      [k]: acc.hasOwnProperty(k) ? acc[k] + 1 : 1
    })
  }, {})
}

// drop :: Number -> [a] -> [a]
function drop (n) {
  return arr => arr.slice(n, Infinity)
}

// dropWhile :: (a -> Boolean) -> [a] -> [a]
function dropWhile (f) {
  return arr => {
    const i = arr.findIndex(x => !f(x))

    return i < 0 ? [] : arr.slice(i)
  }
}

// every :: (a -> Boolean) -> [a] -> Boolean
function every (f) {
  return arr => arr.every(f)
}

// filter :: (a -> Boolean) -> [a] -> [a]
function filter (f) {
  return arr => arr.filter(f)
}

// find :: (a -> Boolean) -> [a] -> a?
function find (f) {
  return arr => arr.find(f)
}

// findIndex :: (a -> Boolean) -> [a] -> Number
function findIndex (f) {
  return arr => arr.findIndex(f)
}

// get :: Number -> [a] -> a?
function get (n) {
  return arr => arr[n]
}

// gets :: [Number] -> [a] -> [a?]
function gets (keys) {
  return arr => keys.map(k => arr[k])
}

// groupBy :: (a -> b) -> [a] -> {b: [a]}
function groupBy (f) {
  return arr => arr.reduce((acc, a) => {
    const k = f(a)

    return Object.assign(acc, {
      [k]: acc.hasOwnProperty(k) ? [...acc[k], a] : [a]
    })
  }, {})
}

// head :: [a] -> a?
function head (arr) {
  return arr[0]
}

// includes :: a -> [a] -> Boolean
function includes (a) {
  return arr => arr.includes(a)
}

// indexOf :: a -> [a] -> Number
function indexOf (a) {
  return arr => arr.indexOf(a)
}

// init :: [a] -> [a]
function init (arr) {
  return arr.slice(0, -1)
}

// isEmpty :: [a] -> Boolean
function isEmpty (arr) {
  return !arr.length
}

// last :: [a] -> a?
function last (arr) {
  return arr[arr.length - 1]
}

// length :: [a] -> Number
function length (arr) {
  return arr.length
}

// map :: (a -> b) -> [a] -> [b]
function map (f) {
  return arr => arr.map(f)
}

// max :: [a] -> a?
function max (arr) {
  return arr.reduce((a, b) => a >= b ? a : b)
}

// maxBy :: (a -> b) -> [a] -> a?
function maxBy (f) {
  return arr => arr.reduce((a, b) => f(a) >= f(b) ? a : b)
}

// min :: [a] -> a?
function min (arr) {
  return arr.reduce((a, b) => a <= b ? a : b)
}

// minBy :: (a -> b) -> [a] -> a?
function minBy (f) {
  return arr => arr.reduce((a, b) => f(a) <= f(b) ? a : b)
}

// partition :: (a -> Boolean) -> [a] -> [[a], [a]]
function partition (f) {
  return arr => arr.reduce(([a, b], v) => {
    return f(v) ? [[...a, v], b] : [a, [...b, v]]
  }, [[], []])
}

// prepend :: a -> [a] -> [a]
function prepend (a) {
  return b => [a, ...b]
}

// range :: (Number, Number) -> [Number]
function range (a, b) {
  const arr = []

  for (let i = a, len = b; i < len; i++) {
    arr.push(i)
  }

  return arr
}

// reduce :: ((b, a) -> b, b) -> [a] -> b
function reduce (f, init) {
  return arr => arr.reduce(f, init)
}

// reject :: (a -> Boolean) -> [a] -> [a]
function reject (f) {
  return arr => arr.filter(v => !f(v))
}

// reverse :: [a] -> [a]
function reverse (arr) {
  return [...arr].reverse()
}

// scan :: ((b, a) -> b, b) -> [a] -> [b]
function scan (f, init) {
  return arr => arr.reduce((acc, a) => {
    return [...acc, f(acc[acc.length - 1], a)]
  }, [init])
}

// slice :: (Number, Number) -> [a] -> [a]
function slice (a, b) {
  return arr => arr.slice(a, b)
}

// some :: (a -> Boolean) -> [a] -> Boolean
function some (f) {
  return arr => arr.some(f)
}

// sort :: ((a, a) -> Number) -> [a] -> [a]
function sort (f) {
  return arr => [...arr].sort(f)
}

// sortBy :: (a -> b) -> [a] -> [a]
function sortBy (f) {
  return arr => [...arr].sort((a, b) => {
    const x = f(a)
    const y = f(b)

    return x < y ? -1 : x > y ? 1 : 0
  })
}

// sortWith :: [(a, a) -> Number] -> [a] -> [a]
function sortWith (fs) {
  return arr => [...arr].sort((a, b) => {
    return fs.reduce((acc, f) => acc === 0 ? f(a, b) : acc, 0)
  })
}

// span :: (a -> Boolean) -> [a] -> [[a], [a]]
function span (f) {
  return arr => {
    const i = arr.findIndex(x => !f(x))
    const n = i < 0 ? Infinity : i

    return [arr.slice(0, n), arr.slice(n)]
  }
}

// tail :: [a] -> [a]
function tail (arr) {
  return arr.slice(1)
}

// take :: Number -> [a] -> [a]
function take (n) {
  return arr => arr.slice(0, n)
}

// takeWhile :: (a -> Boolean) -> [a] -> [a]
function takeWhile (f) {
  return arr => {
    const i = arr.findIndex(x => !f(x))

    return i < 0 ? arr : arr.slice(0, i)
  }
}

// unique :: [a] -> [a]
function unique (arr) {
  return Object.values(arr.reduce((acc, a) => {
    return acc.hasOwnProperty(a) ? acc : Object.assign(acc, {
      [a]: a
    })
  }, {}))
}

// uniqueBy :: (a -> b) -> [a] -> [a]
function uniqueBy (f) {
  return arr => Object.values(arr.reduce((acc, a) => {
    const k = f(a)

    return acc.hasOwnProperty(k) ? acc : Object.assign(acc, {
      [k]: a
    })
  }, {}))
}

// zip :: [k] -> [v] -> {k: v}
function zip (a) {
  return b => {
    const arr = a.length < b.length ? a : b

    return arr.reduce((acc, _, i) => {
      return Object.assign(acc, {
        [a[i]]: b[i]
      })
    }, {})
  }
}

module.exports = {
  append,
  concat,
  concatMap,
  countBy,
  drop,
  dropWhile,
  every,
  filter,
  find,
  findIndex,
  get,
  gets,
  groupBy,
  head,
  includes,
  indexOf,
  init,
  isEmpty,
  last,
  length,
  map,
  max,
  maxBy,
  min,
  minBy,
  partition,
  prepend,
  range,
  reduce,
  reject,
  reverse,
  scan,
  slice,
  some,
  sort,
  sortBy,
  sortWith,
  span,
  tail,
  take,
  takeWhile,
  unique,
  uniqueBy,
  zip
}
