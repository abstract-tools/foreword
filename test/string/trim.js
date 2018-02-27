const test = require('tape');
const trim = require('../../string/trim');

test('string trim', t => {
  const result = trim('  abc \n');

  t.same(result, 'abc');
  t.end();
});
