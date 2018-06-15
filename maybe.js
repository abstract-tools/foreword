// encase :: (a -> b) -> a -> b?
function encase (f) {
  return a => {
    try {
      return f(a)
    } catch (err) {
      return undefined
    }
  }
}

// isNothing :: a -> Boolean
function isNothing (a) {
  return a == null
}

// map :: (a -> b) -> a -> a | b
function map (f) {
  return a => a == null ? a : f(a)
}

// toArray :: a -> [a]
function toArray (a) {
  return a == null ? [] : Array.isArray(a) ? a : [a]
}

// withDefault :: a -> b -> a | b
function withDefault (a) {
  return b => b == null ? a : b
}

module.exports = {
  encase,
  isNothing,
  map,
  toArray,
  withDefault
}
