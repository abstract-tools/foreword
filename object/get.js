const curry = require('../function/curry');

// get :: String -> Object k v -> Maybe v
module.exports = curry((a, obj) => {
  return obj[a];
});
