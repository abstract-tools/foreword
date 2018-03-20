// tail :: Array a -> Array a
function tail (arr = []) {
  return arr.slice(1)
}

module.exports = tail
