// sum :: Array Number -> Number
const sum = function sum (arr = []) {
  return arr.reduce((a, b) => a + b, 0)
}

module.exports = sum
