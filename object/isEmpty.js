// isEmpty :: Object k v -> Boolean
function isEmpty (obj = {}) {
  return !Boolean(Object.keys(obj).length)
}

module.exports = isEmpty
