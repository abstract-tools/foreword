function toArray (a) {
  return a == null ? [] : Array.isArray(a) ? a : [a]
}

module.exports = toArray
