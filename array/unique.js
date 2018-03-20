// unique :: Array a -> Array a
function unique (arr = []) {
  return arr.reduce((a, b) => {
    return a.includes(b) ? a : [...a, b]
  }, [])
}

module.exports = unique
