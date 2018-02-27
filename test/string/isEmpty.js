const test = require('tape');
const isEmpty = require('../../string/isEmpty');

test('string isEmpty: returns true if no length', t => {
  const result = isEmpty('');

  t.same(result, true);
  t.end();
});

test('string isEmpty: returns false if length', t => {
  const result = isEmpty('abc');

  t.same(result, false);
  t.end();
});
