# A->B
A transformation library

## Function
```javascript
const F = require('a-to-b/function')
```

### always :: a -> b -> a
Returns its first argument.
```javascript
> always('a', 'b')
'a'
```

### and :: Boolean -> Boolean -> Boolean
Returns `true` if both values are `true`.
```javascript
> and(true, false)
false
```

### andThen :: (a -> b) -> Maybe a -> Maybe b
Applies function to value, if value exists, or returns value.
```javascript
> andThen(add(1), 1)
2

> andThen(add(1), undefined)
undefined
```

### apply :: (a -> b) -> a -> b
Applies function to value.
```javascript
> apply(add(1), 1)
2
```

### complement :: (a -> Boolean) -> a -> Boolean
Returns the opposite boolean value that the predicate returned.
```javascript
> complement(equals(1), 1)
false
```

### compose :: (b -> c) -> (a -> b) -> a -> c
Applies value through two functions, from right to left.
```javascript
> compose(Math.sqrt, add(1), 99)
10
```

### curry :: ((a, b) -> c) -> a -> b -> c
Wraps a function and allows you to supply your arguments one at a time.
```javascript
> const add = curry((a, b) => a + b)
> const add1 = add(1)
> add1(1)
2
```

### equals :: a -> a -> Boolean
Returns the result of comparing two values.
```javascript
> equals('abc', 'abc')
true

> equals('abc', 'xyz')
false
```

### flip :: (a -> b -> c) -> b -> a -> c
Reverses the order of the first two arguments of the provided function.
```javascript
> const prepend = flip(append)
> prepend([1], [2, 3, 4])
[ 1, 2, 3, 4 ]
```

### identity :: a -> a
Returns itself.
```javascript
> identity('a')
'a'

> filter(identity, [0, 1, null, 'test'])
[ 1, 'test' ]
```

### not :: Boolean -> Boolean
Returns the opposite boolean value.
```javascript
> not(true)
false

> not(some(equals(1), [1, 2, 3]))
false
```

### or :: Boolean -> Boolean -> Boolean
Returns `true` if one or both values are `true`.
```javascript
> or(true, false)
true
```

### pipe :: Array (a -> b) -> a -> b
Applies a sequence of transformations over a value.
```javascript
> pipe([add(1), Math.sqrt], 99)
10
```

### thrush :: a -> (a -> b) -> b
Applies a function to a value, essentially flipping the argument order of `apply`.
```javascript
> map(thrush(100), [add(1), Math.sqrt])
[ 101, 10 ]
```

### withDefault :: a -> Maybe a -> a
Returns the first value, if the second does not exist.
```javascript
> withDefault(1, undefined)
1

> withDefault(1, 10)
10
```

## Array
```javascript
const A = require('a-to-b/array')
```

### append :: Array a -> Array a -> Array a
Combines two arrays.
```javascript
> append([4], [1, 2, 3])
[ 1, 2, 3, 4 ]
```

### concat :: Array (Array a) -> Array a
Concatenate an array of arrays into a single array, removing one level of nesting.
```javascript
> concat([[1, 2], [3], [4, 5]])
[ 1, 2, 3, 4, 5 ]
```

### every :: (a -> Boolean) -> Array a -> Boolean
Determines if every element satisfies the predicate.
```javascript
> every(equals(1), [1, 1, 1])
true

> every(equals('a'), ['a', 'b', 'c'])
false
```

### filter :: (a -> Boolean) -> Array a -> Array a
Returns an array of every element that matches the predicate.
```javascript
> filter(equals(1), [1, 2, 3])
[ 1 ]
```

### find :: (a -> Boolean) -> Array a -> Maybe a
Returns the value of the first element that matches the predicate, or `undefined` if it does not exist.
```javascript
> find(equals(1), [1, 2, 3])
1
```

### includes :: a -> Array a -> Boolean
Determines if an array contains a value.
```javascript
> includes('a', ['a', 'b', 'c'])
true
```

### isEmpty :: Array a -> Boolean
Determines if an array contains any elements.
```javascript
> isEmpty([1])
false
```

### length :: Array a -> Number
Returns the number of elements in an array.
```javascript
> length([1, 2, 3])
3
```

### map :: (a -> b) -> Array a -> Array b
Applies a function over every element in an array.
```javascript
> map(get('a'), [{a: 1}, {a: 2}, {a: 3}])
[ 1, 2, 3 ]
```

