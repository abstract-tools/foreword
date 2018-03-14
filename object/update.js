const curry = require('../function/curry');

// update :: Object k v -> Object k v -> Object k v
const update = curry(2, function update (a = {}, b = {}) {
  return Object.assign({}, b, a);
});

module.exports = update;
