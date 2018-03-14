const curry = require('../function/curry');

// get :: String -> Object k v -> Maybe v
module.exports = curry(2, (a = '', obj = {}) => {
  return obj[a];
});
