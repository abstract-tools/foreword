const curry = require('../function/curry');

// includes :: String -> Object k v -> Boolean
module.exports = curry((k, obj) => {
  return Object.prototype.hasOwnProperty.call(obj, k);
});
