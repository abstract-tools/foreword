function max (arr) {
  return arr.reduce((a, b) => a >= b ? a : b)
}

module.exports = max
