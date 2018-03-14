const curry = require('../function/curry');

// update :: Object k v -> Object k v -> Object k v
module.exports = curry(2, (a = {}, b = {}) => {
  return Object.assign({}, b, a);
});
