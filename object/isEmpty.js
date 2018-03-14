// isEmpty :: Object k v -> Boolean
module.exports = (obj = {}) => {
  return !Boolean(Object.keys(obj).length);
};
