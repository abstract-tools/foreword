const test = require('tape');
const curry = require('../../function/curry');

test('function curry: returns a new function if fewer arguments are provided', t => {
  const add = curry((a, b) => a + b);
  const add1 = add(1);

  t.same(add1(1), 2);
  t.end();
});
