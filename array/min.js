// min :: Array a -> Maybe a
function min (arr = []) {
  return [...arr].sort((a, b) => {
    return (a > b) ? 1 : (a < b) ? -1 : 0
  })[0]
}

module.exports = min
