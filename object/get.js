const curry = require('../function/curry');

// get :: String -> Object k v -> Maybe v
const get = curry(2, function get (a = '', obj = {}) {
  return obj[a];
});

module.exports = get;
