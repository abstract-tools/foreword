// tail :: Array a -> Array a
const tail = function tail (arr = []) {
  return arr.slice(1)
}

module.exports = tail
