const test = require('tape');
const some = require('../../array/some');

test('array some: return true if one value matches predicate', t => {
  const result = some(x => x === 1, [3,2,1]);

  t.same(result, true);
  t.end();
});
test('array some: return false if no value matches predicate', t => {
  const result = some(x => x === 0, [3,2,1]);

  t.same(result, false);
  t.end();
});
