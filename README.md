# (a -> b)
A standard library for data transformation.

`npm install @bchar/a-to-b`

#### Why (a -> b)
Reading and understanding code can be difficult, and can be made more challenging when using functions that work on more than one data type. The ability to have the same function run in different contexts is powerful and good! However, if used excessively, it can potentially be more difficult to reason about what is happening at a given time.

A benefit of this approach is that `(a -> b)` will have no trouble adding functions for different types in the future; for example, `Map` or `Set`.

#### Goals
- Able to partially apply all functions.
- Ensure correctness of transformations, not allowing data to be mutated.
- Leverage type separation into a more interesting interface; for example, `O.map/filter`.


## Array
```javascript
const A = require('@bchar/a-to-b/array')
```

### append
`Array a -> Array a -> Array a`

Combines two arrays.

```javascript
> A.append([4], [1, 2, 3])
[ 1, 2, 3, 4 ]
```

### compact
`Array a -> Array a`

Returns an array of only truthy values.

```javascript
> A.compact([0, 1, true, false, 'hey', null])
[ 1, true, 'hey' ]
```

### concat
`Array a -> Array a`

Concatenate an array of arrays into a single array, removing one level of nesting.

```javascript
> A.concat([[1, 2], [3], [4, 5]])
[ 1, 2, 3, 4, 5 ]
```

### difference
`Array a -> Array a -> Array a`

Returns an array with the elements present in the first that are not in the second.

```javascript
> A.difference([1, 2, 3], [1])
[ 2, 3 ]
```

### drop
`Number -> Array a -> Array a`

Drops the first n elements in an array.

```javascript
> A.drop(2, [1, 2, 3, 4, 5])
[ 3, 4, 5 ]
```

### dropWhile
`(a -> Boolean) -> Array a -> Array a`

Drops the first items of an array which match the predicate.

```javascript
> A.dropWhile(N.isEven, [2, 4, 5, 6])
[ 5, 6 ]
```

### every
`(a -> Boolean) -> Array a -> Boolean`

Determines if every element satisfies the predicate.

```javascript
> A.every(F.equals(1), [1, 1, 1])
true

> A.every(F.equals('a'), ['a', 'b', 'c'])
false
```

### filter
`(a -> Boolean) -> Array a -> Array a`

Returns an array of every element that matches the predicate.

```javascript
> A.filter(F.equals(1), [1, 2, 3])
[ 1 ]
```

### find
`(a -> Boolean) -> Array a -> Maybe a`

Returns the value of the first element that matches the predicate, or `undefined` if it does not exist.

```javascript
> A.find(F.equals(1), [1, 2, 3])
1
```

### flatten
`Array a -> Array a`

Recursively flattens an array of arrays.

```javascript
> A.flatten([1, [[2], 3], [4, [[5]]]])
[ 1, 2, 3, 4, 5 ]
```

### groupBy
`(a -> b) -> Array a -> Object k (Array a)`

Returns an object with keys as the result of applying a function to elements, and the value is an array of every matched element.

```javascript
> A.groupBy(Math.floor, [4.2, 6.1, 6.4])
{ '4': [ 4.2 ], '6':  [ 6.1, 6.4 ] }
```

### head
`Array a -> Maybe a`

Returns the first element in an array.

```javascript
> A.head([1, 2, 3, 4, 5])
1

> A.head([])
undefined
```

### includes
`a -> Array a -> Boolean`

Determines if an array contains a value.

```javascript
> A.includes('a', ['a', 'b', 'c'])
true
```

### init
`Array a -> Array a`

Returns every element except the last.

```javascript
> A.init([1, 2, 3, 4, 5])
[ 1, 2, 3, 4 ]
```

### intersection
`Array a -> Array a -> Array a`

Returns an array containing elements present in both arrays.

```javascript
> A.intersection([1, 2, 3], [2, 3, 4, 5])
[ 2, 3 ]
```

