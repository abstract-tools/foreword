const test = require('tape');
const andThen = require('../../maybe/andThen');

test('maybe andThen: applies function to non-null value', t => {
  const result = andThen((x => x + 1), 1);

  t.same(result, 2);
  t.end();
});

test('maybe andThen: returns value if null', t => {
  const result = andThen((x => x + 1), undefined);

  t.same(result, undefined);
  t.end();
})
