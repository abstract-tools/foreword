// product :: Array Number -> Number
const product = function product (arr = []) {
  return arr.reduce((a, b) => a * b, 1)
}

module.exports = product