### isEmpty
`Array a -> Boolean`

Determines if an array contains any elements.

```javascript
> A.isEmpty([1])
false
```

### last
`Array a -> Maybe a`

Returns the last element in an array.

```javascript
> A.last([1, 2, 3, 4, 5])
5

> A.last([])
undefined
```

### length
`Array a -> Number`

Returns the number of elements in an array.

```javascript
> A.length([1, 2, 3])
3
```

### map
`(a -> b) -> Array a -> Array b`

Applies a function over every element in an array.

```javascript
> A.map(O.get('a'), [{a: 1}, {a: 2}, {a: 3}])
[ 1, 2, 3 ]
```

### max
`Array a -> Maybe a`

Returns the highest value element in an array.

```javascript
> A.max([1, 2, 3])
3
```

### maxBy
`(a -> b) -> Array a -> Maybe a`

Returns the highest value element in an array.

```javascript
> A.maxBy(S.length, ['bc', 'abc', 'a', 'b'])
'abc'
```

### mean
`Array Number -> Maybe Number`

Returns the mean of the elements in an array.

```javascript
> A.mean([1, 2, 3, 4, 5])
3
```

### min
`Array a -> Maybe a`

Returns the lowest value element in an array.

```javascript
> A.min([3, 2, 1])
1
```

### minBy
`(a -> b) -> Array a -> Maybe a`

Returns the lowest value element in an array after applying a function to the element.

```javascript
> A.minBy(S.length, ['bc', 'abc', 'a', 'b'])
'a'
```

### partition
`(a -> Boolean) -> Array a -> Array (a, a)`

Equivalent to `[filter(f, arr), reject(f, arr)]`.

```javascript
> A.partition(N.isEven, [1, 2, 3, 4, 5])
[ [ 2, 4 ], [ 1, 3, 5 ] ]
```

### product
`Array Number -> Number`

Returns the product of the elements in an array.

```javascript
> A.product([1, 2, 3])
6
```

### reduce
`(a -> b -> b) -> b -> Array a -> b`

Applies a function over an accumulator and every element in an array, returning the result as a single value.

```javascript
> A.reduce(N.add, 0, [1, 2, 3])
6
```

### reject
`(a -> Boolean) -> Array a -> Array a`

Returns an array of all elements that do not match the predicate.

```javascript
> A.reject(N.isEven, [1, 2, 3, 4, 5])
[ 1, 3, 5 ]
```
 
### reverse
`Array a -> Array a`

Returns a new array with the elements in reverse order.

```javascript
> A.reverse([1, 2, 3])
[ 3, 2, 1 ]
```

### scan
`(a -> b -> b) -> b -> Array a -> Array b`

Like `reduce`, but returns a list with the initial value, the intermediate values, and the final value.

```javascript
> A.scan(N.add, 0, [1, 2, 3])
[ 0, 1, 3, 6 ]
```

### slice
`Number -> Number -> Array a -> Array a`

Returns a subset of an array, providing starting and ending indexes.

```javascript
> A.slice(1, 3, [1, 2, 3, 4, 5])
[ 2, 3 ]
```

### some
`(a -> Boolean) -> Array a -> Boolean`

Determines if any elements match the predicate.

```javascript
> A.some(F.equals(1), [1, 2, 3])
true
```

### sort
`((a, a) -> Number) -> Array a -> Array a`

Returns a sorted array, given a comparison function.

```javascript
> A.sort((a, b) => a - b, [5, 39, 1])
[ 1, 5, 39 ]
```

### sortBy
`(a -> b) -> Array a -> Array a`

Sort an array by applying a function to elements.

```javascript
> A.sortBy(S.length, ['abc', 'a', 'ab'])
[ 'a', 'ab', 'abc' ]

> A.sortBy(O.get('name'), [{ name: 'bob'}, { name: 'alice' }, { name: 'charlie' }])
[ { name: 'alice' }, { name: 'bob' }, { name: 'charlie' } ]
```

