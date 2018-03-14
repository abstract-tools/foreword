const curry = require('../function/curry');

// map :: Object k (a -> b) -> Object k v -> Object k v
const map = curry(2, function map (spec = {}, obj = {}) {
  return Object.assign({}, obj, Object.keys(spec).reduce((acc, key) => {
    return (obj[key] === undefined) ? acc : Object.assign(acc, {
      [key]: spec[key](obj[key])
    });
  }, {}));
});

module.exports = map;
