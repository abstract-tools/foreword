const test = require('tape');
const chars = require('../../string/chars');

test('string chars', t => {
  const result = chars('test');

  t.same(result, ['t','e','s','t']);
  t.end();
});