### span
`(a -> Boolean) -> Array a -> Array (a, a)`

Equivalent to `[takeWhile(f, arr), dropWhile(f, arr)]`.

```javascript
> A.span(N.isEven, [2, 4, 5, 6])
[ [ 2, 4 ], [ 5, 6 ] ]
```

### sum
`Array Number -> Number`

Sums up the elements in an array.

```javascript
> A.sum([1, 2, 3, 4, 5])
15
```

### tail
`Array a -> Array a`

Returns every element except the first.

```javascript
> A.tail([1, 2, 3, 4, 5])
[ 2, 3, 4, 5 ]
```

### take
`Number -> Array a -> Array a`

Returns the first n elements in an array.

```javascript
> A.take(2, [1, 2, 3, 4, 5])
[ 1, 2 ]
```

### takeWhile
`(a -> Boolean) -> Array a -> Array a`

Returns the first elements in an array which match the predicate.

```javascript
> A.takeWhile(N.isEven, [2, 4, 5, 6])
[ 2, 4 ]
```

### union
`Array a -> Array a -> Array a`

Returns an array of unique elements in both arrays.

```javascript
> A.union([1, 5, 7], [3, 5])
[ 1, 5, 7, 3 ]
```

### unique
`Array a -> Array a`

Returns a list of unique elements.

```javascript
> A.unique([1, 1, 1, 3, 5, 5, 9])
[ 1, 3, 5, 9 ]
```

### uniqueBy
`(a -> b) -> Array a -> Array a`

Returns an array of unique values from the applied function.

```javascript
> A.uniqueBy(S.length, ['and', 'here', 'are', 'some', 'words'])
[ 'and', 'here', 'words' ]
```


## Function
```javascript
const F = require('@bchar/a-to-b/function')
```

### always
`a -> b -> a`

Returns its first argument.

```javascript
> F.always('a', 'b')
'a'
```

### and
`Boolean -> Boolean -> Boolean`

Returns `true` if both values are `true`.

```javascript
> F.and(true, false)
false
```

### ap
`Array (a -> b) -> Array a -> Array b`

Applies a list of functions over a list of values.

```javascript
> F.ap([N.mul(2), N.add(3)], [1, 2, 3])
[ 2, 4, 6, 4, 5, 6 ]
```

### apply
`(a -> b) -> a -> b`

Applies function to value.

```javascript
> F.apply(N.add(1), 1)
2
```

### both
`(a -> Boolean) -> (a -> Boolean) -> a -> Boolean`

Applies a value over two predicate functions, returns the result of an `and` comparison. Short-circuits if the first predicate returns false.

```javascript
> const test = F.both(F.gt(10), F.lt(20))

> test(15)
true

> test(30)
false
```

### complement
`(a -> Boolean) -> a -> Boolean`

Returns the opposite boolean value that the predicate returned.

```javascript
> F.complement(F.equals(1), 1)
false
```

### compose
`(b -> c) -> (a -> b) -> a -> c`

Applies value through two functions, from right to left.

```javascript
> F.compose(Math.sqrt, N.add(1), 99)
10
```

### cond
`Array (a -> Boolean, a -> b) -> a -> b`

Contains predicate and transformer pairs, to determine which transformer to apply over a value.

```javascript
> F.cond([
  [F.lt(1), N.inc],
  [F.gt(1), N.dec],
  [F.always(true), F.identity]
], 10)
9
```

### curry
`Number -> ((a, b) -> c) -> a -> b -> c`

Wraps a function and allows you to supply your arguments one at a time.

```javascript
> const add = F.curry(2, (a, b) => a + b)
> const add1 = add(1)
> add1(1)
2
```

### either
`(a -> Boolean) -> (a -> Boolean) -> a -> Boolean`

Applies a value over two predicate functions, returns the result of an `or` comparison. Short-circuits if the first predicate returns true.

