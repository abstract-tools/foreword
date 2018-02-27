const curry = require('../function/curry');

// update :: Object k v -> Object k v -> Object k v
module.exports = curry((a, b) => {
  return Object.assign({}, b, a);
});
