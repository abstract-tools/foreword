const test = require('tape');
const always = require('../../function/always');

test('function always: returns original value', t => {
  const result = always('a');

  t.equal(result('b'), 'a');
  t.end();
});