```javascript
> const test = F.either(F.gt(10), N.isEven)

> test(15)
true

> test(5)
false

> test(4)
true
```

### equals
`a -> a -> Boolean`

Returns the result of comparing two values.

```javascript
> F.equals('abc', 'abc')
true

> F.equals('abc', 'xyz')
false
```

### flip
`(a -> b -> c) -> b -> a -> c`

Reverses the order of the first two arguments of the provided function.

```javascript
> const prepend = F.flip(A.append)
> prepend([1], [2, 3, 4])
[ 1, 2, 3, 4 ]
```

### gt
`a -> a -> Boolean`

Determines if a value is greater.

```javascript
> gt(1, 2)
true
```

### gte
`a -> a -> Boolean`

Determines if a value is greater than or equal.

```javascript
> gte(1, 1)
true

> gte(1, 2)
true
```

### identity
`a -> a`

Returns itself.

```javascript
> F.identity('a')
'a'

> A.filter(F.identity, [0, 1, null, 'test'])
[ 1, 'test' ]
```

### lt
`a -> a -> Boolean`

Determines if a value is lesser.

```javascript
> lt(2, 1)
true
```

### lte
`a -> a -> Boolean`

Determines if a value is less than or equal.

```javascript
> lte(1, 1)
true

> lte(2, 1)
true
```

### not
`Boolean -> Boolean`

Returns the opposite boolean value.

```javascript
> F.not(true)
false

> F.not(A.some(F.equals(1), [1, 2, 3]))
false
```

### on
`(b -> b -> c) -> (a -> b) -> a -> a -> c`

Applies a binary function over a unary function twice.

```javascript
> const sameLength = F.on(F.equals, S.length)
> sameLength('hey', 'now')
true
```

### or
`Boolean -> Boolean -> Boolean`

Returns `true` if one or both values are `true`.

```javascript
> F.or(true, false)
true
```

### pipe
`Array (a -> b) -> a -> b`

Applies a sequence of transformations over a value.

```javascript
> F.pipe([N.add(1), Math.sqrt], 99)
10
```

### when
`(a -> Boolean) -> (a -> b) -> a -> b`

If the predicate is matched, run a transformer function, otherwise return the original value.

```javascript
> F.when(F.lt(10), N.inc, 5)
6
```


## Maybe
A set of functions for dealing with unwanted values.

```javascript
const M = require('@bchar/a-to-b/maybe')
```

### andThen
`(a -> Maybe b) -> Maybe a -> Maybe b`

Applies function to value, if value exists, or returns value.

```javascript
> M.andThen(N.add(1), 1)
2

> M.andThen(N.add(1), undefined)
undefined

> F.pipe([
  M.andThen(A.head),
  M.andThen(N.multiply(2)),
  M.andThen(N.isEven)
], [])
undefined
```

### withDefault
`a -> Maybe a -> a`

Returns the first value, if the second does not exist.

```javascript
> M.withDefault(1, undefined)
1

> M.withDefault(1, 10)
10
```


## Number
```javascript
const N = require('@bchar/a-to-b/number')
```

### add
`Number -> Number -> Number`

Adds two numbers.

```javascript
> N.add(2, 2)
4
```

### clamp
`Number -> Number -> Number -> Number`

Retricts a number to be within a range.

```javascript
> const test = clamp(1, 10)
> test(0)
1

> test(20)
10

> test(5)
5
```

### dec
`Number -> Number`

Decrements a number.

```javascript
> N.dec(10)
9
```

### divide
`Number -> Number -> Number`

Divides two numbers.

```javascript
> N.divide(2, 10)
5
```

### gcd
`Number -> Number -> Number`

Greatest common denominator.

```javascript
> N.gcd(12, 18)
6
```

### inc
`Number -> Number`

Increments a number.

```javascript
> N.inc(10)
11
```

### isEven
`Number -> Boolean`

Determines if a number is even.

```javascript
> N.isEven(10)
true
```

### isOdd
`Number -> Boolean`

