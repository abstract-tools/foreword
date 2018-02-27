const test = require('tape');
const or = require('../../function/or');

test('function or: returns true if one value is true', t => {
  const result = or(false, true);

  t.same(result, true);
  t.end();
});


test('function or: returns false if both values are false', t => {
  const result = or(false, false);

  t.same(result, false);
  t.end();
});
