// isEmpty :: Object k v -> Boolean
const isEmpty = function isEmpty (obj = {}) {
  return !Boolean(Object.keys(obj).length);
};

module.exports = isEmpty;