Determines if a number is odd.

```javascript
> N.isOdd(9)
true
```

### lcm
`Number -> Number -> Number`

Least common multiple.

```javascript
> N.lcm(12, 18)
36
```

### max
`Number -> Number -> Number`

Returns the larger number.

```javascript
> max(4, 9)
9
```

### min
`Number -> Number -> Number`

Returns the smaller number.

```javascript
> min(4, 9)
4
```

### mod
`Number -> Number -> Number`

Behaves like the mathematical modulo operator.

```javascript
> N.mod(-20, 3)
1
```

### multiply
`Number -> Number -> Number`

Multiplies two numbers.

```javascript
> N.multiply(2, 5)
10
```

### negate
`Number -> Number`

Negated number.

```javascript
> N.negate(10)
-10
```

### pow
`Number -> Number -> Number`

Returns the power.

```javascript
> N.pow(2, -2)
4
```

### rem
`Number -> Number -> Number`

Returns the remainder.

```javascript
> N.rem(3, -20)
-2
```

### subtract
`Number -> Number -> Number`

Subtracts two numbers.

```javascript
> N.subtract(2, 10)
8
```

## Object
```javascript
const O = require('@bchar/a-to-b/object')
```

### filter
`Array k -> Object k v -> Object k v`

Returns a subset of an object, with only the specified keys.

```javascript
> O.filter(['id', 'name'], { id: 123, name: 'bob', test: 'testing' })
{ id: 123, name: 'bob' }

> A.map(O.filter(['id']), [{ id: 1, name: 'alice' }, { id: 2, name: 'bob' }])
[ { id: 1 }, { id: 2 } ]
```

### get
`k -> Object k v -> Maybe v`

Returns the property of an object, if it exists.

```javascript
> O.get('a', { a: 'test' })
'test'

> A.map(O.get('a'), [{ a: 1}, { a: 2 }, { a: 3 }])
[ 1, 2, 3 ]
```

### gets
`Array k -> Object k v -> Array (Maybe v)`

Returns an array of values where Object k is found. 

```javascript
> O.gets(['a', 'b'], { a: 1, b: 2 })
[ 1, 2 ]
```

### includes
`k -> Object k v -> Boolean`

Determines if an object contains a key.

```javascript
> O.includes('a', { a: 1, b: 2 })
true
```

### isEmpty
`Object k v -> Boolean`

Determines if an object contains any keys.

```javascript
> O.isEmpty({})
true
```

### keys
`Object k v -> Array k`

Returns an array of every key in an object.

```javascript
> O.keys({ a: 1, b: 2 })
[ 'a', 'b' ]
```

### map
`Object k (a -> b) -> Object k a -> Object k b`

Returns an object with transformations applied over specified keys.

```javascript
> O.map({ ms: N.inc }, { id: 123, ms: 999 })
{ id: 123, ms: 1000 }
```

### path
`Array k -> Object k v -> Maybe v`

Returns a value from a nested object path.

```javascript
> O.path(['a', 'b', 'c'], {a: {b: {c: 1}}})
1
```

### reject
`Array k -> Object k v -> Object k v`

Returns an object, without the keys specified.

```javascript
> O.reject(['name', 'test'], { id: 123, name: 'alice', test: 'test' })
{ id: 123 }

> A.map(O.reject(['id']), [{ id: 1, name: 'alice' }, { id: 2, name: 'bob' }])
[ { name: 'alice' }, { name: 'bob' } ]
```

### update
`Object k v -> Object k v -> Object k v`

Creates a new object with values from the first argument merged over the second argument.

```javascript
> O.update({ a: true }, { a: false })
{ a: true }
```

### values
`Object k v -> Array v`

Returns an array of every value in an object.

```javascript
> O.values({ a: 1, b: 2 })
[ 1, 2 ]
```

### where
`Object k (v -> Boolean) -> Object k v -> Boolean`

Returns whether every key matches the predicate.

