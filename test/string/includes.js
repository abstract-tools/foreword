const test = require('tape');
const includes = require('../../string/includes');

test('string includes: returns true if substring is found', t => {
  const result = includes('abc', 'abcdef');

  t.same(result, true);
  t.end();
});

test('string includes: returns false if substring is not found', t => {
  const result = includes('abc', 'abdef');

  t.same(result, false);
  t.end();
});
