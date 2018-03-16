// init :: Array a -> Array a
const init = function init (arr = []) {
  return arr.slice(0, -1)
}

module.exports = init