```javascript
> const test = O.where({
  a: F.equals('foo'),
  b: F.not(F.equals('bar')),
  x: F.gt(10),
  y: F.lt(20)
})

> test({ a: 'foo', b: 'baz', x: 15, y: 15 })
true

> test({ a: 'foo', b: 'baz': x: 10, y: 15 })
false
```


## String
```javascript
const S = require('@bchar/a-to-b/string')
```

### append
`String -> String -> String`

Combine two strings.

```javascript
> S.append('ing', 'append')
'appending'
```

### capitalize
`String -> String`

Capitalize a string.

```javascript
> S.capitalize('hello, world!')
'Hello, world!'
```

### chars
`String -> Array String`

Returns an array of every character in a string.

```javascript
> S.chars('hello!')
[ 'h', 'e', 'l', 'l', 'o', '!' ]
```

### concat
`Array String -> String`

Combines a list of strings into one string.

```javascript
> S.concat(['a', 'b', 'c'])
'abc'
```

### drop
`Number -> String -> String`

Drops the first n elements in a string.

```javascript
> S.drop(3, 'mmmhmmm')
'hmmm'
```

### dropWhile
`(String -> Boolean) -> String -> String`

Drops the first elements of a string that pass the predicate.

```javascript
> S.dropWhile(equals('m'), 'mmmhmm')
'hmm'
```

### includes
`String -> String -> Boolean`

Determines if a string contains a substring.

```javascript
> S.includes('abc', 'abcdef')
true
```

### isEmpty
`String -> Boolean`

Determines if a string contains any characters.

```javascript
> S.isEmpty('abc')
false
```

### join
`String -> Array String -> String`

Joins every element in an array with a string, creating a single string.

```javascript
> S.join(':', ['a', 'b', 'c'])
'a:b:c'
```

### length
`String -> Number`

Returns the number of values in a string.

```javascript
> S.length('abc')
3
```

### lines
`String -> Array String`

Creates an array from a string that might contain line breaks.

```javascript
> S.lines('foo\nbar\nbar')
[ 'foo', 'bar', 'baz' ]
```

### repeat
`Number -> String -> String`

Repeated a string n amount of times.

```javascript
> S.repeat(3, 'abc')
'abcabcabc'
```

### reverse
`String -> String`

Reverses the order of a string.

```javascript
> S.reverse('abc')
'cba'
```

### slice
`Number -> Number -> String -> String`

Returns a subset of a string, given starting and ending indexes.

```javascript
> S.slice(1, 3, 'abcdef')
'bc'
```

### span
`(String -> Boolean) -> String -> Array (String, String)`

Equivalent to `[takeWhile(f, str), dropWhile(f, str)]`.

```javascript
> S.span(F.equals('m'), 'mmmhmm')
[ 'mmm', 'hmm' ]
```

### split
`String -> String -> Array String`

Splits a string into an array of substrings.

```javascript
> S.split(':', 'a:b:c')
[ 'a', 'b', 'c' ]
```

### take
`Number -> String -> String`

Returns the first n elements in a string.

```javascript
> S.take(3, 'mmmhmmm')
'mmm'
```

### takeWhile
`(String -> Boolean) -> String -> String`

Takes the first elements of a string that pass the predicate.

```javascript
> S.takeWhile(F.equals('m'), 'mmmhmm')
'mmm'
```

### toLower
`String -> String`

Returns an all lowercase string.

```javascript
> S.toLower('ABCDEF')
'abcdef'
```

### toUpper
`String -> String`

Returns an all uppercase string.

```javascript
> S.toUpper('abcdef')
'ABCDEF'
```

### trim
`String -> String`

Removes whitespace from both ends of a string.

```javascript
> S.trim('   a \n')
'a'
```

### words
`String -> Array String`

Returns an array containing word groups in a string.

```javascript
> S.words('foo bar baz')
[ 'foo', 'bar', 'baz' ]
```