### reduce :: (a -> b -> b) -> b -> Array a -> b
Applies a function over an accumulator and every element in an array, returning the result as a single value.
```javascript
> reduce((acc, x) => acc + x, 0, [1, 2, 3])
6
```
 
### reverse :: Array a -> Array a
Returns a new array with the elements in reverse order.
```javascript
> reverse([1, 2, 3])
[ 3, 2, 1 ]
```

### slice :: Number -> Number -> Array a -> Array a
Returns a subset of an array, providing starting and ending indexes.
```javascript
> slice(1, 3, [1, 2, 3, 4, 5])
[ 2, 3 ]
```

### some :: (a -> Boolean) -> Array a -> Boolean
Determines if any elements match the predicate.
```javascript
> some(equals(1), [1, 2, 3])
true
```

### sort :: ((a, a) -> Number) -> Array a -> Array a
Returns a sorted array, given a comparison function.
```javascript
> sort((a, b) => a - b, [5, 39, 1])
[ 1, 5, 39 ]
```

## Object
```javascript
const O = require('a-to-b/object')
```

### get :: String -> Object k v -> Maybe v
Returns the property of an object, if it exists.
```javascript
> get('a', { a: 'test' })
'test'

> map(get('a'), [{ a: 1}, { a: 2 }, { a: 3 }])
[ 1, 2, 3 ]
```

### includes :: String -> Object k v -> Boolean
Determines if an object contains a key.
```javascript
> includes('a', { a: 1, b: 2 })
true
```

### isEmpty :: Object k v -> Boolean
Determines if an object contains any keys.
```javascript
> isEmpty({})
true
```

### keys :: Object k v -> Array k
Returns an array of every key in an object.
```javascript
> keys({ a: 1, b: 2 })
[ 'a', 'b' ]
```

### update :: Object k v -> Object k v -> Object k v
Creates a new object with values from the first argument merged over the second argument.
```javascript
> update({ a: true }, { a: false })
{ a: true }
```

### values :: Object k v -> Array v
Returns an array of every value in an object.
```javascript
> values({ a: 1, b: 2 })
[ 1, 2 ]
```

## String
```javascript
const S = require('a-to-b/string')
```

### append :: String -> String -> String
Combine two strings.
```javascript
> append('ing', 'append')
'appending'
```

### concat :: Array String -> String
Combines a list of strings into one string.
```javascript
> concat(['a', 'b', 'c'])
'abc'
```

### includes :: String -> String -> Boolean
Determines if a string contains a substring.
```javascript
> includes('abc', 'abcdef')
true
```

### isEmpty :: String -> Boolean
Determines if a string contains any characters.
```javascript
> isEmpty('abc')
false
```

### join :: String -> Array String -> String
Joins every element in an array with a string, creating a single string.
```javascript
> join(':', ['a', 'b', 'c'])
'a:b:c'
```

### length :: String -> Number
Returns the number of values in a string.
```javascript
> length('abc')
3
```

### lines :: String -> Array String
Creates an array from a string that might contain line breaks.
```javascript
> lines('foo\nbar\nbar')
[ 'foo', 'bar', 'baz' ]
```

### reverse :: String -> String
Reverses the order of a string.
```javascript
> reverse('abc')
'cba'
```

### slice :: Number -> Number -> String -> String
Returns a subset of a string, given starting and ending indexes.
```javascript
> slice(1, 3, 'abcdef')
'bc'
```

### split :: String -> String -> Array String
Splits a string into an array of substrings.
```javascript
> split(':', 'a:b:c')
[ 'a', 'b', 'c' ]
```

### toLower :: String -> String
Returns an all lowercase string.
```javascript
> toLower('ABCDEF')
'abcdef'
```

### toUpper :: String -> String
Returns an all uppercase string.
```javascript
> toUpper('abcdef')
'ABCDEF'
```

### trim :: String -> String
Removes whitespace from both ends of a string.
```javascript
> trim('   a \n')
'a'
```

### words :: String -> Array String
Returns an array containing word groups in a string.
```javascript
> words('foo bar baz')
[ 'foo', 'bar', 'baz' ]
```

## Number
```javascript
const N = require('a-to-b/number')
```

### add :: Number -> Number -> Number
Adds two numbers.
```javascript
> add(2, 2)
4
```

### div :: Number -> Number -> Number
Divides two numbers.
```javascript
> div(2, 10)
5
```

### mul :: Number -> Number -> Number
Multiplies two numbers.
```javascript
> mul(2, 5)
10
```

### sub :: Number -> Number -> Number
Subtracts two numbers.
```javascript
> sub(2, 10)
8
```
