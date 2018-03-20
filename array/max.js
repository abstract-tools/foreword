// max :: Array a -> Maybe a
function max (arr = []) {
  return [...arr].sort((a, b) => {
    return (a > b) ? -1 : (a < b) ? 1 : 0
  })[0]
}

module.exports = max
